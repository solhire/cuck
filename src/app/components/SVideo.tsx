'use client';

import { useRef, useEffect, useState } from 'react';

export default function SVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(isMobileDevice || window.innerWidth < 768);
    };
    
    checkMobile();
    
    // Set up intersection observer for scroll-based playback
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
        
        // Play/pause based on visibility
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
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
    
    // Add resize event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
      
      // Stop video
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-44 h-44 md:w-56 md:h-56"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        loop
        muted
        playsInline
        autoPlay={!isMobile}
        controls={false}
      >
        <source src="/s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
} 