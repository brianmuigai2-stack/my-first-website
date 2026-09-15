import { motion, useInView } from 'motion/react'
import { useRef, useEffect } from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle, Twitter, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { ImageWithFallback } from './figma/ImageWithFallback'

const PROFILE_IMG = '/Yobi.jpg'
const EMAILJS_PUBLIC_KEY = 'Q-z5wzQPltV7tnUty'
const EMAILJS_SERVICE_ID = 'service_3qcsmah'
const EMAILJS_TEMPLATE_ID = 'template_d2ydngr'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/brianmuigai2-stack', value: 'brianmuigai2-stack' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/brian-muigai-197210382', value: 'brian-muigai' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/254707528414', value: '+254 707 528 414' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', value: '@brianmuigai' },
]

export function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const btn = form.querySelector('button[type="submit"]')
    if (btn) {
      ;(btn as HTMLElement).disabled = true
      ;(btn as HTMLElement).textContent = 'Sending…'
    }
    const templateParams = {
      from_name: (form.querySelector("input[name='user_name']") as HTMLInputElement)?.value,
      from_email: (form.querySelector("input[name='user_email']") as HTMLInputElement)?.value,
      message: (form.querySelector("textarea[name='message']") as HTMLTextAreaElement)?.value,
      sent_date: new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      portfolio_url: 'https://brianmuigai2-stack.github.io/my-first-website/',
    }
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        showNotification("Message sent! I'll get back to you soon.", 'success')
        form.reset()
      })
      .catch(() => {
        showNotification('Failed to send message. Please try again.', 'error')
      })
      .finally(() => {
        if (btn) {
          ;(btn as HTMLElement).disabled = false
          ;(btn as HTMLElement).textContent = 'Send Message'
        }
      })
  }

  const showNotification = (message: string, type: 'success' | 'error') => {
    const existing = document.getElementById('contact-notification')
    if (existing) existing.remove()
    const note = document.createElement('div')
    note.id = 'contact-notification'
    note.textContent = message
    note.style.cssText = `
      position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
      background: ${type === 'success' ? '#22c55e' : '#ef4444'};
      color: white; padding: 12px 24px; border-radius: 8px; z-index: 10000;
      font-size: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `
    document.body.appendChild(note)
    setTimeout(() => note.remove(), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 px-4 sm:px-8" style={{ background: 'var(--secondary)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="uppercase tracking-[0.3em] text-sm mb-4 block"
            style={{
              color: 'var(--primary)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Contact
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              fontWeight: 900,
              color: 'var(--foreground)',
              marginBottom: '1.5rem',
            }}
          >
            Let's build
            <br />
            something
            <br />
            <em style={{ color: 'var(--primary)' }}>together.</em>
          </h2>
          <p
            className="leading-relaxed mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: 'var(--muted-foreground)',
              lineHeight: 1.7,
              maxWidth: '38ch',
            }}
          >
            Whether it's a new project, an open-source collaboration, or an internship opportunity — I'd love to connect.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { icon: Mail, text: 'brian11613bmw@gmail.com', href: 'mailto:brian11613bmw@gmail.com' },
              { icon: Phone, text: '+254 707 528 414', href: 'tel:+254707528414' },
              { icon: MapPin, text: 'Nairobi, Kenya', href: null },
            ].map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-center gap-3">
                  <div className="p-2" style={{ border: '1px solid var(--border)' }}>
                    <Icon size={16} style={{ color: 'var(--primary)' }} />
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'var(--foreground)' }}>{item.text}</span>
                </div>
              )
              return item.href ? (
                <a
                  key={item.text}
                  href={item.href}
                  className="block"
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={(e) => {
                    const span = (e.currentTarget as HTMLElement).querySelector('span') as HTMLElement
                    if (span) span.style.color = 'var(--primary)'
                  }}
                  onMouseLeave={(e) => {
                    const span = (e.currentTarget as HTMLElement).querySelector('span') as HTMLElement
                    if (span) span.style.color = 'var(--foreground)'
                  }}
                >
                  {content}
                </a>
              ) : (
                <div key={item.text}>{content}</div>
              )
            })}
          </div>

          <div className="space-y-3 mb-10">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group transition-colors duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="p-2 transition-colors duration-200"
                    style={{ border: '1px solid var(--border)' }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                    }}
                  >
                    <Icon size={16} style={{ color: 'var(--primary)' }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      color: 'var(--muted-foreground)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {s.value}
                  </span>
                </a>
              )
            })}
          </div>

          <motion.div
            className="flex items-center gap-4"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className="w-16 h-16 overflow-hidden flex-shrink-0"
              style={{ border: '2px solid var(--primary)' }}
            >
              <ImageWithFallback src={PROFILE_IMG} alt="Brian Muigai" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: 'var(--foreground)' }}>Brian Muigai</div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  color: 'var(--primary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Open to opportunities
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="p-6 sm:p-10"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              { label: 'Your Name', type: 'text', placeholder: 'e.g. Jane Kariuki', name: 'user_name' },
              { label: 'Email Address', type: 'email', placeholder: 'jane@company.com', name: 'user_email' },
              { label: 'Subject', type: 'text', placeholder: 'Internship opportunity, project collab…', name: 'subject' },
            ].map((f) => (
              <div key={f.label}>
                <label
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted-foreground)',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 outline-none transition-colors duration-200"
                  style={{
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                  }}
                  onFocus={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'
                  }}
                  onBlur={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                  }}
                  required
                />
              </div>
            ))}

            <div>
              <label
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted-foreground)',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project or opportunity…"
                className="w-full px-4 py-3 outline-none resize-none transition-colors duration-200"
                style={{
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                }}
                onFocus={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'
                }}
                onBlur={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                }}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2"
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
              }}
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
