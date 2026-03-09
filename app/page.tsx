'use client';

import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Teach from '@/components/sections/Teach';
import WhyChooseMe from '@/components/sections/WhyChooseMe';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <main className="relative">
      {/* All Sections */}
      <Home />
      <About />
      <Teach />
      <WhyChooseMe />
      <Projects />
      <Contact />
    </main>
  );
}
