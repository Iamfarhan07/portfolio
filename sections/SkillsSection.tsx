"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS / JS", level: 95 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Flask / Python", level: 82 },
      { name: "Spring Boot / Java", level: 75 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    label: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    label: "AI & Mobile",
    skills: [
      { name: "Python / ML", level: 80 },
      { name: "OpenCV", level: 78 },
      { name: "React Native", level: 82 },
      { name: "Android Studio", level: 72 },
    ],
  },
];

const tagSkills = [
  "Git & GitHub", "Docker", "Socket.io", "Three.js", "GSAP",
  "Figma", "Postman", "VS Code", "Linux", "Agile/Scrum",
  "JWT Auth", "OAuth", "Stripe / Razorpay", "Vercel", "Netlify",
];

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-500 text-sm mb-3">// tech stack</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)]">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map(({ label, skills }, ci) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
            >
              <h3 className="font-display font-semibold text-[var(--text)] mb-5">{label}</h3>
              <div className="space-y-4">
                {skills.map(({ name, level }, si) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-[var(--text-muted)] font-body">{name}</span>
                      <span className="text-xs font-mono text-brand-500">{level}%</span>
                    </div>
                    <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 + ci * 0.1 + si * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="font-display font-semibold text-[var(--text)] mb-6">Tools & More</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tagSkills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                className="px-4 py-2 text-sm font-body border border-[var(--border)] text-[var(--text-muted)] rounded-full hover:border-brand-500/50 hover:text-brand-500 transition-all cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
