import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scrollspy active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 sm:px-8 flex justify-center ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`w-full max-w-7xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-[#8B5CF6]/20'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-xl font-bold font-display tracking-wider text-white"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#22D3EE] flex items-center justify-center text-xs font-mono text-black font-extrabold group-hover:scale-110 transition-transform">
              {personalInfo.shortName}
            </span>
            <span className="tracking-widest group-hover:text-[#22D3EE] transition-colors">
              {personalInfo.shortName}.
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 glass-panel border-white/5">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider font-semibold transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#8A8A8A] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Side Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full glass-button text-xs font-mono tracking-wider font-semibold text-white group"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#22D3EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full glass-panel text-white hover:text-[#22D3EE] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Glass Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-[#050505]/95 flex flex-col justify-center px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="text-3xl sm:text-4xl font-display font-bold text-white hover:text-accent-gradient flex items-center justify-between group border-b border-white/10 pb-4"
                >
                  <span className="group-hover:text-[#22D3EE] transition-colors">{item.name}</span>
                  <span className="text-xs font-mono text-[#8A8A8A] group-hover:text-[#8B5CF6]">0{idx + 1}</span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 flex flex-col gap-4"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-black font-bold font-mono text-center tracking-wider text-sm flex items-center justify-center gap-2"
                >
                  <span>LET'S TALK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <p className="text-xs font-mono text-[#8A8A8A] text-center mt-4">
                  Ashwini T Gadad • {personalInfo.email}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
