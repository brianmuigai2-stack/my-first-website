import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / docHeight) * 100
      setProgress(scrolled || 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="scroll-progress" style={{ opacity: progress > 3 ? 1 : 0, transition: 'opacity 0.3s' }}>
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}
