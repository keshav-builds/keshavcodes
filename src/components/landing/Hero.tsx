'use client';

import { AuroraText } from '@/components/ui/aura-text';
import { heroConfig, socialLinks } from '@/config/Hero';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

import Container from '../common/Container';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const TerminalWindow = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      '$ whoami',
      '> Full-stack Developer',
      '$ skills --list',
      '> React • Next.js • TypeScript',
      '> Node.js • MongoDB',
      '$ status',
      '> Available ✓',
    ];

    let index = 0;
    const timer = setInterval(() => {
      if (index < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="w-full max-w-sm lg:max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="rounded-xl border-2 border-neutral-300 bg-white/90 backdrop-blur-xl shadow-md overflow-hidden dark:border-neutral-700 dark:bg-neutral-950/90">
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100/80 border-b-2 border-neutral-300 dark:bg-neutral-900/80 dark:border-neutral-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
            terminal
          </span>
        </div>

        <div className="p-4 font-mono text-sm space-y-1 h-[180px]">
          {displayedLines.filter(Boolean).map((line, i) => {
            const isCommand = line?.startsWith('$') || false;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={
                  isCommand
                    ? 'text-blue-500 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 pl-2'
                }
              >
                {line}
              </motion.div>
            );
          })}
          {displayedLines.length < 7 && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block w-2 h-4 bg-blue-500"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const { name, buttons } = heroConfig;

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
    <Container className="mx-auto max-w-6xl py-8 sm:py-6 md:py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start items-center">
        <motion.div
          className="flex flex-col space-y-5 sm:space-y-5 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 sm:space-y-4">
            <h1 className="text-[44px] sm:text-[44px] md:text-6xl font-semibold leading-tight sm:whitespace-nowrap">
              Hi, I&apos;m{' '}
              <span className="inline-block">
                <AuroraText>{name}</AuroraText>{' '}
                <motion.span
                  className="inline-block scale-85"
                  animate={{ rotate: [0, 14, -8, 14, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  👋🏻
                </motion.span>
              </span>
            </h1>

            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-3 sm:py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                className="relative flex h-2 w-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </motion.span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Available for opportunities
              </span>
            </motion.div>
          </div>

          <p className="text-lg md:text-xl tracking-[-0.01em] text-muted-foreground">
            Building modern web applications from design to deployment,
            <br className="hidden md:block" /> dedicated to quality and
            exceptional user experience.
          </p>

          {/* CTA Buttons*/}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:justify-start justify-center pt-1 sm:pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:flex-1 order-1 sm:order-2"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-5 sm:py-3 md:px-7 md:py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 w-full overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 flex-shrink-0 relative z-10"
                  style={{
                    transformBox: 'fill-box',
                    transformOrigin: 'center',
                    transform: 'rotate(-55deg)',
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
                <span className="text-[15px] leading-none relative z-10">
                  Message
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:flex-1 order-2 sm:order-1"
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-5 sm:py-3 md:px-7 md:py-3.5 rounded-lg border-2 border-foreground/20 hover:border-foreground/40 bg-background/50 backdrop-blur-sm font-semibold hover:bg-foreground/5 transition-all duration-300 w-full overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out bg-gradient-to-r from-transparent via-foreground/[0.08] to-transparent" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 flex-shrink-0 relative z-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <span className="text-[15px] leading-none relative z-10">
                  Resume
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex lg:justify-start justify-center pt-3 sm:pt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="https://cal.com/keshav-codes/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3 py-2 sm:px-2 sm:py-0 rounded-lg text-base sm:text-md text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-foreground/5 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
              <span>Schedule a Call</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-6 sm:gap-5 md:gap-6 lg:justify-start justify-center pt-4 sm:pt-2 pb-2 sm:pb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((link) => (
              <Tooltip key={link.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  {link.name === 'Email' ? (
                    <motion.button
                      onClick={copyToClipboard}
                      className="text-muted-foreground hover:text-foreground transition-all duration-300 min-w-[48px] min-h-[48px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                    >
                      <span className="size-7 sm:size-6 md:size-7">
                        {link.icon}
                      </span>
                    </motion.button>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-all duration-300 min-w-[48px] min-h-[48px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center"
                        aria-label={link.name}
                      >
                        <span className="size-7 sm:size-6 md:size-7">
                          {link.icon}
                        </span>
                      </Link>
                    </motion.div>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </motion.div>

        <div className="hidden lg:flex items-center justify-end order-1 lg:order-2 pt-22 pl-1 ">
          <TerminalWindow />
        </div>
      </div>
    </Container>
  );
}
