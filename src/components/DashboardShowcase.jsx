import { useState } from 'react'
import dashboardMain from '../assets/screens/dashboard-main.png'
import dashboardPats from '../assets/screens/dashboard-pats-1.png'
import aiInsights from '../assets/screens/ai-insights-1.png'
import reports from '../assets/screens/reports.png'

const tabs = [
  { key: 'main', label: 'داشبورد اصلی', img: dashboardMain, caption: 'دید کلی از وضعیت انرژی، خطوط تولید و کاربران، در یک صفحه.' },
  { key: 'pats', label: 'مصرف ویژه‌ی تجهیزات', img: dashboardPats, caption: 'شناسایی سریع تجهیزاتی که مصرف انرژی‌شان از استاندارد کارخانه فراتر رفته.' },
  { key: 'ai', label: 'پیشنهاد بهبود هوشمند', img: aiInsights, caption: 'تحلیل خودکار داده‌ها با هوش مصنوعی و پیشنهاد اقدام عملی برای کاهش مصرف.' },
  { key: 'reports', label: 'گزارش‌ها', img: reports, caption: 'گزارش دوره‌ای مصرف به تفکیک کم‌باری، عادی و پرباری، آماده‌ی خروجی.' },
]

export default function DashboardShowcase() {
  const [active, setActive] = useState(tabs[0].key)
  const current = tabs.find((t) => t.key === active)

  return (
    <section id="dashboard" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center text-teal-2">داشبورد CUBIS</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
            محصولی که واقعاً روی خط تولید کار می‌کند
          </h2>
          <p className="mt-4 text-mist">
            تصاویر واقعی از پلتفرم CUBIS — همان چیزی که تیم تولید و انرژی هر روز با آن کار می‌کند.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                active === t.key
                  ? 'border-teal/40 bg-teal text-navy'
                  : 'border-white/10 text-mist hover:border-white/25 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-x-10 -top-6 -z-10 h-40 rounded-full bg-teal/10 blur-[100px]" />

          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-navy-2 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal-2/70" />
              <span className="mr-3 truncate text-xs text-mist">app.rahnamoon.ir/{current.key}</span>
            </div>
            <div className="bg-paper">
              <img
                key={current.key}
                src={current.img}
                alt={current.label}
                className="rise block w-full"
                loading="lazy"
              />
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-7 text-mist">{current.caption}</p>
        </div>
      </div>
    </section>
  )
}
