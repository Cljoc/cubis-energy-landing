import { useState } from 'react'
import Reveal from './Reveal'

export default function CTA() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', phone: '', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="drift absolute left-1/2 top-0 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-teal/10 blur-[130px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <span className="kicker text-teal-2">شروع کنید</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            برای دریافت جلسه مشاوره رایگان پلتفرم مدیریت هوشمند انرژی با ما در تماس باشید
          </h2>
          <p className="mt-5 max-w-md leading-8 text-mist">
            کارشناسان رهنمون ظرف کمتر از یک روز کاری با شما تماس می‌گیرند و مسیر استقرار
            پلتفرم را متناسب با زیرساخت کارخانه‌ی شما بررسی می‌کنند.
          </p>

          <div className="mt-8 space-y-3 text-sm text-mist">
            <div className="flex items-center gap-2">
              <span className="text-teal-2">وب‌سایت:</span>
              <a href="https://www.rahnamoon.ir" target="_blank" rel="noreferrer" className="text-white hover:text-teal-2">
                www.rahnamoon.ir
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-teal-2">ایمیل:</span>
              <a href="mailto:info@rahnamoon.ir" className="text-white hover:text-teal-2">
                info@rahnamoon.ir
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-teal-2">آدرس:</span>
              <span className="text-white">تهران، خیابان مطهری، علی‌اکبری، پلاک ۵۵</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="glass rounded-3xl p-7 sm:p-8">
          {sent ? (
            <div className="flex h-full min-h-[22rem] flex-col items-center justify-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-teal/15 text-teal-2">✓</div>
              <h3 className="mt-5 text-lg font-bold text-white">درخواست شما ثبت شد</h3>
              <p className="mt-2 max-w-xs text-sm text-mist">
                همکاران ما به‌زودی از طریق شماره یا ایمیلی که وارد کردید با شما تماس می‌گیرند.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="نام و نام خانوادگی" name="name" value={form.name} onChange={handleChange} required />
              <Field label="نام سازمان" name="company" value={form.company} onChange={handleChange} />
              <Field label="تلفن یا ایمیل" name="phone" value={form.phone} onChange={handleChange} required />
              <div>
                <label className="mb-2 block text-xs font-semibold text-mist">توضیحات (اختیاری)</label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-mist/60 focus:border-teal/50 focus:outline-none"
                  placeholder="نوع صنعت، تعداد خطوط تولید و..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-teal py-3.5 font-bold text-navy transition hover:bg-teal-2"
              >
                ارسال درخواست جلسه مشاوره رایگان
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, required }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-mist">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-mist/60 focus:border-teal/50 focus:outline-none"
      />
    </div>
  )
}
