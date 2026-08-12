import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, GraduationCap, Sparkles, UserCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ashwiniPhoto from '../assets/ashwini.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
        <span>01 — ABOUT</span>
        <div className="h-[1px] w-12 bg-[#8B5CF6]/30" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column — Profile Image Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative flex flex-col items-center"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl p-3 glass-panel border-[#8B5CF6]/30 shadow-[0_15px_50px_rgba(139,92,246,0.2)] group overflow-hidden">
            {/* Corner Ambient Glowing Orb */}
            <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#8B5CF6]/30 blur-2xl group-hover:bg-[#22D3EE]/30 transition-all duration-700 pointer-events-none" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#050505] flex items-center justify-center border border-white/10">
              <img
                src={ashwiniPhoto}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />

              {/* Glass Overlay Tag */}
              <div className="absolute bottom-3 left-3 right-3 glass-panel p-3 rounded-xl backdrop-blur-md flex items-center justify-between border-white/10">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#22D3EE]" />
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    {personalInfo.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8B5CF6] uppercase tracking-wider">
                  2027 CSE
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column — Large Editorial Statement & Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <h2 className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase">
            THE PERSON BEHIND THE CODE
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            "I enjoy turning ideas into functional experiences."
          </h3>

          <div className="glass-panel p-8 rounded-3xl border-white/10 relative overflow-hidden">
            <p className="text-base sm:text-lg text-[#F5F5F5] font-sans leading-relaxed mb-6">
              {personalInfo.bioLong}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#8A8A8A]">
                <GraduationCap className="w-4 h-4 text-[#8B5CF6]" />
                <span>Ghousia College of Engg. (VTU)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#8A8A8A]">
                <Code2 className="w-4 h-4 text-[#22D3EE]" />
                <span>Frontend & Software Dev</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#8A8A8A]">
                <Cpu className="w-4 h-4 text-[#8B5CF6]" />
                <span>AI & Problem Solving</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#8A8A8A]">
                <Sparkles className="w-4 h-4 text-[#22D3EE]" />
                <span>Graduating Class of 2027</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
