import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { metrics } from '../data/portfolioData';
import Card3DTilt from './Card3DTilt';

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const numericTarget = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const steps = 60;
    const increment = numericTarget / steps;
    const stepTime = (duration * 1000) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericTarget, duration]);

  const formattedCount = numericTarget < 10 ? `0${count}` : count;

  return (
    <span ref={ref} className="font-display font-black">
      {isInView ? `${formattedCount}${suffix}` : value}
    </span>
  );
}

export default function PersonalMetrics() {
  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
          >
            <Card3DTilt maxTilt={10} scale={1.03}>
              <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#F59E0B]/60 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(245,158,11,0.2)] bg-[#0A0A0F]/80">
                {/* Top Border Gradient Gold Accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#B45309] opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Metric ID Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-[#9CA3AF] font-bold tracking-wider">METRIC // {metric.id}</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] group-hover:scale-150 transition-transform shadow-md" />
                </div>

                {/* Metric Animated Value */}
                <div className="text-5xl sm:text-6xl font-black text-gold-gradient tracking-tight mb-2 drop-shadow-md">
                  <AnimatedCounter value={metric.value} />
                </div>

                {/* Metric Label */}
                <h4 className="text-xs font-mono font-extrabold tracking-widest uppercase text-white mb-1">
                  {metric.label}
                </h4>

                {/* Metric Subtext */}
                <p className="text-xs text-[#D1D5DB] font-sans font-medium">
                  {metric.subtext}
                </p>
              </div>
            </Card3DTilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
