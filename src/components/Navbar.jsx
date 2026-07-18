import { useEffect, useState } from 'react'
import Logo from './Logo'

const links = [
  { href: '#features', label: 'ویژگی‌ها' },
  { href: '#dashboard', label: 'داشبورد' },
  { href: '#security', label: 'امنیت داده' },
  { href: '#how', label: 'نحوه‌ی کار' },
  { href: '#contact', label: 'تماس با ما' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/85 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9" />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-extrabold tracking-wide text-white">رهنمون</span>
            <span className="text-[11px] text-mist">پلتفرم مدیریت هوشمند انرژی</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-mist transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-teal-2"
          >
            درخواست مشاوره رایگان
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="منو"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy/95 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-mist hover:text-white">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-teal px-5 py-2.5 text-center text-sm font-bold text-navy"
            >
              درخواست مشاوره رایگان
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
