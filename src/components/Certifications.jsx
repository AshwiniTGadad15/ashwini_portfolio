import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import Card3DTilt from './Card3DTilt';

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#4F46E5] tracking-widest uppercase mb-4 font-bold">
        <span>VERIFIED CREDENTIALS</span>
        <div className="h-[1px] w-12 bg-[#4F46E5]/30" />
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-[#0F172A] mb-12">
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
          >
            <Card3DTilt maxTilt={10} scale={1.03}>
              <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group border-slate-200 hover:border-[#4F46E5]/50 transition-all shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-extrabold text-[#4F46E5] px-2.5 py-1 rounded-md bg-[#4F46E5]/10 uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#06B6D4]" />
                </div>

                <h3 className="text-lg font-bold font-display text-[#0F172A] mb-2 group-hover:text-[#4F46E5] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between text-xs font-mono text-[#64748B] font-semibold pt-4 border-t border-slate-200">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            </Card3DTilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
