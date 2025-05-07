'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

// Override the fill prop to accept string or boolean
type ImagePropsWithStringFill = Omit<ImageProps, 'src' | 'fill'> & {
  fill?: boolean | string;
};

interface ImageWithDynamicPathProps extends Omit<ImagePropsWithStringFill, 'src'> {
  originalSrc: string;
  fallbackSrc?: string;
}

/**
 * A component that extends Next.js Image to use database-managed image paths
 * originalSrc: The original image path (used as key in database)
 * fallbackSrc: Optional fallback if the image is not found in database
 */
export default function ImageWithDynamicPath({
  originalSrc,
  fallbackSrc,
  alt,
  fill,
  ...props
}: ImageWithDynamicPathProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(originalSrc);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Convert string fill prop to boolean
  const fillProp = fill === "true" || fill === true ? true : undefined;

  useEffect(() => {
    // Function to fetch the current image path from the database
    const fetchCurrentPath = async () => {
      try {
        setLoading(true);
        setError(false);
        
        // Query the API to get the current path for this image
        const response = await fetch(`/api/update-images?originalKey=${encodeURIComponent(originalSrc)}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch image path');
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          // Update the source to the current path
          setCurrentSrc(result.data.currentPath);
        } else {
          // If no record found, keep using the original source
          console.warn(`No database record found for image: ${originalSrc}`);
        }
      } catch (err) {
        console.error('Error fetching image path:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we have an originalSrc
    if (originalSrc) {
      fetchCurrentPath();
    }
  }, [originalSrc]);

  // Handle loading and error states
  if (loading) {
    // You could return a skeleton/placeholder here
    return <div className="bg-gray-800 animate-pulse" {...props} />;
  }

  if (error && fallbackSrc) {
    return <Image src={fallbackSrc} alt={alt || 'Image'} fill={fillProp} {...props} />;
  }

  // Render the image with the current path
  return <Image src={currentSrc} alt={alt || 'Image'} fill={fillProp} {...props} />;
} 