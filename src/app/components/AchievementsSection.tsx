import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Code2, Cpu, Globe, GitBranch } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const PROFILE_IMG = import.meta.env.BASE_URL + 'Yobi.jpg'

const achievements = [
  { icon: Code2, num: '15+', label: 'Full-Stack Apps', desc: 'Built and deployed across diverse tech stacks — React, Node.js, Python, and more.' },
  { icon: Cpu, num: '95%', label: 'AI Match Rate', desc: "Kazi Connect's ML model achieves a 95% job-candidate match rate across 500+ users." },
  { icon: Globe, num: '50K+', label: 'Minutes Streamed', desc: 'Podcast platform serves 1,000+ shows and has streamed over 50,000 minutes of content.' },
  { icon: GitBranch, num: '3', label: 'Live SaaS Projects', desc: 'Smart Recruiter, AI Resume Analyzer, and Portfolio Generator in active development.' },
]

const certifications = [
  { title: 'AI Fundamentals Certification', body: 'Machine learning concepts, practical AI applications, and ML pipeline basics.' },
  { title: 'Moringa School — Software Development', body: 'Full-stack curriculum covering frontend, backend, databases, and agile practices. In progress.' },
  { title: 'Certificate of Merit — Mathematics', body: 'St. Francis Mangu High School, KCSE excellence in mathematics.' },
]

const resumeAchievements = [
  { h4: 'Built 17+ Full-Stack Applications', p: 'From concept to deployment with modern tech stacks' },
  { h4: 'Designed Production APIs', p: 'RESTful services serving thousands of requests daily' },
  { h4: 'Deployed Cloud-Based Systems', p: 'AWS, Vercel, and Docker containerization' },
  { h4: 'Developed AI-Integrated Platforms', p: 'Machine learning-powered applications' },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="achievements" ref={ref} className="py-20 lg:py-32 px-4 sm:px-8" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <span
            className="uppercase tracking-[0.3em] text-sm mb-4 block"
            style={{
              color: 'var(--primary)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            By the Numbers
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.1,
              fontWeight: 700,
              color: 'var(--foreground)',
              marginBottom: '3rem',
            }}
          >
            Impact &amp; <em style={{ color: 'var(--primary)' }}>achievements</em>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ border: '1px solid var(--border)' }}>
            {achievements.map((a) => {
              const Icon = a.icon
              return (
                <div
                  key={a.label}
                  className="p-5 sm:p-8 transition-colors duration-300"
                  style={{ background: 'var(--card)' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = '#1a1510'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--card)'
                  }}
                >
                  <Icon size={24} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '2.5rem',
                      fontWeight: 900,
                      color: 'var(--primary)',
                      lineHeight: 1,
                    }}
                  >
                    {a.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--foreground)',
                      margin: '0.5rem 0 0.75rem',
                    }}
                  >
                    {a.label}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.6,
                    }}
                  >
                    {a.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Resume highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span
            className="uppercase tracking-[0.3em] text-sm mb-4 block"
            style={{
              color: 'var(--primary)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Resume Highlights
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ border: '1px solid var(--border)' }}>
            {resumeAchievements.map((a) => (
              <div
                key={a.h4}
                className="p-5 sm:p-8 transition-colors duration-300"
                style={{ background: 'var(--card)' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#1a1510'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--card)'
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--foreground)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {a.h4}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.85rem',
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.6,
                  }}
                >
                  {a.p}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-20"
        >
          <span
            className="uppercase tracking-[0.3em] text-sm mb-4 block"
            style={{
              color: 'var(--primary)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Education &amp; Certifications
          </span>
          <div className="space-y-px" style={{ border: '1px solid var(--border)' }}>
            {certifications.map((c, i) => (
              <div
                key={c.title}
                className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 sm:px-8 py-5 sm:py-6 transition-colors duration-200"
                style={{
                  background: 'var(--card)',
                  borderBottom: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#1a1510'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--card)'
                }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'var(--primary)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: 'var(--primary-foreground)',
                    fontWeight: 700,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--foreground)',
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      color: 'var(--muted-foreground)',
                      marginTop: '0.2rem',
                    }}
                  >
                    {c.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
