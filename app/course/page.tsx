'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const courses = [
  {
    id: 1,
    title: 'Java Mastery',
    description: 'Build a strong foundation in Java and master object-oriented programming used in real-world applications.',
    color: 'green',
    topics: [
      'Java syntax, variables, and control structures',
      'Object-Oriented Programming (OOP) concepts',
      'Java standard libraries and core APIs',
      'Exception handling and file I/O operations',
      'Collections framework and generics',
      'Multithreading and concurrency basics',
      'Building small console and utility applications',
      'Highly recommended for fresh graduates preparing for placements'
    ]
  },
  {
    id: 2,
    title: 'Problem Solving with DSA',
    description: 'Develop strong problem-solving skills using data structures and algorithms with the programming language of your choice.',
    color: 'blue',
    topics: [
      'Algorithmic thinking and problem decomposition',
      'Arrays, strings, and recursion',
      'Linked lists, stacks, and queues',
      'Trees, graphs, and traversal techniques',
      'Sorting and searching algorithms',
      'Dynamic programming and greedy techniques',
      'Competitive programming and interview-style problems',
      'Leetcode and HackerRank problem-solving practice'
    ]
  },
  {
    id: 3,
    title: 'Full Stack Development',
    description: 'Learn to build complete web applications using modern frontend and backend technologies.',
    color: 'purple',
    topics: [
      'HTML, CSS, and responsive web design',
      'JavaScript fundamentals and browser APIs',
      'Frontend architecture and component-based development',
      'Backend development and server-side programming',
      'Building and consuming REST APIs',
      'Database design and integration',
      'Deploying and maintaining full stack applications'
    ]
  },
  {
    id: 4,
    title: '3D and Game Development',
    description: 'Create 3D assets and interactive games using Blender and Unity.',
    color: 'green',
    topics: [
      '3D modeling fundamentals using Blender',
      'Texturing, lighting, and rendering',
      'Unity interface and scene setup',
      'Game objects, physics, and collisions',
      'Scripting gameplay with C#',
      'Animations and character movement',
      'Building and exporting playable games'
    ]
  },
  {
    id: 5,
    title: 'Frontend Tools and Frameworks',
    description: 'Master modern tools used to build fast and scalable frontend applications.',
    color: 'blue',
    topics: [
      'Modern frontend workflows and tooling',
      'TailwindCSS for rapid UI development',
      'Vite for fast development environments',
      'Svelte fundamentals and reactive components',
      'Component-based architecture',
      'Performance optimization techniques',
      'Building modern responsive interfaces'
    ]
  },
  {
    id: 6,
    title: 'Database Systems',
    description: 'Understand how databases work and learn to design and manage efficient data storage systems.',
    color: 'purple',
    topics: [
      'Database concepts and relational models',
      'SQL queries and database operations',
      'Designing normalized database schemas',
      'Indexing and query optimization',
      'Working with MySQL relational databases',
      'Introduction to NoSQL with MongoDB',
      'Connecting databases with backend applications'
    ]
  },
  {
    id: 7,
    title: 'Programming Languages',
    description: 'Choose the programming language you want to learn and build strong programming fundamentals through personalized guidance.',
    color: 'green',
    topics: [
      'Programming fundamentals and problem solving',
      'Python for scripting and automation',
      'C and C++ for system-level programming',
      'Java for object-oriented development',
      'JavaScript for web development',
      'Dart and Flutter for cross-platform applications',
      'Writing clean, efficient, and maintainable code'
    ]
  },
  {
    id: 8,
    title: 'Software Engineering Principles',
    description: 'Learn the principles, tools, and practices used to design, build, and deploy reliable software systems.',
    color: 'blue',
    topics: [
      'Software development lifecycle (SDLC)',
      'Clean code practices and coding standards',
      'Design patterns and software architecture basics',
      'Version control and collaboration using Git',
      'Testing, debugging, and code quality practices',
      'Containerization with Docker',
      'Deployment and orchestration using Kubernetes'
    ]
  },
  {
    id: 9,
    title: 'Interview Preparation',
    description: 'Prepare for technical interviews with structured practice and real-world problem solving.',
    color: 'purple',
    topics: [
      'Coding interview problem solving strategies',
      'Common data structure interview questions',
      'Algorithm optimization techniques',
      'System design basics for interviews',
      'Mock technical interview sessions',
      'Resume and portfolio guidance',
      'Problem solving under time constraints'
    ]
  },
  {
    id: 10,
    title: 'Custom Learning Path',
    description: 'Design your own course by selecting topics from different courses based on your goals, with lifetime mentorship and continuous support.',
    color: 'green',
    topics: [
      'Choose topics from multiple available courses',
      'Create a personalized learning roadmap',
      'Focus on the technologies and skills you want',
      'Project-based learning tailored to your goals',
      'Guidance for placements and technical interviews',
      'Support for hackathons and real-world projects',
      'Lifetime mentorship and learning support'
    ]
  }
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
              web development, game design, and more
            </p>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
              Contact me to create your own learning path
            </p>
          </motion.div>

          {/* Note Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="glass border-2 border-accent-green/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-accent-green rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                  Note
                </h2>
              </div>
              
              <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-accent-green/50 scrollbar-track-secondary/20 pr-2 space-y-4 text-text-secondary">

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent-green">🚀 What You&apos;ll Get</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Practical learning focused on real-world projects and problem solving
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent-green">🧩 Custom Learning Path</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Pick topics from different courses and build a learning plan tailored to your goals
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent-green">💰 Pricing</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Pricing depends on your chosen topics, learning path, and mentoring mode
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent-blue">💻 Projects & Hackathons</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Guidance to build strong projects and participate in hackathons confidently
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent-green">🎯 Placement Preparation</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Interview preparation, coding practice, and resume guidance for placements
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent-purple">👨‍🏫 Mentorship</h3>
              <p className="text-sm md:text-base leading-relaxed">
                1-on-1 personalized mentoring with continuous guidance
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent-purple">♾️ Lifetime Support</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Ongoing support for learning, projects, placements, and career growth with no hidden charges
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent-blue">⏱️ Flexible Schedule</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Sessions scheduled based on your availability
              </p>
            </div>


          </div>
            </div>
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
