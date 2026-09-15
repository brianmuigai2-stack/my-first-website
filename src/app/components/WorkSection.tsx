import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    category: 'Streaming · Full-Stack',
    title: 'Podcast Platform',
    desc: 'Full-featured podcast streaming platform with 1,000+ podcast catalogue and 50,000+ minutes of content streamed. Built with React and Flask.',
    year: '2024',
    tags: ['React', 'Flask', 'Tailwind', 'Streaming'],
    bg: 'https://i.pinimg.com/736x/90/18/f1/9018f102382fac67bad8391c3d789564.jpg',
    highlight: '50K+ mins streamed',
    github: 'https://github.com/elvinmwarangu-stack/podcast-platform',
    live: 'https://brians-fullstack.vercel.app/',
  },
  {
    id: 2,
    category: 'Sports · Frontend',
    title: 'Football Streaming App',
    desc: 'Live football match streaming with real-time scores, match stats, and a clean responsive UI. Built with Next.js and deployed on Vercel.',
    year: '2023',
    tags: ['React', 'Next.js', 'Vercel', 'Live Data'],
    bg: 'https://i.pinimg.com/736x/40/65/6d/40656d4b05c92b5f4a424fb0e7f3891d.jpg',
    highlight: 'Live scores',
    github: null,
    live: 'https://football-streaming-app-ten.vercel.app/',
  },
  {
    id: 3,
    category: 'Faith · Frontend',
    title: 'Faithflow',
    desc: 'Bible verse app with daily verses, bookmarks, reading plans, and share card functionality for spiritual growth tracking.',
    year: '2024',
    tags: ['React', 'JavaScript', 'CSS'],
    bg: '/FaithFlow.jpeg',
    highlight: 'Daily verses',
    github: null,
    live: 'https://faithflow-khaki.vercel.app/',
  },
  {
    id: 4,
    category: 'Streaming · Frontend',
    title: 'LiveCast',
    desc: 'A modern live streaming platform for content creators to broadcast and share their content with audiences. Built with React and Next.js.',
    year: '2024',
    tags: ['React', 'Next.js', 'Streaming'],
    bg: '/images/livecast-landing.png',
    highlight: 'Live streaming',
    github: 'https://github.com/brianmuigai2-stack/live-cast',
    live: 'https://live-cast254.netlify.app/',
  },
  {
    id: 5,
    category: 'Utility · Frontend',
    title: 'QR Code Generator',
    desc: 'A versatile QR code generator that creates custom QR codes for various purposes including URLs, text, and contact information.',
    year: '2024',
    tags: ['React', 'JavaScript', 'QR Library'],
    bg: '/images/qr-code.png',
    highlight: 'QR Codes',
    github: null,
    live: 'https://qr-generator-one-sigma-24.vercel.app/',
  },
]

function ProjectCard({ p }: { p: (typeof projects)[0] }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={p.bg}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(to top, rgba(30,20,16,0.95) 0%, rgba(30,20,16,0.4) 50%, transparent 100%)',
            opacity: 0.6,
          }}
        />
        <div
          className="absolute top-4 left-4 px-3 py-1"
          style={{
            background: 'var(--primary)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--primary-foreground)',
          }}
        >
          {p.category}
        </div>
        <div
          className="absolute bottom-4 left-4 px-3 py-1"
          style={{
            background: 'rgba(30,20,16,0.8)',
            border: '1px solid rgba(255,123,84,0.4)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            color: 'var(--primary)',
            letterSpacing: '0.08em',
          }}
        >
          {p.highlight}
        </div>
        <div
          className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: 'rgba(255,123,84,0.9)' }}
        >
          <ExternalLink size={14} style={{ color: 'var(--primary-foreground)' }} />
        </div>
      </div>

      <div className="pt-5 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--foreground)',
            }}
          >
            {p.title}
          </h3>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: 'rgba(255,123,84,0.5)',
              flexShrink: 0,
            }}
          >
            {p.year}
          </span>
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            color: 'var(--muted-foreground)',
            lineHeight: 1.6,
          }}
        >
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5"
              style={{
                border: '1px solid var(--border)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                color: 'var(--muted-foreground)',
                textTransform: 'uppercase',
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--muted-foreground)'
              }}
            >
              <Github size={12} /> CODE
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--muted-foreground)'
              }}
            >
              <ExternalLink size={12} /> LIVE
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function WorkSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="work" ref={ref} className="py-20 lg:py-32 px-4 sm:px-8" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span
            className="uppercase tracking-[0.3em] text-sm mb-4 block"
            style={{
              color: 'var(--primary)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Selected Projects
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-0 justify-between">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.1,
                fontWeight: 700,
                color: 'var(--foreground)',
              }}
            >
              What I've
              <br />
              <em style={{ color: 'var(--primary)' }}>Built</em>
            </h2>
            <a
              href="https://github.com/brianmuigai2-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--muted-foreground)'
              }}
            >
              github.com/brianmuigai2-stack <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-10 lg:gap-y-12"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
