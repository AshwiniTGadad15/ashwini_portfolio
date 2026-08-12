import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Send, Code, Sparkle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroOrbCanvas from './HeroOrbCanvas';
import Card3DTilt from './Card3DTilt';

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
          {/* Availability Status Badge with 3D Tilt */}
          <Card3DTilt maxTilt={8} scale={1.03} className="w-fit">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full glass-panel border-[#4F46E5]/30 text-[11px] font-mono text-[#4F46E5] font-bold tracking-wider uppercase shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-ping" />
                <span>{personalInfo.availabilityStatus}</span>
              </span>
            </div>
          </Card3DTilt>

          {/* Top Label */}
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#475569] uppercase flex items-center gap-2 font-bold">
            <Sparkles className="w-4 h-4 text-[#4F46E5]" />
            <span>{personalInfo.headline}</span>
          </p>

          {/* Main Giant Typography */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black font-display tracking-tight text-[#0F172A] leading-none drop-shadow-sm">
            ASHWINI
          </h1>

          {/* Large Animated Word-by-Word Statement */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-x-3 gap-y-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-accent-gradient leading-tight max-w-2xl"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Detailed Subtext */}
          <p className="text-base sm:text-lg text-[#334155] font-sans leading-relaxed font-medium max-w-xl">
            {personalInfo.bioShort}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4] text-white font-mono font-bold text-xs tracking-widest uppercase shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.45)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass-button font-mono text-xs font-bold tracking-widest uppercase text-[#0F172A] hover:text-[#4F46E5] flex items-center gap-2 transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5 text-[#4F46E5]" />
              <span>LET'S CONNECT</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column — 3D Glass Orb Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex items-center justify-center animate-float-3d"
        >
          <HeroOrbCanvas />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-[#64748B] font-bold"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#4F46E5]" />
      </motion.div>
    </section>
  );
}
