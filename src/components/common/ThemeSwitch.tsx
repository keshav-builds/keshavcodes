'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Moon from '../svgs/Moon';
import Sun from '../svgs/Sun';

interface ThemeSwitchProps {
  className?: string;
}

export default function ThemeSwitch({ className }: ThemeSwitchProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(
    async () => {
      if (isAnimating || !mounted) return;
      setIsAnimating(true);

      const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
      
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.zIndex = '9999';
      overlay.style.pointerEvents = 'none';
      overlay.style.willChange = 'clip-path';
      overlay.style.backfaceVisibility = 'hidden';
      overlay.style.transform = 'translateZ(0)';
      
      if (resolvedTheme === 'light') {
        overlay.style.background = '#ffffff';
       
      } else {
        overlay.style.background = '#000000';
       
      }
      
      overlay.style.backgroundSize = '40px 40px, 40px 40px, 100% 100%, 100% 100%';
      overlay.style.clipPath = 'inset(0 0 0 0)';
      
      document.body.appendChild(overlay);
      overlay.offsetHeight;
      setTheme(newTheme);

      setTimeout(() => {
        overlay.style.transition = 'clip-path 450ms cubic-bezier(0.65, 0, 0.35, 1)';
        overlay.style.clipPath = 'inset(100% 0 0 0)';
        
        setTimeout(() => {
          overlay.remove();
          setIsAnimating(false);
        }, 450);
      }, 30);
    },
    [resolvedTheme, isAnimating, mounted, setTheme]
  );

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      disabled={isAnimating}
      className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-blue-500/10 disabled:cursor-not-allowed ${className} hover:cursor-pointer z-50`}
      aria-label="Toggle theme"
    >
      <div className="relative h-6 w-6">
        <Sun
          className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            resolvedTheme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-180 scale-0 opacity-0'
          }`}
        />
        <Moon
          className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            resolvedTheme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-180 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}
