import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const followerPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let animationId: number

    const animate = () => {
      const { x, y } = followerPosRef.current
      const { x: cx, y: cy } = posRef.current
      const dx = cx - x
      const dy = cy - y
      followerPosRef.current.x += dx * 0.15
      followerPosRef.current.y += dy * 0.15

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPosRef.current.x}px, ${followerPosRef.current.y}px) translate(-50%, -50%) scale(1)`
      }
      animationId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const onMouseDown = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)'
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)'
    }

    const onMouseUp = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    animationId = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%) scale(1)',
          transition: 'transform 0.1s ease',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={followerRef}
        className="cursor-follower"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1px solid var(--primary)',
          background: 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%) scale(1)',
          transition: 'transform 0.1s ease',
        }}
      />
    </>
  )
}
