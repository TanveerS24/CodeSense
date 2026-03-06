'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-secondary/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-accent-purple/30 rounded-2xl blur-2xl"></div>
            
            {/* Profile image container */}
            <div className="relative glass rounded-2xl p-2 glow-blue">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent-green/20 to-accent-blue/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full bg-gradient-to-br from-accent-green to-accent-blue flex items-center justify-center text-7xl md:text-8xl lg:text-9xl font-bold text-primary">
                    T
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-accent-green font-mono">
                    Tanveer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-accent-blue">Me</span>
          </h2>

          <div className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed">
            <p>
              Hi, I&apos;m <span className="text-accent-green font-semibold">Tanveer</span>.
            </p>

            <p>
              I&apos;m passionate about programming, building projects, and helping students
              understand how to solve problems logically.
            </p>

            <p>
              Instead of memorizing syntax, I focus on{' '}
              <span className="text-accent-blue font-semibold">
                teaching how to think like a developer
              </span>
              .
            </p>

            <p>
              My goal is to help students build real projects, improve problem solving skills,
              and gain confidence in programming.
            </p>
          </div>

          {/* Decorative code elements */}
          <div className="flex gap-4 pt-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 glass rounded-lg text-accent-green font-mono text-xl"
            >
              {'{ }'}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 glass rounded-lg text-accent-blue font-mono text-xl"
            >
              {'</>'}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 glass rounded-lg text-accent-purple font-mono text-xl"
            >
              {'( )'}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
