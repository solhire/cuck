'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function HHPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black relative">
      {/* Top-left cuk3 image */}
      <div className="absolute top-4 left-4 z-10">
        <div className="relative w-24 h-24">
          <Image
            src="/cuk3.png"
            alt="Cuk3"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Top-right ye2 image */}
      <div className="absolute top-4 right-4 z-10">
        <div className="relative w-24 h-24">
          <Image
            src="/ye2.png"
            alt="Ye2"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      <div className="pt-8 w-full flex justify-center">
        <Link href="/">
          <div className="relative w-40 h-40 cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="/cuck.png"
              alt="Cuck"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>
      
      <div className="pt-8 pb-8 relative">
        <div 
          className="relative w-[400px] h-[400px]"
          style={{
            animation: isPlaying ? 'spin 3s linear infinite' : 'none',
            transformOrigin: 'center'
          }}
        >
          <style jsx>{`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
          <Image
            src="/hh2.png"
            alt="HH2"
            fill
            className="object-contain"
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 w-80 flex flex-col items-center gap-3">
        <audio ref={audioRef} src="/HAIL HITLER.wav" />
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            )}
          </button>
          <div className="text-white font-mono tracking-[0.15em] text-lg">HEIL HITLER</div>
        </div>
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 w-0 transition-all duration-100" style={{ width: audioRef.current?.currentTime ? `${(audioRef.current.currentTime / (audioRef.current?.duration || 1)) * 100}%` : '0%' }} />
        </div>
      </div>
      
      <Link href="/" className="mt-12">
        <button className="bg-red-600 hover:bg-red-700 text-white font-mono tracking-[0.15em] px-6 py-2 rounded transition-colors">
          GO HOME
        </button>
      </Link>
    </div>
  );
} 