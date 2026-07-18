import { useEffect, useRef } from 'react'

export default function SpotlightCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const onMove = (e) => {
      if (!el) return
      el.style.setProperty('--mx', `${e.clientX}px`)
      el.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-40 hidden lg:block"
      style={{
        background: 'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(242,145,32,0.06), transparent 40%)',
      }}
    />
  )
}
