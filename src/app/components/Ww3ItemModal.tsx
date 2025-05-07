'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Ww3ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    image: string;
    description: string;
    title?: string;
  };
}

const Ww3ItemModal: React.FC<Ww3ItemModalProps> = ({ isOpen, onClose, item }) => {
  const [animationClass, setAnimationClass] = useState('');
  
  useEffect(() => {
    // Add animation class when modal opens
    if (isOpen) {
      setAnimationClass('scale-100 opacity-100');
    } else {
      setAnimationClass('scale-95 opacity-0');
    }
  }, [isOpen]);

  // Format description with line breaks
  const formattedDescription = item.description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  if (!isOpen && animationClass === 'scale-95 opacity-0') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/90 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div 
        className={`relative bg-black border-2 border-white max-w-lg w-full mx-4 z-10 p-6 transform transition-all duration-300 ${animationClass} text-white`}
      >
        {/* White accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-2xl font-bold text-white hover:text-white/70 transition-colors"
        >
          ×
        </button>
        
        <div className="flex flex-col items-center pt-4">
          {/* Item title if available */}
          {item.title && (
            <h2 className="text-xl font-mono tracking-[0.15em] mb-2 text-white font-bold">{`"${item.title}"`}</h2>
          )}
          
          {/* Item name */}
          <h3 className="text-2xl font-mono tracking-[0.15em] mb-6 text-white">{item.name}</h3>
          
          {/* Item image with border */}
          <div className="relative w-full h-64 sm:h-80 mb-8 border border-white p-1">
            <Image 
              src={item.image} 
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
          
          {/* Item description with line breaks */}
          <div className="w-full text-center font-mono text-sm sm:text-base tracking-wider leading-relaxed whitespace-pre-line text-white">
            {formattedDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ww3ItemModal; 