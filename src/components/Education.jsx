import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
        <span>ACADEMIC FOUNDATION</span>
        <div className="h-[1px] w-12 bg-[#8B5CF6]/30" />
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
            className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-[#8B5CF6]/40 transition-all duration-500"
          >
            {/* Top Accent Pill */}
            <div className="flex justify-between items-center mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#22D3EE]">
                {edu.period}
              </span>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-[#22D3EE] transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-accent-gradient transition-colors">
              {edu.degree}
            </h3>

            <p className="text-base font-sans text-[#F5F5F5] font-semibold mb-1">
              {edu.institution}
            </p>

            <p className="text-xs font-mono text-[#8A8A8A] mb-6">
              {edu.university}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-[#22D3EE]">
                <Award className="w-4 h-4 text-[#8B5CF6]" />
                <span>{edu.grade}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
