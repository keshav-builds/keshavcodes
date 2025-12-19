import React from 'react';
import Link from 'next/link';
import { Github, Mail } from 'lucide-react';
import Container from './Container';
import { footerConfig } from '@/config/Footer';

// X (Twitter) SVG Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <Container className="py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Links */}
          {footerConfig.socials && (
            <div className="flex items-center gap-4">
              {footerConfig.socials.x && (
                <Link
                  href={footerConfig.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon className="size-5" />
                </Link>
              )}
              {footerConfig.socials.github && (
                <Link
                  href={footerConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="size-5" />
                </Link>
              )}
              {footerConfig.socials.email && (
                <Link
                  href={`mailto:${footerConfig.socials.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="size-5" />
                </Link>
              )}
            </div>
          )}

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            {footerConfig.text} <span className="font-semibold">{footerConfig.developer}</span>
            <br />
            &copy; {new Date().getFullYear()} {footerConfig.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
