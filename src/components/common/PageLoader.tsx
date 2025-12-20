'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

  // Handle initial page load
  useEffect(() => {
    if (isInitialLoad) {
      // Quick initial load
      const timeout = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 400); // Reduced from 800ms
      return () => clearTimeout(timeout);
    }
  }, [isInitialLoad]);

  // Handle route changes (after initial load)
  useEffect(() => {
    if (!isInitialLoad) {
      setIsLoading(true);
      // Very quick route changes
      const timeout = setTimeout(() => setIsLoading(false), 200); // Reduced from 700ms
      return () => clearTimeout(timeout);
    }
  }, [pathname, isInitialLoad]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }} // Faster exit
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-neutral-950"
          style={{ 
            pointerEvents: isLoading ? 'auto' : 'none',
            willChange: 'opacity'
          }}
        >
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === 0
                    ? 'bg-red-500'
                    : index === 1
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
                }`}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 0.5, // Faster animation
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.08,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}