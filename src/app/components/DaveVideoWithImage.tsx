'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function DaveVideoWithImage() {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Attempt to play the video automatically
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.error('Error playing video:', error);
        // If autoplay fails, show the image
        setVideoEnded(true);
      }
    };
    
    playVideo();
  }, []);
  
  const handleVideoEnded = () => {
    setVideoEnded(true);
  };
  
  return (
    <div className="relative w-full h-full">
      {!videoEnded ? (
        <video 
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-contain"
          src="/dave3.mp4"
          onEnded={handleVideoEnded}
          playsInline
          muted
        />
      ) : (
        <Image 
          src="/dave2.png" 
          alt="Dave"
          fill
          className="object-contain"
        />
      )}
    </div>
  );
} 