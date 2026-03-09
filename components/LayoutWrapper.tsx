'use client';

import Navbar from './Navbar';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
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
    </>
  );
}
