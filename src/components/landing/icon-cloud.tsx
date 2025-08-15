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
  "jest",
  "docker",
  "perplexity",
  "git",
  "jira",
  "github",
  "gitlab",
  "figma",
];

export default function Icon() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <Container className="mt-15">
      <SectionHeading subHeading="" heading="Toolkit" />
      
      {/* Icon Cloud */}
      <div className="relative  flex w-full items-center justify-center overflow-hidden py-2">
        <IconCloud images={images} />
      </div>
    </Container>
  );
}
