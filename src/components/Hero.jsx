import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Send, Award, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroOrbCanvas from './HeroOrbCanvas';
import Card3DTilt from './Card3DTilt';
import goldHeroImage from '../assets/gold_hero_abstract.jpg';

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
              <span className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full glass-panel border-[#F59E0B]/40 text-[11px] font-mono text-[#FACC15] font-bold tracking-wider uppercase shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-ping" />
                <span>{personalInfo.availabilityStatus}</span>
              </span>
            </div>
          </Card3DTilt>

          {/* Top Label */}
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#D1D5DB] uppercase flex items-center gap-2 font-bold">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span>{personalInfo.headline}</span>
          </p>

          {/* Main Giant Typography */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black font-display tracking-tight text-white leading-none drop-shadow-md">
            ASHWINI
          </h1>

          {/* Large Animated Word-by-Word Statement */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-x-3 gap-y-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gold-gradient leading-tight max-w-2xl"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Detailed Subtext */}
          <p className="text-base sm:text-lg text-[#E5E7EB] font-sans leading-relaxed font-medium max-w-xl">
            {personalInfo.bioShort}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#B45309] text-black font-mono font-extrabold text-xs tracking-widest uppercase shadow-[0_10px_35px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_45px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass-button font-mono text-xs font-bold tracking-widest uppercase text-white hover:text-[#FACC15] flex items-center gap-2 transition-all shadow-md"
            >
              <Send className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>LET'S CONNECT</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column — 3D Luxury Gold Interactive Visual & WebGL Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex flex-col items-center justify-center animate-float-3d"
        >
          {/* Main 3D Canvas Orb */}
          <HeroOrbCanvas />

          {/* Floating Luxury Gold Picture Card Overlay */}
          <div className="absolute bottom-4 right-2 sm:right-6 w-48 sm:w-56 rounded-2xl glass-panel p-3 border-[#F59E0B]/40 shadow-2xl hidden sm:block z-20">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-2 border border-[#F59E0B]/30">
              <img
                src={goldHeroImage}
                alt="3D Gold Sculpture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[#FACC15] font-extrabold uppercase">
                3D TECH ARTWORK
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#D1D5DB] font-bold">
              <span>EST. 2026</span>
              <span className="text-[#F59E0B]">VTU CSE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-[#9CA3AF] font-bold"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#F59E0B]" />
      </motion.div>
    </section>
  );
}
