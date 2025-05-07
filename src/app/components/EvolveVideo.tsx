'use client';

import { useRef, useEffect, useState } from 'react';

export default function EvolveVideo() {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  const handleEnded = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <video
        ref={videoRef}
        src="/evolve.mp4"
        className="w-full aspect-video object-contain"
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      />
    </div>
  );
} 