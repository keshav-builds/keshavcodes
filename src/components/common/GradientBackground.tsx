'use client';

import React from 'react';

export default function GradientBackground() {
  return (
    <div className="min-h-screen w-full relative bg-white dark:bg-black">
      {/* Light theme - Subtle Cool Blue Glow Right */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at top right,
              rgba(70, 130, 180, 0.2),
              transparent 60%
            )
          `,
          filter: "blur(100px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Dark theme - Azure Depths */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />
    </div>
  );
}
