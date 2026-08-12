import React from 'react';
import { Sparkles } from 'lucide-react';
import { softSkills } from '../data/portfolioData';

export default function SoftSkillsMarquee() {
  const repeatedSkills = [...softSkills, ...softSkills, ...softSkills, ...softSkills];

  return (
    <section className="py-12 bg-[#0B0B0F]/60 border-y border-white/5 relative overflow-hidden z-10">
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 py-2">
          {repeatedSkills.map((skill, index) => (
            <div key={index} className="flex items-center gap-8 shrink-0">
              <span className="text-xl sm:text-2xl font-display font-extrabold tracking-widest text-[#8A8A8A] hover:text-white transition-colors uppercase">
                {skill}
              </span>
              <Sparkles className="w-4 h-4 text-[#8B5CF6] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
