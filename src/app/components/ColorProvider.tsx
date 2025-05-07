'use client';

import { useEffect, useState } from 'react';

export default function ColorProvider() {
  const [cssVars, setCssVars] = useState<string>('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set initial background color
    document.documentElement.style.setProperty('--background', '#000000');
    
    // Fetch colors from the API
    async function loadColors() {
      try {
        const response = await fetch('/api/update-colors');
        const data = await response.json();
        
        if (data.success && data.data?.length > 0) {
          // Transform colors into CSS variables
          const cssVariables = data.data.map((color: any) => 
            `--${color.key}: ${color.value};`
          ).join('\n');
          
          setCssVars(cssVariables);
        }
      } catch (error) {
        console.error('Failed to load colors:', error);
      } finally {
        setLoaded(true);
      }
    }
    
    loadColors();
  }, []);

  // Apply CSS variables using a style tag
  useEffect(() => {
    if (!loaded || !cssVars) return;
    
    // Create or update the style element for CSS variables
    let styleEl = document.getElementById('app-colors');
    
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'app-colors';
      document.head.appendChild(styleEl);
    }
    
    // Ensure background color is included in the CSS variables
    const cssWithBackground = `:root {\n--background: #808080;\n${cssVars}\n}`;
    styleEl.textContent = cssWithBackground;
    
  }, [cssVars, loaded]);

  // This component doesn't render anything visible
  return null;
} 