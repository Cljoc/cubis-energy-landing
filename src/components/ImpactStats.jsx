import Gauge from './Gauge'
import CountUp from './CountUp'
import Reveal from './Reveal'
import { Icon } from './icons'

const gauges = [
  { percent: 12.5, label: 'کاهش مصرف انرژی', color: 'var(--color-teal)' },
  { percent: 98.7, label: 'دقت پایش و پیش‌بینی داده', color: 'var(--color-teal-2)' },
]

const counters = [
  { icon: 'plug', to: 500, suffix: '+', label: 'سنسور و نقطه‌داده هم‌زمان' },
  { icon: 'server', to: 40, suffix: '+', label: 'خط تولید تحت پوشش' },
]

export default function ImpactStats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">دستاوردها با عدد</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              نتیجه‌ای که در گزارش‌های واقعی مشتریان دیده می‌شود
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gauges.map((g, i) => (
            <Reveal key={g.label} delay={i * 100}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-white/8 bg-white/[0.03] p-7 text-center">
                <div className="relative grid place-items-center">
                  <Gauge percent={g.percent} color={g.color} />
                  <span className="num-en absolute text-xl font-black text-white">
                    <CountUp to={g.percent} decimals={1} suffix="٪" />
                  </span>
                </div>
                <p className="mt-5 text-sm leading-6 text-mist">{g.label}</p>
              </div>
            </Reveal>
          ))}

          {counters.map((c, i) => (
            <Reveal key={c.label} delay={(i + 2) * 100}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] p-7 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-teal/10 text-teal-2">
                  <Icon name={c.icon} className="h-7 w-7" />
                </div>
                <div className="mt-5 text-3xl font-black text-white">
                  <CountUp to={c.to} suffix={c.suffix} />
                </div>
                <p className="mt-2 text-sm leading-6 text-mist">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
