import Logo from './Logo'

const cols = [
  {
    title: 'محصول',
    links: [
      { label: 'ویژگی‌ها', href: '#features' },
      { label: 'داشبورد', href: '#dashboard' },
      { label: 'امنیت داده', href: '#security' },
      { label: 'نحوه‌ی کار', href: '#how' },
    ],
  },
  {
    title: 'رهنمون',
    links: [
      { label: 'درباره‌ی ما', href: '#' },
      { label: 'تماس با ما', href: '#contact' },
      { label: 'وبلاگ', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="text-sm font-extrabold text-white">رهنمون | پلتفرم مدیریت هوشمند انرژی</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-mist">
              پلتفرم مدیریت هوشمند انرژی صنعتی، برای پایش، تحلیل و بهینه‌سازی مصرف — امن و کاملاً On-Premise.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-mist hover:text-teal-2">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-mist sm:flex-row">
          <span>© {new Date().getFullYear()} رهنمون. تمامی حقوق محفوظ است.</span>
          <span>تهران، خیابان مطهری، علی‌اکبری، پلاک ۵۵ · info@rahnamoon.ir</span>
        </div>
      </div>
    </footer>
  )
}
