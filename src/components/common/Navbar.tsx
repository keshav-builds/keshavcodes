'use client';

import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

import Container from './Container';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Container
      className="sticky top-0 z-20 rounded-md py-3 backdrop-blur-md bg-white/80 dark:bg-black/80"
    >
      <div className="flex items-center justify-between px-4 sm:px-6">
        {/* Left: Logo */}
        <div className="flex-shrink-0 ">
          <Link href="/">
            <Image src="/assets/letter.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Center: Nav links */}
        <nav className="flex-1 flex justify-center">
          <div className="flex  bg-white/80 dark:bg-gray-900/80 rounded-full border border-neutral-300 dark:border-gray-700 shadow-md px-4 sm:px-8 py-2 gap-4 sm:gap-6">
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
