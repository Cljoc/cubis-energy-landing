import { Icon } from './icons'
import dashboardMain from '../assets/screens/dashboard-main.png'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-teal/20 blur-[120px]" />
        <div className="absolute bottom-[-12rem] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-amber/10 blur-[120px]" />
        <div className="grain absolute inset-0 opacity-60" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal-2">
            <span className="relative flex h-2 w-2">
              <span className="pulse-ring absolute inline-flex h-2 w-2 rounded-full bg-teal-2" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-2" />
            </span>
            پلتفرم بومی مدیریت انرژی صنعتی
          </div>

          <h1 className="text-balance mt-6 font-black leading-[1.15] text-white text-[clamp(2.25rem,5vw,3.75rem)]">
            هر آنچه از انرژی کارخانه‌تان
            <br />
            باید بدانید، در <span className="text-teal-2">یک داشبورد</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
            CUBIS پایش لحظه‌ای، تحلیل کلان‌داده و مدیریت هوشمند مصرف انرژی را برای صنایع
            انرژی‌بر فراهم می‌کند؛ کاملاً <span className="text-white">On-Premise</span> و
            امن، بدون نگرانی از خروج داده‌های حساس تولید از سازمان شما.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-bold text-navy shadow-[0_0_0_0_rgba(234,168,13,0)] transition hover:bg-teal-2 hover:shadow-[0_0_40px_-8px_rgba(255,207,86,0.6)]"
            >
              درخواست دمو رایگان
              <Icon name="arrow" className="h-4 w-4 -rotate-180 transition group-hover:-translate-x-1" />
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-bold text-white transition hover:bg-white/5"
            >
              مشاهده‌ی داشبورد
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <Stat value="۱۲.۵٪" label="کاهش مصرف انرژی" />
            <Stat value="۹۸.۷٪" label="دقت پایش داده" />
            <Stat value="۲۴/۷" label="مانیتورینگ زنده" />
          </div>
        </div>

        <div className="relative rise" style={{ animationDelay: '120ms' }}>
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="num-en text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs text-mist">{label}</div>
    </div>
  )
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto max-w-lg">
      <div className="float overflow-hidden rounded-2xl border border-white/10 bg-navy-2 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-2/70" />
          <span className="mr-3 truncate text-[11px] text-mist">app.rahnamoon.ir/dashboard</span>
        </div>
        <div className="bg-paper">
          <img src={dashboardMain} alt="داشبورد CUBIS" className="block w-full" />
        </div>
      </div>

      <div className="glass float-slow absolute -bottom-8 -right-6 w-52 rounded-2xl p-4 shadow-xl shadow-black/40">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-amber/15">!</span>
          هشدار انحراف مصرف
        </div>
        <p className="mt-2 text-[11px] leading-5 text-mist">خط تولید ۳ — مصرف ۱۸٪ بالاتر از میانگین هفتگی</p>
      </div>

      <div className="glass float absolute -top-6 -left-8 rounded-2xl px-4 py-3 shadow-xl shadow-black/40" style={{ animationDelay: '1.4s' }}>
        <div className="text-[11px] text-mist">On-Premise</div>
        <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-white">
          <span className="h-2 w-2 rounded-full bg-teal-2" />
          امن روی زیرساخت شما
        </div>
      </div>
    </div>
  )
}
