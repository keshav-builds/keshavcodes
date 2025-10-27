'use client';

import { AuroraText } from '@/components/ui/aura-text';
import { heroConfig, socialLinks } from '@/config/Hero';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

import Container from '../common/Container';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
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
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="w-full max-w-sm lg:max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm shadow-lg overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-foreground/5 border-b border-foreground/10">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-muted-foreground">terminal</span>
        </div>

        <div className="p-3 font-mono text-xs space-y-1 min-h-[140px]">
          {displayedLines.filter(Boolean).map((line, i) => {
            const isCommand = line?.startsWith('$') || false;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={
                  isCommand ? 'text-blue-500' : 'text-muted-foreground pl-2'
                }
              >
                {line}
              </motion.div>
            );
          })}
          {displayedLines.length < 7 && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="inline-block w-1 h-3 bg-blue-500"
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
    <Container className="mx-auto max-w-6xl py-4 sm:py-6 md:py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          className="flex flex-col space-y-4 sm:space-y-5 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-[44px] md:text-6xl font-semibold leading-tight whitespace-nowrap">
              Hi, I&apos;m <AuroraText>{name}</AuroraText>{' '}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                👋🏻
              </motion.span>
            </h1>

            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
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

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
            Full-stack developer building{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              impactful solutions
            </span>{' '}
            and continuously learning new technologies
          </p>

          <motion.div
            className="grid grid-cols-2 sm:flex gap-3 sm:gap-4 lg:justify-start justify-center pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={buttons[0].href}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-lg border-2 border-foreground/20 hover:border-foreground/40 bg-background/50 backdrop-blur-sm font-medium transition-all duration-300 text-sm sm:text-base min-h-[44px] w-full"
              >
                <span className="[&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 flex items-center">
                  <CV />
                </span>
                <span>Resume</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={buttons[1].href}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-lg bg-blue-600/90 hover:bg-blue-600 dark:bg-blue-500/90 dark:hover:bg-blue-500 text-white font-medium sm:font-semibold shadow-md shadow-blue-500/10 sm:shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base min-h-[44px] w-full"
              >
                <span className="[&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 flex items-center">
                  <Chat />
                </span>
                <span>Contact</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-5 sm:gap-6 lg:justify-start justify-center pt-2"
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
                      className="text-muted-foreground hover:text-foreground transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.name}
                    >
                      <span className="size-6 sm:size-7">{link.icon}</span>
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
                        className="text-muted-foreground hover:text-foreground transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label={link.name}
                      >
                        <span className="size-6 sm:size-7">{link.icon}</span>
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

        <div className="hidden lg:flex items-center justify-end order-1 lg:order-2">
          <TerminalWindow />
        </div>
      </div>

      <div className="lg:hidden mt-8">
        <TerminalWindow />
      </div>
    </Container>
  );
}
