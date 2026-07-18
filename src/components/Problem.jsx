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
    <section className="relative border-y border-white/5 bg-navy-2/40 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-sm font-bold text-teal-2">چالش صنایع انرژی‌بر</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            مدیریت انرژی بدون دید لحظه‌ای، یعنی هدررفت پنهان سرمایه
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-white/8 bg-white/[0.03] p-7">
              <div className="num-en mb-5 text-4xl font-black text-white/15">{['۰۱', '۰۲', '۰۳'][i]}</div>
              <h3 className="text-lg font-bold text-white">{it.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
