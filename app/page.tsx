'use client';

import Navbar from '@/components/Navbar';
import Home from '@/components/sections/Home';
import About from '@/components/sections/About';
import Teach from '@/components/sections/Teach';
import WhyChooseMe from '@/components/sections/WhyChooseMe';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <main className="relative">
      {/* Fixed Navbar */}
      <Navbar />

      {/* All Sections */}
      <Home />
      <About />
      <Teach />
      <WhyChooseMe />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-secondary/80 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-text-secondary text-sm text-center md:text-left">
              © 2026 Tanveer. All rights reserved.
            </div>
            <div className="text-text-secondary text-sm font-mono">
              <span className="text-accent-green">&lt;</span>
              Built with Next.js & TailwindCSS
              <span className="text-accent-green">/&gt;</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
