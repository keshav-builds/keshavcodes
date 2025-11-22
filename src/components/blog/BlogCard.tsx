'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { BlogPostPreview } from '@/types/blog';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useState, useRef } from 'react';
import ArrowRight from '../svgs/ArrowRight';
import Calender from '../svgs/Calender';

interface BlogCardProps {
  post: BlogPostPreview;
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;
  const { title, description, image, tags, date } = frontmatter;
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, show: false });

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true,
    });
  };

  const visibleTags = tags.slice(0, 3);
  const remainingCount = tags.length - 3;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight({ ...spotlight, show: false })}
      className="group relative h-full"
    >
      {/* Border glow on hover */}
      <div className="absolute -inset-[1px] rounded-[20px] bg-gradient-to-b from-neutral-300 via-neutral-200/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 dark:from-neutral-600 dark:via-neutral-700/30" />

      <Card className="relative h-full overflow-hidden rounded-[20px] border-2 border-neutral-300 bg-white/90 shadow-md backdrop-blur-xl transition-all duration-700 group-hover:border-neutral-400 group-hover:shadow-2xl group-hover:shadow-neutral-900/10 dark:border-neutral-700 dark:bg-neutral-950/90 dark:group-hover:border-neutral-600 dark:group-hover:shadow-neutral-900/30 py-0 gap-0">
        
        {/* Spotlight effect */}
        {spotlight.show && (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(500px circle at ${spotlight.x}px ${spotlight.y}px, rgba(59, 130, 246, 0.05), transparent 70%)`,
            }}
          />
        )}

        {/* Image Section */}
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden rounded-t-[20px] bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </div>
        </CardHeader>

        {/* Clickable content area - Single Link wrapper */}
        <Link 
          href={`/blog/${slug}`}
          prefetch={true}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
        >
          <CardContent className="space-y-4 p-6">
            <h3 className="line-clamp-2 text-xl font-semibold leading-tight text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500">
              {title}
            </h3>

            <p className="line-clamp-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              {description}
            </p>

            {/* Tags */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {visibleTags.map((tag) => (
                  <div
                    key={tag}
                    className="group/tag flex items-center rounded-lg border border-neutral-200/60 bg-neutral-50/50 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-300/60 hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-500/10 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:hover:border-blue-700/40 dark:hover:bg-blue-950/30"
                  >
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      {tag}
                    </span>
                  </div>
                ))}

                {remainingCount > 0 && (
                  <div className="flex items-center justify-center rounded-lg border border-neutral-200/60 bg-neutral-50/50 px-3 py-1.5 backdrop-blur-sm dark:border-neutral-800/60 dark:bg-neutral-900/30">
                    <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                      +{remainingCount} more
                    </span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="flex items-center justify-between gap-4 border-t border-neutral-200/60 px-6 py-4 dark:border-neutral-800/40">
            <time
              className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
              dateTime={date}
            >
              <Calender className="h-4 w-4" />
              {formattedDate}
            </time>

            <div className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
              <span>Read More</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
}
