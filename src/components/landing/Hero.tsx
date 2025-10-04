'use client';

import { AuroraText } from '@/components/ui/aura-text';
import { Highlighter } from '@/components/ui/highlight';
import { heroConfig, socialLinks } from '@/config/Hero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';

import Container from '../common/Container';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function Hero() {
  const { name, avatar, buttons } = heroConfig;

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText('developerkeshav200@gmail.com');
        toast.success('Email copied to clipboard!');
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = 'developerkeshav200@gmail.com';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        toast.success('Email copied to clipboard!');
      }
    } catch {
      toast.error('Failed to copy email');
    }
  };

  return (
    <Container className="mx-auto max-w-4xl py-4 sm:py-6 md:py-8">
      <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5 md:space-y-6">
        {/* Image with glow effect */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <Image
            src={avatar}
            alt="Keshav - Full Stack Developer"
            width={140}
            height={140}
            className="relative size-28 sm:size-32 md:size-36 rounded-full bg-[#3A83F5] ring-2 ring-blue-500/30 dark:ring-blue-400/20"
            priority
          />
        </div>

        {/* Text Area */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Hi, I&apos;m <AuroraText>{name}</AuroraText>{' '}
            <span className="inline-block animate-wave origin-bottom-right">
              👋🏻
            </span>
          </h1>

          {/* Description  */}
          <div className="space-y-2 sm:space-y-3">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto px-4">
              I&apos;m a{' '}
              <span className="relative inline-block font-semibold">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                  Full Stack Web Developer
                </span>
              </span>{' '}
              passionate about crafting responsive, user-friendly web
              applications with the MERN stack and beyond.
            </p>

            {/*  animated underline */}
            <div className="flex justify-center">
              <span className="relative inline-block text-base sm:text-lg md:text-xl font-medium group cursor-default px-1">
                <span className="relative z-10 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  <Highlighter action="underline" color="#60A5FA">
                    Open to all tech opportunities
                  </Highlighter>
                </span>
                {/* Animated gradient underline */}
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 dark:from-blue-300 dark:via-blue-500 dark:to-blue-300"
                  style={{
                    backgroundSize: '200% auto',
                    animation: 'gradient 3s linear infinite',
                  }}
                ></span>
                {/* Glow effect */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 blur-sm opacity-50"></span>
              </span>
            </div>
          </div>
        </div>

        {/* Balanced Buttons with shimmer effect */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 pt-1">
          {/* Resume Button - Outlined with shimmer */}
          <Link
            href={buttons[0].href}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-lg border-2 border-foreground/20 hover:border-foreground/40 bg-background/50 backdrop-blur-sm font-medium overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 min-h-[48px]"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 w-full h-full">
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-foreground/10 to-transparent transition-transform duration-1000 ease-out"></span>
            </span>

            <span className="relative z-10 flex items-center gap-2.5 text-sm sm:text-base">
              <span className="transition-transform group-hover:scale-110 duration-300">
                <CV />
              </span>
              <span>View Resume</span>
            </span>
          </Link>

          {/* Primary CTA - Subtle gradient with shimmer */}
          <Link
            href={buttons[1].href}
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:px-8 sm:py-3.5 overflow-hidden rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95 min-h-[48px]"
          >
            {/* Subtle gradient overlay on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

            {/* Shimmer effect */}
            <span className="absolute inset-0 w-full h-full">
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out"></span>
            </span>

            <span className="relative z-10 flex items-center gap-2.5 text-sm sm:text-base">
              <span className="transition-transform group-hover:scale-110 duration-300">
                <Chat />
              </span>
              <span>Let&apos;s Talk</span>
            </span>
          </Link>
        </div>

        {/* Social Links  */}
        <div className="flex gap-5 sm:gap-6 pt-1">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                {link.name === 'Email' ? (
                  <button
                    onClick={() => copyToClipboard()}
                    className="relative text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-2 cursor-pointer group min-w-[44px] min-h-[44px] justify-center"
                    aria-label={link.name}
                  >
                    <span className="size-6 sm:size-7 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                      {link.icon}
                    </span>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-2 group min-w-[44px] min-h-[44px] justify-center"
                    aria-label={link.name}
                  >
                    <span className="size-6 sm:size-7 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                      {link.icon}
                    </span>
                  </Link>
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </Container>
  );
}
