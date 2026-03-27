"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Projects Completed", desc: "Real-world shipped products" },
  { value: 15, suffix: "+", label: "Technologies", desc: "Across the full stack" },
  { value: 3, suffix: "+", label: "Years Experience", desc: "Building & shipping apps" },
  { value: 100, suffix: "%", label: "Client Satisfaction", desc: "Always delivering on time" },
];

function CountUp({ to, suffix, inView }: { to: number; suffix: string; inView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [inView, to, count]);

  return (
    <span className="font-display font-extrabold text-5xl md:text-6xl text-gradient">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding border-t border-[var(--border)]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-500 text-sm mb-3">// by the numbers</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)]">
            Impact & <span className="text-gradient">Growth</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, suffix, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] text-center group hover:border-brand-500/40 transition-all card-hover"
            >
              <CountUp to={value} suffix={suffix} inView={inView} />
              <p className="mt-2 font-display font-semibold text-[var(--text)] text-sm">{label}</p>
              <p className="mt-1 text-xs text-[var(--text-muted)]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
