import { Icon } from './icons'
import Reveal from './Reveal'

const points = [
  'نصب و اجرای کامل روی سرورهای داخلی سازمان شما، بدون وابستگی به کلود عمومی',
  'کنترل کامل دسترسی‌ها با سطوح مجوز اختصاصی برای هر نقش سازمانی',
  'پشتیبانی از زیرساخت‌های ایزوله (Air-Gapped) برای صنایع با الزامات امنیتی بالا',
  'پشتیبان‌گیری خودکار و بازیابی سریع اطلاعات مطابق با سیاست‌های سازمان',
]

export default function Security() {
  return (
    <section id="security" className="relative overflow-hidden border-y border-white/5 bg-navy-2/40 py-24">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 h-full w-full max-w-4xl -translate-x-1/2 bg-teal/5 blur-[100px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal/10 text-teal-2">
            <Icon name="shield" className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            داده‌های تولید شما، فقط مال شماست
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-mist">
            پلتفرم مدیریت هوشمند انرژی با معماری <span className="text-white">On-Premise</span> طراحی شده تا
            حساس‌ترین داده‌های عملیاتی کارخانه‌ی شما، هرگز از مرزهای شبکه‌ی داخلی سازمان
            خارج نشود؛ همراه با تمام امکانات یک پلتفرم مدرن ابری.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal/15 text-teal-2">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-7 text-mist">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="glass relative rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">معماری استقرار</span>
              <span className="rounded-full bg-teal/15 px-3 py-1 text-[11px] font-semibold text-teal-2">On-Premise</span>
            </div>

            <div className="mt-8 space-y-1">
              <ArchRow icon="plug" title="سنسورها و کنتورهای هوشمند" desc="جمع‌آوری خودکار داده از تجهیزات میدانی" />
              <ArchLine />
              <ArchRow icon="server" title="سرور داخلی سازمان" desc="پردازش، ذخیره‌سازی و تحلیل کاملاً درون‌سازمانی" />
              <ArchLine />
              <ArchRow icon="chart" title="داشبورد رهنمون" desc="نمایش، هشدار و گزارش‌گیری برای تیم شما" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ArchRow({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal-2">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-bold text-white">{title}</div>
        <div className="mt-0.5 text-xs text-mist">{desc}</div>
      </div>
    </div>
  )
}

function ArchLine() {
  return (
    <div className="relative flex h-6 justify-center overflow-hidden">
      <div className="h-full w-px bg-white/10" />
      <div className="absolute top-0 h-3 w-px bg-gradient-to-b from-transparent via-teal-2 to-transparent" style={{ animation: 'flow-down 1.8s linear infinite' }} />
    </div>
  )
}
