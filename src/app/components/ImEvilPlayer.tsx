'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function ImEvilPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    // Only allow playing if it hasn't been played before
    if (!hasPlayed) {
      // Create audio element if it doesn't exist
      if (!audioRef.current) {
        audioRef.current = new Audio('/imevil/imevil.mp3');
        
        // Set up event listeners
        audioRef.current.onended = () => {
          setIsPlaying(false);
        };
      }
      
      // Play the audio
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
      
      setIsPlaying(true);
      setHasPlayed(true);
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-6">
      {/* Removed omg logo image and visual content */}
    </div>
  );
} 