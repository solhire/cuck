"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Song {
  title: string;
  file: string;
}

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const songs: Song[] = [
    { title: "preacher man", file: "/music/preacher-man.mp3" },
    { title: "can't hurry love", file: "/music/cant-hurry-love.mp3" },
    { title: "white lines", file: "/music/white-lines.mp3" },
    { title: "white lines interlude", file: "/music/white-lines-interlude.mp3" },
    { title: "circles", file: "/music/circles.mp3" },
    { title: "bully", file: "/music/bully.mp3" },
    { title: "last breath", file: "/music/last-breath.mp3" },
    { title: "beauty and the beast", file: "/music/beauty-and-the-beast.mp3" },
    { title: "this one here", file: "/music/this-one-here.mp3" },
    { title: "highs and lows", file: "/music/highs-and-lows.mp3" },
    { title: "melrose", file: "/music/melrose.mp3" },
  ];

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = (index: number) => {
    if (currentSong === index && isPlaying) {
      // Stop the current song
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      // Stop current song if there is one
      if (audioRef.current && isPlaying) {
        audioRef.current.pause();
      }
      
      // Play the new song
      if (audioRef.current) {
        audioRef.current.src = songs[index].file;
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
        setCurrentSong(index);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden p-8 border border-white/10">
      <div className="relative">
        {/* BULLY image above the text */}
        <div className="relative w-32 h-32 mx-auto mb-4 drop-shadow-md">
          <Image 
            src="/BULLY.jpg" 
            alt="BULLY" 
            fill
            className="object-contain"
          />
        </div>
        
        <div className="space-y-6">
          {/* Song list */}
          <div className="space-y-4">
            {songs.map((song, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors border-b border-white/10"
              >
                <span className="text-lg font-mono tracking-wider text-white">{song.title}</span>
                <span className="text-sm font-mono text-white/50">{song.title === "BULLY" ? "2:55" : song.title === "CARNIVAL" ? "3:45" : "4:12"}</span>
                <button
                  onClick={() => togglePlay(index)}
                  className={`p-3 rounded-full ${currentSong === index && isPlaying 
                    ? 'bg-red-500 hover:bg-red-600 shadow-md' 
                    : 'bg-black hover:bg-gray-800 shadow-md'} 
                    text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
                  aria-label={currentSong === index && isPlaying ? `Stop ${song.title}` : `Play ${song.title}`}
                >
                  {currentSong === index && isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <rect x="6" y="5" width="3" height="10" rx="1" />
                      <rect x="11" y="5" width="3" height="10" rx="1" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
