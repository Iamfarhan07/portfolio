# Work With FS – Farhan Shaikh's Portfolio

> Build. Scale. Innovate.

A premium, production-ready portfolio website built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and configure
cp .env.example .env.local

# 3. Run development server
npm run dev

# 4. Build for production
npm run build

# 5. Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Type Animation**: react-type-animation
- **Intersection Observer**: react-intersection-observer

## 📂 Project Structure

```
workwithfs/
├── app/
│   ├── api/contact/route.ts   # Contact form API
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout + SEO
│   └── page.tsx               # Main page
├── components/
│   ├── CustomCursor.tsx
│   ├── Footer.tsx
│   ├── MarqueeBanner.tsx
│   └── Navbar.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
├── public/
├── .env.example
├── netlify.toml
├── vercel.json
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add env variables from `.env.example`
4. Deploy — done!

### Netlify
1. Push to GitHub
2. Import repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Install `@netlify/plugin-nextjs` plugin

## ✏️ Customization

- **Social Links**: Update `href` values in `components/Navbar.tsx`, `components/Footer.tsx`
- **Projects**: Edit `sections/ProjectsSection.tsx`
- **Contact Email**: Update `farhan@workwithfs.dev` in `components/Footer.tsx` and `sections/ContactSection.tsx`
- **Backend Email**: Integrate EmailJS or a mail provider in `app/api/contact/route.ts`

## 📄 License

MIT – feel free to use and customize for your own portfolio.
