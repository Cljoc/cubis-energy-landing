const kpis = [
  { label: 'مصرف کل ماه', value: '۱۲۵٫۴', unit: 'MWh', trend: '-8.7%', good: true },
  { label: 'مصرف بر تن محصول', value: '۱٫۵۸', unit: 'kWh/ton', trend: '-6.7%', good: true },
  { label: 'بازده انرژی', value: '۹۲٫۴', unit: '%', trend: '+4.8%', good: true },
  { label: 'دقت پیش‌بینی مدل', value: '۹۸٫۷', unit: '%', trend: '+1.2%', good: true },
]

const bars = [32, 48, 40, 62, 55, 78, 60, 70, 52, 66, 74, 58]
const lineTop = [20, 34, 26, 45, 38, 55, 48, 62, 50, 68, 60, 76]

export default function DashboardShowcase() {
  return (
    <section id="dashboard" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold text-teal-2">داشبورد CUBIS</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            تمام شاخص‌های کلیدی، در یک نگاه
          </h2>
          <p className="mt-4 text-mist">داشبوردی زنده و قابل تنظیم برای مدیران تولید، انرژی و نگهداری و تعمیرات.</p>
        </div>

        <div className="glass mt-14 rounded-3xl p-4 shadow-2xl shadow-black/40 sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-amber/70" />
              <span className="h-3 w-3 rounded-full bg-teal-2/70" />
              <span className="mr-3 text-sm font-bold text-white">داشبورد مصرف انرژی — کارخانه اصلی</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-mist">
              <span className="rounded-full bg-teal/15 px-3 py-1 font-semibold text-teal-2">۱۴۰۳/۰۲/۰۱ – ۱۴۰۳/۰۲/۳۰</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k, i) => (
              <div key={i} className="rounded-2xl bg-white/[0.04] p-4">
                <div className="text-xs text-mist">{k.label}</div>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="num-en text-xl font-black text-white">{k.value}</span>
                  <span className="text-[11px] text-mist">{k.unit}</span>
                </div>
                <div className={`num-en mt-1.5 text-xs font-bold ${k.good ? 'text-teal-2' : 'text-amber'}`}>{k.trend}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/[0.04] p-5 lg:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">روند مصرف روزانه (MWh)</span>
                <span className="text-[11px] text-mist">۳۰ روز اخیر</span>
              </div>
              <div className="relative mt-6 h-40">
                <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="h-full w-full">
                  <polyline
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={lineTop.map((v, i) => `${(i * 300) / (lineTop.length - 1)},${100 - v}`).join(' ')}
                  />
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2dd4bf" />
                      <stop offset="100%" stopColor="#f5b23e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">مصرف بر خط تولید</span>
              </div>
              <div className="mt-6 flex h-40 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-teal/60 to-amber/70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/[0.04] p-4 text-xs text-mist">
            <span>خروجی آماده: گزارش تحلیلی این دوره</span>
            <div className="flex gap-2">
              <span className="rounded-lg border border-white/10 px-3 py-1.5 font-bold text-white">PDF ⬇</span>
              <span className="rounded-lg border border-white/10 px-3 py-1.5 font-bold text-white">Excel ⬇</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
