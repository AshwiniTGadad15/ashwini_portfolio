import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, CheckCircle2, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [expandedId, setExpandedId] = useState(experiences[0].id);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Label */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
        <span>02 — EXPERIENCE</span>
        <div className="h-[1px] w-12 bg-[#8B5CF6]/30" />
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-12">
        WHERE I'VE BUILT
      </h2>

      {/* Cinematic Expandable Timeline Cards */}
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass-panel rounded-3xl overflow-hidden border transition-all duration-500 ${
                isExpanded ? 'border-[#8B5CF6]/60 shadow-[0_10px_40px_rgba(139,92,246,0.15)] bg-[#0B0B0F]/90' : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Header Bar */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none group"
              >
                <div className="flex items-start md:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#22D3EE] group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#22D3EE] tracking-wider uppercase block mb-1">
                      {exp.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#22D3EE] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-sans text-[#8A8A8A]">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A]">
                    <Calendar className="w-4 h-4 text-[#8B5CF6]" />
                    <span>{exp.period}</span>
                  </div>

                  <button
                    className="p-2 rounded-full glass-button text-white group-hover:border-[#8B5CF6] transition-colors"
                    aria-label="Expand Experience Details"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-500 ${
                        isExpanded ? 'rotate-180 text-[#22D3EE]' : 'text-white'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Expandable Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden border-t border-white/10 bg-[#050505]/40"
                  >
                    <div className="p-6 sm:p-8 flex flex-col gap-6">
                      <h4 className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
                        KEY DELIVERABLES & IMPACT
                      </h4>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.highlights.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#F5F5F5] font-sans leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                        <span className="text-xs font-mono text-[#8A8A8A] mr-2">TECH UTILIZED:</span>
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-mono bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#22D3EE]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
