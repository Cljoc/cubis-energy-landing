import { useEffect, useRef, useState } from 'react'

const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const toFa = (n) => String(n).replace(/[0-9]/g, (d) => faDigits[d])

export default function CountUp({ to, decimals = 0, duration = 1400, suffix = '', className = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(to * eased)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  const display = toFa(value.toFixed(decimals))

  return (
    <span ref={ref} className={`num-en ${className}`}>
      {display}
      {suffix}
    </span>
  )
}
