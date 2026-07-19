import Reveal from './Reveal'
import NeuralCanvas from './NeuralCanvas'
import { Icon } from './icons'

const capabilities = [
  { icon: 'gauge', title: 'پیش‌بینی خرابی تجهیزات', desc: 'هشدار پیش از توقف، بر اساس الگوی رفتاری هر ماشین.' },
  { icon: 'bolt', title: 'پیش‌بینی مصرف انرژی', desc: 'برآورد مصرف ساعات آینده برای برنامه‌ریزی دقیق‌تر.' },
  { icon: 'target', title: 'توصیه‌ی بهینه‌سازی خودکار', desc: 'اقدام پیشنهادی مشخص برای کاهش هزینه و مصرف.' },
]

const forecast = [30, 42, 38, 55, 48, 62, 58, 70, 64, 78, 74, 88]

export default function LiveAI() {
  return (
    <section id="ai" className="relative overflow-hidden border-y border-white/5 bg-navy-2/40 py-24">
      <NeuralCanvas className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-2/40 via-transparent to-navy-2/60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">هوش مصنوعی زنده</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              مغزی که هرگز از تحلیل کارخانه‌ی شما دست نمی‌کشد
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal/15 text-teal-2">
                  <Icon name={c.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{c.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-mist">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="glass mt-6 rounded-2xl p-6">
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-white">دقت پیش‌بینی مصرف ۲۴ ساعت آینده</span>
              <span className="rounded-full bg-teal/15 px-3 py-1 text-[11px] font-semibold text-teal-2">Live</span>
            </div>
            <div className="mt-5 flex h-24 items-end gap-1.5">
              {forecast.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-teal/50 to-teal-2"
                  style={{ height: `${h}%`, animation: `rise 0.6s ease both`, animationDelay: `${i * 60}ms` }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
