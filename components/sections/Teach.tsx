'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const teachingCategories = [
  {
    title: 'Programming Languages',
    items: ['Java', 'Python', 'C', 'C++', 'JavaScript'],
    color: 'green',
  },
  {
    title: '3D and Game Development',
    items: ['Blender', 'Unity'],
    color: 'blue',
  },
  {
    title: 'Web Development',
    items: ['MERN Stack', 'Next.js', 'React Native', 'Expo', 'Docker', 'Kubernetes'],
    color: 'purple',
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
    color: 'green',
  },
  {
    title: 'Frontend Tools',
    items: ['TailwindCSS', 'Vite', 'Svelte'],
    color: 'blue',
  },
];

const colorClasses = {
  green: {
    border: 'border-accent-green/30 hover:border-accent-green',
    bg: 'hover:bg-accent-green/10',
    text: 'text-accent-green',
    glow: 'glow-green',
  },
  blue: {
    border: 'border-accent-blue/30 hover:border-accent-blue',
    bg: 'hover:bg-accent-blue/10',
    text: 'text-accent-blue',
    glow: 'glow-blue',
  },
  purple: {
    border: 'border-accent-purple/30 hover:border-accent-purple',
    bg: 'hover:bg-accent-purple/10',
    text: 'text-accent-purple',
    glow: 'glow-purple',
  },
};

export default function Teach() {
  return (
    <SectionWrapper id="teach">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Teaching Categories */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 order-2 md:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            What I <span className="text-accent-green">Teach</span>
          </h2>

          <div className="space-y-6">
            {teachingCategories.map((category, idx) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="space-y-3"
                >
                  <h3 className={`text-xl font-semibold ${colors.text}`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-4 py-2 glass border-2 ${colors.border} ${colors.bg} rounded-lg transition-all cursor-default`}
                      >
                        <span className="text-text-primary font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side - Large Developer Symbol */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/30 to-accent-purple/30 rounded-full blur-3xl"></div>

            {/* Large code symbol */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative glass rounded-3xl p-12 md:p-16 lg:p-20 glow-green"
            >
              <div className="text-9xl md:text-[12rem] lg:text-[16rem] font-mono font-bold text-accent-green">
                &lt;/&gt;
              </div>
            </motion.div>

            {/* Floating binary */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-accent-blue/50 font-mono text-sm"
            >
              01010101
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 text-accent-purple/50 font-mono text-sm"
            >
              11001100
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
