import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Calendar, User, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xl"
          />

          {/* Modal Card Drawer Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-10 z-10 border-[#7C3AED]/40 shadow-[0_25px_70px_rgba(124,58,237,0.25)] max-h-[90vh] overflow-y-auto bg-white/95"
          >
            {/* Header / Back CTA Bar */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-xs font-mono font-bold text-[#7C3AED] hover:text-[#C026D3] uppercase tracking-wider transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>BACK TO PROJECTS</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full glass-button text-[#0F172A] hover:text-[#7C3AED] transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Tag */}
            <span className="text-xs font-mono text-[#06B6D4] font-extrabold tracking-widest uppercase block mb-2">
              {project.category}
            </span>

            {/* Project Name */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0F172A] mb-4">
              {project.title}
            </h2>

            {/* Timeline & Role Meta Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#64748B] font-semibold mb-8 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#7C3AED]" />
                <span>TIMELINE: {project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#C026D3]" />
                <span>ROLE: {project.role}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xs font-mono text-[#64748B] font-bold tracking-widest uppercase mb-2">
                OVERVIEW
              </h3>
              <p className="text-base sm:text-lg font-sans text-[#1E293B] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="mb-8">
              <h3 className="text-xs font-mono text-[#64748B] font-bold tracking-widest uppercase mb-4">
                KEY FEATURES & ARCHITECTURE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="glass-panel p-4 rounded-xl border-slate-200 flex items-start gap-3 shadow-xs">
                    <CheckCircle className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                    <span className="text-sm font-sans font-medium text-[#0F172A]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-mono text-[#64748B] font-bold tracking-widest uppercase mb-3">
                TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl text-xs font-mono bg-[#7C3AED]/10 border border-[#7C3AED]/40 text-[#7C3AED] font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
