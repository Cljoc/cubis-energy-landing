import Reveal from './Reveal'
import CountUp from './CountUp'
import { Icon } from './icons'

const alerts = [
  { icon: 'bell', to: 80, suffix: ' ساعت', label: 'توقف ناخواسته‌ی خط تولید در ماه' },
  { icon: 'bolt', to: 23, suffix: '٪', label: 'هدررفت انرژی بدون تشخیص علت' },
  { icon: 'chart', to: 40, suffix: '٪', label: 'رشد بی‌کنترل انتشار کربن' },
  { icon: 'gauge', to: 120, suffix: ' میلیون', label: 'هزینه‌ی نگهداری و تعمیرات اضطراری (تومان)' },
]

const items = [
  {
    title: 'داده‌های پراکنده',
    desc: 'اطلاعات مصرف در فایل‌های اکسل، سامانه‌های جدا و کاغذ پخش شده و تصمیم‌گیری سریع را غیرممکن می‌کند.',
  },
  {
    title: 'بی‌اطلاعی از انحراف مصرف',
    desc: 'بدون پایش لحظه‌ای، افزایش ناگهانی مصرف یا افت بازده تا پایان دوره‌ی صورتحساب کشف نمی‌شود.',
  },
  {
    title: 'نگرانی امنیت داده',
    desc: 'راهکارهای کلود‌محور، داده‌های حساس تولید را از داخل سازمان خارج می‌کنند؛ ریسکی که بسیاری از صنایع نمی‌پذیرند.',
  },
]

export default function Problem() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-navy-2/40 py-24">
      <div className="pointer-events-none absolute inset-x-10 top-10 -z-10 h-64 rounded-full bg-red-500/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="kicker text-red-400">چالش صنایع انرژی‌بر</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              بدون هوش مصنوعی، انرژی این‌طور بی‌صدا هدر می‌رود
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {alerts.map((a, i) => (
            <Reveal key={a.label} delay={i * 90}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-6">
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-red-500/20 blur-2xl" style={{ animation: 'pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite' }} />
                <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-red-500/15 text-red-400">
                  <Icon name={a.icon} className="h-5 w-5" />
                </div>
                <div className="relative mt-5 text-3xl font-black text-red-400">
                  <CountUp to={a.to} suffix={a.suffix} />
                </div>
                <p className="relative mt-2 text-sm leading-6 text-mist">{a.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-7">
                <div className="num-en mb-5 text-4xl font-black text-white/15">{['۰۱', '۰۲', '۰۳'][i]}</div>
                <h3 className="text-lg font-bold text-white">{it.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
