import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Work With FS – Farhan Shaikh | Full Stack Developer",
  description:
    "Farhan Shaikh is a Full Stack Developer specializing in scalable web apps, AI solutions, and mobile development. Build. Scale. Innovate.",
  keywords: [
    "Farhan Shaikh",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "AI Developer",
    "Work With FS",
  ],
  authors: [{ name: "Farhan Shaikh" }],
  creator: "Farhan Shaikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workwithfs.dev",
    title: "Work With FS – Farhan Shaikh | Full Stack Developer",
    description:
      "Full Stack Developer specializing in scalable web apps, AI solutions, and mobile development.",
    siteName: "Work With FS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work With FS – Farhan Shaikh",
    description: "Full Stack Developer. Build. Scale. Innovate.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="mesh-bg min-h-screen">{children}</body>
    </html>
  );
}
