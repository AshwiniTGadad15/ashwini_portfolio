import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, GraduationCap, Sparkles, UserCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ashwiniPhoto from '../assets/ashwini.jpg';
import Card3DTilt from './Card3DTilt';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#4F46E5] tracking-widest uppercase mb-4 font-bold">
        <span>01 — ABOUT</span>
        <div className="h-[1px] w-12 bg-[#4F46E5]/30" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column — 3D Glass Profile Photo Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative flex flex-col items-center"
        >
          <Card3DTilt maxTilt={14} scale={1.03} className="w-full max-w-sm">
            <div className="relative w-full aspect-[4/5] rounded-3xl p-3.5 glass-panel border-[#4F46E5]/30 shadow-[0_20px_50px_rgba(79,70,229,0.15)] group overflow-hidden">
              {/* Corner Ambient Glowing Orb */}
              <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-[#4F46E5]/20 blur-3xl group-hover:bg-[#C026D3]/25 transition-all duration-700 pointer-events-none" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center border border-slate-200">
                <img
                  src={ashwiniPhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Glass Overlay Tag */}
                <div className="absolute bottom-3 left-3 right-3 glass-panel p-3 rounded-xl backdrop-blur-md flex items-center justify-between border-white/90 shadow-md">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#4F46E5]" />
                    <span className="text-xs font-mono font-extrabold text-[#0F172A] tracking-wider">
                      {personalInfo.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C026D3] font-bold uppercase tracking-wider">
                    2027 CSE
                  </span>
                </div>
              </div>
            </div>
          </Card3DTilt>
        </motion.div>

        {/* Right Column — Large Editorial Statement & Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <h2 className="text-xs font-mono text-[#06B6D4] tracking-widest uppercase font-bold">
            THE PERSON BEHIND THE CODE
          </h2>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#0F172A] leading-tight">
            "I enjoy turning complex ideas into intuitive visual experiences."
          </h3>

          <Card3DTilt maxTilt={6} scale={1.01}>
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border-slate-200 relative overflow-hidden shadow-lg">
              <p className="text-base sm:text-lg text-[#334155] font-sans leading-relaxed mb-6 font-normal">
                {personalInfo.bioLong}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#475569] font-medium">
                  <GraduationCap className="w-4 h-4 text-[#4F46E5]" />
                  <span>Ghousia College of Engg. (VTU)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#475569] font-medium">
                  <Code2 className="w-4 h-4 text-[#06B6D4]" />
                  <span>Frontend & Software Dev</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#475569] font-medium">
                  <Cpu className="w-4 h-4 text-[#C026D3]" />
                  <span>AI & Problem Solving</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#475569] font-medium">
                  <Sparkles className="w-4 h-4 text-[#4F46E5]" />
                  <span>Graduating Class of 2027</span>
                </div>
              </div>
            </div>
          </Card3DTilt>
        </motion.div>
      </div>
    </section>
  );
}
