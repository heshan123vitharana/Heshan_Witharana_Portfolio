import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Designs', href: '#designs' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = menuItems.map(item => item.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/50'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-center h-[64px] relative">

            {/* Desktop Navigation — Centered */}
            {/* Resume Button (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex absolute left-0 items-center"
            >
              <a
                href="/Heshan_Witharana_PM & Full Stack Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/[0.1] text-gray-300 font-semibold text-[10px] uppercase tracking-[0.15em] rounded-lg hover:border-cyan-400/25 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
              >
                <Download size={12} />
                Resume
              </a>
            </motion.div>

            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="relative group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                  >
                    <span
                      className={`block px-4 py-2 text-[13px] font-semibold uppercase tracking-wider transition-colors duration-300 ${isActive
                        ? 'text-cyan-400'
                        : 'text-gray-400 group-hover:text-white'
                        }`}
                    >
                      {item.name}
                    </span>

                    {/* Active indicator line */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-400 rounded-full"
                        style={{ boxShadow: '0 0 8px rgba(0, 255, 255, 0.5)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Hover underline (only on non-active) */}
                    {!isActive && (
                      <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-white/20 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Hire Me Button (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex absolute right-0 items-center"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-4 py-2 overflow-hidden bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold text-[10px] uppercase tracking-[0.15em] rounded-lg shadow-lg shadow-cyan-500/20"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" // animation handled by css group-hover usually, or motion div inside? 
                // Previous hero button had motion.div for shine. I'll stick to CSS or simple motion.
                // I'll reuse the internal structure if possible or simplify.
                // Simplify for Header to avoid complex motion nesting issues or just use simple CSS hover.
                />
                {/* Shine sweep using CSS transform on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Hire Me</span>
                <ArrowRight size={12} className="relative group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Mobile hamburger */}
            <motion.button
              className="lg:hidden absolute right-0 w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-gray-950/95 backdrop-blur-2xl border-l border-white/[0.06] flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
                <span className="font-orbitron font-bold text-sm text-white tracking-wider">MENU</span>
                <motion.button
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Drawer links */}
              <div className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
                {menuItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.04 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide uppercase transition-all duration-200 ${isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/15'
                        : 'text-gray-500 hover:text-white hover:bg-white/[0.04]'
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_#00ffff] flex-shrink-0"></span>
                      )}
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>

              {/* Drawer CTA */}
              <div className="p-4 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-500/20"
                >
                  Let's Talk
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;