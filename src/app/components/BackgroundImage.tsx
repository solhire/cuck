'use client';

import { useEffect, useState } from 'react';

export default function BackgroundImage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-[-1]" style={{ background: 'var(--background)' }}>
      {/* Using CSS variable for background color */}
    </div>
  );
} 