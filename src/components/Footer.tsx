import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800 snap-start snap-always">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="text-cyan-400 w-8 h-8" />
              <span className="font-orbitron font-bold text-xl gradient-text">
                HESHAN.DEV
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Engineer & Graphic Designer bridging robust code and stunning visual identities.
              Currently leading technical lifecycles at Rapidventure Business Solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron font-bold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Designs', 'Skills', 'Achievements', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron font-bold text-white text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {[
                { icon: Github, href: 'https://github.com/heshan123vitharana', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/heshan-witharana', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:vitharana8000@gmail.com', label: 'Email' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              Available for freelance projects and collaborations
            </p>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm flex items-center"
          >
            © 2025 All rights reserved
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="neon-border p-2 bg-transparent text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;