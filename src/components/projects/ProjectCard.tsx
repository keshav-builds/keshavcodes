'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import ArrowRight from '../svgs/ArrowRight';
import Github from '../svgs/Github';
import PlayCircle from '../svgs/PlayCircle';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true,
    });
  };

  const visibleTechs = project.technologies.slice(0, 4);
  const remainingCount = project.technologies.length - 4;

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
        <CardHeader className="p-0 relative">
          <Link
            href={project.projectDetailsPageSlug}
            prefetch={true}
            className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
          >
            <div className="relative aspect-video overflow-hidden rounded-t-[20px] bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
              <Image
                className="h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03]"
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </Link>

         {/* Video play button */}
{project.video && (
  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
    <DialogTrigger asChild>
      <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <button className="group/button flex size-14 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
          <PlayCircle className="size-8 text-gray-900 cursor-pointer transition-transform duration-300 ease-out group-hover/button:scale-110" strokeWidth={2} />
        </button>
      </div>
    </DialogTrigger>
    <DialogContent className="max-w-5xl w-full p-6 border-0 bg-black/95 backdrop-blur-xl">
      <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
        <video
          className="h-full w-full object-cover"
          src={project.video}
          autoPlay
          loop
          controls
        />
      </div>
      <DialogTitle className="sr-only">{project.title}</DialogTitle>
    </DialogContent>
  </Dialog>
)}
        </CardHeader>

        <CardContent className="space-y-3 p-5">
          {/* Title and action buttons */}
          <div className="flex items-center justify-between gap-4">
            <Link
              href={project.projectDetailsPageSlug}
              prefetch={true}
              className="flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded"
            >
              <h3 className="text-xl font-semibold leading-tight text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500">
                {project.title}
              </h3>
            </Link>

            <div className="flex shrink-0 items-center gap-2.5">
              <Tooltip>
                <TooltipTrigger
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.link, '_blank', 'noopener,noreferrer');
                  }}
                  className="group/btn relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-110 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                  <Website className="relative z-10 h-5 w-5  cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent side="top" className="font-medium">
                  Visit Live Site
                </TooltipContent>
              </Tooltip>

              {project.github && (
                <Tooltip>
                  <TooltipTrigger
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(
                        project.github,
                        '_blank',
                        'noopener,noreferrer',
                      );
                    }}
                    className="group/btn relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-neutral-300/40 bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-lg shadow-neutral-900/20 transition-all duration-300 hover:scale-110 hover:border-neutral-600/40 hover:shadow-xl hover:shadow-neutral-900/30 active:scale-95 dark:from-neutral-700 dark:to-neutral-800"
                  >
                    <div className="  cursor-pointer absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                    <Github className="relative z-10 h-5 w-5" />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="font-medium">
                    View Source
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          {/* Description */}
          <Link
            href={project.projectDetailsPageSlug}
            prefetch={true}
            className="block focus:outline-none"
          >
            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </Link>

          {/* Tech Stack */}
          <Link
            href={project.projectDetailsPageSlug}
            prefetch={true}
            className="block focus:outline-none"
          >
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Built With
              </h4>
              <div className="flex flex-wrap gap-2">
                {visibleTechs.map((tech, idx) => (
                  <Tooltip key={idx}>
                    <TooltipTrigger asChild>
                      <div className="group/tech flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200/60 bg-neutral-50/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-300/60 hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-500/10 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:hover:border-blue-700/40 dark:hover:bg-blue-950/30">
                        <div className="h-5 w-5 transition-transform duration-300 group-hover/tech:rotate-6">
                          {tech.icon}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="font-medium">
                      {tech.name}
                    </TooltipContent>
                  </Tooltip>
                ))}

                {remainingCount > 0 && (
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200/60 bg-neutral-50/50 backdrop-blur-sm dark:border-neutral-800/60 dark:bg-neutral-900/30">
                    <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                      +{remainingCount}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </CardContent>

        {/* Footer */}
        {project.details && (
          <CardFooter className="flex items-center justify-between gap-4 border-t border-neutral-200/90 px-6 py-4 dark:border-neutral-800/90">
            <div
              className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold ${
                project.isWorking
                  ? 'bg-emerald-100/80 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400'
                  : 'bg-amber-100/80 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400'
              }`}
            >
              <span className="relative flex h-2 w-2">
                {project.isWorking && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                )}
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    project.isWorking ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
              </span>
              {project.isWorking ? 'Live' : 'In Development'}
            </div>

            <Link
              href={project.projectDetailsPageSlug}
              prefetch={true}
              className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
            >
              <span>View Details</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
