import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text glitch">HESHAN</span>
            <br />
            <span className="text-white">WITHARANA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-4">
              Full-Stack Engineer • Technical Project Manager • Graphic Designer
            </p>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Bridging the gap between robust code and stunning visual identities.
              Currently leading technical lifecycles at <span className="text-cyan-400 font-semibold">Rapidventure Business Solutions</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="#contact"
              className="neon-border px-8 py-3 bg-transparent text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px #00ffff' }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
            <motion.a
              href="#projects"
              className="border-2 border-gray-600 px-8 py-3 bg-transparent text-white font-semibold rounded-lg hover:border-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/heshan123vitharana', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/heshan-witharana', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:vitharana8000@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-cyan-400 w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;