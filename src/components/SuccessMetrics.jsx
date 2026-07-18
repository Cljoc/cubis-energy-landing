import Gauge from './Gauge'
import CountUp from './CountUp'
import Reveal from './Reveal'

const metrics = [
  { percent: 30, label: 'کاهش مصرف انرژی', color: 'var(--color-teal)' },
  { percent: 80, label: 'کاهش توقفات ناخواسته', color: 'var(--color-teal-2)' },
  { percent: 97, label: 'دقت پیش‌بینی', color: 'var(--color-teal)' },
  { percent: 45, label: 'کاهش انتشار کربن', color: 'var(--color-teal-2)' },
  { percent: 100, label: 'شفافیت و دید کامل', color: 'var(--color-teal)' },
]

export default function SuccessMetrics() {
  return (
    <section className="border-y border-white/5 bg-navy-2/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">نتیجه‌ی نهایی</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              معیارهایی که کارخانه‌های واقعی تجربه کرده‌اند
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center">
                <div className="relative grid place-items-center">
                  <Gauge percent={m.percent} size={104} color={m.color} />
                  <span className="num-en absolute text-xl font-black text-white">
                    <CountUp to={m.percent} suffix="٪" />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-mist">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
