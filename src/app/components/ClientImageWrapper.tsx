'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the timed image component with no SSR
const TimedImage = dynamic(() => import('./TimedImage'), { ssr: false });

interface ClientImageWrapperProps {
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
}

export default function ClientImageWrapper({
  width,
  height,
  mobileWidth,
  mobileHeight
}: ClientImageWrapperProps) {
  return (
    <div className="flex justify-center">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center" style={{
          width: typeof window !== 'undefined' && window.innerWidth < 768 ? `${mobileWidth}px` : `${width}px`,
          height: typeof window !== 'undefined' && window.innerWidth < 768 ? `${mobileHeight}px` : `${height}px`
        }}>
          Loading...
        </div>
      }>
        <TimedImage 
          width={width} 
          height={height} 
          mobileWidth={mobileWidth} 
          mobileHeight={mobileHeight} 
        />
      </Suspense>
    </div>
  );
} 