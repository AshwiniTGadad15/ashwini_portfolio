import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
        <span>VERIFIED CREDENTIALS</span>
        <div className="h-[1px] w-12 bg-[#8B5CF6]/30" />
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-12">
        LEARNING NEVER STOPS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="glass-panel p-6 rounded-2xl relative overflow-hidden group border-white/10 hover:border-[#8B5CF6]/40 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-[#8B5CF6] px-2.5 py-1 rounded-md bg-[#8B5CF6]/10 uppercase tracking-wider">
                {cert.category}
              </span>
              <ShieldCheck className="w-5 h-5 text-[#22D3EE]" />
            </div>

            <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[#22D3EE] transition-colors leading-snug">
              {cert.title}
            </h3>

            <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8A] pt-4 border-t border-white/5">
              <span>{cert.issuer}</span>
              <span>{cert.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
