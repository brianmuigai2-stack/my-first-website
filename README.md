# Brian Muigai — Professional Developer Portfolio

> A modern, animated, and responsive portfolio website showcasing my projects, skills, and professional experience as a Software Engineer. Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion** — featuring cinema-quality animations, interactive elements, and professional design!

---

## Key Features

### Advanced Animations & Interactions
- **Framer Motion**: Smooth scroll-triggered animations, staggered reveals, and exit/enter transitions
- **Scroll-Linked Effects**: Parallax backgrounds, scroll progress bar, and view-aware animations via `useInView`
- **Staggered Element Reveals**: Professional timing for cards, skills, and achievements
- **Parallax Effects**: Multi-layer depth animations in hero section
- **Interactive Card Tilts**: 3D mouse-responsive hover effects
- **Smooth Scroll Navigation**: Seamless scrolling with active state indicators
- **Custom Dual Cursor**: A primary dot and trailing follower that reacts to clicks

### Professional Content Sections
- **Hero Section**: Professional positioning with animated stats, typing rotation, and tech badges
- **About Section**: Personal introduction with animated skill bars and tool tags
- **Resume Modal**: Complete professional resume with detailed experience (view/download)
- **Projects Section**: 8 showcase projects with live demos and source links
- **Services Section**: 6 professional service offerings with icons
- **Achievements Section**: By-the-numbers stats + education & certifications
- **System Design**: Architecture diagram and technical expertise cards
- **Technical Highlights**: Comprehensive skills grid (frontend, backend, tools, practices)
- **Currently Building**: In-progress SaaS projects
- **Contact Form**: EmailJS integration for direct communication

### Design & User Experience
- **Multiple Theme Options**: Light, Dark, Ocean, Forest, Sunset, Galaxy (persisted to `localStorage`)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Font Size Adjuster**: Adjustable font sizes for accessibility (persisted)
- **Loading & Page Transitions**: Overlay transition animations
- **Snow Effect**: Subtle animated snow that adapts to the active theme
- **PWA Support**: Web app manifest and service worker

### Technical Features
- **Vite Build System**: Lightning-fast dev server and optimized production builds
- **Tailwind CSS v4**: Utility-first styling with custom design tokens
- **TypeScript**: Type-safe components throughout
- **lucide-react**: Icon library for crisp, consistent icons
- **EmailJS**: Contact form without a backend (`@emailjs/browser`)
- **SEO Optimized**: Meta tags, semantic HTML, structured data (JSON-LD)
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

---

## Project Structure

| File/Folder | Description |
|-------------|-------------|
| `index.html` | Root HTML with SEO meta tags and PWA manifest link |
| `src/main.tsx` | React entry point, service worker registration |
| `src/app/App.tsx` | Root component composing all sections + ThemeProvider |
| `src/app/components/` | All React components (sections, features) |
| `src/app/lib/ThemeContext.tsx` | Theme context for 6-theme switching |
| `src/styles/` | Tailwind config, theme variables, and global CSS |
| `public/` | Static assets (images, audio, certificates, manifest, sw) |
| `package.json` | NPM configuration with all dependencies |
| `vite.config.ts` | Vite + React + Tailwind configuration |

---

## Technologies Used

### Frontend
- **React 18** — Component-based UI with hooks
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Production-ready animations (`motion/react`)
- **lucide-react** — Beautiful icon library

### Build Tooling
- **Vite 6** — Next-generation build tool
- **@vitejs/plugin-react** — Fast HMR and JSX transform

### Packages
- **@emailjs/browser** — EmailJS SDK for the contact form
- **clsx** / **tailwind-merge** — Utility class composition

### Deployment
- **Vercel** — Zero-config deployment
- **GitHub Pages** — Static hosting (requires SPA fallback config)
- **Netlify** — Drag-and-drop hosting
- **Any static host** — `npm run build` outputs a `dist/` folder

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Installation
```bash
# Clone the repository
git clone https://github.com/brianmuigai2-stack/my-first-website.git
cd my-first-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Building for Production
```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment. Preview it locally with `npm run preview`.

---

## Theme System

The portfolio supports 6 themes, persisted to `localStorage`:
- **Dark** (default) — warm dark amber (#0d0b08 / #e07b2a)
- **Light** — light background with amber accents
- **Ocean** — deep blue palette
- **Forest** — dark green palette
- **Sunset** — warm orange/red palette
- **Galaxy** — deep purple palette

Themes are managed via the `ThemeProvider` in `src/app/lib/ThemeContext.tsx`, which sets a `data-theme` attribute on the document element. All components use CSS custom properties (`var(--primary)`, `var(--background)`, etc.) so they automatically adapt.

---

## EmailJS Setup

The contact form uses EmailJS to send messages without a backend.

1. **Create EmailJS Account**: [EmailJS.com](https://www.emailjs.com/)
2. **Add Email Service**: Connect your Gmail or other email provider
3. **Create Email Template**: Include variables: `from_name`, `from_email`, `message`, `sent_date`, `portfolio_url`
4. **Get Your IDs**: User ID (public key), Service ID, Template ID
5. **Update** the constants in `src/app/components/ContactSection.tsx`:
   ```ts
   const EMAILJS_PUBLIC_KEY = 'your-key'
   const EMAILJS_SERVICE_ID = 'your-service-id'
   const EMAILJS_TEMPLATE_ID = 'your-template-id'
   ```

---

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Vite and deploys your site
3. Get a custom domain: `your-site.vercel.app`

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages → Build and deployment → Source: `Deploy from a GitHub Action`
3. Or use a static export with `npm run build` and configure SPA fallback (404.html)
4. Your site will be live at: `https://brianmuigai2-stack.github.io/my-first-website/`

### Netlify (Drag & Drop)
1. Run `npm run build`
2. Drag the entire `dist/` folder to Netlify
3. Your site is instantly live

---

## Development Notes

- All animations use Framer Motion (no external AOS dependency)
- The custom cursor is disabled on mobile; it listens for `mousemove`/`mousedown`/`mouseup`
- Project images use the `ImageWithFallback` component (`<src/app/components/figma/ImageWithFallback.tsx>`) which shows a fallback SVG if an image fails to load
- Static assets live in `public/` and are served from the root URL (e.g., `/Yobi.jpg`)

---

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | Full |
| Firefox | 88+ | Full |
| Safari | 14+ | Full |
| Edge | 90+ | Full |
| Mobile | iOS 14+, Android 10+ | Full |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Install dependencies: `npm install`
4. Start dev server: `npm run dev`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Connect With Me

**Portfolio**: [brianmuigai2-stack.github.io/my-first-website](https://brianmuigai2-stack.github.io/my-first-website/)

**LinkedIn**: [linkedin.com/in/brian-muigai-197210382](https://linkedin.com/in/brian-muigai-197210382/)

**GitHub**: [github.com/brianmuigai2-stack](https://github.com/brianmuigai2-stack)

**Email**: [brian11613bmw@gmail.com](mailto:brian11613bmw@gmail.com)

**Phone**: [+254 707528414](tel:+254707528414)

---

*Built by Brian Muigai — Software Engineer*
