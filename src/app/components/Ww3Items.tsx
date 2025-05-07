'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DaveVideoWithImage from './DaveVideoWithImage';
import Ww3ItemModal from './Ww3ItemModal';

// Define the WW3 item type
interface Ww3Item {
  id: string;
  name: string;
  image: string;
  description: string;
  component?: React.ReactNode;
  title?: string;
}

const Ww3Items: React.FC = () => {
  // Data for WW3 items - in a real app, you might want to fetch this from an API or CMS
  const items: Ww3Item[] = [
    {
      id: 'tank',
      name: 'TANK',
      title: 'BURNT RIBCAGE',
      image: '/ww3/t.png',
      description: 'you ain\'t cold you just aware\nholes like testimony\nWWIII across the chest\nlike you remembered in the middle of forgetting'
    },
    {
      id: 'vest',
      name: 'VEST',
      title: 'FIELD SERMON',
      image: '/ww3/vest.png',
      description: 'carry what they tried to bury\npockets like chapters\nscratched leather\nzips like you closing up on betrayal\nWWIII where your heart used to be'
    },
    {
      id: 'balaclava',
      name: 'BALACLAVA',
      title: 'FACE DELETED',
      image: '/ww3/Balaclava.png',
      description: 'no need for name\nonly need for aim\nstitched like scars\nWWIII whispered by the ear\nyou vanish\nbut you still watching\nghost protocol fit'
    },
    {
      id: 'hoodie',
      name: 'HOODIE',
      title: 'COMFORT IN WAR',
      image: '/ww3/hoodie.png',
      description: 'soft enough to rest\ntough enough to fight\nfades at the elbows\nlike you been praying on concrete\nWWIII not printed\ndeclared\nwhite lines\nsilent signals'
    },
    {
      id: 'hat',
      name: 'HAT',
      title: 'HEAD ABOVE WAR',
      image: '/ww3/hat.png',
      description: 'curved brim\nno curve in truth\nWWIII stitched red\nlow\nlike grief\nthis cap don\'t shade\nit reminds'
    },
    {
      id: 'dave',
      name: 'KLAN HOODIE',
      title: 'THE EYE SEES',
      image: '/dave2.png',
      description: 'no face no fear\njust vision\nhood drops like silence before thunder\nstitched breath vents for ghosts who still run\n"YOU CHOSE THIS" hidden in the sleeve\nWWIII don\'t scream\nit watches',
      component: <DaveVideoWithImage />
    },
    {
      id: 'klan',
      name: 'KLAN HOODIE',
      title: 'THE EYE SEES',
      image: '/klan.png',
      description: 'no face no fear\njust vision\nhood drops like silence before thunder\nstitched breath vents for ghosts who still run\n"YOU CHOSE THIS" hidden in the sleeve\nWWIII don\'t scream\nit watches'
    },
    {
      id: 'windbreaker',
      name: 'WINDBREAKER',
      title: 'RUNNING FROM GOD',
      image: '/ww3/wb.jpeg',
      description: 'wind don\'t touch you\nrain slides off like doubt\nzipped up like armor\nwhite streaks across black like heaven\'s veins\nWWIII stitched in small\nbut means everything'
    }
  ];

  // State for controlling the modal
  const [selectedItem, setSelectedItem] = useState<Ww3Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal with a specific item
  const openModal = (item: Ww3Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Small delay before clearing the selected item data
    setTimeout(() => setSelectedItem(null), 200);
  };

  return (
    <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-5 px-2 sm:px-4 py-4 sm:py-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative w-32 h-32 sm:w-48 sm:h-48 border-2 border-white group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          onClick={() => openModal(item)}
        >
          {/* White accent border on hover */}
          <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>
          
          {item.component ? (
            item.component
          ) : (
            <Image 
              src={item.image} 
              alt={item.name}
              fill
              className="object-contain"
            />
          )}
          <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-mono text-sm tracking-[0.15em] transform transition-transform duration-300 group-hover:scale-110">
              {item.name}
            </span>
          </div>
        </div>
      ))}

      {/* Render the modal if an item is selected */}
      {selectedItem && (
        <Ww3ItemModal
          isOpen={isModalOpen}
          onClose={closeModal}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default Ww3Items; 