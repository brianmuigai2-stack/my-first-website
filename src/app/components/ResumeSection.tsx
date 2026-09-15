import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { X, Download } from 'lucide-react'

const achievements = [
  { h4: 'Built 17+ Full-Stack Applications', p: 'From concept to deployment with modern tech stacks' },
  { h4: 'Designed Production APIs', p: 'RESTful services serving thousands of requests daily' },
  { h4: 'Deployed Cloud-Based Systems', p: 'AWS, Vercel, and Docker containerization' },
  { h4: 'Developed AI-Integrated Platforms', p: 'Machine learning-powered applications' },
]

const resumeSections = [
  {
    title: 'PROFESSIONAL SUMMARY',
    type: 'text',
    body: 'Fullstack developer with hands-on experience building responsive and scalable web applications using React, JavaScript, HTML, and CSS. Experienced in fullstack development, REST API integration, and deploying production-ready applications. Strong focus on building reliable systems, improving user experience, and contributing to collaborative engineering teams.',
  },
  {
    title: 'TECHNICAL SKILLS',
    type: 'grid',
    body: [
      { h4: 'Programming Languages', p: 'JavaScript (ES6+), Python, HTML5, CSS3' },
      { h4: 'Frontend Development', p: 'React.js, Component-Based UI, Responsive Web Design' },
      { h4: 'Backend & APIs', p: 'Node.js, Express.js, FastAPI (basic), RESTful APIs' },
      { h4: 'Databases', p: 'Firebase, PostgreSQL (basic exposure)' },
      { h4: 'Tools & Platforms', p: 'Git, GitHub, VS Code, Vite, Figma, Vercel, Render' },
      { h4: 'Concepts', p: 'Debugging, API Integration, Version Control Workflows, Testing Basics, Deployment & Production Troubleshooting' },
    ],
  },
  {
    title: 'PROJECT EXPERIENCE',
    type: 'projects',
    body: [
      {
        h4: 'Smart Recruiter — Technical Assessment Platform (Fullstack Application)',
        link: 'https://own-app-ten.vercel.app',
        items: [
          'Developed a fullstack recruitment and technical assessment platform with role-based workflows.',
          'Built dynamic React dashboards and assessment interfaces for structured user interaction.',
          'Developed backend APIs and integrated database operations for managing assessments and users.',
          'Implemented authentication flows, notifications, and deployment troubleshooting in production environments.',
          'Focused on scalability, clean architecture, and improving performance across features.',
        ],
      },
      {
        h4: 'Kazi Connect — Frontend Web Application',
        link: 'https://hacker-thon-mg8o.vercel.app/',
        items: [
          'Developed a responsive web application connecting users with opportunities through structured interfaces.',
          'Built reusable React components with consistent UI architecture and styling.',
          'Implemented responsive layouts supporting desktop and mobile devices.',
          'Collaborated using Git workflows and deployed the application for real-world testing.',
        ],
      },
      {
        h4: 'Podcast Platform — Fullstack Web Application',
        link: 'https://brians-fullstack.vercel.app/',
        items: [
          'Built a fullstack podcast platform enabling users to browse and interact with audio content.',
          'Developed dynamic React components for real-time content rendering.',
          'Integrated backend APIs to fetch and display application data reliably.',
          'Focused on performance optimization and accessibility across devices.',
        ],
      },
      {
        h4: 'LiveCast — Live Streaming Platform',
        link: 'https://live-cast254.netlify.app/',
        items: [
          'Developed a modern live streaming platform for content creators to broadcast and share their content.',
          'Built user authentication system with profile management and content discovery interface.',
          'Implemented responsive video player and stream management dashboard.',
          'Focused on streaming performance and user experience optimization.',
        ],
      },
      {
        h4: 'QR Code Generator',
        link: 'https://qr-generator-one-sigma-24.vercel.app/',
        items: [
          'Built a versatile QR code generator supporting multiple data types including URLs, text, and contact information.',
          'Implemented customizable QR code options with color selection and size adjustments.',
          'Added instant download functionality for generated QR codes in various formats.',
          'Designed responsive interface with focus on user experience and accessibility.',
        ],
      },
      {
        h4: 'Personal Portfolio Website',
        link: null,
        items: [
          'Designed and developed a responsive portfolio showcasing projects and technical skills.',
          'Built reusable UI components using React and modern CSS practices.',
          'Implemented responsive layouts and animations to improve engagement.',
        ],
      },
    ],
  },
  {
    title: 'EDUCATION',
    type: 'education',
    body: [
      { h4: 'Software Development Program', p: 'Moringa School' },
      { h4: 'Kenya Certificate of Secondary Education (KCSE)', p: 'Certificate of Merit — Mathematics Contest, St. Francis Mangu' },
    ],
  },
  {
    title: 'SOFT SKILLS',
    type: 'skills',
    body: [
      'Analytical Problem Solving',
      'Clear Technical Communication',
      'Time Management & Reliability',
      'Adaptability and Continuous Learning',
      'Team Collaboration (Remote & In-Person)',
    ],
  },
]

export function ResumeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="resume" ref={ref} className="py-20 lg:py-32 px-4 sm:px-8" style={{ background: 'var(--background)' }}>
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
            Resume &amp; Achievements
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
            Key achievements and technical summary
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mb-16"
          style={{ border: '1px solid var(--border)' }}
        >
          {achievements.map((a) => (
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="resume-certificates">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--foreground)',
                marginBottom: '1rem',
              }}
            >
              Certifications
            </h3>
            <div className="certificate-card">
              <div className="certificate-info">
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--foreground)' }}>AI Certification</h4>
                <p className="certificate-issuer" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--muted-foreground)' }}>Artificial Intelligence Fundamentals</p>
                <p
                  className="certificate-description"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--muted-foreground)', marginTop: '0.3rem' }}
                >
                  Completed comprehensive training in AI concepts, machine learning basics, and practical AI applications.
                </p>
                <a
                  href="/certificates/brian-muigai_certificate%20(3).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    border: '1px solid var(--border)',
                    padding: '6px 16px',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                  }}
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="resume-buttons mt-12"
        >
          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              padding: '12px 32px',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.opacity = '0.9'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.opacity = '1'
            }}
          >
            View Resume
          </button>
        </motion.div>
      </div>

      {/* Resume Modal */}
      {modalOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModalOpen(false)}
        >
          <motion.div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="resume-content p-8 sm:p-12">
              {resumeSections.map((section) => (
                <div key={section.title} className="resume-section">
                  <h3
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {section.title}
                  </h3>

                  {section.type === 'text' && (
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.9rem',
                        color: 'var(--muted-foreground)',
                        lineHeight: 1.7,
                      }}
                    >
                      {section.body}
                    </p>
                  )}

                  {section.type === 'grid' &&
                    section.body.map((item) => (
                      <div key={item.h4} className="skill-group" style={{ marginBottom: '1rem' }}>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)' }}>{item.h4}</h4>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--muted-foreground)', marginTop: '0.25rem' }}>{item.p}</p>
                      </div>
                    ))}

                  {section.type === 'projects' &&
                    section.body.map((p) => (
                      <div key={p.h4} className="project-item" style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)' }}>{p.h4}</h4>
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-block',
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '0.75rem',
                              color: 'var(--primary)',
                              textDecoration: 'none',
                              marginBottom: '0.25rem',
                            }}
                          >
                            Live Demo
                          </a>
                        )}
                        <ul style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
                          {p.items.map((li) => (
                            <li
                              key={li}
                              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--muted-foreground)', lineHeight: 1.6 }}
                            >
                              {li}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {section.type === 'education' &&
                    section.body.map((e) => (
                      <div key={e.h4} className="education-item" style={{ marginBottom: '1rem' }}>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--foreground)' }}>{e.h4}</h4>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--muted-foreground)' }}><strong>{e.p.split(' — ')[0]}</strong>{e.p.includes(' — ') && <span> — {e.p.split(' — ')[1]}</span>}</p>
                      </div>
                    ))}

                  {section.type === 'skills' && (
                    <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
                      {(section.body as string[]).map((s) => (
                        <div
                          key={s}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.85rem',
                            color: 'var(--foreground)',
                            padding: '6px 10px',
                            border: '1px solid var(--border)',
                            borderRadius: '4px',
                          }}
                        >
                          • {s}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              className="modal-footer flex items-center justify-between p-6"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <a
                href="/Brian Muigai Resume (1).docx"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  color: 'var(--foreground)',
                  textDecoration: 'none',
                  border: '1px solid var(--border)',
                  padding: '8px 16px',
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
                <Download size={14} />
                Download Resume
              </a>
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  background: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px 28px',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.opacity = '1'
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
