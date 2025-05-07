'use client';

import { useState, useEffect } from 'react';

export default function FlashingTime() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 1000); // Flash every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-center py-2 bg-black">
      <h1 className={`text-red-600 font-mono text-2xl font-bold ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        4 AM EST
      </h1>
    </div>
  );
} 