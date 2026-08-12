import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Label */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
        <span>06 — CONTACT</span>
        <div className="h-[1px] w-12 bg-[#8B5CF6]/30" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 sm:p-14 lg:p-20 rounded-3xl relative overflow-hidden text-center border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8B5CF6]/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-[#8B5CF6]/40 text-xs font-mono text-[#22D3EE] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>LET'S CONNECT</span>
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white leading-tight">
            LET'S BUILD SOMETHING <br />
            <span className="text-accent-gradient">WORTH REMEMBERING.</span>
          </h2>

          <p className="text-base sm:text-lg font-sans text-[#8A8A8A] max-w-xl">
            Have an idea, opportunity or project worth exploring? Feel free to reach out. I am open to internships, frontend opportunities, and engineering collaborations.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-4 px-9 py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-black font-mono font-extrabold text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Social Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-10 pt-10 border-t border-white/10">
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-panel p-4 rounded-2xl flex items-center justify-center gap-3 text-xs font-mono text-white hover:text-[#22D3EE] hover:border-[#8B5CF6]/50 transition-colors group"
            >
              <Mail className="w-4 h-4 text-[#8B5CF6] group-hover:text-[#22D3EE] transition-colors" />
              <span>{personalInfo.email}</span>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl flex items-center justify-center gap-3 text-xs font-mono text-white hover:text-[#22D3EE] hover:border-[#8B5CF6]/50 transition-colors group"
            >
              <GithubIcon className="w-4 h-4 text-[#8B5CF6] group-hover:text-[#22D3EE] transition-colors" />
              <span>{personalInfo.githubDisplay}</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl flex items-center justify-center gap-3 text-xs font-mono text-white hover:text-[#22D3EE] hover:border-[#8B5CF6]/50 transition-colors group"
            >
              <LinkedinIcon className="w-4 h-4 text-[#8B5CF6] group-hover:text-[#22D3EE] transition-colors" />
              <span>{personalInfo.linkedinDisplay}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
