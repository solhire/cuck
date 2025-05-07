'use client';

import { useState, useEffect } from 'react';

interface AutoTypingTextProps {
  messages: string[];
  className?: string;
}

export default function AutoTypingText({ messages, className = '' }: AutoTypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && currentIndex < messages[messageIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + messages[messageIndex][currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
    } else if (currentIndex >= messages[messageIndex].length) {
      // Wait for 3 seconds before starting to delete
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 3000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isTyping, currentIndex, messageIndex, messages]);

  // Handle deletion
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isTyping && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, 30);
    } else if (!isTyping && displayedText.length === 0) {
      // Move to next message
      setMessageIndex(prev => (prev + 1) % messages.length);
      setCurrentIndex(0);
      setIsTyping(true);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isTyping, displayedText, messages.length]);

  return (
    <div className={`min-h-[1.5rem] ${className}`}>
      {displayedText}
      {isTyping && <span className="animate-cursor-blink">|</span>}
    </div>
  );
} 