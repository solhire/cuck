'use client'

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function PasswordScreen() {
  const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = login(password);
    if (!isCorrect) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-black">
      <div className="text-[#FF0000] text-[2rem] md:text-[3rem] font-black tracking-[0.2em] mb-12 uppercase font-mono text-center">
        SUNDAY SERVICE
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full max-w-sm">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className={`bg-black border ${error ? 'border-[#FF0000]' : 'border-white/50'} w-full px-4 py-3 text-white font-mono tracking-wider focus:border-[#FF0000] focus:outline-none transition-colors duration-300`}
        />
        
        <button 
          type="submit"
          className="bg-[#FF0000] text-white font-mono tracking-[0.15em] px-8 py-3 w-full transition-all duration-300 hover:scale-105 active:scale-95 uppercase"
        >
          ENTER
        </button>
        
        {error && (
          <div className="text-[#FF0000] font-mono text-sm animate-fade-in">
            INCORRECT PASSWORD
          </div>
        )}
      </form>
      
      <div className="absolute bottom-6 text-white/50 font-mono text-xs">
        &copy; {new Date().getFullYear()} SUNDAY SERVICE
      </div>
    </div>
  );
} 