import Reveal from './Reveal'
import { Icon } from './icons'

const stages = [
  { icon: 'bolt', label: 'نیروگاه' },
  { icon: 'link', label: 'انتقال' },
  { icon: 'server', label: 'پست برق' },
  { icon: 'building', label: 'کارخانه' },
  { icon: 'gauge', label: 'ماشین‌آلات' },
  { icon: 'radio', label: 'سنسور IoT' },
  { icon: 'plug', label: 'گیت‌وی' },
  { icon: 'cloud', label: 'ابر' },
  { icon: 'brain', label: 'هوش مصنوعی' },
  { icon: 'target', label: 'بهینه‌سازی' },
]

export default function EnergyFlow() {
  return (
    <section id="energy-flow" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-x-10 top-1/2 -z-10 h-64 -translate-y-1/2 rounded-full bg-teal/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">مسیر انرژی</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              از نیروگاه تا تصمیم هوشمند، یک جریان پیوسته
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-5">
          {stages.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="relative flex flex-col items-center gap-3 text-center">
              <div className="relative">
                {i < stages.length - 1 && (
                  <div className="pointer-events-none absolute right-full top-1/2 hidden h-px w-[calc(100%+1rem)] -translate-y-1/2 overflow-hidden sm:block">
                    <div className="h-full w-full bg-gradient-to-l from-transparent via-white/15 to-transparent" />
                    <div
                      className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-teal-2 to-transparent"
                      style={{ animation: `flow-right ${2.4 + (i % 3) * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
                    />
                  </div>
                )}
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-teal/25 bg-navy-2 text-teal-2 shadow-lg shadow-black/30">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
              </div>
              <span className="text-xs font-bold text-white sm:text-sm">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
