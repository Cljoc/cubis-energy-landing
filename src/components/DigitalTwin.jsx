import { useState } from 'react'
import Reveal from './Reveal'
import { Icon } from './icons'

const nodes = [
  { id: 'a', top: '22%', left: '18%', icon: 'gauge', name: 'کوره‌ی ذوب', temp: '۶۸۲°C', current: '۱۲۴A', voltage: '۳۸۰V', power: '۴۷.۲kW', efficiency: '۹۴٪', health: '۹۲٪' },
  { id: 'b', top: '58%', left: '30%', icon: 'bolt', name: 'کمپرسور هوا', temp: '۴۵°C', current: '۸۶A', voltage: '۴۰۰V', power: '۳۴.۴kW', efficiency: '۸۸٪', health: '۷۴٪' },
  { id: 'c', top: '32%', left: '55%', icon: 'link', name: 'نوار نقاله', temp: '۳۸°C', current: '۴۲A', voltage: '۳۸۰V', power: '۱۶.۰kW', efficiency: '۹۶٪', health: '۹۷٪' },
  { id: 'd', top: '68%', left: '72%', icon: 'server', name: 'پست توزیع', temp: '۵۲°C', current: '۲۱۰A', voltage: '۴۰۰V', power: '۸۴.۰kW', efficiency: '۹۱٪', health: '۸۵٪' },
  { id: 'e', top: '18%', left: '80%', icon: 'flask', name: 'واحد خنک‌کننده', temp: '۲۹°C', current: '۵۵A', voltage: '۳۸۰V', power: '۲۰.۹kW', efficiency: '۹۰٪', health: '۹۰٪' },
]

export default function DigitalTwin() {
  const [active, setActive] = useState(nodes[0].id)
  const current = nodes.find((n) => n.id === active)

  return (
    <section id="digital-twin" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">دوقلوی دیجیتال</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              نسخه‌ی زنده‌ی کارخانه‌ی شما، همیشه در دسترس
            </h2>
            <p className="mt-4 text-mist">روی هر تجهیز کلیک کنید تا وضعیت لحظه‌ای آن را ببینید.</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-navy-2">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(242,145,32,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(242,145,32,0.12) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-navy-2)_85%)]" />

            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {nodes.map((n, i) =>
                i === 0 ? null : (
                  <line
                    key={n.id}
                    x1={parseFloat(nodes[0].left)}
                    y1={parseFloat(nodes[0].top)}
                    x2={parseFloat(n.left)}
                    y2={parseFloat(n.top)}
                    stroke={active === n.id || active === nodes[0].id ? 'rgba(255,178,92,0.5)' : 'rgba(255,255,255,0.08)'}
                    strokeWidth="0.3"
                  />
                )
              )}
            </svg>

            {nodes.map((n) => (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                style={{ top: n.top, left: n.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <span
                  className={`relative grid h-12 w-12 place-items-center rounded-2xl border transition ${
                    active === n.id
                      ? 'border-teal-2 bg-teal text-navy shadow-lg shadow-teal/30'
                      : 'border-white/15 bg-navy text-teal-2 hover:border-teal/40'
                  }`}
                >
                  {active === n.id && <span className="pulse-ring absolute inset-0 rounded-2xl" />}
                  <Icon name={n.icon} className="h-5 w-5" />
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-[auto_1fr] sm:items-center">
            <div>
              <div className="text-xs text-mist">تجهیز انتخاب‌شده</div>
              <div className="mt-1 text-lg font-bold text-white">{current.name}</div>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
              <Metric label="دما" value={current.temp} />
              <Metric label="جریان" value={current.current} />
              <Metric label="ولتاژ" value={current.voltage} />
              <Metric label="توان" value={current.power} />
              <Metric label="بازده" value={current.efficiency} />
              <Metric label="سلامت" value={current.health} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Metric({ label, value }) {
  return (
    <div>
      <div className="num-en text-base font-black text-white sm:text-lg">{value}</div>
      <div className="mt-0.5 text-[11px] text-mist">{label}</div>
    </div>
  )
}
