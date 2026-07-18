import { Icon } from './icons'

const features = [
  { icon: 'bolt', title: 'پایش لحظه‌ای مصرف', desc: 'دریافت و نمایش داده‌های انرژی از سنسورها و کنتورها به‌صورت آنی، بدون تأخیر.' },
  { icon: 'chart', title: 'تحلیل کلان‌داده', desc: 'کشف الگوی مصرف، مقایسه‌ی خطوط تولید و پیش‌بینی روند با تحلیل Big Data.' },
  { icon: 'server', title: 'استقرار On-Premise', desc: 'نصب کامل روی زیرساخت خودتان؛ داده‌های حساس هرگز از سازمان خارج نمی‌شود.' },
  { icon: 'plug', title: 'اتصال به CMMS و DCS', desc: 'یکپارچگی با سامانه‌های نگهداری و کنترل موجود کارخانه بدون تغییر زیرساخت.' },
  { icon: 'table', title: 'ورودی هوشمند داده', desc: 'دریافت و تبدیل خودکار فایل‌های Excel، CSV و XLSX با Convertor داخلی.' },
  { icon: 'chat', title: 'دستیار هوش مصنوعی', desc: 'دریافت گزارش و تحلیل با زبان طبیعی از طریق Prompt و Chat هوشمند.' },
  { icon: 'bell', title: 'هشدار لحظه‌ای', desc: 'اطلاع‌رسانی فوری هنگام انحراف مصرف یا افت بازده انرژی در هر خط تولید.' },
  { icon: 'doc', title: 'گزارش‌گیری کامل', desc: 'خروجی گزارش‌های تحلیلی در قالب PDF و Excel، آماده‌ی ارائه به مدیریت.' },
]

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kicker text-teal-2">ویژگی‌ها</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            یک پلتفرم، برای کل چرخه‌ی مدیریت انرژی
          </h2>
          <p className="mt-4 text-mist">
            از جمع‌آوری داده تا تحلیل، هشدار و تصمیم‌گیری — CUBIS همه‌ی مراحل را در یک بستر یکپارچه پوشش می‌دهد.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:bg-white/[0.05]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-teal/10 text-teal-2 transition group-hover:bg-teal group-hover:text-navy">
                <Icon name={f.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-mist">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
