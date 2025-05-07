'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TimedImageProps {
  className?: string;
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
}

export default function TimedImage({
  className,
  width,
  height,
  mobileWidth = width,
  mobileHeight = height
}: TimedImageProps) {
  // State for client-side rendering only
  const [isClient, setIsClient] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Set to true once component mounts to avoid hydration mismatch
    setIsClient(true);
  }, []);
  
  // Don't render anything on the server to avoid hydration mismatch
  if (!isClient) return null;
  
  return (
    <div 
      className={`relative ${className || ''}`}
      style={{
        width: typeof window !== 'undefined' && window.innerWidth < 768 ? `${mobileWidth}px` : `${width}px`,
        height: typeof window !== 'undefined' && window.innerWidth < 768 ? `${mobileHeight}px` : `${height}px`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src="/DDAY.png"
        alt="D-Day"
        fill
        className="object-contain"
        priority
      />
      
      {/* SET_01 text that appears on hover */}
      <div 
        className={`absolute bottom-0 left-0 right-0 text-center text-[#FF0000] font-mono font-bold text-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        SET_01
      </div>
    </div>
  );
} 