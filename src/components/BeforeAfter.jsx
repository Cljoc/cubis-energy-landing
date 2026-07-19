import Reveal from './Reveal'
import { Icon } from './icons'

const before = ['بدون هیچ دیدی نسبت به مصرف لحظه‌ای', 'خرابی ناگهانی تجهیزات', 'هشدارهای دیرهنگام و پرهزینه', 'هزینه‌ی بالای انرژی و تعمیرات']
const after = ['دوقلوی دیجیتال زنده از کل کارخانه', 'پیش‌بینی خرابی پیش از وقوع', 'هشدار لحظه‌ای و اقدام سریع', 'انرژی بهینه و تجهیزات سالم']

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">پیش و پس از رهنمون</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              همان کارخانه، دو دنیای متفاوت
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14 grid gap-4 md:grid-cols-2">
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-navy text-sm font-black text-white shadow-xl">
              VS
            </span>
          </div>

          <Reveal className="rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-8">
            <span className="kicker text-red-400">قبل</span>
            <h3 className="mt-3 text-xl font-extrabold text-white">کارخانه‌ی سنتی</h3>
            <ul className="mt-6 space-y-4">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-7 text-mist">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-500/15 text-red-400">✕</span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="rounded-3xl border border-teal/20 bg-teal/[0.05] p-8">
            <span className="kicker text-teal-2">بعد</span>
            <h3 className="mt-3 text-xl font-extrabold text-white">کارخانه‌ی هوشمند</h3>
            <ul className="mt-6 space-y-4">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm leading-7 text-mist">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/15 text-teal-2">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
