import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* === Background === */}
      <div className="absolute inset-0 bg-[#050508]"></div>

      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/[0.04] rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/[0.02] rounded-full blur-[150px]"></div>
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 cyber-grid opacity-[0.04]"></div>

      {/* Floating particles */}
      <div className="hero-particle" style={{ top: '12%', left: '8%' }}></div>
      <div className="hero-particle" style={{ top: '65%', left: '4%' }}></div>
      <div className="hero-particle" style={{ top: '25%', left: '48%' }}></div>
      <div className="hero-particle" style={{ top: '80%', left: '30%' }}></div>
      <div className="hero-particle" style={{ top: '18%', right: '12%', background: '#7c3aed' }}></div>
      <div className="hero-particle" style={{ top: '55%', right: '8%', background: '#a855f7' }}></div>
      <div className="hero-particle" style={{ top: '40%', right: '25%', background: '#06b6d4' }}></div>

      {/* === Main Content === */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-orbitron font-bold leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <span className="block text-5xl md:text-6xl xl:text-7xl gradient-text pb-2">
                HESHAN
              </span>
              <span className="block text-5xl md:text-6xl xl:text-7xl text-white">
                WITHARANA
              </span>
            </motion.h1>

            {/* Role tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-2 mb-7"
            >
              {['Full-Stack Engineer', 'Project Manager', 'Graphic Designer'].map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-400/[0.08] border border-cyan-400/[0.12] rounded-full"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Description with accent border */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="hero-accent-border pl-5 mb-9 max-w-lg"
            >
              <p className="text-gray-400 text-[15px] leading-relaxed">
                Bridging the gap between robust code and stunning visual identities.
                Currently leading technical lifecycles at{' '}
                <span className="text-cyan-400 font-semibold">Rapidventure Business Solutions</span>.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold text-[13px] uppercase tracking-wider rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 40px rgba(0, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.96 }}
              >
                Hire Me
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
              <motion.a
                href="/Heshan_Witharana_PM & Full Stack Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/[0.12] text-white font-semibold text-[13px] uppercase tracking-wider rounded-lg hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Download size={14} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-600 text-[11px] font-semibold uppercase tracking-[0.2em]">
                Connect
              </span>
              <div className="w-5 h-px bg-gray-700"></div>
              {[
                { icon: Github, href: 'https://github.com/heshan123vitharana', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/heshan-witharana', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:vitharana8000@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/20 hover:bg-cyan-400/[0.06] transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -3 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.15 + index * 0.08 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-8 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Spinning decorative border */}
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.15), transparent, rgba(139, 92, 246, 0.1), transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* Photo container — circular */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden border-2 border-white/[0.08] shadow-2xl shadow-black/50">
                <img
                  src="/Heshan_png.png"
                  alt="Heshan Witharana"
                  className="w-full h-full object-cover object-top scale-110"
                />
                {/* Bottom gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating badge — Years */}
              <motion.div
                className="absolute -bottom-2 left-2 bg-[#0a0a0f]/90 backdrop-blur-xl border border-cyan-400/[0.12] rounded-xl px-4 py-2.5 shadow-2xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-xl font-orbitron font-bold text-cyan-400">3+</div>
                <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Years Exp.</div>
              </motion.div>

              {/* Floating badge — Role */}
              <motion.div
                className="absolute -top-1 right-0 bg-[#0a0a0f]/90 backdrop-blur-xl border border-purple-400/[0.12] rounded-xl px-4 py-2.5 shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">PM Lead</div>
                <div className="text-[10px] text-gray-600 font-medium">Rapidventure</div>
              </motion.div>

              {/* Decorative dot cluster */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-1.5">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400/20"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="text-cyan-400/40 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;