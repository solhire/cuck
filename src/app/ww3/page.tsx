'use client';

import Image from 'next/image';
import { useState } from 'react';

// Define image key type
type ImageKey = 'vest' | 'balaclava' | 'hoodie' | 'hat' | 'wb';

// Define image object type
interface WW3Image {
  src: string;
  alt: string;
  key: ImageKey;
}

export default function WW3Page() {
  // State to store whether images have loaded
  const [imagesLoaded, setImagesLoaded] = useState<Record<ImageKey, boolean>>({
    vest: false,
    balaclava: false,
    hoodie: false,
    hat: false,
    wb: false
  });

  // Images from the ww3 folder
  const images: WW3Image[] = [
    { src: '/ww3/vest.png', alt: 'WW3 Vest', key: 'vest' },
    { src: '/ww3/Balaclava.png', alt: 'WW3 Balaclava', key: 'balaclava' },
    { src: '/ww3/hoodie.png', alt: 'WW3 Hoodie', key: 'hoodie' },
    { src: '/ww3/hat.png', alt: 'WW3 Hat', key: 'hat' },
    { src: '/ww3/wb.jpeg', alt: 'WW3 WB', key: 'wb' }
  ];

  const handleImageLoad = (key: ImageKey) => {
    setImagesLoaded(prev => ({
      ...prev,
      [key]: true
    }));
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-12 px-4">
      {/* WW3 text at top - italic bold and white */}
      <div className="w-full text-center mb-12">
        <h1 className="text-white font-bold italic text-4xl md:text-5xl lg:text-6xl tracking-wider">
          WW3
        </h1>
      </div>
      
      {/* Images grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {images.map((image) => (
          <div 
            key={image.key} 
            className="relative aspect-square w-full mx-auto overflow-hidden"
          >
            <div className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity duration-300 ${imagesLoaded[image.key] ? 'opacity-0' : 'opacity-100'}`}>
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              onLoad={() => handleImageLoad(image.key)}
              priority
            />
          </div>
        ))}
      </div>
    </main>
  );
} 