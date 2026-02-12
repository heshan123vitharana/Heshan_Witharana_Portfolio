import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* ═══ Background ═══ */}
      <div className="absolute inset-0 bg-[#050508]" />

      {/* Ambient lights */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-purple-600/[0.035] rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-blue-500/[0.025] rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03]" />

      {/* Floating particles */}
      {[
        { top: '8%', left: '5%' },
        { top: '72%', left: '3%' },
        { top: '15%', left: '85%', background: '#7c3aed' },
        { top: '60%', right: '6%', background: '#a855f7' },
        { top: '30%', left: '92%', background: '#06b6d4' },
        { top: '85%', left: '45%' },
        { top: '45%', left: '2%', background: '#06b6d4' },
      ].map((p, i) => (
        <div key={i} className="hero-particle" style={p} />
      ))}

      {/* ═══ Main Content — Centered Column ═══ */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-20 pb-20 flex flex-col items-center">

        {/* ── Greeting (above photo) ── */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.25em]">
            Hello, I'm
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
        </motion.div>

        {/* ── Name (behind photo for 3D effect) ── */}
        <motion.h1
          className="font-orbitron font-bold text-center relative z-[1] whitespace-nowrap"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-4xl md:text-6xl lg:text-7xl gradient-text inline-block hero-name-glow">
            HESHAN
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl text-white inline-block ml-3 md:ml-5 hero-name-glow-white">
            WITHARANA
          </span>
        </motion.h1>

        {/* ── Photo (overlaps text for 3D depth) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[2] -mt-10 md:-mt-14 lg:-mt-20 mb-6"
        >
          {/* Pulsing glow behind */}
          <motion.div
            className="absolute inset-0"
            style={{
              margin: '-40px',
              background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Photo — larger, overlapping the text above */}
          <img
            src="/Heshan_png.png"
            alt="Heshan Witharana"
            className="relative w-[380px] h-[380px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] object-contain drop-shadow-[0_0_60px_rgba(6,182,212,0.12)]"
          />

          {/* Floating badge — 3+ Years */}
          <motion.div
            className="absolute -bottom-3 -left-10 md:-left-14 bg-[#0b0b12]/95 backdrop-blur-xl border border-cyan-400/[0.1] rounded-xl px-3.5 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="text-lg font-orbitron font-bold text-cyan-400">3+</div>
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.12em]">Years Exp.</div>
            </motion.div>
          </motion.div>

          {/* Floating badge — PM Lead */}
          <motion.div
            className="absolute -top-2 -right-12 md:-right-16 bg-[#0b0b12]/95 backdrop-blur-xl border border-purple-400/[0.1] rounded-xl px-3.5 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
              <div className="text-[9px] text-purple-400 font-bold uppercase tracking-wider">PM Lead</div>
              <div className="text-[8px] text-gray-600 font-medium">Rapidventure</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Role pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-2 mb-7"
        >
          {['Full-Stack Engineer', 'Project Manager', 'Graphic Designer'].map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 + i * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
              className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-300 bg-cyan-400/[0.06] border border-cyan-400/[0.1] rounded-full backdrop-blur-sm"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-gray-400 text-sm md:text-[15px] leading-relaxed text-center max-w-lg mb-9"
        >
          Bridging the gap between robust code and stunning visual identities.
          Currently leading technical lifecycles at{' '}
          <span className="text-cyan-400 font-semibold">Rapidventure Business Solutions</span>.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-3 overflow-hidden bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold text-[12px] uppercase tracking-[0.15em] rounded-lg shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(6,182,212,0.35)' }}
            whileTap={{ scale: 0.96 }}
          >
            {/* Shine sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              initial={{ x: '-200%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative">Hire Me</span>
            <ArrowRight size={14} className="relative group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
          <motion.a
            href="/Heshan_Witharana_PM & Full Stack Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/[0.1] text-gray-300 font-semibold text-[12px] uppercase tracking-[0.15em] rounded-lg hover:border-cyan-400/25 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Download size={13} />
            Resume
          </motion.a>
        </motion.div>

        {/* ── Social row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-gray-700" />
          {[
            { icon: Github, href: 'https://github.com/heshan123vitharana', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/heshan-witharana', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:vitharana8000@gmail.com', label: 'Email' },
          ].map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-400/20 hover:bg-cyan-400/[0.06] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
              whileHover={{ scale: 1.2, y: -3 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
            >
              <s.icon size={16} />
            </motion.a>
          ))}
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-gray-700" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-gray-600 text-[9px] uppercase tracking-[0.25em] font-semibold">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="text-cyan-400/30 w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;