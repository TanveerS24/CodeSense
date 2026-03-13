'use client';

import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaMapMarkedAlt, FaNetworkWired, FaSeedling, FaBuilding, FaMagic, FaBrain, FaFileMedical, FaCloudSun, FaGithub } from 'react-icons/fa';
import SectionWrapper from '../SectionWrapper';

const completedProjects = [
  {
    icon: FaCloudUploadAlt,
    name: 'Sky-Port',
    description: 'Cross Platform file sharing and version control system',
    color: 'green',
  },
  {
    icon: FaMapMarkedAlt,
    name: 'Sikkim-Tourism',
    description: 'Developed at SIH-25 to boost tourism in Sikkim with personalized recommendations and virtual tours',
    color: 'blue',
  },
  {
    icon: FaNetworkWired,
    name: 'Net Pulse',
    description: 'Network monitoring and predictive anomaly detection system with auto-scaling',
    color: 'purple',
  },
  {
    icon: FaSeedling,
    name: 'Thrive',
    description: 'A multi-purpose AI supported progress tracking and habit building platform',
    color: 'green',
  },
  {
    icon: FaBuilding,
    name: 'Inventory Manager',
    description: 'A system for a UK-based housing company to manage owners, tenants, and rental agreements',
    color: 'blue',
  },
  {
    icon: FaMagic,
    name: "Genie Sketch",
    description: 'AI-powered Image generation and sharing platform',
    color: 'purple',
  }
];

const developmentProjects = [
  {
    icon: FaBrain,
    name: 'Skill-Nest',
    description: 'DSA learning platform using Spring Boot and Kubernetes for scalable load balancing',
    color: 'purple',
  },
  {
    icon: FaFileMedical,
    name: 'Policy Lens',
    description: 'Rag based Healthcare policy analysis and recommendation system',
    color: 'blue',
  },
  {
    icon: FaCloudSun,
    name: 'Micro Weather Station',
    description: 'IOT based real-time weather monitoring system with data visualization',
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
      className={`glass border ${colors.border} rounded-xl p-5 sm:p-6 transition-all ${colors.glow} cursor-default h-full bg-gradient-to-br ${colors.gradient}`}
    >
      <div className="space-y-4">
        <div className={`text-3xl sm:text-4xl ${colors.icon}`}>
          <Icon />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-text-primary">{project.name}</h3>
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
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-accent-purple">Projects</span>
            </h2>
            <motion.a
              href="https://github.com/TanveerS24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/20 border border-accent-purple/50 rounded-lg text-accent-purple hover:bg-accent-purple/30 hover:glow-purple transition-colors text-sm sm:text-base font-semibold"
            >
              <FaGithub />
              GitHub
            </motion.a>
          </div>
          <p className="text-text-secondary text-base md:text-lg">Real-world applications and solutions</p>
        </motion.div>

        {/* Completed Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project, idx) => (
            <div key={idx} className={idx >= 4 ? 'hidden md:block' : ''}>
              <ProjectCard project={project} index={idx} />
            </div>
          ))}
        </div>

        {/* Currently Under Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block space-y-8 pt-8"
        >
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-blue">
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
        <div className="flex justify-center gap-4 sm:gap-6 pt-4 sm:pt-8">
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
