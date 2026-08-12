import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050508] border-t border-[#F59E0B]/20 py-12 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Logo & Info */}
        <div className="flex items-center gap-4">
          <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FDE68A] via-[#F59E0B] to-[#B45309] flex items-center justify-center text-xs font-mono text-black font-extrabold shadow-md">
            {personalInfo.shortName}
          </span>
          <div>
            <h4 className="text-lg font-bold font-display text-white tracking-widest">
              {personalInfo.shortName}.
            </h4>
            <p className="text-xs font-mono text-[#9CA3AF] font-semibold">
              Designed & built by {personalInfo.name}.
            </p>
          </div>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#9CA3AF] hover:text-[#FACC15] transition-colors flex items-center gap-1.5 font-bold"
          >
            <GithubIcon className="w-4 h-4 text-[#F59E0B]" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#9CA3AF] hover:text-[#FACC15] transition-colors flex items-center gap-1.5 font-bold"
          >
            <LinkedinIcon className="w-4 h-4 text-[#F59E0B]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs font-mono text-[#9CA3AF] hover:text-[#FACC15] transition-colors flex items-center gap-1.5 font-bold"
          >
            <Mail className="w-4 h-4 text-[#F59E0B]" />
            <span>Email</span>
          </a>
        </div>

        {/* Right Back to Top */}
        <div className="flex items-center gap-4">
          <p className="text-xs font-mono text-[#9CA3AF] font-bold">
            © 2026 {personalInfo.name}
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-button text-white hover:text-[#FACC15] hover:border-[#F59E0B] transition-all shadow-sm"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
