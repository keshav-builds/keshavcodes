'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure loader is visible first
    const timer = setTimeout(() => setIsReady(true), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isReady ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}