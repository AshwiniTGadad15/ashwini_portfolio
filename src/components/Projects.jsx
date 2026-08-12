import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Code, Pill } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ setCursorText, setIsProjectHovered }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseEnter = () => {
    setCursorText('VIEW PROJECT →');
    setIsProjectHovered(true);
  };

  const handleMouseLeave = () => {
    setCursorText('');
    setIsProjectHovered(false);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Label */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
        <span>04 — PROJECTS</span>
        <div className="h-[1px] w-12 bg-[#8B5CF6]/30" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-2">
            THINGS I'VE BUILT
          </h2>
          <p className="text-sm font-sans text-[#8A8A8A]">
            Selected showcase of application architectures and frontend solutions.
          </p>
        </div>
      </div>

      {/* Asymmetric Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setSelectedProject(proj)}
            className="lg:col-span-12 glass-panel glass-panel-hover rounded-3xl p-8 sm:p-12 cursor-pointer relative overflow-hidden group border-white/10"
          >
            {/* Top Right Corner Action Icon */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-button flex items-center justify-center text-white group-hover:text-[#22D3EE] group-hover:border-[#22D3EE] group-hover:rotate-45 transition-all duration-500">
              <ArrowUpRight className="w-5 h-5" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-widest">{proj.category}</span>
                  <span>•</span>
                  <span className="text-[#8A8A8A]">{proj.date}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white group-hover:text-accent-gradient transition-all">
                  {proj.title}
                </h3>

                <p className="text-base text-[#8A8A8A] font-sans leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-[#22D3EE] group-hover:border-[#8B5CF6]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Abstract Visual Preview Card */}
              <div className="lg:col-span-5 relative w-full h-[220px] sm:h-[260px] rounded-2xl glass-panel bg-[#050505]/60 border-white/10 p-6 flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
                    <span className="w-3 h-3 rounded-full bg-[#22D3EE]" />
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <span className="text-[10px] font-mono text-[#8A8A8A]">HEALTH TECH // v1.0</span>
                </div>

                <div className="flex items-center justify-center gap-4 py-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#22D3EE] animate-pulse">
                    <Pill className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono font-bold text-white">Medication Tracker</span>
                    <span className="text-[11px] font-mono text-[#22D3EE]">Status: Reminders Active</span>
                    <span className="text-[10px] font-mono text-[#8A8A8A]">Frontend & Python Backend</span>
                  </div>
                </div>

                <div className="text-center text-xs font-mono text-[#8B5CF6] group-hover:text-[#22D3EE] transition-colors">
                  CLICK TO VIEW ARCHITECTURE ↗
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
