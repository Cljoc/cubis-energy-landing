import Reveal from './Reveal'
import Logo from './Logo'

const protocols = [
  'MQTT', 'Modbus', 'BACnet', 'OPC-UA', 'REST API', 'LoRaWAN',
  'NB-IoT', 'ZigBee', 'WiFi', 'BLE', 'Azure', 'AWS',
  'Google Cloud', 'Node-RED', 'ThingsBoard', 'EMQX',
]

export default function Integrations() {
  const radius = 168

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="kicker justify-center text-teal-2">یکپارچگی</span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl text-balance">
              با هر پروتکل و زیرساختی که دارید، هماهنگ می‌شود
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mx-auto mt-16 grid h-[420px] place-items-center">
            <div className="absolute grid h-24 w-24 place-items-center rounded-2xl border border-teal/30 bg-navy-2 shadow-xl shadow-teal/10">
              <Logo className="h-11 w-11" />
            </div>

            <div className="orbit-ring absolute h-[336px] w-[336px] rounded-full border border-dashed border-white/10">
              {protocols.map((p, i) => {
                const angle = (360 / protocols.length) * i
                return (
                  <div
                    key={p}
                    className="absolute left-1/2 top-1/2 h-0 w-0"
                    style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)` }}
                  >
                    <div className="orbit-counter -translate-x-1/2 -translate-y-1/2">
                      <span className="whitespace-nowrap rounded-full border border-white/10 bg-navy-2 px-3 py-1.5 text-[11px] font-bold text-mist shadow-md shadow-black/30">
                        {p}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
