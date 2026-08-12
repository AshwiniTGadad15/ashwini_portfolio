import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';
import Card3DTilt from './Card3DTilt';

export default function Education() {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#4F46E5] tracking-widest uppercase mb-4 font-bold">
        <span>ACADEMIC FOUNDATION</span>
        <div className="h-[1px] w-12 bg-[#4F46E5]/30" />
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-[#0F172A] mb-12">
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
              <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden group hover:border-[#4F46E5]/50 transition-all duration-500 shadow-lg">
                {/* Top Accent Pill */}
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-[#4F46E5] font-extrabold">
                    {edu.period}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0F172A] group-hover:text-[#4F46E5] transition-colors shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display text-[#0F172A] mb-2 group-hover:text-[#4F46E5] transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-base font-sans text-[#1E293B] font-semibold mb-1">
                  {edu.institution}
                </p>

                <p className="text-xs font-mono text-[#64748B] font-semibold mb-6">
                  {edu.university}
                </p>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-mono font-bold text-[#4F46E5]">
                    <Award className="w-4 h-4 text-[#C026D3]" />
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
