'use client';

import { motion } from 'framer-motion';
import { FaUserGraduate, FaTrophy, FaUsers, FaCode, FaBrain, FaUserTie } from 'react-icons/fa';
import SectionWrapper from '../SectionWrapper';

const reasons = [
  {
    icon: FaUserGraduate,
    title: 'Personalized One-on-One Mentoring',
    description: 'Get individualized attention and tailored learning paths.',
    color: 'green',
  },
  {
    icon: FaTrophy,
    title: 'Hackathon Preparation',
    description: 'Learn strategies and skills to excel in competitive coding.',
    color: 'purple',
  },
  {
    icon: FaUsers,
    title: 'We Provide Lifetime support',
    description: 'Join a community of learners and get help whenever you need it.',
    color: 'green',
  },
  {
    icon: FaCode,
    title: 'Project-Based Learning Approach',
    description: 'Build real-world applications while learning.',
    color: 'blue',
  },
  {
    icon: FaUserTie,
    title: 'Interview Preparation',
    description: 'Get guidance and practice to prepare for technical interviews and coding rounds.',
    color: 'purple',
  },
];

const colorClasses = {
  green: {
    icon: 'text-accent-green',
    glow: 'hover:glow-green',
    border: 'border-accent-green/20',
  },
  blue: {
    icon: 'text-accent-blue',
    glow: 'hover:glow-blue',
    border: 'border-accent-blue/20',
  },
  purple: {
    icon: 'text-accent-purple',
    glow: 'hover:glow-purple',
    border: 'border-accent-purple/20',
  },
};

export default function WhyChooseMe() {
  return (
    <SectionWrapper id="why" className="bg-secondary/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 order-2 md:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-accent-blue">Choose Me</span>
          </h2>

          <div className="grid gap-4">
            {reasons.map((reason, idx) => {
              const colors = colorClasses[reason.color as keyof typeof colorClasses];
              const Icon = reason.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`glass border ${colors.border} rounded-xl p-5 transition-all ${colors.glow} cursor-default`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-3xl ${colors.icon} flex-shrink-0 mt-1`}>
                      <Icon />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {reason.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-accent-green/30 rounded-full blur-3xl"></div>

            {/* Illustration container */}
            <div className="relative glass rounded-2xl p-8 md:p-12 glow-blue">
              <div className="space-y-6">
                {/* Mentor icon */}
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-accent-blue/20 to-accent-green/20 rounded-full flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-7xl md:text-8xl"
                    >
                      <FaUserGraduate className="text-accent-blue mx-auto" />
                    </motion.div>
                    <div className="text-xl md:text-2xl font-bold text-accent-green">
                      Mentorship
                    </div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="flex justify-around text-4xl">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    className="text-accent-green"
                  >
                    <FaTrophy />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="text-accent-blue"
                  >
                    <FaCode />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="text-accent-purple"
                  >
                    <FaBrain />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
