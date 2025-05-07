'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function YeLogoWithVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(isMobileDevice || window.innerWidth < 768);
    };
    
    checkMobile();
    
    // Set up intersection observer for scroll-based playback on mobile
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
        
        // For mobile, play/pause based on visibility in viewport
        if (isMobile && videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Auto-play might be blocked, handle gracefully
              console.log('Video play prevented by browser');
            });
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% visible
    );
    
    // Observe the container element
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    // Autoplay video on load for desktop
    if (!isMobile) {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          console.log('Desktop video autoplay prevented');
        });
      }
      if (audioRef.current) {
        audioRef.current.volume = 1;
        audioRef.current.play().catch(() => {
          console.log('Desktop audio autoplay prevented');
        });
      }
    }
    
    // Add resize event listener to check for orientation changes
    window.addEventListener('resize', checkMobile);
    
    // Store reference to video element for cleanup
    const videoElement = videoRef.current;
    const audioElement = audioRef.current;
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      // Cleanup
      if (videoElement) {
        videoElement.pause();
      }
      if (audioElement) {
        audioElement.pause();
      }
      // Disconnect observer
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, [isMobile]);
  
  return (
    <Link href="/ye" className="group text-center">
      <div className="flex flex-col items-center">
        {/* BV23 image above the Ye2 logo */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-2">
          <Image 
            src="/bv23.png" 
            alt="BULLY V23"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Audio element */}
        <audio 
          ref={audioRef}
          src="/bully.mp3" 
          preload="auto"
        />
        <div 
          ref={containerRef}
          className="relative w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 mb-2 group"
          onMouseEnter={() => {
            if (!isMobile) {
              videoRef.current?.play().catch(() => {});
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(() => {});
              }
            }
          }}
          onMouseLeave={() => {
            if (!isMobile && videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
              if (audioRef.current) {
                audioRef.current.pause();
              }
            }
          }}
        >
          {/* Video that will be masked by the logo - show on mobile when visible in viewport */}
          <div className={`absolute inset-0 overflow-hidden ${!isVisible && isMobile ? 'hidden' : ''}`} 
            style={{ 
              WebkitMaskImage: 'url(/ye2.png)', 
              maskImage: 'url(/ye2.png)', 
              WebkitMaskSize: 'contain', 
              maskSize: 'contain', 
              WebkitMaskRepeat: 'no-repeat', 
              maskRepeat: 'no-repeat', 
              WebkitMaskPosition: 'center', 
              maskPosition: 'center' 
            }}>
            <video 
              ref={videoRef}
              src="/bully.mp4" 
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
              autoPlay={!isMobile}
            />
          </div>
          
          {/* Ye2 logo - always visible on mobile when not in viewport, visible on desktop when not hovering */}
          <Image 
            src="/ye2.png" 
            alt="Ye Logo" 
            fill
            className={`absolute inset-0 object-contain ${
              (!isMobile && 'group-hover:opacity-0') || 
              (isMobile && isVisible ? 'opacity-40' : 'opacity-100')
            } transition-opacity duration-300`}
          />
        </div>
      </div>
    </Link>
  );
}
