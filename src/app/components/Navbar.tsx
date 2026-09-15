import { motion, useScroll } from 'motion/react'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [fontSize, setFontSize] = useState(1)

  useEffect(() => {
    const saved = localStorage.getItem('fontSize')
    if (saved) {
      const f = parseFloat(saved)
      setFontSize(f)
      document.documentElement.style.setProperty('--font-size-multiplier', String(f))
    }
  }, [])

  const updateFontSize = (delta: number) => {
    const next = Math.max(0.8, Math.min(1.4, fontSize + delta))
    setFontSize(next)
    document.documentElement.style.setProperty('--font-size-multiplier', String(next))
    localStorage.setItem('fontSize', String(next))
  }

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 50))
  }, [scrollY])

  useEffect(() => {
    const close = () => {
      setMenuOpen(false)
    }
    if (menuOpen) {
      document.addEventListener('click', close)
      return () => document.removeEventListener('click', close)
    }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
        style={{
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          backgroundColor: scrolled ? 'rgba(30,20,16,0.9)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,123,84,0.12)' : '1px solid transparent',
          transition: 'background-color 0.4s, border-color 0.4s',
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: '1.25rem',
            color: 'var(--foreground)',
            textDecoration: 'none',
          }}
        >
          B<span style={{ color: 'var(--primary)' }}>.</span>M
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted-foreground)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--muted-foreground)'
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Font size adjuster */}
          <div className="hidden md:flex items-center gap-1" style={{ border: '1px solid var(--border)', borderRadius: '4px' }}>
            <button
              onClick={() => updateFontSize(-0.1)}
              aria-label="Decrease font size"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--muted-foreground)',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                padding: '4px 10px',
              }}
            >
              −
            </button>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--muted-foreground)' }}>A</span>
            <button
              onClick={() => updateFontSize(0.1)}
              aria-label="Increase font size"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--muted-foreground)',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                padding: '4px 10px',
              }}
            >
              +
            </button>
          </div>

          <a
            href="https://github.com/brianmuigai2-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2 transition-opacity duration-200 hover:opacity-80"
            style={{
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
            style={{ color: 'var(--foreground)' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <motion.div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 md:hidden"
        style={{ background: 'var(--background)' }}
        initial={{ opacity: 0, y: '-100%' }}
        animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: '-100%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--foreground)',
              textDecoration: 'none',
            }}
          >
            {l.label}
          </a>
        ))}
      </motion.div>
    </>
  )
}
