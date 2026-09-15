import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Monitor, Server, Layers, Brain, Cloud, Smartphone } from 'lucide-react'

const services = [
  { icon: Monitor, num: '01', title: 'Front-End Development', desc: 'React.js applications with responsive design, performance optimization, and accessibility baked in from the start.' },
  { icon: Server, num: '02', title: 'Back-End Development', desc: 'Node.js and FastAPI servers, RESTful APIs, JWT/OAuth authentication, and database design with SQL and MongoDB.' },
  { icon: Brain, num: '03', title: 'AI-Integrated Systems', desc: 'ML-powered features: job matching, resume analysis, NLP pipelines. Python, TensorFlow, and FastAPI at the core.' },
  { icon: Layers, num: '04', title: 'UI/UX Design', desc: 'Wireframing, prototyping in Figma, and design systems that keep engineering and design speaking the same language.' },
  { icon: Cloud, num: '05', title: 'Cloud Deployment', desc: 'End-to-end deployment via Vercel, Render, AWS, and Docker. CI/CD pipelines, environment management, and monitoring.' },
  { icon: Smartphone, num: '06', title: 'Mobile-First Experiences', desc: 'Every project built mobile-first. Responsive layouts, touch-optimised interactions, and cross-browser compatibility.' },
]

export function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" ref={ref} className="py-20 lg:py-32 px-4 sm:px-8" style={{ background: 'var(--secondary)' }}>
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
            Services
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
            What I <em style={{ color: 'var(--primary)' }}>offer</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ border: '1px solid var(--border)' }}
        >
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.num}
                className="p-5 sm:p-8 transition-colors duration-300 cursor-default"
                style={{
                  background: 'var(--card)',
                  borderRight: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#2d1f1a'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--card)'
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="p-3"
                    style={{
                      background: 'rgba(255,123,84,0.1)',
                      border: '1px solid rgba(255,123,84,0.2)',
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--primary)' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: 'rgba(255,123,84,0.4)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.65,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
