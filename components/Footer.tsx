"use client";

import { Github, Linkedin, Instagram, Youtube, Send } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/yourusername" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/yourusername" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@yourusername" },
  { icon: Send, label: "Telegram", href: "https://t.me/yourusername" },
];

const navLinks = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center font-display font-bold text-white text-sm">
                FS
              </div>
              <span className="font-display font-bold text-xl text-[var(--text)]">
                Work<span className="text-brand-500">With</span>FS
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
              Building scalable digital products that combine technology and business logic. Available for freelance & full-time roles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-[var(--text)] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-[var(--text-muted)] hover:text-brand-500 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display font-semibold text-[var(--text)] mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-brand-500 hover:border-brand-500 transition-all hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--text-muted)]">
              📧{" "}
              <a href="mailto:farhan@workwithfs.dev" className="hover:text-brand-500 transition-colors">
                farhan@workwithfs.dev
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Work With FS. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with ❤️ by{" "}
            <span className="text-brand-500 font-medium">Farhan Shaikh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
