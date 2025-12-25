'use client';

import { useEffect } from 'react';

export default function ChatwayChat() {
  useEffect(() => {
    // Load Chatway script
    const script = document.createElement("script");
    script.id = "chatway";
    script.async = true;
    script.src = "https://cdn.chatway.app/widget.js?id=1ImiXJqDCMiV";
    document.body.appendChild(script);

    // Cleanup function to remove script on unmount
    return () => {
      const existingScript = document.getElementById("chatway");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
