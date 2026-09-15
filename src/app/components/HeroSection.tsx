import { motion, useInView } from 'motion/react'
import { useRef, useEffect, useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const PROFILE_IMG = '/Yobi.jpg'

const roles = [
  "Web developer.",
  "Problem solver.",
  "Open-source contributor.",
  "Software Engineer.",
]

export function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [typedText, setTypedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const isDeleting = deleting

    const update = () => {
      if (!isDeleting) {
        setTypedText(current.slice(0, typedText.length + 1))
      } else {
        setTypedText(current.slice(0, Math.max(0, typedText.length - 1)))
      }
    }

    const timeout = setTimeout(update, isDeleting ? 40 : 80)

    if (!isDeleting && typedText === current) {
      clearTimeout(timeout)
      setTimeout(() => setDeleting(true), 1200)
    } else if (isDeleting && typedText === '') {
      clearTimeout(timeout)
      setTimeout(() => {
        setDeleting(false)
        setRoleIndex((r) => (r + 1) % roles.length)
      }, 300)
    }

    return () => clearTimeout(timeout)
  }, [typedText, deleting, roleIndex])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0"
      style={{ background: 'var(--background)' }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,123,84,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,123,84,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(255,123,84,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
        <div className="order-1 col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-6 block"
              style={{
                color: 'var(--primary)',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span className="hidden sm:inline">Software Engineer · Nairobi, Kenya</span>
              <span className="sm:hidden">Software Engineer</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 6vw, 6.5rem)',
              lineHeight: 1.05,
              fontWeight: 900,
              color: 'var(--foreground)',
            }}
          >
            Brian
            <br />
            <em style={{ color: 'var(--primary)' }}>Muigai</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-3 sm:mt-6 max-w-md leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              color: 'var(--muted-foreground)',
            }}
          >
            {typedText}
            <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 sm:mt-10 flex flex-wrap gap-2 sm:gap-4"
          >
            <a
              href="#work"
              style={{
                background: 'var(--primary)',
                color: 'var(--primary-foreground)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '10px 32px',
                display: 'inline-block',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.opacity = '0.9'
                ;(e.currentTarget as HTMLElement).style.translate = '0 -2px'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.opacity = '1'
                ;(e.currentTarget as HTMLElement).style.translate = '0 0'
              }}
            >
              Projects
            </a>
            <a
              href="#contact"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '10px 32px',
                display: 'inline-block',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--foreground)'
              }}
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-6 sm:mt-10 lg:mt-16 flex gap-4 sm:gap-6 lg:gap-10"
          >
            {[
              { num: '15+', label: 'Apps Built' },
              { num: '500+', label: 'Platform Users' },
              { num: '50K+', label: 'Minutes Streamed' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                    fontWeight: 700,
                    color: 'var(--primary)',
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    color: 'var(--muted-foreground)',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="order-2 col-span-1 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div>
              <ImageWithFallback
                src={PROFILE_IMG}
                alt="Brian Muigai — Full-Stack Developer"
                className="relative z-10 drop-shadow-2xl"
                style={{
                  width: 'clamp(130px, 22vw, 340px)',
                  height: 'auto',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'var(--muted-foreground)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, var(--primary), transparent)',
          }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
