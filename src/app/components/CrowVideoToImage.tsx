'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function CrowVideoToImage() {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to start of video
      videoRef.current.play().catch(err => {
        console.log('Play on hover prevented:', err);
      });
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start of video
    }
  };
  
  // Detect if on mobile to handle touch events differently
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        const userAgent = navigator.userAgent.toLowerCase();
        setIsMobile(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent) || window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, []);
  
  return (
    <div 
      className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovering ? (
        <video 
          ref={videoRef}
          src="/crow.mp4" 
          className="w-full h-full object-contain"
          muted
          playsInline
          loop={false}
        />
      ) : (
        <Image 
          src="/ww32.png" 
          alt="WW32"
          fill
          className="object-contain"
        />
      )}
    </div>
  );
} 