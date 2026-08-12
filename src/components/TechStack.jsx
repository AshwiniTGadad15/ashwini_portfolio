import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Terminal, Database, Cpu, Wrench } from 'lucide-react';
import { techCategories } from '../data/portfolioData';

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
      <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
        <span>03 — SKILLS</span>
        <div className="h-[1px] w-12 bg-[#8B5CF6]/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-2">
            TOOLS OF THE TRADE
          </h2>
          <p className="text-sm font-sans text-[#8A8A8A]">
            Core competencies, programming languages, frameworks & developer tools.
          </p>
        </div>
      </div>

      {/* Grid of Tech Categories */}
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
              onMouseEnter={() => setActiveCategory(cat.title)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`glass-panel p-8 rounded-3xl relative overflow-hidden transition-all duration-500 ${
                isCategoryHovered ? 'border-[#8B5CF6]/50 bg-[#0B0B0F]/90 shadow-[0_0_30px_rgba(139,92,246,0.15)]' : 'border-white/10'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#22D3EE]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-mono font-bold text-white tracking-wider uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#8A8A8A] font-sans">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative px-4 py-2 rounded-xl glass-button border border-white/10 hover:border-[#22D3EE]/50 flex items-center gap-2 cursor-pointer transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] group-hover:bg-[#22D3EE] transition-colors" />
                    <span className="text-xs font-mono font-medium text-white group-hover:text-[#22D3EE] transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#8A8A8A] hidden sm:inline-block">
                      ({skill.tag})
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
