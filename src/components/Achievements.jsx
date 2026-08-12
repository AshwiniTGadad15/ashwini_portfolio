import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileText, Users, Flame, Star } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap = {
  '01': FileText,
  '02': Users,
  '03': Flame,
  '04': Trophy,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Label */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
        <span>05 — ACHIEVEMENTS</span>
        <div className="h-[1px] w-12 bg-[#8B5CF6]/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-2">
            BEYOND THE CLASSROOM
          </h2>
          <p className="text-sm font-sans text-[#8A8A8A]">
            Research, team leadership, hackathons & competitive benchmarks.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((ach, idx) => {
          const Icon = iconMap[ach.number] || Star;
          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`glass-panel p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 ${
                ach.isSpotlight
                  ? 'border-[#22D3EE]/60 bg-gradient-to-br from-[#0B0B0F] via-[#0B0B0F] to-[#8B5CF6]/20 shadow-[0_0_40px_rgba(34,211,238,0.2)] md:col-span-2'
                  : 'border-white/10 hover:border-[#8B5CF6]/40'
              }`}
            >
              {ach.isSpotlight && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-black text-[10px] font-mono font-extrabold uppercase tracking-widest flex items-center gap-1">
                  <Star className="w-3 h-3 fill-black" />
                  <span>NATIONAL SPOTLIGHT</span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  ach.isSpotlight
                    ? 'bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/40'
                    : 'bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/30'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8A8A8A] block mb-1">
                    ACHIEVEMENT // {ach.number} • {ach.subtitle}
                  </span>
                  <h3 className={`font-bold font-display text-white ${
                    ach.isSpotlight ? 'text-2xl sm:text-3xl text-gradient' : 'text-xl sm:text-2xl'
                  }`}>
                    {ach.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-sans text-[#F5F5F5] leading-relaxed pl-16">
                {ach.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
