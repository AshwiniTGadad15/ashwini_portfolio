import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { languages } from '../data/portfolioData';

export default function Languages() {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-3 text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
        <span>COMMUNICATION</span>
        <div className="h-[1px] w-12 bg-[#8B5CF6]/30" />
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
            className="glass-panel p-6 rounded-2xl flex items-center justify-between border-white/10 hover:border-[#22D3EE]/40 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-[#8B5CF6] group-hover:text-[#22D3EE] transition-colors" />
              <span className="text-lg font-bold font-display text-white">
                {lang.name}
              </span>
            </div>

            <span className="text-xs font-mono text-[#22D3EE] bg-[#22D3EE]/10 px-3 py-1 rounded-full border border-[#22D3EE]/20 font-semibold tracking-wider">
              {lang.level}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
