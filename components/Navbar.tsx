'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'What I Teach', href: '#teach', id: 'teach' },
  { name: 'Courses', href: '/course', isRoute: true, id: 'course' },
  { name: 'Why Choose Me', href: '#why', id: 'why' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Compute the active item ID for consistent animation
  const getActiveItemId = () => {
    if (pathname === '/course') {
      return 'course';
    }
    return activeSection;
  };

  const activeItemId = getActiveItemId();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only detect sections when on home page
      if (pathname !== '/') return;

      // Detect active section
      const sections = navItems.filter(item => !item.isRoute).map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Handle navigation from course page back to sections
  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        setActiveSection(sectionId);
      }
    }
  }, [pathname]);

  const scrollToSection = (href: string, isRoute?: boolean) => {
    // If it's a route link, navigate to it
    if (isRoute) {
      router.push(href);
      setIsMobileMenuOpen(false);
      return;
    }

    // If we're on the course page and clicking a section, navigate to home first
    if (pathname !== '/') {
      router.push(`/${href}`);
      setIsMobileMenuOpen(false);
      return;
    }

    // Otherwise, scroll to section on current page
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/')}
            className="text-xl md:text-2xl font-bold font-mono cursor-pointer"
          >
            <span className="text-accent-green">&lt;</span>
            <span className="text-text-primary">Tanveer</span>
            <span className="text-accent-green">/&gt;</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = item.id === activeItemId;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.isRoute)}
                  className="relative px-3 lg:px-4 py-2 text-sm lg:text-base text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-green"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary text-3xl"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => {
                const isActive = item.id === activeItemId;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href, item.isRoute)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-accent-green/20 text-accent-green'
                        : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
