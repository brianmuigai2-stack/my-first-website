import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Code2, Brain, Layout } from 'lucide-react'

const building = [
  {
    icon: Code2,
    status: 'In Development',
    title: 'Smart Recruiter SaaS Platform',
    desc: 'AI-powered technical assessment platform for automated hiring with real-time coding challenges and automated scoring.',
    tags: ['React', 'Node.js', 'AI/ML', 'WebRTC'],
  },
  {
    icon: Brain,
    status: 'In Development',
    title: 'AI Resume Analyzer',
    desc: 'Machine learning-powered tool for resume analysis and job matching with personalized feedback and optimization suggestions.',
    tags: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
  },
  {
    icon: Layout,
    status: 'Planning',
    title: 'Developer Portfolio Generator',
    desc: 'Automated portfolio builder with customizable templates and real-time preview for developers to showcase their work.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
  },
]

export function CurrentlyBuildingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="currently-building" ref={ref} className="py-20 lg:py-32 px-4 sm:px-8" style={{ background: 'var(--secondary)' }}>
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
            In Progress
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
            Currently <em style={{ color: 'var(--primary)' }}>Building</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {building.map((b) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                className="building-card"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  padding: '1.75rem',
                  transition: 'all 0.3s',
                }}
                whileHover={{ y: -6, borderColor: 'rgba(255,123,84,0.4)' }}
              >
                <div
                  className="building-status mb-4"
                  style={{
                    display: 'inline-block',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--primary)',
                    border: '1px solid rgba(255,123,84,0.3)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                  }}
                >
                  {b.status}
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="p-2 flex-shrink-0"
                    style={{
                      background: 'rgba(255,123,84,0.1)',
                      border: '1px solid rgba(255,123,84,0.2)',
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--primary)' }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--foreground)',
                    }}
                  >
                    {b.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}
                >
                  {b.desc}
                </p>
                <div className="building-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="tech-tag"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.65rem',
                        letterSpacing: '0.05em',
                        color: 'var(--muted-foreground)',
                        border: '1px solid var(--border)',
                        padding: '4px 10px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
