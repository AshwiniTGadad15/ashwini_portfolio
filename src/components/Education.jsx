import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';
import Card3DTilt from './Card3DTilt';

export default function Education() {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#F59E0B] tracking-widest uppercase mb-4 font-bold">
        <span>ACADEMIC FOUNDATION</span>
        <div className="h-[1px] w-12 bg-[#F59E0B]/40" />
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-12">
        EDUCATION & ACADEMICS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <Card3DTilt maxTilt={8} scale={1.02}>
              <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-[#F59E0B]/60 transition-all duration-500 shadow-xl bg-[#0A0A0F]/85">
                {/* Top Accent Pill */}
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#FACC15] font-extrabold">
                    {edu.period}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-black/50 border border-[#F59E0B]/30 flex items-center justify-center text-[#FACC15] group-hover:scale-110 transition-transform shadow-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-[#FACC15] transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-base font-sans text-[#E5E7EB] font-semibold mb-1">
                  {edu.institution}
                </p>

                <p className="text-xs font-mono text-[#9CA3AF] font-semibold mb-6">
                  {edu.university}
                </p>

                <div className="pt-4 border-t border-[#F59E0B]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-mono font-bold text-[#FACC15]">
                    <Award className="w-4 h-4 text-[#F59E0B]" />
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
