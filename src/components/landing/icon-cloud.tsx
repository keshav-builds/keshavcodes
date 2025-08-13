import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { IconCloud } from '@/components/ui/icon-cloudUI';

const slugs = [
  "typescript",
  "javascript",
  "c++",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export default function Icon() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <Container className="mt-5 ">
      <SectionHeading subHeading="" heading="Toolkit" />
      
      {/* Icon Cloud */}
      <div className="mt-0 relative flex w-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </Container>
  );
}
