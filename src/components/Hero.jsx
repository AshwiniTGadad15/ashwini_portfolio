import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroOrbCanvas from './HeroOrbCanvas';

export default function Hero() {
  const animatedStatement = "Building digital experiences with code & curiosity.";
  const words = animatedStatement.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        
        {/* Left Column — Editorial Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6 z-10 text-left"
        >
          {/* Availability Status Badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-[#8B5CF6]/30 text-[11px] font-mono text-[#22D3EE] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
              <span>{personalInfo.availabilityStatus}</span>
            </span>
          </div>

          {/* Top Label */}
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#8A8A8A] uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>{personalInfo.headline}</span>
          </p>

          {/* Main Giant Typography */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black font-display tracking-tight text-white leading-none">
            ASHWINI
          </h1>

          {/* Large Animated Word-by-Word Statement */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-x-3 gap-y-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-gradient leading-tight max-w-2xl"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Detailed Subtext */}
          <p className="text-base sm:text-lg text-[#8A8A8A] max-w-xl font-sans leading-relaxed">
            {personalInfo.bioShort}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-black font-mono font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full glass-button font-mono text-xs font-semibold tracking-widest uppercase text-white hover:text-[#22D3EE] flex items-center gap-2 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>LET'S CONNECT</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column — Floating Abstract Developer Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <HeroOrbCanvas />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-[#8A8A8A]"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#8B5CF6]" />
      </motion.div>
    </section>
  );
}
