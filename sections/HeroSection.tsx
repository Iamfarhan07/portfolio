"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react";

const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-500/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-400/5 blur-3xl -z-10" />

      {/* Floating orb */}
      <motion.div
        variants={floatVariant}
        initial="initial"
        animate="animate"
        className="absolute top-20 right-16 md:right-32 w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 backdrop-blur-sm hidden md:flex items-center justify-center"
      >
        <Sparkles size={24} className="text-brand-400" />
      </motion.div>

      <motion.div
        variants={floatVariant}
        initial="initial"
        animate={{ y: [10, -10, 10], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-32 left-16 md:left-32 w-14 h-14 rounded-xl bg-brand-500/10 border border-brand-500/20 hidden md:flex items-center justify-center font-mono text-brand-400 text-xs font-bold"
      >
        {"</>"}
      </motion.div>

      {/* Main content */}
      <div className="container-custom text-center">
        {/* Badge */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-medium font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          Available for hire
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight text-[var(--text)] mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">Farhan</span>
        </motion.h1>

        {/* Type animation */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-[var(--text-muted)] mb-6 h-16 flex items-center justify-center"
        >
          I&nbsp;
          <TypeAnimation
            sequence={[
              "Build Scalable Apps.",
              2000,
              "Craft AI Solutions.",
              2000,
              "Ship Mobile Products.",
              2000,
              "Solve Real Problems.",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-[var(--text)]"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mb-10 font-body"
        >
          Full Stack Developer specializing in real-world scalable applications.
          Combining <span className="text-brand-400 font-medium">technology + business logic</span> to create digital products that make an impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-display font-semibold rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/40 text-base"
          >
            Hire Me
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-[var(--border)] hover:border-brand-500 text-[var(--text)] font-display font-semibold rounded-full transition-all hover:scale-105 text-base hover:text-brand-500"
          >
            View Work
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-brand-500 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <span className="w-px h-4 bg-[var(--border)]" />
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-brand-500 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
