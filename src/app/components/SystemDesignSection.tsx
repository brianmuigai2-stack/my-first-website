import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Code2, Database, Cloud, Shield } from 'lucide-react'

const archLayers = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'API Layer',
    items: ['Node.js', 'Express', 'FastAPI', 'REST/GraphQL'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'Firebase'],
  },
  {
    title: 'Deployment',
    items: ['Vercel', 'CI/CD'],
  },
]

const expertise = [
  { icon: Code2, title: 'Backend Systems', desc: 'Scalable server architectures with microservices, RESTful APIs, and real-time communication' },
  { icon: Database, title: 'Database Design', desc: 'Optimized database schemas, query performance, and data modeling for complex applications' },
  { icon: Cloud, title: 'Cloud Deployment', desc: 'Containerized applications, CI/CD pipelines, and cloud-native development practices' },
  { icon: Shield, title: 'Security', desc: 'JWT authentication, OAuth, data encryption, and secure API development' },
]

export function SystemDesignSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="system-design" ref={ref} className="py-20 lg:py-32 px-4 sm:px-8" style={{ background: 'var(--secondary)' }}>
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
            Architecture
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
            System Design &amp; <em style={{ color: 'var(--primary)' }}>Architecture</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          <div className="architecture-diagram">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--foreground)',
                marginBottom: '1.5rem',
              }}
            >
              Full-Stack Architecture
            </h3>
            <div className="diagram-container flex flex-col gap-4">
              {archLayers.map((layer, i) => (
                <motion.div
                  key={layer.title}
                  className="arch-layer flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <div
                    className="layer-title w-32 text-right"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--primary)',
                    }}
                  >
                    {layer.title}
                  </div>
                  <div
                    className="tech-items flex flex-wrap gap-2"
                    style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
                  >
                    {layer.items.map((tech) => (
                      <span
                        key={tech}
                        className="tech-item"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.85rem',
                          color: 'var(--foreground)',
                          border: '1px solid var(--border)',
                          padding: '4px 12px',
                          borderRadius: '4px',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="architecture-details">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--foreground)',
                marginBottom: '1.5rem',
              }}
            >
              Technical Expertise
            </h3>
            <div className="expertise-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((e) => {
                const Icon = e.icon
                return (
                  <motion.div
                    key={e.title}
                    className="expertise-card"
                    style={{
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      padding: '1.5rem',
                      transition: 'all 0.3s',
                    }}
                    whileHover={{ y: -4, borderColor: 'rgba(255,123,84,0.4)' }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="p-2"
                        style={{ background: 'rgba(255,123,84,0.1)', border: '1px solid rgba(255,123,84,0.2)' }}
                      >
                        <Icon size={18} style={{ color: 'var(--primary)' }} />
                      </div>
                      <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--foreground)' }}>{e.title}</h4>
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.85rem',
                        color: 'var(--muted-foreground)',
                        lineHeight: 1.6,
                      }}
                    >
                      {e.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
