import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Terminal, Database, Cpu, Wrench } from 'lucide-react';
import { techCategories } from '../data/portfolioData';
import Card3DTilt from './Card3DTilt';

const iconMap = {
  FRONTEND: Layers,
  LANGUAGES: Terminal,
  'BACKEND / FRAMEWORKS': Database,
  'CORE COMPUTING': Cpu,
  'TOOLS & ENVIRONMENT': Wrench,
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Label */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#F59E0B] tracking-widest uppercase mb-4 font-bold">
        <span>03 — SKILLS</span>
        <div className="h-[1px] w-12 bg-[#F59E0B]/40" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-2">
            TOOLS OF THE TRADE
          </h2>
          <p className="text-sm font-sans text-[#D1D5DB] font-medium">
            Core competencies, programming languages, frameworks & developer tools.
          </p>
        </div>
      </div>

      {/* Grid of Tech Categories with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((cat, idx) => {
          const IconComponent = iconMap[cat.title] || Layers;
          const isCategoryHovered = activeCategory === cat.title;

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card3DTilt maxTilt={10} scale={1.03}>
                <div
                  onMouseEnter={() => setActiveCategory(cat.title)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`glass-panel p-8 rounded-3xl relative overflow-hidden transition-all duration-500 bg-[#0A0A0F]/85 ${
                    isCategoryHovered
                      ? 'border-[#F59E0B]/60 shadow-[0_15px_40px_rgba(245,158,11,0.2)]'
                      : 'border-[#F59E0B]/25'
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/40 flex items-center justify-center text-[#FACC15] shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-mono font-extrabold text-white tracking-wider uppercase">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#9CA3AF] font-sans font-medium">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#F59E0B]/20">
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="group relative px-4 py-2 rounded-xl glass-button border border-[#F59E0B]/30 hover:border-[#FACC15] flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] group-hover:bg-[#FACC15] transition-colors" />
                        <span className="text-xs font-mono font-bold text-white group-hover:text-[#FACC15] transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#9CA3AF] hidden sm:inline-block">
                          ({skill.tag})
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
