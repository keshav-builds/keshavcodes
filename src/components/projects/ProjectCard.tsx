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
import React, { useState, useRef } from 'react';
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
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden rounded-t-[20px] bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
            <Image
              className="h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03]"
              src={project.image}
              alt={project.title}
              width={1920}
              height={1080}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Video play button */}
            {project.video && (
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100"
                  >
                    <div className="group/play relative">
                      <div 
                        className="absolute inset-0 animate-ping rounded-full bg-white/30 dark:bg-white/20" 
                        style={{ animationDuration: '2s' }} 
                      />
                      <div 
                        className="absolute inset-0 animate-ping rounded-full bg-white/20 dark:bg-white/10" 
                        style={{ animationDuration: '3s', animationDelay: '1s' }} 
                      />
                      
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/95 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 group-hover/play:scale-110 group-hover/play:border-white group-hover/play:bg-white group-hover/play:shadow-black/60 dark:border-white/30 dark:bg-neutral-900/95 dark:group-hover/play:border-white/50 dark:group-hover/play:bg-neutral-900">
                        <PlayCircle className="h-9 w-9 text-neutral-900 transition-transform duration-300 group-hover/play:scale-110 dark:text-white" />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl border-0 bg-black/95 p-0 backdrop-blur-2xl">
                  <video
                    className="aspect-video w-full rounded-xl"
                    src={project.video}
                    autoPlay
                    loop
                    controls
                  />
                  <DialogTitle className="sr-only">{project.title}</DialogTitle>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </CardHeader>

        {/* Clickable content area */}
        <Link 
          href={project.projectDetailsPageSlug}
          prefetch={true}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
        >
          <CardContent className="space-y-4 p-6">
            {/* Title and action buttons */}
            <div className="flex items-center justify-between gap-4">
              <h3 className="flex-1 text-xl font-semibold leading-tight text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500">
                {project.title}
              </h3>

              <div 
                className="flex shrink-0 items-center gap-2.5" 
                onClick={(e) => e.stopPropagation()}
              >
                <Tooltip>
                  <TooltipTrigger
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    }}
                    className="group/btn relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-110 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                    <Website className="relative z-10 h-5 w-5" />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="font-medium">
                    Visit Live Site
                  </TooltipContent>
                </Tooltip>

                {project.github && (
                  <Tooltip>
                    <TooltipTrigger
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      }}
                      className="group/btn relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-neutral-300/40 bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-lg shadow-neutral-900/20 transition-all duration-300 hover:scale-110 hover:border-neutral-600/40 hover:shadow-xl hover:shadow-neutral-900/30 active:scale-95 dark:from-neutral-700 dark:to-neutral-800"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
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
            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Built With
              </h4>
              <div className="flex flex-wrap gap-2">
                {visibleTechs.map((tech, idx) => (
                  <div
                    key={idx}
                    className="group/tech flex items-center gap-1.5 rounded-lg border border-neutral-200/60 bg-neutral-50/50 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-300/60 hover:bg-blue-50/50 hover:shadow-md hover:shadow-blue-500/10 dark:border-neutral-800/60 dark:bg-neutral-900/30 dark:hover:border-blue-700/40 dark:hover:bg-blue-950/30"
                  >
                    <div className="h-4 w-4 transition-transform duration-300 group-hover/tech:scale-110 group-hover/tech:rotate-6">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      {tech.name}
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
          {project.details && (
            <CardFooter className="flex items-center justify-between gap-4 border-t border-neutral-200/60 px-6 py-4 dark:border-neutral-800/40">
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

              <div className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
                <span>View Details</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </CardFooter>
          )}
        </Link>
      </Card>
    </div>
  );
}
