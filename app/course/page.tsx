'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const courses = [
  {
    id: 1,
    title: 'Java Programming Mastery',
    description: 'Master Java from basics to advanced OOP concepts',
    color: 'green',
    topics: [
      'Core Java fundamentals and syntax',
      'Object-Oriented Programming principles',
      'Data structures and algorithms',
      'Exception handling and file I/O',
      'Collections framework',
      'Multithreading and concurrency',
    ],
  },
  {
    id: 2,
    title: 'Python for Beginners',
    description: 'Start your programming journey with Python',
    color: 'blue',
    topics: [
      'Python basics and syntax',
      'Control flow and loops',
      'Functions and modules',
      'File handling and data processing',
      'Introduction to popular libraries',
      'Mini projects and exercises',
    ],
  },
  {
    id: 3,
    title: 'Full-Stack MERN Development',
    description: 'Build modern web applications with MongoDB, Express, React, Node.js',
    color: 'purple',
    topics: [
      'Frontend with React.js',
      'Backend API with Node.js and Express',
      'MongoDB database design',
      'Authentication and authorization',
      'RESTful API development',
      'Deployment and best practices',
    ],
  },
  {
    id: 4,
    title: 'Next.js & React Native',
    description: 'Create full-stack web and mobile applications',
    color: 'green',
    topics: [
      'Next.js App Router and server components',
      'React Native mobile development',
      'Cross-platform UI design',
      'API routes and server actions',
      'State management with modern tools',
      'Building and deploying apps',
    ],
  },
  {
    id: 5,
    title: 'Game Development with Unity',
    description: 'Create 2D and 3D games from scratch',
    color: 'blue',
    topics: [
      'Unity interface and basics',
      'C# scripting for games',
      '2D and 3D game mechanics',
      'Physics and collision systems',
      'Animation and visual effects',
      'Publishing your game',
    ],
  },
  {
    id: 6,
    title: '3D Modeling with Blender',
    description: 'Learn professional 3D modeling and animation',
    color: 'purple',
    topics: [
      'Blender interface and navigation',
      '3D modeling fundamentals',
      'Texturing and materials',
      'Lighting and rendering',
      'Basic animation techniques',
      'Creating game assets',
    ],
  },
  {
    id: 7,
    title: 'Database Design & Management',
    description: 'Master MySQL and MongoDB databases',
    color: 'green',
    topics: [
      'Relational database design with MySQL',
      'SQL queries and optimization',
      'NoSQL concepts with MongoDB',
      'Data modeling best practices',
      'Database security and backup',
      'Integration with applications',
    ],
  },
  {
    id: 8,
    title: 'Modern Web Development',
    description: 'Learn TailwindCSS, Vite, and modern tools',
    color: 'blue',
    topics: [
      'Responsive design with TailwindCSS',
      'Fast development with Vite',
      'Component-based architecture',
      'Modern JavaScript/TypeScript',
      'Build optimization techniques',
      'Production deployment',
    ],
  },
  {
    id: 9,
    title: 'Docker & Kubernetes',
    description: 'Containerization and orchestration for modern apps',
    color: 'purple',
    topics: [
      'Docker fundamentals and containers',
      'Creating and managing Docker images',
      'Docker Compose for multi-container apps',
      'Introduction to Kubernetes',
      'Deploying and scaling applications',
      'CI/CD with containers',
    ],
  },
];

const colorClasses = {
  green: {
    border: 'border-accent-green/30',
    borderHover: 'hover:border-accent-green',
    bg: 'bg-accent-green/5',
    text: 'text-accent-green',
    button: 'bg-accent-green hover:bg-accent-green/90',
    shadow: 'hover:shadow-accent-green/20',
    glow: 'hover:glow-green',
  },
  blue: {
    border: 'border-accent-blue/30',
    borderHover: 'hover:border-accent-blue',
    bg: 'bg-accent-blue/5',
    text: 'text-accent-blue',
    button: 'bg-accent-blue hover:bg-accent-blue/90',
    shadow: 'hover:shadow-accent-blue/20',
    glow: 'hover:glow-blue',
  },
  purple: {
    border: 'border-accent-purple/30',
    borderHover: 'hover:border-accent-purple',
    bg: 'bg-accent-purple/5',
    text: 'text-accent-purple',
    button: 'bg-accent-purple hover:bg-accent-purple/90',
    shadow: 'hover:shadow-accent-purple/20',
    glow: 'hover:glow-purple',
  },
};

export default function CoursePage() {
  const router = useRouter();

  const handleContactClick = (courseTitle: string) => {
    const message = `Hi! I am interested in learning "${courseTitle}". I would love to know more about the course details, schedule, and pricing. Looking forward to hearing from you!`;
    router.push(`/?section=contact&course=${encodeURIComponent(courseTitle)}&message=${encodeURIComponent(message)}`);
  };

  return (
    <main className="relative min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-accent-green">&lt;</span>
              <span className="text-text-primary">Courses</span>
              <span className="text-accent-green">/&gt;</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
              Choose from a wide range of courses designed to help you master programming,
              web development, game design, and more.
            </p>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
              Pricing is personalized based on your experience level and learning mode.
            </p>
          </motion.div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => {
              const colors = colorClasses[course.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`glass border-2 ${colors.border} ${colors.borderHover} ${colors.glow} rounded-2xl p-6 transition-all ${colors.shadow} shadow-xl flex flex-col`}
                >
                  {/* Course Header */}
                  <div className="space-y-3 mb-6">
                    <div className={`inline-block px-4 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-semibold`}>
                      Course {course.id}
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.text}`}>
                      {course.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {course.description}
                    </p>
                  </div>

                  {/* Topics Covered */}
                  <div className="space-y-3 mb-6 flex-grow">
                    <h4 className="text-text-primary font-semibold text-sm uppercase tracking-wide">
                      What You&apos;ll Learn:
                    </h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, topicIdx) => (
                        <motion.li
                          key={topicIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 + topicIdx * 0.05 }}
                          className="flex items-start gap-2 text-text-secondary text-sm"
                        >
                          <FaCheckCircle className={`${colors.text} mt-0.5 flex-shrink-0`} />
                          <span>{topic}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleContactClick(course.title)}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-3 ${colors.button} text-primary font-bold rounded-lg shadow-lg transition-all`}
                  >
                    <FaEnvelope />
                    <span>Contact for Details</span>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
