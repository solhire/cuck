"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Song {
  title: string;
  file: string;
  locked?: boolean;
}

const CuckAlbumPlayer = () => {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const songs: Song[] = [
    { title: "WW3", file: "/cuckal/WW3.wav", locked: false },
    { title: "COSBY", file: "/cuckal/COSBY.m4a", locked: true },
    { title: "ALL THE LOVE", file: "/cuckal/ALL THE LOVE.m4a", locked: true },
    { title: "HEIL HITLER", file: "/cuckal/HEIL HITLER.m4a", locked: true },
    { title: "COUSINS", file: "/cuckal/COUSINS.mp3", locked: false },
    { title: "NITROUS", file: "/cuckal/NITROUS.mp3", locked: true },
    { title: "VIRGIL", file: "/cuckal/VIRGIL.mp3", locked: true },
    { title: "JARED", file: "/cuckal/JARED .m4a", locked: true },
    { title: "HITLER YE AND JESUS", file: "/cuckal/HITLER YE AND JESUS.m4a", locked: true },
    { title: "BIANCA", file: "/cuckal/BIANCA  .wav", locked: false },
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
    if (!songs[index].locked) {
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
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden p-4 border border-white/10">
      <div className="relative">
        {/* CUCK album cover */}
        <div className="relative w-32 h-32 mx-auto mb-2 drop-shadow-md">
          <Image 
            src="/cuckal/cuckal.png" 
            alt="CUCK Album" 
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center text-white/70 font-mono text-sm tracking-wider mb-4">
          5/10
        </div>
        
        <div className="space-y-2">
          {/* Song list */}
          <div className="space-y-1">
            {songs.map((song, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors border-b border-white/10"
              >
                <span className="text-sm font-mono tracking-wider text-white">{song.title}</span>
                <button
                  onClick={() => togglePlay(index)}
                  className={`p-2 rounded-full ${
                    song.locked 
                      ? 'bg-black hover:bg-gray-800' 
                      : currentSong === index && isPlaying
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-black hover:bg-gray-800'
                  } shadow-md text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
                  aria-label={song.locked ? `Locked: ${song.title}` : currentSong === index && isPlaying ? `Stop ${song.title}` : `Play ${song.title}`}
                >
                  {song.locked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  ) : currentSong === index && isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <rect x="6" y="5" width="3" height="10" rx="1" />
                      <rect x="11" y="5" width="3" height="10" rx="1" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
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

export default CuckAlbumPlayer; 