import { ArrowRight } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Git from '../svgs/git';        // Make sure you have a Git or Github icon component
import Database from '../svgs/database'; // And a Database/DB icon component
import { Card } from '../ui/card';

const setup = [
  {
    name: 'Git Essentials',
    description: 'A handpicked collection of practical Git commands you’ll need for daily coding',
    icon: <Git className="size-4" />,
    href: '/gears',
  },
  {
    name: 'SQL Essentials',
    description: 'Useful SQL queries and patterns',
    icon: <Database className="size-4" />,
    href: '/setup',
  },
];

export default function Setup() {
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="Quick " heading="Commands" />
      <div className="flex flex-col gap-4 mt-8">
        {setup.map((item) => (
          <Link className='group' href={item.href} key={item.name}>
            <Card className="px-4 py-2 flex flex-row items-center gap-4 justify-between">
              <div className="p-2 bg-muted rounded-md flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col w-full">
                <h3 className="text-base font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="size-4 hidden group-hover:block transition-all duration-300" />
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
