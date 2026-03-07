'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '../SectionWrapper';
import profileImage from '../images/mass photo.png';

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
            <div className="relative glass rounded-full p-2 glow-blue">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent-green/20 to-accent-blue/20 rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src={profileImage}
                  alt="Tanveer - Developer and Educator"
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
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
