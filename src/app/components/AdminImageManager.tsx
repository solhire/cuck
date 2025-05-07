'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SiteImage {
  id: string;
  originalKey: string;
  currentPath: string;
  altText: string;
  uploadedAt: string;
  updatedAt: string;
}

export default function AdminImageManager() {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<SiteImage | null>(null);
  const [replacementImage, setReplacementImage] = useState<SiteImage | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [replacementMode, setReplacementMode] = useState<'upload' | 'existing'>('upload');
  const [forceReplacement, setForceReplacement] = useState(false);
  const [showAddNewForm, setShowAddNewForm] = useState(false);
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [newImageAltText, setNewImageAltText] = useState('');
  const [newImageDirectory, setNewImageDirectory] = useState('');
  const [newImagePreviewUrl, setNewImagePreviewUrl] = useState<string | null>(null);
  const [mode, setMode] = useState<'browse' | 'edit' | 'add' | 'delete'>('browse');
  const [deleteConfirmation, setDeleteConfirmation] = useState<string>('');

  // Fetch images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  // Handle file selection
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    // Free memory when this component unmounts
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  // Handle new image file selection
  useEffect(() => {
    if (!newImageFile) {
      setNewImagePreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(newImageFile);
    setNewImagePreviewUrl(objectUrl);

    // Free memory when this component unmounts
    return () => URL.revokeObjectURL(objectUrl);
  }, [newImageFile]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/update-images');
      const result = await response.json();
      
      if (result.success) {
        setImages(result.data);
      } else {
        setError('Failed to load images');
      }
    } catch (err) {
      setError('Error fetching images');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageSelect = (image: SiteImage) => {
    setSelectedImage(image);
    setFile(null);
    setPreviewUrl(null);
    setReplacementImage(null);
  };

  const handleReplacementImageSelect = (image: SiteImage) => {
    // Don't allow selecting the same image as replacement
    if (selectedImage && image.id === selectedImage.id) {
      return;
    }
    
    setReplacementImage(image);
    setFile(null);
    setPreviewUrl(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setReplacementImage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      setError('Please select an image to replace');
      return;
    }
    
    if (replacementMode === 'upload' && !file) {
      setError('Please select a replacement file to upload');
      return;
    }
    
    if (replacementMode === 'existing' && !replacementImage) {
      setError('Please select an existing image as replacement');
      return;
    }
    
    try {
      setUploading(true);
      setError(null);
      setSuccess(null);
      
      // Get admin session from localStorage for authentication
      const adminSession = localStorage.getItem('admin-session');
      if (!adminSession) {
        setError('Admin session expired. Please login again.');
        return;
      }
      
      // Create form data
      const formData = new FormData();
      
      if (replacementMode === 'upload' && file) {
        formData.append('file', file);
        // Add force replacement flag
        formData.append('forceReplacement', forceReplacement.toString());
      } else if (replacementMode === 'existing' && replacementImage) {
        formData.append('replacementImageKey', replacementImage.originalKey);
      }
      
      formData.append('altText', selectedImage.altText);
      
      // Send update request
      const response = await fetch(`/api/update-images?originalKey=${encodeURIComponent(selectedImage.originalKey)}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${adminSession}`
        },
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        if (result.data.uploadFailed) {
          setSuccess(`Image update partially succeeded. File upload failed, but the image was updated in the database.`);
        } else {
          setSuccess(`Image updated successfully!`);
        }
        
        // Update the image in the list
        setImages(prev => 
          prev.map(img => 
            img.id === result.data.id ? {
              ...result.data,
              // Remove the uploadFailed property before updating the state
              uploadFailed: undefined
            } : img
          )
        );
        
        // Reset form
        setFile(null);
        setPreviewUrl(null);
        setSelectedImage(null);
        setReplacementImage(null);
        
        // Refetch all images to ensure we have the latest data
        fetchImages();
      } else {
        setError(result.error || 'Failed to update image');
      }
    } catch (err) {
      setError('Error updating image');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleNewImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewImageFile(file);
      
      // Set default alt text based on filename without extension
      const fileName = file.name.split('.').slice(0, -1).join('.');
      if (!newImageAltText) {
        setNewImageAltText(fileName);
      }
    }
  };

  const handleAddNewImage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newImageFile) {
      setError('Please select a file to upload');
      return;
    }
    
    try {
      setUploading(true);
      setError(null);
      setSuccess(null);
      
      // Get admin session from localStorage for authentication
      const adminSession = localStorage.getItem('admin-session');
      if (!adminSession) {
        setError('Admin session expired. Please login again.');
        return;
      }
      
      // Create form data
      const formData = new FormData();
      formData.append('file', newImageFile);
      formData.append('altText', newImageAltText);
      
      // Send add request
      const response = await fetch(`/api/update-images?action=add&directory=${encodeURIComponent(newImageDirectory)}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${adminSession}`
        },
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccess(`Image "${newImageAltText}" added successfully!`);
        
        // Reset form
        setNewImageFile(null);
        setNewImagePreviewUrl(null);
        setNewImageAltText('');
        setShowAddNewForm(false);
        setMode('browse');
        
        // Refetch all images to ensure we have the latest data
        fetchImages();
      } else {
        setError(result.error || 'Failed to add image');
      }
    } catch (err) {
      setError('Error adding image');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    if (deleteConfirmation !== 'DELETE') {
      setError('Please type DELETE to confirm deletion');
      return;
    }
    
    try {
      setUploading(true);
      setError(null);
      setSuccess(null);
      
      // Get admin session from localStorage for authentication
      const adminSession = localStorage.getItem('admin-session');
      if (!adminSession) {
        setError('Admin session expired. Please login again.');
        return;
      }
      
      // Send delete request
      const response = await fetch(`/api/update-images?action=delete&id=${encodeURIComponent(imageId)}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${adminSession}`
        }
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccess(`Image deleted successfully!`);
        
        // Remove the deleted image from the state
        setImages(prevImages => prevImages.filter(img => img.id !== imageId));
        
        // Reset state
        setSelectedImage(null);
        setDeleteConfirmation('');
        setMode('browse');
      } else {
        setError(result.error || 'Failed to delete image');
      }
    } catch (err) {
      setError('Error deleting image');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  // Filter images based on search term
  const filteredImages = images.filter(img => 
    img.originalKey.toLowerCase().includes(searchTerm.toLowerCase()) ||
    img.altText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Image Manager</h2>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 mb-4 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-3 mb-4 rounded">
          {success}
        </div>
      )}
      
      {/* Mode selection buttons */}
      <div className="flex mb-6 gap-2">
        <button 
          onClick={() => {
            setMode('browse');
            setSelectedImage(null);
            setShowAddNewForm(false);
          }}
          className={`px-4 py-2 border ${
            mode === 'browse' 
              ? 'bg-[#FF0000] text-white border-[#FF0000]' 
              : 'bg-black border-white/30 text-white/70 hover:text-white'
          }`}
        >
          Browse Images
        </button>
        <button 
          onClick={() => {
            setMode('add');
            setSelectedImage(null);
            setShowAddNewForm(true);
          }}
          className={`px-4 py-2 border ${
            mode === 'add' 
              ? 'bg-[#FF0000] text-white border-[#FF0000]' 
              : 'bg-black border-white/30 text-white/70 hover:text-white'
          }`}
        >
          Add New Image
        </button>
      </div>
      
      {/* Search input - only show in browse mode */}
      {mode === 'browse' && (
        <div className="mb-6">
          <input 
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-black border border-white/30 p-3 text-white"
          />
        </div>
      )}
      
      {/* Add new image form */}
      {mode === 'add' && (
        <div className="border border-white/20 p-4 mb-6">
          <h3 className="text-lg font-semibold mb-4">Add New Image</h3>
          
          <form onSubmit={handleAddNewImage} className="space-y-4">
            <div>
              <label className="block text-white/70 text-sm mb-2">
                Image File
              </label>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleNewImageFileChange}
                className="w-full bg-black border border-white/30 p-3 text-white"
                required
              />
            </div>
            
            {newImagePreviewUrl && (
              <div className="border border-white/20 p-2">
                <p className="text-sm text-white/70 mb-2">Preview:</p>
                <div className="relative w-full h-48">
                  <img
                    src={newImagePreviewUrl}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-white/70 text-sm mb-2">
                Alt Text
              </label>
              <input 
                type="text"
                value={newImageAltText}
                onChange={(e) => setNewImageAltText(e.target.value)}
                placeholder="Description of the image"
                className="w-full bg-black border border-white/30 p-3 text-white"
              />
            </div>
            
            <div>
              <label className="block text-white/70 text-sm mb-2">
                Target Directory (optional)
              </label>
              <input 
                type="text"
                value={newImageDirectory}
                onChange={(e) => setNewImageDirectory(e.target.value)}
                placeholder="e.g., product-images (leave empty for root)"
                className="w-full bg-black border border-white/30 p-3 text-white"
              />
              <p className="text-xs text-white/50 mt-1">
                This will place the image in /public/{newImageDirectory || '[root]'}
              </p>
            </div>
            
            <div>
              <button 
                type="submit"
                disabled={uploading || !newImageFile}
                className={`w-full py-3 bg-[#FF0000] text-white ${
                  (uploading || !newImageFile)
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-[#FF0000]/80'
                }`}
              >
                {uploading ? 'Uploading...' : 'Upload New Image'}
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Main content area */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image list - show in all modes except add */}
        {mode !== 'add' && (
          <div className="w-full md:w-1/2 overflow-y-auto max-h-[500px] pr-2">
            <h3 className="text-lg font-semibold mb-3">
              {mode === 'delete' ? 'Select Image to Delete' : 'Select Image'}
            </h3>
            {loading ? (
              <div className="text-white/50">Loading images...</div>
            ) : filteredImages.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredImages.map(image => (
                  <div 
                    key={image.id}
                    className={`relative aspect-square cursor-pointer rounded overflow-hidden border-2 transition-all ${
                      selectedImage?.id === image.id 
                        ? 'border-[#FF0000]' 
                        : 'border-transparent hover:border-white/30'
                    }`}
                    onClick={() => {
                      handleImageSelect(image);
                      if (mode === 'browse') {
                        setMode('edit');
                      }
                    }}
                  >
                    <Image 
                      src={image.currentPath} 
                      alt={image.altText}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white text-xs p-1 truncate">
                      {image.originalKey}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-white/50">No images found.</div>
            )}
          </div>
        )}
        
        {/* Right panel - shows different content based on mode */}
        <div className="w-full md:w-1/2">
          {mode === 'edit' && selectedImage ? (
            // Existing edit form
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">{selectedImage.originalKey}</h3>
                <p className="text-white/70 text-sm mb-4">
                  Currently using: {selectedImage.currentPath}
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  {/* Current image */}
                  <div className="relative aspect-square w-full md:w-1/2 border border-white/20">
                    <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center text-xs uppercase text-white/50 font-mono">
                      Current Image
                    </div>
                    <Image 
                      src={selectedImage.currentPath} 
                      alt={selectedImage.altText}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Preview new image */}
                  <div className="relative aspect-square w-full md:w-1/2 border border-white/20">
                    {previewUrl ? (
                      <Image 
                        src={previewUrl} 
                        alt="Preview"
                        fill
                        className="object-contain"
                      />
                    ) : replacementImage ? (
                      <Image 
                        src={replacementImage.currentPath} 
                        alt={replacementImage.altText}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center text-xs uppercase text-white/50 font-mono">
                        New Image Preview
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Replacement Method Tabs */}
                <div className="flex border-b border-white/20 mb-4">
                  <button
                    type="button"
                    onClick={() => setReplacementMode('upload')}
                    className={`px-4 py-2 ${replacementMode === 'upload' ? 'border-b-2 border-[#FF0000] text-white' : 'text-white/50'}`}
                  >
                    Upload New
                  </button>
                  <button
                    type="button"
                    onClick={() => setReplacementMode('existing')}
                    className={`px-4 py-2 ${replacementMode === 'existing' ? 'border-b-2 border-[#FF0000] text-white' : 'text-white/50'}`}
                  >
                    Use Existing
                  </button>
                </div>
                
                {replacementMode === 'upload' ? (
                  <div className="mb-4">
                    <label className="block text-white/70 text-sm mb-2">
                      Upload New Image
                    </label>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full bg-black border border-white/30 p-3 text-white"
                    />
                    <div className="mt-2">
                      <label className="flex items-center text-white/70 text-sm">
                        <input
                          type="checkbox"
                          checked={forceReplacement}
                          onChange={() => setForceReplacement(!forceReplacement)}
                          className="mr-2"
                        />
                        Continue if upload fails (will keep current image)
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="mb-4">
                    <label className="block text-white/70 text-sm mb-2">
                      Select Existing Image
                    </label>
                    <div className="overflow-y-auto max-h-[200px] border border-white/20 p-2">
                      <div className="grid grid-cols-3 gap-2">
                        {filteredImages
                          .filter(img => img.id !== selectedImage.id)
                          .map(image => (
                            <div 
                              key={image.id}
                              className={`relative aspect-square cursor-pointer rounded overflow-hidden border-2 transition-all ${
                                replacementImage?.id === image.id 
                                  ? 'border-[#FF0000]' 
                                  : 'border-transparent hover:border-white/30'
                              }`}
                              onClick={() => handleReplacementImageSelect(image)}
                            >
                              <Image 
                                src={image.currentPath} 
                                alt={image.altText}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <button 
                  type="submit"
                  disabled={uploading || (replacementMode === 'upload' && !file) || (replacementMode === 'existing' && !replacementImage)}
                  className={`w-full py-3 bg-[#FF0000] text-white ${
                    (uploading || (replacementMode === 'upload' && !file) || (replacementMode === 'existing' && !replacementImage))
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-[#FF0000]/80'
                  }`}
                >
                  {uploading ? 'Updating...' : 'Update Image'}
                </button>
              </div>
              
              {/* Add delete button */}
              <div className="mt-8 pt-4 border-t border-white/20">
                <button
                  type="button"
                  onClick={() => setMode('delete')}
                  className="w-full py-2 bg-red-900/30 text-red-400 border border-red-900/50 hover:bg-red-900/50"
                >
                  Delete This Image
                </button>
              </div>
            </form>
          ) : mode === 'delete' && selectedImage ? (
            // Delete confirmation form
            <div className="space-y-6 border border-red-900/50 p-4 bg-red-900/10">
              <h3 className="text-lg font-bold text-red-400">Delete Image</h3>
              
              <div className="relative aspect-square w-full border border-red-900/30 mb-4">
                <Image 
                  src={selectedImage.currentPath} 
                  alt={selectedImage.altText}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div>
                <p className="text-white mb-2">Path: {selectedImage.originalKey}</p>
                <p className="text-white mb-4">Alt text: {selectedImage.altText}</p>
                
                <div className="bg-red-900/30 p-3 border border-red-900/50 mb-4">
                  <p className="text-red-400 font-bold">Warning:</p>
                  <p className="text-white/90">This will permanently delete this image from the server. This action cannot be undone.</p>
                </div>
                
                <div className="mb-4">
                  <label className="block text-white mb-2">
                    Type <span className="font-mono font-bold">DELETE</span> to confirm:
                  </label>
                  <input 
                    type="text"
                    value={deleteConfirmation}
                    onChange={(e) => setDeleteConfirmation(e.target.value)}
                    className="w-full bg-black border border-red-900/50 p-3 text-white"
                  />
                </div>
                
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('edit')}
                    className="flex-1 py-3 bg-black text-white border border-white/30 hover:border-white"
                  >
                    Cancel
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleDeleteImage(selectedImage.id)}
                    disabled={uploading || deleteConfirmation !== 'DELETE'}
                    className={`flex-1 py-3 bg-red-900 text-white ${
                      (uploading || deleteConfirmation !== 'DELETE')
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-red-800'
                    }`}
                  >
                    {uploading ? 'Deleting...' : 'Delete Image'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Default state when no image is selected
            <div className="flex items-center justify-center h-full min-h-[300px] border border-white/10 rounded">
              <p className="text-white/50">
                {mode === 'browse' ? 'Select an image to edit' : 'Use the form to add a new image'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 