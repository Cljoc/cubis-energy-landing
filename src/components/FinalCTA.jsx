import Reveal from './Reveal'
import Logo from './Logo'
import MagneticButton from './MagneticButton'
import { Icon } from './icons'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="drift absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/15 blur-[140px]" />
        <div className="grain absolute inset-0 opacity-40" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="relative mx-auto grid h-20 w-20 place-items-center">
            <span className="pulse-ring absolute inset-0 rounded-2xl" />
            <Logo className="relative h-20 w-20" />
          </div>

          <h2 className="mt-8 text-3xl font-black leading-tight text-white sm:text-5xl text-balance">
            آینده‌ی انرژی، از همین‌جا شروع می‌شود
          </h2>
          <p className="mt-5 text-lg text-mist">مانیتور کنید. پیش‌بینی کنید. بهینه کنید.</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 font-bold text-navy transition hover:bg-teal-2"
            >
              درخواست مشاوره رایگان
              <Icon name="arrow" className="h-4 w-4 -rotate-180 transition group-hover:-translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 font-bold text-white transition hover:bg-white/5"
            >
              رزرو جلسه با کارشناسان
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
