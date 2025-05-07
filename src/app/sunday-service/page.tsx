'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProtectedPage from '../components/ProtectedPage';

export default function SundayService() {
  const [showMessage, setShowMessage] = useState(false);

  const handlePlayClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <ProtectedPage>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 relative">
        {/* Version number */}
        <div className="absolute top-6 left-6 version">
          3.16.25
        </div>
        
        {/* Main content */}
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
          {/* Headline text */}
          <div className="text-center">
            <h1 className="headline text-[5rem] md:text-[11rem] font-bold leading-none">SUNDAY</h1>
            <h1 className="headline text-[5rem] md:text-[11rem] font-bold leading-none">SERVICE</h1>
            <h2 className="headline text-[2rem] md:text-[3rem] mt-4">EXPERIENCE</h2>
          </div>
          
          {/* Conducted by Jason White */}
          <div className="text-white text-lg md:text-xl font-mono tracking-[0.15em] uppercase mt-2">
            CONDUCTED BY JASON WHITE
          </div>
          
          {/* Live status */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <div className="headline text-xl md:text-2xl">LIVE 3.30.25</div>
            <div className="border border-[#FF0000] rounded-full px-6 py-2 text-white font-mono">
              SUNDAYSERVICE.NET
            </div>
          </div>
          
          {/* Logo */}
          <div className="w-32 h-32 md:w-48 md:h-48 transition-opacity duration-300 hover:opacity-90 mt-4 flex items-center justify-center relative">
            <Image 
              src="/logo.png" 
              alt="Sunday Service Logo" 
              fill
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Play button */}
          <div className="relative">
            <button 
              onClick={handlePlayClick}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF0000] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            
            {/* Not live message */}
            {showMessage && (
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-black border border-[#FF0000] px-6 py-3 text-white font-mono animate-fade-in">
                NOT LIVE YET
              </div>
            )}
          </div>
          
          {/* Back link */}
          <Link href="/" className="text-white/50 font-mono text-sm hover:text-white transition-colors duration-300 mt-8">
            BACK
          </Link>
        </div>
      </main>
    </ProtectedPage>
  );
} 