"use client";
import { useState, useRef } from "react";

export default function WhorseHoverVideo() {
  const [state, setState] = useState<'image' | 'video' | 'done'>('image');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (state === 'image') setState('video');
  };
  const handleVideoEnd = () => setState('done');

  return (
    <div className="fixed left-0 top-[40%] z-[9999]">
      {state === 'image' && (
        <img
          src="/whorse.png"
          alt="White Horse"
          className="w-40 h-40 sm:w-64 sm:h-64 object-contain pointer-events-auto"
          onMouseEnter={handleMouseEnter}
        />
      )}
      {state === 'video' && (
        <video
          ref={videoRef}
          src="/hey.mp4"
          className="w-40 h-40 sm:w-64 sm:h-64 object-contain pointer-events-auto border-4 border-red-500"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      )}
      {state === 'done' && (
        <img
          src="/horse2.png"
          alt="Horse 2"
          className="w-40 h-40 sm:w-64 sm:h-64 object-contain border-4 border-red-500"
        />
      )}
    </div>
  );
} 