"use client";

const items = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "OpenCV", "MongoDB", "MySQL", "React Native", "Flask",
  "Spring Boot", "Tailwind CSS", "Three.js", "Socket.io",
  "Machine Learning", "Java", "C++", "Express.js",
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];
  return (
    <div className="py-6 border-y border-[var(--border)] overflow-hidden bg-[var(--bg-secondary)]">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-8 font-mono text-sm text-[var(--text-muted)] whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
