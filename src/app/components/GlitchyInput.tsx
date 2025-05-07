'use client';

import { useState, useEffect, useRef } from 'react';

export default function GlitchyInput() {
  const [value, setValue] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [showGlitchText, setShowGlitchText] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const yeAudioRef = useRef<HTMLAudioElement | null>(null);
  const ww3AudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(Math.random() > 0.7);
    }, 100);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    // Handle 'cuck' input
    if (value.toLowerCase() === 'cuck') {
      setShowCustomCursor(true);
      document.body.style.cursor = 'none';
      
      // Play the audio
      if (!audioRef.current) {
        audioRef.current = new Audio('/cuckmode.mp3');
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });

      // Show glitch text
      setShowGlitchText(true);
      const timer = setTimeout(() => {
        setShowGlitchText(false);
      }, 3000);

      return () => clearTimeout(timer);
    } 
    // Handle 'ye' input
    else if (value.toLowerCase() === 'ye') {
      document.documentElement.style.backgroundColor = '#FFFFFF';
      document.body.style.backgroundColor = '#FFFFFF';
      
      // Play ye audio
      if (!yeAudioRef.current) {
        yeAudioRef.current = new Audio('/ye.mp3');
      }
      yeAudioRef.current.currentTime = 0;
      yeAudioRef.current.play().catch(error => {
        console.error('Error playing ye audio:', error);
      });
      
      // Change text colors to gold
      const mainContainer = document.getElementById('main-container');
      if (mainContainer) {
        const textElements = mainContainer.querySelectorAll('*');
        textElements.forEach(element => {
          if (window.getComputedStyle(element).color === 'rgb(255, 255, 255)' || 
              window.getComputedStyle(element).color === 'rgba(255, 255, 255, 0.7)' ||
              window.getComputedStyle(element).color === 'rgba(255, 255, 255, 0.5)') {
            (element as HTMLElement).style.color = '#FFD700';
          }
        });

        // Change red borders to gold
        const elementsWithRedBorder = mainContainer.querySelectorAll('.border-red-500');
        elementsWithRedBorder.forEach(element => {
          (element as HTMLElement).classList.remove('border-red-500');
          (element as HTMLElement).classList.add('border-[#FFD700]');
        });

        // Change red text to gold
        const elementsWithRedText = mainContainer.querySelectorAll('.text-red-500');
        elementsWithRedText.forEach(element => {
          (element as HTMLElement).classList.remove('text-red-500');
          (element as HTMLElement).classList.add('text-[#FFD700]');
        });
      }
    }
    // Handle 'ww3' input
    else if (value.toLowerCase() === 'ww3') {
      // Play march audio
      if (!ww3AudioRef.current) {
        ww3AudioRef.current = new Audio('/march.mp3');
      }
      ww3AudioRef.current.currentTime = 0;
      ww3AudioRef.current.play().catch(error => {
        console.error('Error playing march audio:', error);
      });
    }
    // Reset everything when input is cleared
    else {
      setShowCustomCursor(false);
      document.body.style.cursor = 'auto';
      document.documentElement.style.backgroundColor = '#000000';
      document.body.style.backgroundColor = '#000000';
      
      // Stop all audio files if playing
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (yeAudioRef.current) {
        yeAudioRef.current.pause();
      }
      if (ww3AudioRef.current) {
        ww3AudioRef.current.pause();
      }
      
      // Reset text colors and borders
      const mainContainer = document.getElementById('main-container');
      if (mainContainer) {
        const textElements = mainContainer.querySelectorAll('*');
        textElements.forEach(element => {
          if (window.getComputedStyle(element).color === 'rgb(255, 215, 0)') {
            (element as HTMLElement).style.color = '';
          }
        });

        // Reset gold borders to red
        const elementsWithGoldBorder = mainContainer.querySelectorAll('.border-\\[\\#FFD700\\]');
        elementsWithGoldBorder.forEach(element => {
          (element as HTMLElement).classList.remove('border-[#FFD700]');
          (element as HTMLElement).classList.add('border-red-500');
        });

        // Reset gold text to red
        const elementsWithGoldText = mainContainer.querySelectorAll('.text-\\[\\#FFD700\\]');
        elementsWithGoldText.forEach(element => {
          (element as HTMLElement).classList.remove('text-[#FFD700]');
          (element as HTMLElement).classList.add('text-red-500');
        });
      }
    }

    return () => {
      document.body.style.cursor = 'auto';
      document.documentElement.style.backgroundColor = '#000000';
      document.body.style.backgroundColor = '#000000';
      
      // Stop all audio files on cleanup
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (yeAudioRef.current) {
        yeAudioRef.current.pause();
      }
      if (ww3AudioRef.current) {
        ww3AudioRef.current.pause();
      }
      
      // Reset text colors and borders on cleanup
      const mainContainer = document.getElementById('main-container');
      if (mainContainer) {
        const textElements = mainContainer.querySelectorAll('*');
        textElements.forEach(element => {
          if (window.getComputedStyle(element).color === 'rgb(255, 215, 0)') {
            (element as HTMLElement).style.color = '';
          }
        });

        // Reset gold borders to red
        const elementsWithGoldBorder = mainContainer.querySelectorAll('.border-\\[\\#FFD700\\]');
        elementsWithGoldBorder.forEach(element => {
          (element as HTMLElement).classList.remove('border-[#FFD700]');
          (element as HTMLElement).classList.add('border-red-500');
        });

        // Reset gold text to red
        const elementsWithGoldText = mainContainer.querySelectorAll('.text-\\[\\#FFD700\\]');
        elementsWithGoldText.forEach(element => {
          (element as HTMLElement).classList.remove('text-[#FFD700]');
          (element as HTMLElement).classList.add('text-red-500');
        });
      }
    };
  }, [value]);

  return (
    <>
      <div className="relative w-64 mx-auto mt-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="what did you see?"
          className={`
            w-full bg-transparent border-none outline-none
            text-red-500 font-mono text-sm tracking-wider
            placeholder-red-500/50
            focus:ring-0 focus:outline-none
            ${isGlitching ? 'animate-glitch' : ''}
            animate-pulse
          `}
        />
        <div className="absolute right-0 top-0 h-full w-0.5 bg-red-500 animate-cursor-blink" />
      </div>
      {showCustomCursor && (
        <div 
          className="fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none animate-pulse"
          style={{
            left: 'var(--mouse-x, 0px)',
            top: 'var(--mouse-y, 0px)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      {showGlitchText && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none">
          <div className="text-red-500 font-mono text-4xl md:text-6xl font-bold animate-text-glitch">
            DO YOU REGRET IT?
          </div>
        </div>
      )}
    </>
  );
} 