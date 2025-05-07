'use client';
// WwLogoWithVideo component - displays YEREICH4 image

import Image from 'next/image';

interface WwLogoWithVideoProps {
  messages: {
    ww3Deluxe: string;
    redTitle: string;
  };
}

export default function WwLogoWithVideo({ messages }: WwLogoWithVideoProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96">
        <Image 
          src="/YEREICH4.PNG" 
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Text below image */}
      <div className="mt-2 text-white font-mono tracking-wider text-center text-sm sm:text-base md:text-lg">
        PLEASE DONT WAKE ME UP.
      </div>
    </div>
  );
} 