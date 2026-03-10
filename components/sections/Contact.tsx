'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaInstagram, FaGithub, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { ReadonlyURLSearchParams } from 'next/navigation';
import SectionWrapper from '../SectionWrapper';

const contactMethods = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'S Tanveer Muhammed',
    link: 'https://www.linkedin.com/in/s-tanveer-muhammed-611b89336/',
    color: 'blue',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: '@codesense.me',
    link: 'https://www.instagram.com/codesense.me/#',
    color: 'purple',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'TanveerS4',
    link: 'https://github.com/TanveerS4',
    color: 'green',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '8610534505',
    link: 'tel:8610534505',
    color: 'blue',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'stanveer1809@gmail.com',
    link: 'mailto:stanveer1809@gmail.com',
    color: 'green',
  },
];

const colorClasses = {
  green: 'text-accent-green hover:glow-green',
  blue: 'text-accent-blue hover:glow-blue',
  purple: 'text-accent-purple hover:glow-purple',
};

interface ContactProps {
  searchParams: ReadonlyURLSearchParams;
}

export default function Contact({ searchParams }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle URL params for pre-filled contact form
  useEffect(() => {
    const section = searchParams.get('section');
    const message = searchParams.get('message');
    
    if (section === 'contact' && message) {
      setFormData(prev => ({
        ...prev,
        message: decodeURIComponent(message),
      }));
      
      // Scroll to contact section
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  // Debug: Check if environment variables are loaded
  useEffect(() => {
    console.log('=== EmailJS Configuration Debug ===');
    console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'NOT FOUND');
    console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'NOT FOUND');
    console.log('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'SET' : 'NOT FOUND');
    console.log('===================================');
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS Configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      // Validation check
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS credentials not found in environment variables');
        console.log('Service ID:', serviceId ? 'Found' : 'Missing');
        console.log('Template ID:', templateId ? 'Found' : 'Missing');
        console.log('Public Key:', publicKey ? 'Found' : 'Missing');
        throw new Error('EmailJS credentials not configured');
      }

      console.log('Attempting to send email with EmailJS...');

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'stanveer1809@gmail.com',
        },
        publicKey
      );

      console.log('EmailJS response:', response);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      console.error('Error details:', {
        message: error?.message,
        text: error?.text,
        status: error?.status,
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-secondary/50">
      <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get In <span className="text-accent-green">Touch</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Ready to start your learning journey? Let&apos;s connect!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-5 sm:p-6 md:p-10 glow-green"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-text-primary font-semibold text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-primary/50 border border-accent-green/30 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-green focus:glow-green transition-all"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-text-primary font-semibold text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-primary/50 border border-accent-blue/30 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-blue focus:glow-blue transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-text-primary font-semibold text-sm sm:text-base">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-primary/50 border border-accent-purple/30 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-purple focus:glow-purple transition-all resize-none"
                placeholder="Tell me about your learning goals..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-accent-green text-primary font-bold text-base md:text-lg rounded-lg shadow-lg hover:shadow-accent-green/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-accent-green/20 border border-accent-green rounded-lg text-accent-green text-center"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
              >
                <div className="font-semibold mb-2">Error sending message</div>
                <div className="text-sm">
                  Please check the browser console for details, or contact me directly via:
                  <br />
                  <a href="mailto:stanveer1809@gmail.com" className="text-accent-green hover:underline">
                    stanveer1809@gmail.com
                  </a>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-text-primary">
            Other Ways to <span className="text-accent-blue">Connect</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              const colorClass = colorClasses[method.color as keyof typeof colorClasses];

              return (
                <motion.a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass border border-white/10 rounded-xl p-4 transition-all hover:border-white/30 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-3xl ${colorClass} transition-all`}>
                      <Icon />
                    </div>
                    <div>
                      <div className="text-text-secondary text-sm">{method.label}</div>
                      <div className="text-text-primary font-semibold text-sm break-all">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
