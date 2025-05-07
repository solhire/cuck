'use client';

import { useState } from 'react';

interface AdminResetMessagesProps {
  onReset?: () => void;
}

export default function AdminResetMessages({ onReset }: AdminResetMessagesProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null);

  const handleReset = async () => {
    if (!confirm('Are you sure you want to reset all messages to their current values? This will update the database with all the latest texts.')) {
      return;
    }

    try {
      setLoading(true);
      setResult(null);
      
      const response = await fetch('/api/update-messages/reset');
      const data = await response.json();
      
      setResult(data);
      
      // Call the onReset callback if provided and reset was successful
      if (data.success && onReset) {
        onReset();
      }
    } catch (error) {
      setResult({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8 p-4 border border-white/20 rounded">
      <h3 className="text-lg font-semibold mb-3">Sync Database with Current Text</h3>
      <p className="text-white/70 text-sm mb-4">
        This will update the database with all the latest text that has been modified directly in the code.
        Use this if you've made changes to the text in the code and want to make them editable in the admin panel.
      </p>
      
      <button
        onClick={handleReset}
        disabled={loading}
        className="px-4 py-2 bg-[#FF0000]/20 border border-[#FF0000] text-white hover:bg-[#FF0000]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : 'Sync Text to Database'}
      </button>
      
      {result && (
        <div className={`mt-4 p-3 border rounded ${result.success ? 'border-green-500 text-green-500' : 'border-[#FF0000] text-[#FF0000]'}`}>
          {result.success ? result.message : result.error}
        </div>
      )}
    </div>
  );
} 