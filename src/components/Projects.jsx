import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import Card3DTilt from './Card3DTilt';
import medicationImage from '../assets/medication_app_mockup.jpg';
import aiStudyImage from '../assets/ai_study_assistant_ui.jpg';

const projectImagesMap = {
  'med-tracker': medicationImage,
  'ai-assistant': aiStudyImage,
};

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
      <div className="flex items-center gap-3 text-xs font-mono text-[#F59E0B] tracking-widest uppercase mb-4 font-bold">
        <span>04 — PROJECTS</span>
        <div className="h-[1px] w-12 bg-[#F59E0B]/40" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-2">
            THINGS I'VE BUILT
          </h2>
          <p className="text-sm font-sans text-[#D1D5DB] font-medium">
            Selected showcase of software architecture, AI integration, and full-stack solutions.
          </p>
        </div>
      </div>

      {/* Showcase Grid with 3D Card Tilt & Real High-Res Pictures */}
      <div className="grid grid-cols-1 gap-12">
        {projects.map((proj, idx) => {
          const projectPic = projectImagesMap[proj.id] || medicationImage;

          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <Card3DTilt
                maxTilt={6}
                scale={1.015}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedProject(proj)}
                className="cursor-pointer"
              >
                <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden group border-[#F59E0B]/30 hover:border-[#F59E0B]/60 transition-all duration-500 shadow-2xl bg-[#0A0A0F]/90">
                  {/* Top Right Corner Action Button */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full glass-button flex items-center justify-center text-white group-hover:text-[#FACC15] group-hover:border-[#F59E0B] group-hover:rotate-45 transition-all duration-500 shadow-md z-20">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Details & Architecture Specs */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-xs font-mono text-[#F59E0B] font-extrabold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="uppercase tracking-widest">{proj.category}</span>
                        <span>•</span>
                        <span className="text-[#9CA3AF]">{proj.date}</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-bold font-display text-white group-hover:text-gold-gradient transition-all leading-tight">
                        {proj.title}
                      </h3>

                      <p className="text-base text-[#E5E7EB] font-sans leading-relaxed font-medium">
                        {proj.description}
                      </p>

                      {/* Key Features Bullet List */}
                      <div className="flex flex-col gap-2 pt-2">
                        {proj.features.slice(0, 2).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                            <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {proj.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#FACC15] font-extrabold group-hover:border-[#FACC15]/60 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Picture Showcase Frame */}
                    <div className="lg:col-span-6 relative w-full aspect-[16/10] rounded-2xl glass-panel border-[#F59E0B]/30 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                      <img
                        src={projectPic}
                        alt={proj.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="text-xs font-mono font-extrabold text-[#FACC15] bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#F59E0B]/40 flex items-center gap-1.5">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>INTERACTIVE MOCKUP</span>
                        </span>

                        <span className="text-xs font-mono text-white font-extrabold bg-[#F59E0B]/90 text-black px-3 py-1.5 rounded-lg shadow-md">
                          VIEW ARCHITECTURE ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          );
        })}
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
