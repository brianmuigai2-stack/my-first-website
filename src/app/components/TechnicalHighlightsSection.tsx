import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const frontendSkills = [
  { name: 'React.js', desc: 'Components, Hooks, State Management, Redux' },
  { name: 'JavaScript', desc: 'ES6+, Async/Await, DOM Manipulation, Event Handling' },
  { name: 'HTML/CSS', desc: 'Semantic HTML5, CSS3, Flexbox, Grid, Animations' },
  { name: 'Responsive Design', desc: 'Mobile-First, Media Queries, Cross-Browser Compatibility' },
]

const backendSkills = [
  { name: 'Node.js', desc: 'Express.js, Middleware, RESTful APIs, Authentication' },
  { name: 'Python', desc: 'FastAPI, Data Processing, Automation Scripts' },
  { name: 'APIs', desc: 'RESTful Design, JSON, JWT Authentication, Webhooks' },
  { name: 'Databases', desc: 'Firebase, MongoDB, PostgreSQL, Basic SQL' },
]

const techGroups = [
  { title: 'Version Control', items: ['Git', 'GitHub', 'Git Flow'] },
  { title: 'Development Tools', items: ['VS Code', 'Vite', 'Chrome DevTools'] },
  { title: 'Deployment', items: ['Vercel', 'Render', 'Docker'] },
  { title: 'Design', items: ['Figma', 'Tailwind CSS', 'Responsive Design'] },
]

const practices = [
  { title: 'Performance Optimization', desc: 'Code splitting, lazy loading, caching strategies, bundle optimization' },
  { title: 'Testing & Debugging', desc: 'Unit testing, integration testing, browser dev tools, error handling' },
  { title: 'Mobile-First Development', desc: 'Responsive design, touch interactions, progressive enhancement' },
  { title: 'Accessibility', desc: 'ARIA labels, semantic HTML, keyboard navigation, screen readers' },
  { title: 'Security Best Practices', desc: 'Input validation, JWT tokens, HTTPS, secure API design' },
  { title: 'Agile & Collaboration', desc: 'Git workflows, code reviews, iterative development, team communication' },
]

export function TechnicalHighlightsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const renderCategory = (title: string, items: { name: string; desc: string }[], delay: number) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="skills-category"
      style={{ marginBottom: '3rem' }}
    >
      <div className="skills-header" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)', margin: '0 0 0.5rem' }}>{title}</h3>
      </div>
      <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        {items.map((s) => (
          <div key={s.name} className="skill-item">
            <div
              className="skill-header"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.4rem',
              }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600, color: 'var(--foreground)' }}>{s.name}</span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="technical-highlights" ref={ref} className="py-20 lg:py-32 px-4 sm:px-8" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span
            className="uppercase tracking-[0.3em] text-sm mb-4 block"
            style={{ color: 'var(--primary)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            Technical Skills
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              fontWeight: 700,
              color: 'var(--foreground)',
            }}
          >
            Technical Skills &amp; <em style={{ color: 'var(--primary)' }}>Expertise</em>
          </h2>
        </motion.div>

        {renderCategory('Frontend Development', frontendSkills, 0.1)}
        {renderCategory('Backend Development', backendSkills, 0.2)}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="skills-category"
          style={{ marginBottom: '3rem' }}
        >
          <div className="skills-header" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)' }}>Tools &amp; Technologies</h3>
          </div>
          <div className="tech-cloud" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {techGroups.map((g) => (
              <div key={g.title} className="tech-group">
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>{g.title}</h4>
                <div className="tech-items" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="tech-badge"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.7rem',
                        letterSpacing: '0.05em',
                        color: 'var(--foreground)',
                        border: '1px solid var(--border)',
                        padding: '4px 10px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="skills-category"
        >
          <div className="skills-header" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--foreground)' }}>Development Practices</h3>
          </div>
          <div className="practices-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {practices.map((p) => (
              <div
                key={p.title}
                className="practice-item"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  padding: '1.25rem',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,123,84,0.4)'
                  ;(e.currentTarget as HTMLElement).style.translate = '0 -4px'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLElement).style.translate = '0 0'
                }}
              >
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.5rem' }}>{p.title}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
