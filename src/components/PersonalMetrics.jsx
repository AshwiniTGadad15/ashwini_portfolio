import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { metrics } from '../data/portfolioData';

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Extract digits from metric string e.g. "03+" -> 3, "500+" -> 500
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

  // Format single digits with leading zero e.g. 03
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
            className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#8B5CF6]/40 transition-all duration-500"
          >
            {/* Top Border Gradient Glow Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Metric ID Badge */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-[#8A8A8A] tracking-wider">METRIC // {metric.id}</span>
              <div className="w-2 h-2 rounded-full bg-[#22D3EE] group-hover:scale-150 transition-transform" />
            </div>

            {/* Metric Animated Value */}
            <div className="text-5xl sm:text-6xl font-black text-gradient tracking-tight mb-2">
              <AnimatedCounter value={metric.value} />
            </div>

            {/* Metric Label */}
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white mb-1">
              {metric.label}
            </h4>

            {/* Metric Subtext */}
            <p className="text-xs text-[#8A8A8A] font-sans">
              {metric.subtext}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
