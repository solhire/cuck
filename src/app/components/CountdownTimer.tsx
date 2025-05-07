'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Get or set the start time in localStorage
    let startTime = localStorage.getItem('countdownStartTime');
    
    if (!startTime) {
      // If no start time exists, set it to 1 hour and 30 minutes from now
      const now = new Date();
      now.setHours(now.getHours() + 1);
      now.setMinutes(now.getMinutes() + 30);
      startTime = now.getTime().toString();
      localStorage.setItem('countdownStartTime', startTime);
    }

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = parseInt(startTime) - now;

      if (distance < 0) {
        setTimeLeft('00:00:00');
        return;
      }

      // Calculate hours, minutes, seconds
      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format with leading zeros
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');

      setTimeLeft(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
    };

    // Update immediately and then every second
    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="text-white font-mono tracking-wider text-center text-xl mt-4 transition-colors duration-300"
      style={{ color: isHovered ? '#FF0000' : 'white' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {timeLeft}
    </div>
  );
} 