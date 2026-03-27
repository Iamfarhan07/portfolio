"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "ClosetLoop",
    category: "Marketplace Platform",
    desc: "Hyper-local fashion resale platform with managed services including quality control, cleaning, and last-mile delivery. Built with a business-first architecture to scale city-by-city.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Stripe"],
    color: "from-orange-500/20 to-amber-500/10",
    github: "https://github.com/yourusername",
    demo: "#",
  },
  {
    id: "02",
    title: "AI Resume Builder & ATS Checker",
    category: "AI Career Tool",
    desc: "Smart resume builder with AI-powered suggestions and ATS optimization. Analyzes job descriptions and tailors resume content to maximize interview chances.",
    tech: ["React", "Python", "Flask", "OpenAI API", "MySQL"],
    color: "from-blue-500/20 to-cyan-500/10",
    github: "https://github.com/yourusername",
    demo: "#",
  },
  {
    id: "03",
    title: "AI PPE Detection System",
    category: "Computer Vision",
    desc: "Real-time Personal Protective Equipment detection system for industrial safety compliance. Uses computer vision to monitor workers and alert when safety gear is missing.",
    tech: ["Python", "OpenCV", "YOLOv8", "Flask", "TensorFlow"],
    color: "from-green-500/20 to-emerald-500/10",
    github: "https://github.com/yourusername",
    demo: "#",
  },
  {
    id: "04",
    title: "Event & Tournament Platform",
    category: "Event Management",
    desc: "Full-featured platform for listing, managing, and participating in tournaments and events. Includes bracket management, live score updates, and integrated payment processing.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Razorpay"],
    color: "from-purple-500/20 to-violet-500/10",
    github: "https://github.com/yourusername",
    demo: "#",
  },
  {
    id: "05",
    title: "Real-Time Chat Application",
    category: "Communication App",
    desc: "Cross-platform messaging app with real-time communication, group chats, and media sharing. Built with React Native for mobile and Node.js backend.",
    tech: ["React Native", "Node.js", "Socket.io", "MongoDB", "Redis"],
    color: "from-rose-500/20 to-pink-500/10",
    github: "https://github.com/yourusername",
    demo: "#",
  },
  {
    id: "06",
    title: "3D Interactive Solar System",
    category: "3D WebGL",
    desc: "Immersive 3D visualization of our solar system built with Three.js. Features accurate planet orbits, real-time rotation, and interactive zoom with detailed planetary info.",
    tech: ["Three.js", "JavaScript", "WebGL", "GSAP"],
    color: "from-yellow-500/20 to-orange-500/10",
    github: "https://github.com/yourusername",
    demo: "#",
  },
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden card-hover`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="font-mono text-xs text-brand-500 bg-brand-500/10 px-2 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <span className="font-mono text-3xl font-bold text-[var(--border)] group-hover:text-brand-500/20 transition-colors">
            {project.id}
          </span>
        </div>

        <h3 className="font-display font-bold text-xl text-[var(--text)] mb-3">{project.title}</h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-xs font-mono text-[var(--text-muted)] border border-[var(--border)] rounded-full bg-[var(--bg)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] hover:text-brand-500 transition-colors"
          >
            <Github size={14} />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] hover:text-brand-500 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="section-padding border-t border-[var(--border)]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-500 text-sm mb-3">// selected work</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)]">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            A selection of real-world projects that solve genuine problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-brand-500 transition-colors font-medium text-sm"
          >
            <Github size={16} />
            View all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
