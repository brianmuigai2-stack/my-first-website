import { useEffect, useState } from 'react'

export function SnowEffect() {
  const [flakes, setFlakes] = useState<{ id: number; left: number; delay: number; size: number }[]>([])

  useEffect(() => {
    const count = 60
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        size: Math.random() * 3 + 1,
      })
    }
    setFlakes(arr)
  }, [])

  return (
    <div
      className="snow"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {flakes.map((f) => (
        <div
          key={f.id}
          className="snowflake"
          style={{
            position: 'absolute',
            top: '-10px',
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            background: 'var(--snow-color, rgba(255,123,84,0.3))',
            borderRadius: '50%',
            animation: `fall ${10 + f.size * 3}s linear ${f.delay}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  )
}
