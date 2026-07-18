import { useEffect, useRef, useState } from 'react'

export default function Gauge({ percent, size = 96, stroke = 8, color = 'var(--color-teal)' }) {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(0)
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        requestAnimationFrame(() => setAnimated(percent))
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [percent])

  const offset = c - (animated / 100) * c

  return (
    <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)' }}
      />
    </svg>
  )
}
