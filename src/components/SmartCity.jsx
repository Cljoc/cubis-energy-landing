import Reveal from './Reveal'
import { Icon } from './icons'

const facilities = [
  { icon: 'flask', label: 'بیمارستان', top: '14%', left: '20%' },
  { icon: 'building', label: 'هتل', top: '20%', left: '78%' },
  { icon: 'server', label: 'کارخانه', top: '38%', left: '8%' },
  { icon: 'doc', label: 'دانشگاه', top: '44%', left: '90%' },
  { icon: 'table', label: 'مرکز خرید', top: '62%', left: '14%' },
  { icon: 'radio', label: 'فرودگاه', top: '70%', left: '84%' },
  { icon: 'bolt', label: 'نیروگاه', top: '82%', left: '30%' },
  { icon: 'gauge', label: 'مزرعه‌ی خورشیدی', top: '86%', left: '68%' },
]

export default function SmartCity() {
  return (
    <section id="smart-city" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">شهر هوشمند</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              وقتی یک پلتفرم، انرژی‌ی کل شهر را هماهنگ می‌کند
            </h2>
            <p className="mt-4 text-mist">از بیمارستان تا نیروگاه؛ همه روی یک شبکه‌ی هوشمند و یکپارچه.</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-14 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-navy-2 sm:aspect-[16/8]">
            <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(circle_at_center,rgba(242,145,32,0.12),transparent_60%)]" />

            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {facilities.map((f) => (
                <line
                  key={f.label}
                  x1="50"
                  y1="50"
                  x2={parseFloat(f.left)}
                  y2={parseFloat(f.top)}
                  stroke="rgba(255,178,92,0.28)"
                  strokeWidth="0.25"
                />
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <span className="pulse-ring absolute inset-0 rounded-2xl" />
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-teal-2 bg-teal text-navy shadow-xl shadow-teal/30">
                <Icon name="target" className="h-7 w-7" />
              </span>
            </div>

            {facilities.map((f, i) => (
              <div
                key={f.label}
                className="rise absolute -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ top: f.top, left: f.left, animationDelay: `${i * 90}ms` }}
              >
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-navy text-teal-2">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <div className="mt-1.5 text-[11px] font-bold text-white">{f.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
