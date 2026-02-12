import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>

      {/* Floating particles */}
      <div className="hero-particle" style={{ top: '15%', left: '10%' }}></div>
      <div className="hero-particle" style={{ top: '60%', left: '5%' }}></div>
      <div className="hero-particle" style={{ top: '30%', left: '45%' }}></div>
      <div className="hero-particle" style={{ top: '75%', left: '35%' }}></div>
      <div className="hero-particle" style={{ top: '20%', right: '15%', background: '#7c3aed' }}></div>
      <div className="hero-particle" style={{ top: '50%', right: '10%', background: '#ff00ff' }}></div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left side — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Main heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="gradient-text">HESHAN</span>
              <br />
              <span className="text-white">WITHARANA</span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              className="text-lg md:text-xl text-cyan-400 font-medium mb-6 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Full-Stack Engineer • Technical Project Manager • Graphic Designer
            </motion.p>

            {/* Tagline with accent border */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="hero-accent-border pl-5 mb-10"
            >
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Bridging the gap between robust code and stunning visual identities.
                Currently leading technical lifecycles at{' '}
                <span className="text-cyan-400 font-semibold">Rapidventure Business Solutions</span>.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 255, 255, 0.35)' }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-5"
            >
              <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Follow</span>
              <div className="w-8 h-px bg-gray-700"></div>
              {[
                { icon: Github, href: 'https://github.com/heshan123vitharana', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/heshan-witharana', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:vitharana8000@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side — Photo with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="hero-photo-wrapper relative">
              {/* Decorative ring */}
              <div className="absolute -inset-6 rounded-3xl border border-cyan-500/10 animate-pulse"></div>

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent rounded-2xl blur-2xl scale-110"></div>

              {/* The photo */}
              <div className="hero-photo-3d hero-photo-glow relative">
                <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/Heshan_png.png"
                    alt="Heshan Witharana"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Tech pattern overlay */}
                  <div className="absolute inset-0 cyber-grid opacity-5"></div>
                </div>

                {/* Floating stat badge */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-xl px-4 py-3 shadow-2xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-2xl font-orbitron font-bold text-cyan-400">3+</div>
                  <div className="text-xs text-gray-400 font-medium">Years Exp.</div>
                </motion.div>

                {/* Floating role badge */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-black/80 backdrop-blur-xl border border-purple-500/20 rounded-xl px-4 py-3 shadow-2xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="text-xs text-purple-400 font-bold uppercase tracking-wider">PM Lead</div>
                  <div className="text-xs text-gray-500">Rapidventure</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-cyan-400/60 w-7 h-7" />
      </motion.div>
    </section>
  );
};

export default Hero;