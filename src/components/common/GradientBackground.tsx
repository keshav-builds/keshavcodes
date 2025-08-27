import { cn } from '@/lib/utils';
import React from 'react';

export default function GradientBackground() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/*  soft lines and slight blur */}
      <div
        className={cn(
          'absolute inset-0 blur-sm',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,rgba(200,200,220,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,200,220,0.1)_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,rgba(60,60,100,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(60,60,100,0.15)_1px,transparent_1px)]'
        )}
      />

      {/* Radial gradient center glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          [background:radial-gradient(ellipse_at_center,rgba(240,240,255,0.15)_0%,transparent_70%)]
          dark:[background:radial-gradient(ellipse_at_center,rgba(80,120,255,0.11)_0%,transparent_70%)]
        "
      />

      {/* Additional radial gradient overlay for depth */}
      <div
        className="
          pointer-events-none absolute inset-0
          [background:radial-gradient(ellipse_at_center,rgba(120,180,255,0.1)_0%,transparent_70%)]
          dark:[background:radial-gradient(ellipse_at_center,rgba(80,120,255,0.13)_0%,transparent_70%)]
        "
      />

      {/* Color blobs overlay  */}
      <div
        className="
          pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full
          bg-blue-300 opacity-20 blur-3xl
          dark:bg-blue-700
          transition-colors duration-1000 ease-in-out
        "
      ></div>

      <div
        className="
          pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full
          bg-purple-300 opacity-15 blur-3xl
          dark:bg-purple-800
          transition-colors duration-1000 ease-in-out
        "
      ></div>
    </div>
  );
}
