import { Icon } from './icons'
import Reveal from './Reveal'

const features = [
  { icon: 'bolt', title: 'پایش لحظه‌ای مصرف', desc: 'دریافت و نمایش داده‌های انرژی از سنسورها و کنتورها به‌صورت آنی، بدون تأخیر.', span: 'lg:col-span-2', visual: 'bars' },
  { icon: 'chart', title: 'تحلیل کلان‌داده', desc: 'کشف الگوی مصرف و پیش‌بینی روند با تحلیل Big Data.' },
  { icon: 'server', title: 'استقرار On-Premise', desc: 'نصب کامل روی زیرساخت خودتان و امنیت کامل داده.' },
  { icon: 'chat', title: 'دستیار هوش مصنوعی', desc: 'دریافت گزارش و تحلیل با زبان طبیعی از طریق Prompt و Chat هوشمند.', span: 'lg:col-span-2', visual: 'chat' },
  { icon: 'plug', title: 'اتصال به CMMS و DCS', desc: 'یکپارچگی با سامانه‌های موجود کارخانه بدون تغییر زیرساخت.' },
  { icon: 'table', title: 'ورودی هوشمند داده', desc: 'تبدیل خودکار فایل‌های Excel، CSV و XLSX.' },
  { icon: 'bell', title: 'هشدار لحظه‌ای', desc: 'اطلاع‌رسانی فوری هنگام انحراف مصرف در هر خط تولید.' },
  { icon: 'doc', title: 'گزارش‌گیری کامل', desc: 'خروجی گزارش‌های تحلیلی در قالب PDF و Excel.' },
]

const bars = [45, 70, 55, 85, 60, 92, 68, 50]

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">ویژگی‌ها</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              یک پلتفرم، برای کل چرخه‌ی مدیریت انرژی
            </h2>
            <p className="mt-4 text-mist">
              از جمع‌آوری داده تا تحلیل، هشدار و تصمیم‌گیری — این پلتفرم همه‌ی مراحل را در یک بستر یکپارچه پوشش می‌دهد.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={i} delay={(i % 4) * 90} className={f.span}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:bg-white/[0.05]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-teal/10 text-teal-2 transition group-hover:bg-teal group-hover:text-navy">
                  <Icon name={f.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-mist">{f.desc}</p>

                {f.visual === 'bars' && (
                  <div className="mt-5 flex h-16 flex-1 items-end gap-1.5">
                    {bars.map((h, bi) => (
                      <div key={bi} className="flex-1 rounded-t-sm bg-gradient-to-t from-teal/50 to-teal-2" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                )}

                {f.visual === 'chat' && (
                  <div className="mt-5 flex-1 space-y-2">
                    <div className="w-3/4 rounded-xl rounded-tr-sm bg-white/10 px-3 py-2 text-[11px] text-mist">
                      چرا مصرف خط ۲ بالا رفته؟
                    </div>
                    <div className="mr-auto w-4/5 rounded-xl rounded-tl-sm bg-teal/15 px-3 py-2 text-[11px] text-teal-2">
                      مصرف کمپرسور ۱۸٪ بالاتر از میانگین هفتگی است.
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
