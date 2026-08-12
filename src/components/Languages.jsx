import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { languages } from '../data/portfolioData';
import Card3DTilt from './Card3DTilt';

export default function Languages() {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-3 text-xs font-mono text-[#F59E0B] tracking-widest uppercase mb-4 font-bold">
        <span>COMMUNICATION</span>
        <div className="h-[1px] w-12 bg-[#F59E0B]/40" />
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-8">
        LANGUAGES SPOKEN
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {languages.map((lang, idx) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card3DTilt maxTilt={10} scale={1.03}>
              <div className="glass-panel p-6 rounded-2xl flex items-center justify-between border-[#F59E0B]/25 hover:border-[#F59E0B]/60 transition-colors group shadow-lg bg-[#0A0A0F]/85">
                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-[#F59E0B] group-hover:text-[#FACC15] transition-colors" />
                  <span className="text-lg font-bold font-display text-white">
                    {lang.name}
                  </span>
                </div>

                <span className="text-xs font-mono text-[#FACC15] bg-[#F59E0B]/15 px-3 py-1 rounded-full border border-[#F59E0B]/30 font-bold tracking-wider">
                  {lang.level}
                </span>
              </div>
            </Card3DTilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
