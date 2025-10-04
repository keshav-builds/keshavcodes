"use client";
import { AuroraText } from '@/components/ui/aura-text';
import { Highlighter } from '@/components/ui/highlight';
import { heroConfig, socialLinks } from '@/config/Hero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';
import { toast } from "sonner";

import Container from '../common/Container';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, avatar, buttons } = heroConfig;

  // Function to copy email
const copyToClipboard = async () => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText("developerkeshav200@gmail.com");
      toast.success("Email copied to clipboard!");
    } else {
      //fallback
      const textArea = document.createElement("textarea");
      textArea.value = "developerkeshav200@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      toast.success("Email copied to clipboard!");
    }
  } catch {
    toast.error("Failed to copy email");
  }
};

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Image */}
      <Image
        src={avatar}
        alt="hero"
        width={150}
        height={180}
        className="size-25 rounded-full bg-[#3A83F5] "
      />

      {/* Text Area */}
      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m <AuroraText>{name}</AuroraText>{' '}
          <span className="inline-block animate-wave origin-bottom-right">
            👋🏻
          </span>
        </h1>
        {/*  Description */}
        <div className="mt-1 ">

          <p className="mt-2 text-base md:text-lg leading-relaxed   max-w-3xl mx-auto ">
            I&apos;m a{' '}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              Full Stack Web Developer
            </span>{' '}
            passionate about crafting responsive, user-friendly web applications
            with the MERN stack and beyond. Skilled in React, JavaScript, UI/UX
            design.{' '}
            <Highlighter action="underline" color="#60A5FA">
              Open to all tech opportunities
            </Highlighter>
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as 'outline' | 'default'}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              {link.name === 'Email' ? (
                <button
                  onClick={() => copyToClipboard()}
                  className="text-secondary flex items-center gap-2 cursor-pointer"
                >
                  <span className="size-7">{link.icon}</span>
                </button>
              ) : (
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary flex items-center gap-2"
                >
                  <span className="size-7">{link.icon}</span>
                </Link>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}
