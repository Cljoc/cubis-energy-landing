import { useMemo, useState } from 'react'
import Reveal from './Reveal'

const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const toFa = (n, decimals = 0) =>
  n
    .toFixed(decimals)
    .toLocaleString('en-US')
    .replace(/[0-9]/g, (d) => faDigits[d])

export default function ROICalculator() {
  const [monthlyBill, setMonthlyBill] = useState(2)
  const [investment, setInvestment] = useState(10)
  const [savingPercent, setSavingPercent] = useState(8)

  const result = useMemo(() => {
    const monthlySaving = (monthlyBill * savingPercent) / 100
    const annualSaving = monthlySaving * 12
    const paybackMonths = monthlySaving > 0 ? Math.max(1, investment / monthlySaving) : 0
    const carbonReduction = Math.min(48, savingPercent * 2.7)
    return { monthlySaving, annualSaving, paybackMonths, carbonReduction }
  }, [monthlyBill, investment, savingPercent])

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">محاسبه‌گر بازگشت سرمایه</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              ببینید سرمایه‌گذاری‌تان چقدر زود برمی‌گردد
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-2">
            <div className="space-y-7">
              <Slider
                label="قبض ماهانه‌ی انرژی"
                unit="میلیارد تومان"
                value={monthlyBill}
                min={0.5}
                max={1000}
                step={0.5}
                onChange={setMonthlyBill}
              />
              <Slider
                label="میزان سرمایه‌گذاری"
                unit="میلیارد تومان"
                value={investment}
                min={1}
                max={100}
                step={1}
                onChange={setInvestment}
              />
              <Slider
                label="میزان صرفه‌جویی و بهینه‌سازی"
                unit="٪"
                value={savingPercent}
                min={2}
                max={15}
                step={0.5}
                onChange={setSavingPercent}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Result label="صرفه‌جویی ماهانه" value={`${toFa(result.monthlySaving, 2)}`} unit="میلیارد تومان" />
              <Result label="صرفه‌جویی سالانه" value={`${toFa(result.annualSaving, 1)}`} unit="میلیارد تومان" />
              <Result label="کاهش انتشار کربن" value={`${toFa(result.carbonReduction)}٪`} unit="تخمینی" />
              <Result label="بازگشت سرمایه" value={`${toFa(result.paybackMonths)}`} unit="ماه" highlight />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Slider({ label, unit, value, min, max, step, onChange }) {
  const decimals = step < 1 ? 1 : 0
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-bold text-white">{label}</span>
        <span className="num-en text-teal-2">
          {toFa(value, decimals)} <span className="text-mist">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#f29120]"
      />
    </div>
  )
}

function Result({ label, value, unit, highlight }) {
  return (
    <div className={`rounded-2xl p-5 ${highlight ? 'bg-teal/15' : 'bg-white/[0.04]'}`}>
      <div className="text-xs text-mist">{label}</div>
      <div className={`num-en mt-2 text-2xl font-black ${highlight ? 'text-teal-2' : 'text-white'}`}>{value}</div>
      <div className="mt-1 text-[11px] text-mist">{unit}</div>
    </div>
  )
}
