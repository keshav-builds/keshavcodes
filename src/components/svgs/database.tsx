import React from 'react';

export default function Database({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1.5em"
      height="1.5em"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 5v14c0 1.657-4.03 3-9 3s-9-1.343-9-3V5" />
      <path d="M3 19c0 1.657 4.03 3 9 3s9-1.343 9-3" />
      <path d="M3 9c0 1.657 4.03 3 9 3s9-1.343 9-3" />
      <path d="M3 14c0 1.657 4.03 3 9 3s9-1.343 9-3" />
    </svg>
  );
}
