'use client';

import { useEffect } from 'react';

// Extend Window interface for Tawk properties
declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkChat() {
  useEffect(() => {
    // Initialize Tawk_API
    const Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();
    window.Tawk_API = Tawk_API;
    window.Tawk_LoadStart = Tawk_LoadStart;

    // Load Tawk.to script
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/694bbdb19914c8197bb92e8e/1jd7tpvrb';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode?.insertBefore(s1, s0);
  }, []);

  return null;
}
