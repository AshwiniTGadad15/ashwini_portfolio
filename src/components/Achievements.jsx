import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileText, Users, Flame, Star } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import Card3DTilt from './Card3DTilt';

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
      <div className="flex items-center gap-3 text-xs font-mono text-[#F59E0B] tracking-widest uppercase mb-4 font-bold">
        <span>05 — ACHIEVEMENTS</span>
        <div className="h-[1px] w-12 bg-[#F59E0B]/40" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-2">
            BEYOND THE CLASSROOM
          </h2>
          <p className="text-sm font-sans text-[#D1D5DB] font-medium">
            Research, team leadership, hackathons & competitive benchmarks.
          </p>
        </div>
      </div>

      {/* Grid with 3D Tilt */}
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
              className={ach.isSpotlight ? 'md:col-span-2' : ''}
            >
              <Card3DTilt maxTilt={7} scale={1.02}>
                <div
                  className={`glass-panel p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 shadow-xl bg-[#0A0A0F]/85 ${
                    ach.isSpotlight
                      ? 'border-[#F59E0B]/70 bg-gradient-to-br from-[#0D0D14] via-[#0A0A0F] to-[#F59E0B]/15 shadow-[0_20px_50px_rgba(245,158,11,0.22)]'
                      : 'border-[#F59E0B]/25 hover:border-[#F59E0B]/50'
                  }`}
                >
                  {ach.isSpotlight && (
                    <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#B45309] text-black text-[10px] font-mono font-extrabold uppercase tracking-widest flex items-center gap-1 shadow-md z-20">
                      <Star className="w-3 h-3 fill-black" />
                      <span>NATIONAL SPOTLIGHT</span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
                      ach.isSpotlight
                        ? 'bg-[#F59E0B] text-black border border-[#FACC15]'
                        : 'bg-[#F59E0B]/10 text-[#FACC15] border border-[#F59E0B]/40'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#9CA3AF] font-bold block mb-1">
                        ACHIEVEMENT // {ach.number} • {ach.subtitle}
                      </span>
                      <h3 className={`font-bold font-display text-white ${
                        ach.isSpotlight ? 'text-2xl sm:text-3xl text-gold-gradient' : 'text-xl sm:text-2xl'
                      }`}>
                        {ach.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm font-sans text-[#E5E7EB] leading-relaxed pl-16 font-normal">
                    {ach.description}
                  </p>
                </div>
              </Card3DTilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
