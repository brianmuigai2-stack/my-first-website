import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const PROFILE_IMG = import.meta.env.BASE_URL + 'Yobi.jpg'

const skills = [
  { label: 'HTML / CSS' },
  { label: 'JavaScript ES6+' },
  { label: 'Responsive Design' },
  { label: 'React.js' },
  { label: 'Node.js / Express' },
  { label: 'REST APIs' },
  { label: 'Python / FastAPI' },
  { label: 'Databases (SQL/NoSQL)' },
]

const tools = ['Git', 'GitHub', 'VS Code', 'Vite', 'Figma', 'Vercel', 'Render', 'Docker']

export function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 px-4 sm:px-8" style={{ background: 'var(--secondary)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative mb-12 lg:mb-0"
        >
          <div className="absolute -top-4 -left-4 w-full h-full" style={{ border: '1px solid var(--border)' }} />
          <ImageWithFallback
            src={PROFILE_IMG}
            alt="Brian Muigai"
            className="w-full max-w-xs sm:max-w-sm mx-auto"
            style={{ filter: 'sepia(15%)', borderRadius: '8px' }}
          />
          <div
            className="absolute -bottom-6 -right-6 px-6 py-4 z-20"
            style={{
              background: 'var(--primary)',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary-foreground)' }}>15+</div>
            <div
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: 'var(--primary-foreground)',
                fontFamily: "'JetBrains Mono', monospace",
                textTransform: 'uppercase',
                opacity: 0.85,
              }}
            >
              Apps
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span
            className="uppercase tracking-[0.3em] text-sm mb-4 block"
            style={{
              color: 'var(--primary)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            About Me
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              fontWeight: 700,
              color: 'var(--foreground)',
              marginBottom: '1.5rem',
            }}
          >
            Problem-solver,
            <br />
            <em style={{ color: 'var(--primary)' }}>builder</em> at heart.
          </h2>
          <p
            className="leading-relaxed mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: 'var(--muted-foreground)',
            }}
          >
            I'm Brian Muigai — a software engineer based in Nairobi, Kenya. I enjoy building
            fullstack systems that solve real problems: job platforms, AI-powered tools, streaming apps, and real-time
            collaboration dashboards.
          </p>
          <p
            className="leading-relaxed mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: 'var(--muted-foreground)',
            }}
          >
            My philosophy: clean, maintainable code and user experiences that actually matter. I hold an AI Fundamentals Certification
            and a Software Engineering Certificate from Moringa.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {tools.map((t) => (
              <span
                key={t}
                className="px-3 py-1"
                style={{
                  border: '1px solid var(--border)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: 'var(--muted-foreground)',
                  textTransform: 'uppercase',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {skills.map((s) => (
              <span
                key={s.label}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  color: 'var(--foreground)',
                }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
