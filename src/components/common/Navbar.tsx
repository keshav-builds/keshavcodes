'use client';  // required for client hooks

import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';

import Container from './Container';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Container className="sticky top-0 z-20 rounded-md py-4">
      <div className="flex items-center justify-between px-4 sm:px-6">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
        </div>

        {/* Center: Nav links */}
        <nav className="flex-1 flex justify-center">
          <div className="flex bg-neutral-100 dark:bg-black/90 rounded-full border border-neutral-300 dark:border-neutral-700 shadow-md px-4 sm:px-8 py-2 gap-4 sm:gap-6">
            {navbarConfig.navItems.map((item) => {
              // Check if current item.href is active:
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-all duration-300 ease-in-out hover:underline hover:decoration-blue-500 hover:underline-offset-4 
                    ${isActive ? 'underline decoration-blue-400 underline-offset-4 text-blue-500' : 'text-inherit'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right: Theme Switch */}
        <div className="flex-shrink-0 flex items-center gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </Container>
  );
}
