'use client';

import { useEffect, useState } from 'react';

const GlitchyTitle = () => {
  const [currentTitle, setCurrentTitle] = useState<string>('CUCK');
  const [isGlitching, setIsGlitching] = useState(false);

  const titles = [
    "you weren't supposed to see this",
    "rewriting memory...",
    "do you even remember what happened",
    "he's still in the room",
    "she's with him right now",
    "god left the session",
    "you heard it too, didn't you",
    "we warned you",
    "he said it was final",
    "this isn't your story anymore",
    "she changed it all",
    "recording again...",
    "don't click anything",
    "it's already too late",
    "this was supposed to be private",
    "you leaked it"
  ];

  useEffect(() => {
    let glitchInterval: NodeJS.Timeout;
    let normalInterval: NodeJS.Timeout;
    let currentIndex = 0;

    const startGlitching = () => {
      // Start glitching
      setIsGlitching(true);
      glitchInterval = setInterval(() => {
        // Randomly switch between normal and glitch titles
        if (Math.random() > 0.5) {
          document.title = titles[currentIndex];
        } else {
          document.title = 'CUCK';
        }
      }, 50); // Faster flicker for more intensity

      // Stop glitching after 0.5-1.5 seconds
      setTimeout(() => {
        clearInterval(glitchInterval);
        setIsGlitching(false);
        document.title = 'CUCK';
      }, Math.random() * 1000 + 500);
    };

    const cycleTitles = () => {
      if (!isGlitching) {
        currentIndex = (currentIndex + 1) % titles.length;
        document.title = titles[currentIndex];
        startGlitching();
      }
    };

    // Initial glitch
    startGlitching();

    // Set up the cycle interval - faster cycling for more intensity
    normalInterval = setInterval(cycleTitles, 3000); // Change title every 3 seconds

    return () => {
      clearInterval(glitchInterval);
      clearInterval(normalInterval);
      document.title = 'CUCK';
    };
  }, [isGlitching]);

  return null; // This component doesn't render anything
};

export default GlitchyTitle; 