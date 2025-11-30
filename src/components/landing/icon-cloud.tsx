import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { IconCloud } from '@/components/ui/icon-cloudUI';

const slugs = [
  "typescript",
  "javascript",
  "c++",
  "MongoDB",
  "react",
  "html5",
  "css",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "docker",
  "perplexity",
  "git",
  "github",
  "gitlab",
  "figma",
];

const workflowSteps = [
  {
    number: "01",
    title: "Design",
    description: "Wireframes & prototypes in Figma",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Develop",
    description: "Full-stack with React, Next.js, Node.js, Express & databases",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Test",
    description: "Quality assurance & testing",
    color: "from-green-500 to-emerald-500"
  },
  {
    number: "04",
    title: "Deploy",
    description: "CI/CD pipelines to production",
    color: "from-orange-500 to-red-500"
  }
];

export default function Icon() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <Container className="mt-15">
      <SectionHeading 
        subHeading="Development" 
        heading="Process" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8">
        
        {/*  Development Workflow */}
        <div className="space-y-6">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="relative pl-20 pb-6 border-l-2 border-border/30 last:border-l-0 last:pb-0"
            >
              {/* Circle Number Indicator */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-14 h-14 rounded-full 
                bg-background border-2 border-border/50 -translate-x-1/2">
                <span className={`text-lg font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*Icon Cloud - Hidden on Mobile */}
        <div className="hidden lg:flex relative items-center justify-center h-[500px]">
          <div className="w-full h-full flex items-center justify-center">
            <IconCloud images={images} />
          </div>
        </div>
      </div>
    </Container>
  );
}
