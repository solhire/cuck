'use client'

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import AdminProtected from '../components/AdminProtected';
import AdminImageManager from '../components/AdminImageManager';
import AdminResetMessages from '../components/AdminResetMessages';
import AdminColorManager from '../components/AdminColorManager';
import Link from 'next/link';

interface PageMessages {
  [key: string]: string;
}

interface SiteMessages {
  homepage: PageMessages;
  [key: string]: PageMessages;
}

type AdminTab = 'messages' | 'images' | 'colors';

export default function AdminPage() {
  const { logout } = useAuth();
  const [messages, setMessages] = useState<SiteMessages | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [editedMessages, setEditedMessages] = useState<PageMessages>({});
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('messages');
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  // Fetch messages on component mount
  useEffect(() => {
    fetchMessages();
  }, []);

  // Function to fetch messages from the API
  const fetchMessages = async () => {
    try {
      setLoading(true);
      setDebugInfo('Fetching messages...');
      
      const response = await fetch('/api/update-messages');
      setDebugInfo(prev => `${prev}\nAPI Response status: ${response.status}`);
      
      const result = await response.json();
      setDebugInfo(prev => `${prev}\nAPI Response: ${JSON.stringify(result, null, 2)}`);
      
      if (result.success) {
        setMessages(result.data);
        
        // Initialize edited messages with current values
        if (result.data.homepage) {
          setEditedMessages(result.data.homepage);
          setDebugInfo(prev => `${prev}\nLoaded homepage messages: ${Object.keys(result.data.homepage).length} items`);
        } else {
          setDebugInfo(prev => `${prev}\nNo homepage messages found in response`);
        }
      } else {
        setError('Failed to load messages');
        setDebugInfo(prev => `${prev}\nError: ${result.error || 'Unknown error'}`);
      }
    } catch (err) {
      setError('Error fetching messages');
      setDebugInfo(prev => `${prev}\nException: ${err instanceof Error ? err.message : String(err)}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle message changes
  const handleMessageChange = (key: string, value: string) => {
    setEditedMessages(prev => ({
      ...prev,
      [key]: value
    }));
    
    // Enable editing mode when changes are made
    setIsEditing(true);
    setDebugInfo(`Message edited: ${key} = ${value}`);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      setDebugInfo('Submitting message updates...');
      
      // Get admin session from localStorage for authentication
      const adminSession = localStorage.getItem('admin-session');
      if (!adminSession) {
        setError('Admin session expired. Please login again.');
        setDebugInfo(prev => `${prev}\nNo admin session found`);
        return;
      }
      
      const requestBody = {
        page: 'homepage',
        updates: editedMessages
      };
      
      setDebugInfo(prev => `${prev}\nSending request: ${JSON.stringify(requestBody, null, 2)}`);
      
      // Send update request
      const response = await fetch('/api/update-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminSession}`
        },
        body: JSON.stringify(requestBody)
      });
      
      setDebugInfo(prev => `${prev}\nUpdate response status: ${response.status}`);
      
      const result = await response.json();
      setDebugInfo(prev => `${prev}\nUpdate response: ${JSON.stringify(result, null, 2)}`);
      
      if (result.success) {
        setSuccess('Messages updated successfully!');
        
        // Update the messages state with the new values
        setMessages(prev => prev ? {
          ...prev,
          homepage: result.data
        } : null);
        
        // Reset editing state
        setIsEditing(false);
      } else {
        setError(result.error || 'Failed to update messages');
      }
    } catch (err) {
      setError('Error updating messages');
      setDebugInfo(prev => `${prev}\nException during update: ${err instanceof Error ? err.message : String(err)}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminProtected>
      <div className="min-h-screen bg-black text-white font-mono p-6">
        <header className="flex justify-between items-center mb-8 border-b border-white/20 pb-4">
          <h1 className="text-xl md:text-2xl font-bold text-[#FF0000]">SITE ADMIN</h1>
          <button
            onClick={logout}
            className="text-white/70 hover:text-white text-sm"
          >
            LOGOUT
          </button>
        </header>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 mb-8">
            <h2 className="text-lg font-bold mb-4">Site Content</h2>
            
            {/* Navigation tabs */}
            <div className="space-y-2 mb-6">
              <button 
                onClick={() => setActiveTab('messages')}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  activeTab === 'messages' 
                    ? 'bg-[#FF0000]/10 text-[#FF0000] border-l-2 border-[#FF0000]'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Text Messages
              </button>
              
              <button 
                onClick={() => setActiveTab('images')}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  activeTab === 'images' 
                    ? 'bg-[#FF0000]/10 text-[#FF0000] border-l-2 border-[#FF0000]'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Images
              </button>
              
              <button 
                onClick={() => setActiveTab('colors')}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  activeTab === 'colors' 
                    ? 'bg-[#FF0000]/10 text-[#FF0000] border-l-2 border-[#FF0000]'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Colors
              </button>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/"
                className="text-white/50 hover:text-white text-sm"
              >
                Return to Site
              </Link>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div>
                <h2 className="text-xl font-bold mb-4">Site Messages</h2>
                
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
                
                {loading ? (
                  <div className="text-white/50">Loading messages...</div>
                ) : messages && messages.homepage ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {Object.entries(messages.homepage).map(([key, value]) => (
                      <div key={key} className="space-y-2">
                        <label className="block text-white/70 text-sm">
                          {key}
                        </label>
                        <input
                          type="text"
                          value={editedMessages[key] || ''}
                          onChange={(e) => handleMessageChange(key, e.target.value)}
                          className="w-full bg-black border border-white/30 p-3 text-white"
                        />
                      </div>
                    ))}
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white/20">
                      <AdminResetMessages onReset={() => fetchMessages()} />
                      
                      <button
                        type="submit"
                        disabled={loading || !isEditing}
                        className={`bg-[#FF0000] text-white px-4 py-2 ${
                          loading || !isEditing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FF0000]/80'
                        }`}
                      >
                        {loading ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-white/50">No messages found.</div>
                )}
                
                {/* Debug info for development */}
                {process.env.NODE_ENV === 'development' && debugInfo && (
                  <div className="mt-8 p-4 border border-gray-700 bg-gray-900 rounded overflow-auto max-h-[300px]">
                    <h3 className="text-gray-400 font-bold mb-2">Debug Info:</h3>
                    <pre className="text-gray-400 text-xs whitespace-pre-wrap">
                      {debugInfo}
                    </pre>
                  </div>
                )}
              </div>
            )}
            
            {/* Images Tab */}
            {activeTab === 'images' && (
              <AdminImageManager />
            )}
            
            {/* Colors Tab */}
            {activeTab === 'colors' && (
              <AdminColorManager />
            )}
          </div>
        </div>
      </div>
    </AdminProtected>
  );
} 