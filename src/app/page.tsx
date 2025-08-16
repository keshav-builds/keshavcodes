import Container from '@/components/common/Container';
import Blog from '@/components/landing/Blog';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import Cheatsheets from '@/components/landing/Cheatsheets';
import Icon from '@/components/landing/icon-cloud';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Work />
      {/* <Experience />  will add this later on*/}
      <Blog />
      <Icon />
      <Cheatsheets />
    </Container>
  );
}
