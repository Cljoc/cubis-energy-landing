import Reveal from './Reveal'

const steps = [
  { n: '۰۱', title: 'اتصال منابع داده', desc: 'اتصال سنسورها، کنتورها، فایل‌های Excel/CSV و سامانه‌های CMMS و DCS به پلتفرم.' },
  { n: '۰۲', title: 'پردازش و تحلیل', desc: 'تحلیل خودکار داده‌ها با موتور Big Data و شناسایی الگوهای مصرف و انحراف.' },
  { n: '۰۳', title: 'داشبورد و هشدار', desc: 'نمایش لحظه‌ای شاخص‌ها و ارسال هشدار فوری در صورت انحراف از الگوی نرمال.' },
  { n: '۰۴', title: 'تصمیم و بهینه‌سازی', desc: 'دریافت گزارش تحلیلی و پیشنهاد بهینه‌سازی برای کاهش هزینه و مصرف انرژی.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">نحوه‌ی کار</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              از داده‌ی خام تا تصمیم هوشمند، در چهار گام
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="pointer-events-none absolute top-6 hidden h-px w-full overflow-hidden md:block">
            <div className="h-full w-full bg-gradient-to-l from-transparent via-white/15 to-transparent" />
            <div
              className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-teal-2 to-transparent"
              style={{ animation: 'flow-right 3.2s ease-in-out infinite' }}
            />
          </div>
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="relative">
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-teal/30 bg-navy text-sm font-black text-teal-2">
                  {s.n}
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-7 text-mist">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
