'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaCode, FaHome, FaChartBar, FaBrain, FaTint, FaGraduationCap } from 'react-icons/fa';
import SectionWrapper from '../SectionWrapper';

const completedProjects = [
  {
    icon: FaRobot,
    name: 'AI Sentiment Analysis Tool',
    description: 'Real-time sentiment analysis with speech output and LED indicators.',
    color: 'green',
  },
  {
    icon: FaChartLine,
    name: 'Smart Retail Analytics Dashboard',
    description: 'Cloud-powered analytics dashboard for sales and business insights.',
    color: 'blue',
  },
  {
    icon: FaCode,
    name: 'Pushdown Automaton Simulator',
    description: 'Web-based simulator to visualize pushdown automata and balanced smiley checking.',
    color: 'purple',
  },
  {
    icon: FaHome,
    name: 'Property Record Manager',
    description: 'GUI-based system for managing property records with database integration.',
    color: 'green',
  },
  {
    icon: FaChartBar,
    name: 'Stock Market Prediction',
    description: 'Machine learning model using LSTM and sentiment analysis.',
    color: 'blue',
  },
];

const developmentProjects = [
  {
    icon: FaBrain,
    name: 'AI Programming Tutor',
    description: 'Interactive AI-powered learning platform for programming education.',
    color: 'purple',
  },
  {
    icon: FaTint,
    name: 'Smart Water Management System',
    description: 'IoT-based system for efficient water resource management.',
    color: 'blue',
  },
  {
    icon: FaGraduationCap,
    name: 'Developer Learning Platform',
    description: 'Comprehensive platform for learning software development.',
    color: 'green',
  },
];

const colorClasses = {
  green: {
    icon: 'text-accent-green',
    glow: 'hover:glow-green',
    border: 'border-accent-green/30',
    gradient: 'from-accent-green/10 to-transparent',
  },
  blue: {
    icon: 'text-accent-blue',
    glow: 'hover:glow-blue',
    border: 'border-accent-blue/30',
    gradient: 'from-accent-blue/10 to-transparent',
  },
  purple: {
    icon: 'text-accent-purple',
    glow: 'hover:glow-purple',
    border: 'border-accent-purple/30',
    gradient: 'from-accent-purple/10 to-transparent',
  },
};

interface ProjectCardProps {
  project: {
    icon: any;
    name: string;
    description: string;
    color: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const colors = colorClasses[project.color as keyof typeof colorClasses];
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className={`glass border ${colors.border} rounded-xl p-6 transition-all ${colors.glow} cursor-default h-full bg-gradient-to-br ${colors.gradient}`}
    >
      <div className="space-y-4">
        <div className={`text-4xl ${colors.icon}`}>
          <Icon />
        </div>
        <h3 className="text-xl font-bold text-text-primary">{project.name}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-accent-purple">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg">Real-world applications and solutions</p>
        </motion.div>

        {/* Completed Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        {/* Currently Under Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 pt-8"
        >
          <div className="text-center space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-accent-blue">
              Currently Under Development
            </h3>
            <div className="flex items-center justify-center gap-2 text-accent-green">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-accent-green rounded-full"
              />
              <span className="text-sm font-mono">In Progress</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-6 pt-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="text-accent-green/30 font-mono text-2xl"
          >
            {'{ }'}
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="text-accent-blue/30 font-mono text-2xl"
          >
            {'</>'}
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="text-accent-purple/30 font-mono text-2xl"
          >
            {'( )'}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
