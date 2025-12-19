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
      const timeout = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 600); 
      return () => clearTimeout(timeout);
    }
  }, [isInitialLoad]);

  // Handle route changes (after initial load)
  useEffect(() => {
    if (!isInitialLoad) {
      setIsLoading(true);
      const timeout = setTimeout(() => setIsLoading(false), 300); 
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
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/98 backdrop-blur-lg dark:bg-neutral-950/98"
        >
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`h-4 w-4 rounded-full ${
                  index === 0
                    ? 'bg-red-500'
                    : index === 1
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
                }`}
                animate={{
                  y: [0, -16, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
