import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const FULL_NAME = 'HESHAN WITHARANA';
const TYPING_SPEED = 100;
const DELETING_SPEED = 60;
const PAUSE_AFTER_TYPING = 2500;
const PAUSE_AFTER_DELETING = 800;

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let delay: number;
    let nextText = displayedText;
    let nextDeleting = isDeleting;

    if (!isDeleting) {
      if (displayedText.length < FULL_NAME.length) {
        nextText = FULL_NAME.slice(0, displayedText.length + 1);
        delay = TYPING_SPEED;
      } else {
        nextDeleting = true;
        delay = PAUSE_AFTER_TYPING;
      }
    } else {
      if (displayedText.length > 0) {
        nextText = FULL_NAME.slice(0, displayedText.length - 1);
        delay = DELETING_SPEED;
      } else {
        nextDeleting = false;
        delay = PAUSE_AFTER_DELETING;
      }
    }

    const timer = setTimeout(() => {
      setDisplayedText(nextText);
      setIsDeleting(nextDeleting);
    }, delay);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  // Split the displayed text into first and last name portions
  const spaceIndex = FULL_NAME.indexOf(' ');
  const firstName = displayedText.slice(0, Math.min(displayedText.length, spaceIndex));
  const lastName = displayedText.length > spaceIndex ? displayedText.slice(spaceIndex) : '';

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center lg:items-end">
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
      {/* ═══ Main Content — Centered Column ═══ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-20 lg:pb-0 flex flex-col items-center">

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
          className="font-orbitron font-bold text-center relative z-[1] whitespace-nowrap min-h-[1.2em]"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-4xl md:text-6xl lg:text-7xl gradient-text inline-block hero-name-glow">
            {firstName}
          </span>
          {lastName && (
            <span className="text-4xl md:text-6xl lg:text-7xl text-white inline-block ml-6 md:ml-10 hero-name-glow-white">
              {lastName}
            </span>
          )}
          <span className="typewriter-cursor text-4xl md:text-6xl lg:text-7xl" />
        </motion.h1>

        {/* ── Photo (overlaps text for 3D depth) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[2] -mt-20 md:-mt-24 lg:-mt-32 mb-6 lg:mb-0"
        >
          {/* ── Desktop Roles (Left of Image) ── */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-12 hidden lg:flex flex-col items-end gap-6 w-80 z-20">
            {['Full-Stack Engineer', 'Project Manager', 'Graphic Designer'].map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.8 + i * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="group relative flex items-center justify-end"
              >
                {/* Pill */}
                <span className="relative z-10 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cyan-300/90 bg-black/60 border border-cyan-500/30 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:bg-cyan-900/20 group-hover:border-cyan-400/60 group-hover:text-cyan-200 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-default whitespace-nowrap">
                  {role}
                </span>

                {/* Connector Line & Dot */}
                <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[30px] h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent group-hover:w-[50px] group-hover:from-cyan-400 transition-all duration-300" />
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 delay-75" />
              </motion.div>
            ))}
          </div>

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
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-[#0b0b12]/95 backdrop-blur-xl border border-cyan-400/[0.1] rounded-xl px-3.5 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="text-lg font-orbitron font-bold text-cyan-400">3+</div>
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.12em]">Years Exp.</div>
            </motion.div>
          </motion.div>


        </motion.div>

        {/* ── Role pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-2 mb-7 lg:hidden"
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

        {/* ── Description Removed ── */}

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-3 mb-10 lg:hidden"
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
          className="flex items-center gap-3 lg:absolute lg:bottom-12 lg:right-12 lg:mb-0"
        >
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-gray-700 lg:hidden" />
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
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-gray-700 lg:hidden" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 lg:hidden"
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