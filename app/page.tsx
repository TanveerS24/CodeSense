'use client';

import { Suspense } from 'react';
import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Teach from '@/components/sections/Teach';
import WhyChooseMe from '@/components/sections/WhyChooseMe';
import Projects from '@/components/sections/Projects';
import ContactSearchParamsWrapper from '@/components/sections/ContactSearchParamsWrapper';

export default function Page() {
  return (
    <main className="relative">
      {/* All Sections */}
      <Home />
      <About />
      <Teach />
      <WhyChooseMe />
      <Projects />
      <Suspense fallback={<div className="h-screen" />}>
        <ContactSearchParamsWrapper />
      </Suspense>
    </main>
  );
}
