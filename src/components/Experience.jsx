import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, CheckCircle2, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import Card3DTilt from './Card3DTilt';

export default function Experience() {
  const [expandedId, setExpandedId] = useState(experiences[0].id);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Label */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#4F46E5] tracking-widest uppercase mb-4 font-bold">
        <span>02 — EXPERIENCE</span>
        <div className="h-[1px] w-12 bg-[#4F46E5]/30" />
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-[#0F172A] mb-12">
        WHERE I'VE BUILT
      </h2>

      {/* Expandable Timeline Cards with 3D Tilt */}
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
            >
              <Card3DTilt maxTilt={5} scale={1.01}>
                <div
                  className={`glass-panel rounded-3xl overflow-hidden transition-all duration-500 ${
                    isExpanded
                      ? 'border-[#4F46E5]/60 shadow-[0_15px_45px_rgba(79,70,229,0.16)] bg-white/95'
                      : 'border-slate-200 hover:border-[#4F46E5]/30'
                  }`}
                >
                  {/* Header Bar */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none group"
                  >
                    <div className="flex items-start md:items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#4F46E5]/10 border border-[#4F46E5]/30 flex items-center justify-center text-[#4F46E5] group-hover:scale-110 transition-transform shadow-sm">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#06B6D4] font-extrabold tracking-wider uppercase block mb-1">
                          {exp.status}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-sans text-[#64748B] font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] font-bold">
                        <Calendar className="w-4 h-4 text-[#4F46E5]" />
                        <span>{exp.period}</span>
                      </div>

                      <button
                        className="p-2 rounded-full glass-button text-[#0F172A] group-hover:border-[#4F46E5] transition-colors"
                        aria-label="Expand Experience Details"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-500 ${
                            isExpanded ? 'rotate-180 text-[#4F46E5]' : 'text-[#0F172A]'
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
                        className="overflow-hidden border-t border-slate-200 bg-slate-50/60"
                      >
                        <div className="p-6 sm:p-8 flex flex-col gap-6">
                          <h4 className="text-xs font-mono tracking-widest text-[#64748B] font-bold uppercase">
                            KEY DELIVERABLES & IMPACT
                          </h4>

                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {exp.highlights.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-[#1E293B] font-sans leading-relaxed font-medium">
                                <CheckCircle2 className="w-4 h-4 text-[#4F46E5] shrink-0 mt-1" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Pills */}
                          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200">
                            <span className="text-xs font-mono text-[#64748B] font-bold mr-2">TECH UTILIZED:</span>
                            {exp.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-full text-xs font-mono bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-[#4F46E5] font-bold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card3DTilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
