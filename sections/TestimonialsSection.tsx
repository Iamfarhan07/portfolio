"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aryan Mehta",
    role: "Founder, StyleCircle",
    avatar: "AM",
    color: "bg-blue-500",
    rating: 5,
    text: "Farhan built our entire marketplace from scratch. His ability to understand both the technical and business requirements was exceptional. The platform launched on time and the codebase is clean and scalable. Highly recommend working with him.",
  },
  {
    name: "Priya Nair",
    role: "HR Manager, TechRecruit India",
    avatar: "PN",
    color: "bg-purple-500",
    rating: 5,
    text: "The AI Resume Builder Farhan developed completely transformed how our candidates prepare applications. The ATS checker alone has improved our interview-to-application ratio significantly. He delivered beyond our expectations.",
  },
  {
    name: "Rohit Deshmukh",
    role: "Operations Lead, SafeFactory",
    avatar: "RD",
    color: "bg-green-500",
    rating: 5,
    text: "Farhan's AI PPE detection system has saved us significant compliance overhead. It's accurate, fast, and the Flask API integrates perfectly with our existing infrastructure. The real-time alerting works flawlessly.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Event Director, GameOn Tournaments",
    avatar: "SK",
    color: "bg-orange-500",
    rating: 5,
    text: "The tournament platform Farhan built handles hundreds of participants simultaneously with zero downtime. The live bracket updates and payment integration work seamlessly. Our users love the experience.",
  },
  {
    name: "Kabir Shah",
    role: "CTO, ConnectNow",
    avatar: "KS",
    color: "bg-rose-500",
    rating: 5,
    text: "I was blown away by how fast and reliable the chat app Farhan built is. Socket.io integration is top-notch, works perfectly on both iOS and Android. He's a true professional who communicates clearly throughout the project.",
  },
  {
    name: "Tanvi Joshi",
    role: "EdTech Founder",
    avatar: "TJ",
    color: "bg-teal-500",
    rating: 5,
    text: "Farhan's 3D Solar System project was a standout demo for our science curriculum product. His Three.js skills are incredible. Students are genuinely more engaged. His creativity and technical depth are rare to find.",
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border)]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-500 text-sm mb-3">// kind words</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)]">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            Real feedback from clients and collaborators I&apos;ve had the privilege of working with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, avatar, color, rating, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] card-hover relative overflow-hidden"
            >
              <Quote
                size={40}
                className="absolute top-4 right-4 text-brand-500/10"
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-brand-500 text-brand-500" />
                ))}
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 italic">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold font-display`}
                >
                  {avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-[var(--text)]">{name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
