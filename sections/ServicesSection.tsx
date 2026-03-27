"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Smartphone, Brain, Code } from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Development",
    desc: "Full-stack web applications built with Next.js, React, Node.js, and modern tooling. From MVPs to enterprise-grade platforms.",
    tags: ["Next.js", "React", "Node.js", "Tailwind"],
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile Apps",
    desc: "Cross-platform mobile experiences with React Native and Android Studio. Performant, beautiful, and production-ready.",
    tags: ["React Native", "Android Studio", "Expo"],
  },
  {
    icon: Brain,
    number: "03",
    title: "AI Solutions",
    desc: "Intelligent systems using Machine Learning, Computer Vision (OpenCV), and Python. From detection models to AI-powered features.",
    tags: ["Python", "OpenCV", "ML", "Flask"],
  },
  {
    icon: Code,
    number: "04",
    title: "Custom Software",
    desc: "Bespoke backend systems, APIs, and integrations. Java Spring Boot, Express, REST APIs, database architecture and more.",
    tags: ["Spring Boot", "Express", "MySQL", "MongoDB"],
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-500 text-sm mb-3">// what i offer</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)]">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            End-to-end development across web, mobile, and AI. I take ideas from whiteboard to production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, number, title, desc, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-brand-500/40 transition-all duration-300 card-hover"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-300">
                  <Icon size={22} className="text-brand-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-mono text-4xl font-bold text-[var(--border)] group-hover:text-brand-500/20 transition-colors">
                  {number}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-[var(--text)] mb-3">{title}</h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm mb-6">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)] rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
