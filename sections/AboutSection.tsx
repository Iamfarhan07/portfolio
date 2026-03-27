"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Cpu, Layers, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Cpu,
    title: "AI & ML",
    desc: "Building smart systems using OpenCV, Machine Learning and Python.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    desc: "End-to-end development from pixel-perfect UI to robust backends.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "Combining tech with business logic to create real-world solutions.",
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-padding border-t border-[var(--border)]">
      <div className="container-custom" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-brand-500 text-sm mb-3">// about me</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)] leading-tight mb-6">
              I Build Things That{" "}
              <span className="text-gradient">Matter</span>
            </h2>
            <div className="space-y-4 text-[var(--text-muted)] font-body leading-relaxed">
              <p>
                I&apos;m <strong className="text-[var(--text)]">Farhan Shaikh</strong>, a Full Stack Developer with a deep passion for building products that solve real-world problems. I don&apos;t just write code — I architect systems that scale.
              </p>
              <p>
                My expertise spans across modern web technologies, AI/ML integrations, and mobile development. I believe the best software sits at the intersection of <span className="text-brand-400 font-medium">great engineering</span> and <span className="text-brand-400 font-medium">smart business thinking</span>.
              </p>
              <p>
                From fashion resale platforms to AI safety detection systems — every project I build is crafted with purpose and precision.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Next.js", "Node.js", "Python", "Flask", "MongoDB"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-mono bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-brand-500 font-display font-semibold hover:gap-3 transition-all"
            >
              Let&apos;s work together →
            </a>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-500" />
                </div>
                <h3 className="font-display font-semibold text-[var(--text)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
