export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-8" style={{ background: 'var(--background)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: '1.1rem',
            color: 'var(--foreground)',
          }}
        >
          B<span style={{ color: 'var(--primary)' }}>.</span>M
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            color: 'var(--muted-foreground)',
            textTransform: 'uppercase',
          }}
        >
          © 2026 Brian Muigai — All rights reserved
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: 'var(--primary)',
            letterSpacing: '0.08em',
          }}
        >
          Nairobi, Kenya
        </span>
      </div>
    </footer>
  )
}
