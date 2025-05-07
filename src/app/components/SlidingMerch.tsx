'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SlidingMerch = () => {
  const items = ['cuckhood.png', 'cucklong.png', 'cuckt.png'];
  
  return (
    <div className="w-screen -mx-4 mt-6 overflow-hidden bg-black/20">
      <motion.div
        className="flex gap-8 py-4"
        animate={{
          x: [1000, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {items.map((item) => (
          <div key={item} className="relative w-40 h-40 border-4 border-red-500 rounded-lg p-2 flex-shrink-0">
            <Image 
              src={`/cuckmerch/${item}`} 
              alt={item} 
              fill
              className="object-contain"
            />
          </div>
        ))}
        {items.map((item) => (
          <div key={`${item}-duplicate`} className="relative w-40 h-40 border-4 border-red-500 rounded-lg p-2 flex-shrink-0">
            <Image 
              src={`/cuckmerch/${item}`} 
              alt={item} 
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingMerch; 