import { useMemo, useState } from 'react'
import Reveal from './Reveal'

const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const toFa = (n) => Math.round(n).toLocaleString('en-US').replace(/[0-9]/g, (d) => faDigits[d])

export default function ROICalculator() {
  const [monthlyBill, setMonthlyBill] = useState(500)
  const [equipmentCount, setEquipmentCount] = useState(50)
  const [operatingHours, setOperatingHours] = useState(16)

  const result = useMemo(() => {
    const savingPercent = 10 + Math.min(8, operatingHours / 3)
    const monthlySaving = (monthlyBill * savingPercent) / 100
    const annualSaving = monthlySaving * 12
    const investment = 250 + equipmentCount * 1.4
    const paybackMonths = Math.max(2, investment / monthlySaving)
    const carbonReduction = Math.min(48, savingPercent * 2.1)
    return { savingPercent, monthlySaving, annualSaving, paybackMonths, carbonReduction }
  }, [monthlyBill, equipmentCount, operatingHours])

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
                label="قبض ماهانه‌ی برق"
                unit="میلیون تومان"
                value={monthlyBill}
                min={50}
                max={3000}
                step={10}
                onChange={setMonthlyBill}
              />
              <Slider
                label="تعداد تجهیزات صنعتی"
                unit="دستگاه"
                value={equipmentCount}
                min={5}
                max={400}
                step={5}
                onChange={setEquipmentCount}
              />
              <Slider
                label="ساعات کارکرد روزانه"
                unit="ساعت"
                value={operatingHours}
                min={8}
                max={24}
                step={1}
                onChange={setOperatingHours}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Result label="صرفه‌جویی ماهانه" value={`${toFa(result.monthlySaving)}`} unit="میلیون تومان" />
              <Result label="صرفه‌جویی سالانه" value={`${toFa(result.annualSaving)}`} unit="میلیون تومان" />
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
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-bold text-white">{label}</span>
        <span className="num-en text-teal-2">
          {toFa(value)} <span className="text-mist">{unit}</span>
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
