'use client';

import { useState, useEffect } from 'react';
import { SiteColor, COLOR_CATEGORIES } from '../../lib/colorUtils';

interface ColorUpdate {
  page: string;
  key: string;
  value: string;
}

export default function AdminColorManager() {
  const [colors, setColors] = useState<SiteColor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [editedColors, setEditedColors] = useState<Record<string, string>>({});
  const [activePage, setActivePage] = useState<string>('all');
  const [isDirty, setIsDirty] = useState(false);

  // Fetch colors on component mount
  useEffect(() => {
    fetchColors();
  }, []);

  const fetchColors = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/update-colors');
      const result = await response.json();
      
      if (result.success) {
        setColors(result.data);
        
        // Initialize edited colors with current values
        const initialValues: Record<string, string> = {};
        result.data.forEach((color: SiteColor) => {
          // Use a composite key for the color lookup
          const lookupKey = `${color.page}:${color.key}`;
          initialValues[lookupKey] = color.value;
        });
        setEditedColors(initialValues);
      } else {
        setError('Failed to load colors');
      }
    } catch (err) {
      setError('Error fetching colors');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleColorChange = (page: string, key: string, value: string) => {
    const lookupKey = `${page}:${key}`;
    setEditedColors(prev => ({
      ...prev,
      [lookupKey]: value
    }));
    setIsDirty(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      
      // Get admin session from localStorage for authentication
      const adminSession = localStorage.getItem('admin-session');
      if (!adminSession) {
        setError('Admin session expired. Please login again.');
        return;
      }
      
      // Prepare color updates
      const updates: ColorUpdate[] = [];
      
      colors.forEach(color => {
        const lookupKey = `${color.page}:${color.key}`;
        if (editedColors[lookupKey] !== color.value) {
          updates.push({
            page: color.page,
            key: color.key,
            value: editedColors[lookupKey]
          });
        }
      });
      
      if (updates.length === 0) {
        setSuccess('No changes made.');
        setLoading(false);
        return;
      }
      
      // Send update request
      const response = await fetch('/api/update-colors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminSession}`
        },
        body: JSON.stringify({ updates })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSuccess(`Updated ${updates.length} colors successfully!`);
        setIsDirty(false);
        
        // Refetch colors to ensure we have the latest data
        fetchColors();
      } else {
        setError(result.error || 'Failed to update colors');
      }
    } catch (err) {
      setError('Error updating colors');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filter colors by active page
  const filteredColors = activePage === 'all' 
    ? colors
    : colors.filter(color => color.page === activePage);

  // Group colors by page for display
  const colorsByPage: Record<string, SiteColor[]> = {};
  
  filteredColors.forEach(color => {
    if (!colorsByPage[color.page]) {
      colorsByPage[color.page] = [];
    }
    colorsByPage[color.page].push(color);
  });

  // Get all unique pages
  const pages = ['all', ...new Set(colors.map(c => c.page))];

  // Helper to get a color value from the edited or original state
  const getColorValue = (page: string, key: string) => {
    const lookupKey = `${page}:${key}`;
    return editedColors[lookupKey] || '';
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Color Manager</h2>
      
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
      
      {/* Page filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`px-3 py-1 text-sm rounded ${
              activePage === page
                ? 'bg-[#FF0000] text-white'
                : 'bg-black/20 text-white/70 hover:text-white'
            }`}
          >
            {page.toUpperCase()}
          </button>
        ))}
      </div>
      
      {loading && !colors.length ? (
        <div className="text-white/50 p-4">Loading colors...</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {Object.entries(colorsByPage).map(([page, pageColors]) => (
            <div key={page} className="border border-white/20 p-4 rounded">
              <h3 className="text-lg font-semibold mb-4 capitalize">{page} Colors</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pageColors.map(color => (
                  <div key={`${color.page}:${color.key}`} className="flex flex-col space-y-2">
                    <label className="flex justify-between">
                      <span className="text-white/70">{color.key}</span>
                      <span className="text-white/50 text-xs">{color.page}:{color.key}</span>
                    </label>
                    
                    <div className="flex space-x-2">
                      <input
                        type="color"
                        value={getColorValue(color.page, color.key) || color.value}
                        onChange={(e) => handleColorChange(color.page, color.key, e.target.value)}
                        className="w-10 h-10 border border-white/30 rounded cursor-pointer"
                      />
                      
                      <input
                        type="text"
                        value={getColorValue(color.page, color.key) || color.value}
                        onChange={(e) => handleColorChange(color.page, color.key, e.target.value)}
                        className="flex-1 bg-black border border-white/30 p-2 text-white"
                      />
                    </div>
                    
                    {/* Preview of the color */}
                    <div 
                      className="h-6 w-full mt-1 rounded"
                      style={{ backgroundColor: getColorValue(color.page, color.key) || color.value }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => {
                // Reset to original values
                const originalValues: Record<string, string> = {};
                colors.forEach(color => {
                  const lookupKey = `${color.page}:${color.key}`;
                  originalValues[lookupKey] = color.value;
                });
                setEditedColors(originalValues);
                setIsDirty(false);
              }}
              disabled={loading || !isDirty}
              className={`px-4 py-2 border border-white/30 ${
                loading || !isDirty ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
              }`}
            >
              Reset Changes
            </button>
            
            <button
              type="submit"
              disabled={loading || !isDirty}
              className={`px-4 py-2 bg-[#FF0000] text-white ${
                loading || !isDirty ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FF0000]/80'
              }`}
            >
              {loading ? 'Saving...' : 'Save Colors'}
            </button>
          </div>
        </form>
      )}
      
      {/* Color preview section */}
      {!loading && colors.length > 0 && (
        <div className="mt-8 border-t border-white/20 pt-6">
          <h3 className="text-lg font-semibold mb-4">Preview</h3>
          
          <div className="space-y-4">
            <div 
              className="p-6 rounded"
              style={{ 
                backgroundColor: getColorValue('base', 'background') || '#FFFFFF',
                color: getColorValue('base', 'foreground') || '#000000',
              }}
            >
              <h4 
                style={{ 
                  color: getColorValue('text', 'headline') || '#FF0000'
                }}
                className="text-xl font-bold mb-2"
              >
                Sample Heading
              </h4>
              
              <p className="mb-4">This is sample text that shows how your color choices look.</p>
              
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()}
                style={{ 
                  color: getColorValue('text', 'link') || '#FF0000',
                }}
                className="hover:underline"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = getColorValue('text', 'link-hover') || '#FF1111';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = getColorValue('text', 'link') || '#FF0000';
                }}
              >
                Sample Link
              </a>
              
              <div className="mt-4">
                <button
                  style={{
                    backgroundColor: getColorValue('base', 'accent') || '#FF0000',
                    color: getColorValue('button', 'button-text') || '#FFFFFF'
                  }}
                  className="px-4 py-2 rounded"
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = getColorValue('base', 'accent-hover') || '#FF1111';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = getColorValue('base', 'accent') || '#FF0000';
                  }}
                >
                  Sample Button
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 