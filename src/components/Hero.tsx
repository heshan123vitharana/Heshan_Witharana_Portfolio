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
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-20 items-center">

          {/* Left side — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="order-2 lg:order-1 max-w-xl"
          >
            {/* Greeting line */}
            <motion.p
              className="text-gray-400 text-base md:text-lg mb-4 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            {/* Main heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-orbitron font-bold mb-5 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">HESHAN</span>
              <br />
              <span className="text-white">WITHARANA</span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              className="text-base md:text-lg text-cyan-400 font-medium mb-7 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full-Stack Engineer • Technical Project Manager • Graphic Designer
            </motion.p>

            {/* Tagline with accent border */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="hero-accent-border pl-5 mb-9"
            >
              <p className="text-gray-400 text-base leading-relaxed">
                Bridging the gap between robust code and stunning visual identities.
                Currently leading technical lifecycles at{' '}
                <span className="text-cyan-400 font-semibold">Rapidventure Business Solutions</span>.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-9"
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20"
                whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(0, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.96 }}
              >
                Hire Me
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center px-7 py-3 border border-gray-600 text-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View Work
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-600 text-xs font-semibold uppercase tracking-[0.2em]">Follow</span>
              <div className="w-6 h-px bg-gray-700"></div>
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
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/25 hover:bg-cyan-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -2 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="hero-photo-wrapper relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-5 rounded-2xl border border-cyan-500/[0.07]"></div>

              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-cyan-500/5 rounded-2xl blur-2xl"></div>

              {/* Photo container */}
              <div className="hero-photo-3d hero-photo-glow relative">
                <div className="relative w-72 h-80 md:w-80 md:h-[420px] lg:w-[340px] lg:h-[440px] rounded-2xl overflow-hidden border border-white/[0.08]">
                  <img
                    src="/Heshan_png.png"
                    alt="Heshan Witharana"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                {/* Floating stat badge */}
                <motion.div
                  className="absolute -bottom-3 -left-3 bg-black/85 backdrop-blur-xl border border-cyan-500/15 rounded-xl px-3.5 py-2.5 shadow-2xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-xl font-orbitron font-bold text-cyan-400">3+</div>
                  <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Years Exp.</div>
                </motion.div>

                {/* Floating role badge */}
                <motion.div
                  className="absolute -top-2 -right-2 bg-black/85 backdrop-blur-xl border border-purple-500/15 rounded-xl px-3.5 py-2.5 shadow-2xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">PM Lead</div>
                  <div className="text-[10px] text-gray-600">Rapidventure</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-cyan-400/40 w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;