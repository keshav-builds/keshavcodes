import { cn } from '@/lib/utils';
import React from 'react';

export default function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      {/* Lighter and softer grid lines for light mode */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,rgba(200,200,220,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(200,200,220,0.12)_1px,transparent_1px)]',
          // Slightly stronger but soft grid lines for dark mode
          'dark:[background-image:linear-gradient(to_right,rgba(80,80,120,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(80,80,120,0.13)_1px,transparent_1px)]',
        )}
      />
      {/* Softer and more neutral radial gradient for light mode */}
      <div
        className="
        pointer-events-none absolute inset-0
        [background:radial-gradient(ellipse_at_center,rgba(240,240,255,0.15)_0%,transparent_70%)]
        dark:[background:radial-gradient(ellipse_at_center,rgba(80,120,255,0.11)_0%,transparent_70%)]
      "
      ></div>
      {/* Subtle light linear gradient for light mode */}
      <div
        className="
    pointer-events-none absolute inset-0
    [background:radial-gradient(ellipse_at_center,rgba(120,180,255,0.13)_0%,transparent_70%)]
    dark:[background:radial-gradient(ellipse_at_center,rgba(80,120,255,0.13)_0%,transparent_70%)]
  "
      ></div>
    </div>
  );
}
