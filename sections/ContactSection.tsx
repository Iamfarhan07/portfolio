"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "farhanfs1666@gmail.com", href: "mailto:farhanfs1666@gmail.com" },
  { icon: MapPin, label: "Location", value: "India (Remote Worldwide)", href: null },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email me directly.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder:text-[var(--text-muted)] text-sm font-body focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30 transition-all";

  return (
    <section id="contact" className="section-padding border-t border-[var(--border)]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-500 text-sm mb-3">// get in touch</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--text)]">
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            Have a project in mind? I&apos;m currently available for freelance and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-brand-500" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-muted)] mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-[var(--text)] hover:text-brand-500 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[var(--text)]">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-8 p-5 rounded-2xl border border-brand-500/20 bg-brand-500/5">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                <span className="text-brand-400 font-semibold font-display">Open to opportunities</span> — whether you need a full-stack developer, AI integration, or a technical co-founder, let&apos;s build something great.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-20 text-center"
              >
                <CheckCircle size={56} className="text-brand-500" />
                <h3 className="font-display font-bold text-2xl text-[var(--text)]">Message Sent!</h3>
                <p className="text-[var(--text-muted)]">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-3 bg-brand-500 text-white rounded-full font-display font-semibold text-sm hover:bg-brand-600 transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                      Name <span className="text-brand-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                      Email <span className="text-brand-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5">
                    Message <span className="text-brand-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-rose-500 text-sm"
                  >
                    <AlertCircle size={16} />
                    {errorMsg}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-500/30 text-base"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
