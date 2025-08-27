import { ArrowRight } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Git from '../svgs/git';
import Database from '../svgs/database';
import { Card } from '../ui/card';

const setup = [
  {
    name: 'Git Essentials',
    description: 'A handpicked collection of practical Git commands you’ll need for daily coding',
    icon: <Git className="size-5 text-orange-500" />, // Contrast color for Git
    iconBg: 'bg-orange-100 dark:bg-orange-900', // Light/dark background for icon
    href: '/git-sheet',
  },
  {
    name: 'SQL Essentials',
    description: 'Useful SQL queries and patterns',
    icon: <Database className="size-5 text-sky-600 dark:text-sky-400" />, // SQL-like color
    iconBg: 'bg-sky-100 dark:bg-sky-900', // Matching background for icon
    href: '/sql-sheet',
  },
];

export default function Cheatsheets() {
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="Quick " heading="Commands" />
      <div className="flex flex-col gap-6 mt-8">
        {setup.map((item) => (
          <Link
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 rounded-xl transition-shadow"
            href={item.href}
            key={item.name}
          >
            <Card
              className={`
                px-6 py-4 flex flex-row items-center gap-5 justify-between
                rounded-xl border border-border/70 shadow-md
               transition-colors
                hover:shadow-md hover:bg-muted/60 dark:hover:bg-muted/60
                cursor-pointer
              `}
            >
              <div className={`p-3 rounded-lg flex items-center justify-center ${item.iconBg}`}>
                {item.icon}
              </div>
              <div className="flex flex-col w-full min-w-0">
                <h3 className="text-base font-semibold leading-tight text-gray-900 dark:text-zinc-100">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="size-5 text-gray-300 dark:text-zinc-600 group-hover:text-primary group-hover:dark:text-primary transition-all duration-200 opacity-0 group-hover:opacity-100" />
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
