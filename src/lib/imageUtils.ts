import fs from 'fs';
import path from 'path';
import prisma from './prisma';
import { writeFile } from 'fs/promises';

/**
 * IMAGE MANAGEMENT SYSTEM
 * 
 * This file contains utilities for managing site images.
 * 
 * ALTERNATIVE IMAGE APIs:
 * If you want to use an external service instead of storing images locally, consider:
 * 
 * 1. Cloudinary - https://cloudinary.com
 *    - Image/video hosting with advanced transformations
 *    - Free tier with 25GB storage and 25GB bandwidth
 *    - Usage example:
 *      ```
 *      // Install: npm install cloudinary
 *      import { v2 as cloudinary } from 'cloudinary';
 *      cloudinary.config({
 *        cloud_name: 'your_cloud_name',
 *        api_key: 'your_api_key',
 *        api_secret: 'your_api_secret'
 *      });
 *      const result = await cloudinary.uploader.upload(filePath);
 *      // result.secure_url contains the image URL
 *      ```
 * 
 * 2. Vercel Blob - https://vercel.com/docs/storage/vercel-blob
 *    - Simple file storage for Vercel deployments
 *    - 100GB free storage with pay-as-you-go pricing
 *    - Usage example:
 *      ```
 *      // Install: npm install @vercel/blob
 *      import { put } from '@vercel/blob';
 *      const { url } = await put('file.jpg', file, { access: 'public' });
 *      ```
 * 
 * 3. AWS S3 - https://aws.amazon.com/s3/
 *    - Highly scalable object storage
 *    - Free tier with 5GB storage for 12 months
 *    - Usage example:
 *      ```
 *      // Install: npm install @aws-sdk/client-s3
 *      import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
 *      const s3Client = new S3Client({ region: 'your-region' });
 *      await s3Client.send(new PutObjectCommand({
 *        Bucket: 'your-bucket',
 *        Key: 'file.jpg',
 *        Body: buffer,
 *        ContentType: 'image/jpeg'
 *      }));
 *      ```
 * 
 * 4. Uploadcare - https://uploadcare.com
 *    - File uploads, storage, and delivery
 *    - Free tier with 3000 uploads per month
 *    - Includes a ready-to-use widget
 *    - Usage example:
 *      ```
 *      // Install: npm install uploadcare-widget
 *      import uploadcare from 'uploadcare-widget';
 *      const widget = uploadcare.Widget('[role=uploadcare-uploader]');
 *      widget.onUploadComplete(fileInfo => {
 *        // fileInfo.cdnUrl contains the image URL
 *      });
 *      ```
 */

// Get site images from database
export async function getSiteImages() {
  return prisma.siteImage.findMany({
    orderBy: { uploadedAt: 'desc' }
  });
}

// Get a specific image by its original key
export async function getSiteImageByKey(originalKey: string) {
  return prisma.siteImage.findUnique({
    where: { originalKey }
  });
}

// Update image in the database and filesystem
export async function updateSiteImage(
  formData: FormData,
  originalKey: string
) {
  try {
    // Check if this image exists
    const existingImage = await prisma.siteImage.findUnique({
      where: { originalKey }
    });

    if (!existingImage) {
      throw new Error(`Image with key ${originalKey} not found.`);
    }

    // Get the uploaded file or the replacement image key
    const file = formData.get('file') as File;
    const replacementImageKey = formData.get('replacementImageKey') as string;
    const forceReplacement = formData.get('forceReplacement') === 'true';
    
    // Get alt text if provided
    const altText = formData.get('altText') as string || existingImage.altText;
    
    let newPath: string;
    let uploadFailed = false;
    
    // Check if we're using another image as replacement
    if (replacementImageKey) {
      // Find the replacement image
      const replacementImage = await prisma.siteImage.findUnique({
        where: { originalKey: replacementImageKey }
      });
      
      if (!replacementImage) {
        throw new Error(`Replacement image with key ${replacementImageKey} not found.`);
      }
      
      // Use the current path of the replacement image
      newPath = replacementImage.currentPath;
    } else if (file) {
      try {
        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Get file extension
        const fileExtension = path.extname(file.name).toLowerCase();
        
        // Create a unique path for the new file - keep the original path
        // but with a timestamp to avoid cache issues
        const timestamp = Date.now();
        newPath = originalKey.replace(
          /(\.[^.]+)$/,
          `_${timestamp}${fileExtension}`
        );
        
        // Full path in the public directory
        const publicDir = path.join(process.cwd(), 'public');
        const fullPath = path.join(publicDir, newPath);
        
        // Write file to disk
        await writeFile(fullPath, buffer);
      } catch (error) {
        console.error('Error writing file:', error);
        uploadFailed = true;
        
        // If not forcing replacement and upload fails, throw error
        if (!forceReplacement) {
          throw new Error('Failed to write file to disk. Try using an existing image as replacement instead.');
        }
        
        // If forcing replacement, use the original path as fallback
        newPath = existingImage.currentPath;
      }
    } else {
      throw new Error('Either a file or a replacement image key is required.');
    }
    
    // Update database entry
    const updatedImage = await prisma.siteImage.update({
      where: { originalKey },
      data: {
        currentPath: newPath,
        altText,
        updatedAt: new Date()
      }
    });
    
    // Delete old file if it's different from the new one
    // and not the original file (we keep originals as backup)
    // Only attempt if upload didn't fail
    if (
      !uploadFailed &&
      !replacementImageKey && // Only delete if we uploaded a new file, not when swapping
      existingImage.currentPath !== newPath &&
      existingImage.currentPath !== originalKey
    ) {
      const publicDir = path.join(process.cwd(), 'public');
      const oldFullPath = path.join(publicDir, existingImage.currentPath);
      try {
        if (fs.existsSync(oldFullPath)) {
          fs.unlinkSync(oldFullPath);
        }
      } catch (error) {
        console.error('Error deleting old file:', error);
        // Don't fail the operation if we can't delete the old file
      }
    }
    
    return {
      ...updatedImage,
      uploadFailed
    };
  } catch (error) {
    console.error('Error updating image:', error);
    throw error;
  }
}

// Initialize the database with existing images
export async function seedImages() {
  try {
    console.log('Checking if we need to seed images...');
    
    // Check if we have any images in the database
    const existingImages = await prisma.siteImage.count();
    
    // If we already have images, don't seed
    if (existingImages > 0) {
      console.log('Images already seeded.');
      return;
    }
    
    console.log('Seeding images...');
    
    // Get list of images in the public directory
    const publicDir = path.join(process.cwd(), 'public');
    const files = getAllFiles(publicDir);
    
    // Filter to only keep image files
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });
    
    // Create records for each image
    const createOperations = imageFiles.map(file => {
      // Get path relative to public directory
      const relativePath = file.replace(publicDir, '').replace(/\\/g, '/');
      // Remove leading slash if present
      const cleanPath = relativePath.startsWith('/') 
        ? relativePath.substring(1) 
        : relativePath;
      
      return prisma.siteImage.create({
        data: {
          originalKey: `/${cleanPath}`,
          currentPath: `/${cleanPath}`,
          altText: path.basename(file, path.extname(file))
        }
      });
    });
    
    await prisma.$transaction(createOperations);
    console.log(`Seeded ${createOperations.length} images`);
  } catch (error) {
    console.error('Error seeding images:', error);
    throw error;
  }
}

// Utility function to get all files recursively in a directory
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  
  return arrayOfFiles;
}

// Add a new image to the database and filesystem
export async function addNewImage(
  formData: FormData,
  targetDirectory: string = '' // Optional directory path within public/
) {
  try {
    // Get the uploaded file and alt text
    const file = formData.get('file') as File;
    const altText = formData.get('altText') as string || path.basename(file.name, path.extname(file.name));
    
    if (!file) {
      throw new Error('No file provided');
    }
    
    try {
      // Convert file to buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Get file extension
      const fileExtension = path.extname(file.name).toLowerCase();
      
      // Create a unique filename with timestamp to avoid collisions
      const timestamp = Date.now();
      const filename = `${altText.replace(/[^a-z0-9]/gi, '_')}_${timestamp}${fileExtension}`;
      
      // Create the full path including optional target directory
      let relativePath = targetDirectory 
        ? `/${targetDirectory.replace(/^\/|\/$/g, '')}/${filename}` // Remove leading/trailing slashes from directory
        : `/${filename}`;
      
      // Full path in the public directory
      const publicDir = path.join(process.cwd(), 'public');
      
      // Create target directory if it doesn't exist
      if (targetDirectory) {
        const targetDir = path.join(publicDir, targetDirectory);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
      }
      
      const fullPath = path.join(publicDir, relativePath);
      
      // Write file to disk
      await writeFile(fullPath, buffer);
      
      // Add entry to database
      const newImage = await prisma.siteImage.create({
        data: {
          originalKey: relativePath,
          currentPath: relativePath,
          altText
        }
      });
      
      return newImage;
    } catch (error) {
      console.error('Error writing file:', error);
      throw new Error('Failed to write file to disk.');
    }
  } catch (error) {
    console.error('Error adding new image:', error);
    throw error;
  }
}

// Delete an image from the database and filesystem
export async function deleteImage(imageId: string) {
  try {
    // Find the image in the database
    const image = await prisma.siteImage.findUnique({
      where: { id: imageId }
    });
    
    if (!image) {
      throw new Error(`Image with ID ${imageId} not found.`);
    }
    
    // Delete the file from the filesystem
    const publicDir = path.join(process.cwd(), 'public');
    
    // Attempt to delete both the current path and the original path (if different)
    const filesToDelete = [image.currentPath];
    if (image.originalKey !== image.currentPath) {
      filesToDelete.push(image.originalKey);
    }
    
    for (const filePath of filesToDelete) {
      try {
        const fullPath = path.join(publicDir, filePath);
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      } catch (error) {
        console.error(`Error deleting file ${filePath}:`, error);
        // Continue trying to delete other files even if one fails
      }
    }
    
    // Delete from database
    await prisma.siteImage.delete({
      where: { id: imageId }
    });
    
    return { success: true, id: imageId };
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
} 