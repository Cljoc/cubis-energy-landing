import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { Icon } from './icons'

const industries = [
  { icon: 'flask', title: 'نفت و گاز', desc: 'پایش مصرف انرژی در پالایشگاه‌ها و خطوط لوله.' },
  { icon: 'gauge', title: 'معدن', desc: 'کنترل مصرف تجهیزات سنگین و خطوط استخراج.' },
  { icon: 'bolt', title: 'فولاد و ذوب', desc: 'بهینه‌سازی مصرف کوره‌ها و خطوط نورد.' },
  { icon: 'shield', title: 'بیمارستان', desc: 'تضمین پایداری برق تجهیزات حیاتی درمانی.' },
  { icon: 'building', title: 'ساختمان تجاری', desc: 'مدیریت متمرکز انرژی چند طبقه و چند مستأجر.' },
  { icon: 'server', title: 'مرکز داده', desc: 'پایش دقیق مصرف رک‌ها و سیستم خنک‌کننده.' },
  { icon: 'radio', title: 'فرودگاه', desc: 'هماهنگی مصرف ترمینال‌ها، باند و تأسیسات.' },
  { icon: 'link', title: 'هتل', desc: 'بهینه‌سازی مصرف اتاق‌ها و تأسیسات رفاهی.' },
  { icon: 'cloud', title: 'تصفیه‌ی آب', desc: 'پایش انرژی پمپ‌ها و واحدهای تصفیه.' },
]

export default function Industries() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">صنایع</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              راهکاری برای هر صنعت انرژی‌بر
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 3) * 90}>
              <TiltCard max={8} className="h-full">
                <div className="group h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:border-teal/30 hover:bg-white/[0.05]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-teal/10 text-teal-2 transition group-hover:bg-teal group-hover:text-navy">
                    <Icon name={ind.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-white">{ind.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-mist">{ind.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
