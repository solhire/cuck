'use client'

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function AdminLoginScreen() {
  const { adminLogin } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password) {
      setError(true);
      return;
    }
    
    setIsSubmitting(true);
    setError(false);
    
    // Try to login with the provided password
    const success = adminLogin(password);
    
    if (!success) {
      setError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white font-mono p-6">
      <div className="w-full max-w-md p-8 border border-white/20 rounded">
        <h1 className="text-2xl font-bold text-[#FF0000] mb-8">ADMIN LOGIN</h1>
        
        <p className="mb-6 text-white/70 text-sm">
          This area requires authentication. Only authorized personnel should attempt to log in.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white/70 text-sm mb-2">
              Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-white/30 p-3 text-white"
              placeholder="Enter admin password"
            />
          </div>
          
          {error && (
            <div className="text-[#FF0000] text-sm">
              Invalid password. Please try again.
            </div>
          )}
          
          <div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-[#FF0000] text-white ${isSubmitting ? 'opacity-50' : 'hover:bg-[#FF0000]/80'}`}
            >
              {isSubmitting ? 'Authenticating...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
      
      <div className="mt-8">
        <Link 
          href="/" 
          className="text-white/50 hover:text-white text-sm"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
} 