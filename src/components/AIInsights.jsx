import aiInsights from '../assets/screens/ai-insights-1.png'

const insights = [
  {
    tag: 'مصرف',
    text: 'بیش از ۱۲ نقطه نشتی هوای فشرده در خطوط تولید شناسایی شده که مجموع نشت معادل ۳۵ مترمکعب در ساعت است.',
  },
  {
    tag: 'کیفیت داده',
    text: 'داده‌های کنتورهای طبقه‌ی سوم از ۵ روز گذشته ثبت نشده و احتمال نقص در ارتباط یا تجهیز وجود دارد.',
  },
  {
    tag: 'مصرف',
    text: 'تعداد روزهای دارای تولید غیرعادی، نشان‌دهنده‌ی بروز وقایعی مانند اثر حرارتی یا نشت است که مصرف انرژی را افزایش می‌دهد.',
  },
]

export default function AIInsights() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-navy-2/40 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md rotate-1 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 transition duration-500 hover:rotate-0">
            <img src={aiInsights} alt="پیشنهاد بهبود با هوش مصنوعی" className="block w-full" loading="lazy" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="kicker text-teal-2">دستیار هوش مصنوعی</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl text-balance">
            هوش مصنوعی، داده‌های خام را به تصمیم عملی تبدیل می‌کند
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-mist">
            CUBIS به‌جای انبوهی از نمودار خام، داده‌های کارخانه را تحلیل می‌کند و مشاهدات و
            پیشنهادهای مشخص برای کاهش مصرف و افزایش بازده در اختیار تیم شما قرار می‌دهد.
          </p>

          <div className="mt-8 space-y-4">
            {insights.map((it, i) => (
              <div key={i} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <span className="h-fit shrink-0 rounded-full bg-teal/15 px-2.5 py-1 text-[11px] font-bold text-teal-2">
                  {it.tag}
                </span>
                <p className="text-sm leading-7 text-mist">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
