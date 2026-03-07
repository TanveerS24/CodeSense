'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

export default function Home() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Learn Programming{' '}
            <span className="text-accent-green">the Right Way</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-accent-blue font-semibold"
          >
            Master programming, problem solving, and real world development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-3 text-text-secondary text-base md:text-lg"
          >
            <p>• Learn how to think like a developer.</p>
            <p>
              • Understand algorithms, build projects, and prepare for hackathons and real
              software engineering challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34, 197, 94, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-accent-green text-primary font-semibold rounded-lg shadow-lg hover:shadow-accent-green/50 transition-all"
            >
              Start Learning
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(56, 189, 248, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-transparent border-2 border-accent-blue text-accent-blue font-semibold rounded-lg hover:bg-accent-blue/10 transition-all"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Illustration with Floating Code Symbols */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden md:flex items-center justify-center h-96 lg:h-[500px]"
        >
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-accent-blue/20 rounded-full blur-3xl"></div>

          {/* Central Developer Icon */}
          <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 glass rounded-2xl flex items-center justify-center glow-green">
            <div className="text-center space-y-4">
              <div className="text-8xl lg:text-9xl font-mono font-bold text-accent-green">
                &lt;/&gt;
              </div>
              <div className="text-xl lg:text-2xl font-semibold text-text-primary">
                Developer
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </SectionWrapper>
  );
}
