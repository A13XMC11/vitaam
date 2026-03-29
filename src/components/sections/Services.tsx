import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Formulación\nde Dietas',
    desc: 'Diseñamos dietas personalizadas considerando edad, peso, tipo de actividad, estado reproductivo y disponibilidad de ingredientes. Cada fórmula es única para tu operación.',
    features: ['Análisis de necesidades nutricionales', 'Diseño de formulaciones a medida', 'Seguimiento y ajustes periódicos'],
  },
  {
    num: '02',
    title: 'Análisis NIR',
    desc: 'Tecnología Near Infrared Reflectance para evaluar la composición nutricional exacta de tus materias primas en minutos, sin reactivos químicos.',
    features: ['Proteína cruda y fibra bruta', 'Energía metabolizable', 'Reporte detallado de resultados'],
  },
  {
    num: '03',
    title: 'Asesoría\nTécnica',
    desc: 'Nuestros especialistas van donde estás. Visitas a granja, soporte telefónico, capacitación de personal — respaldo continuo en cada etapa productiva.',
    features: ['Visitas directas a tu granja', 'Consultoría por teléfono y email', 'Capacitación del personal'],
  },
  {
    num: '04',
    title: 'Optimización\nde Costos',
    desc: 'Reducimos el costo de alimentación sin comprometer la salud ni la productividad de tus animales. Analizamos, proponemos e implementamos mejoras medibles.',
    features: ['Diagnóstico de costos actuales', 'Identificación de ineficiencias', 'Implementación y monitoreo'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#faf6ef] py-32 relative overflow-hidden">
      {/* Accent blob */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 70% 30%, #c9963f12, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[#c9963f] text-xs tracking-[0.3em] uppercase mb-4 font-medium">Consultoría integral</p>
            <h2 className="font-display font-black text-5xl lg:text-7xl text-[#1a3a2a] leading-tight">
              Nuestros<br />
              <span className="italic text-[#2d5a3f]">Servicios</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#2d5a3f] font-light leading-relaxed text-lg lg:pb-3"
          >
            No solo vendemos productos — construimos soluciones. Nuestro equipo técnico acompaña cada etapa de tu operación.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative p-10 rounded-3xl border border-[#1a3a2a]/10 hover:border-[#1a3a2a]/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-white overflow-hidden"
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-6 font-display font-black text-7xl leading-none pointer-events-none select-none text-[#1a3a2a] opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
              >
                {s.num}
              </span>

              <h3 className="font-display font-bold text-2xl text-[#1a3a2a] leading-snug mb-4 whitespace-pre-line">
                {s.title}
              </h3>

              <p className="text-[#3d2b1f]/60 leading-relaxed mb-8 font-light">{s.desc}</p>

              <ul className="space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#2d5a3f]">
                    <span className="w-5 h-5 rounded-full bg-[#1a3a2a]/8 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3d7a54]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-16 bg-[#1a3a2a] rounded-3xl p-10 lg:p-14"
        >
          <p className="text-[#c9963f] text-xs tracking-[0.3em] uppercase mb-8 font-medium">Cómo trabajamos</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Diagnóstico', desc: 'Evaluamos tu operación y tus metas productivas.' },
              { step: '2', title: 'Análisis', desc: 'Estudio profundo de tus necesidades específicas.' },
              { step: '3', title: 'Propuesta', desc: 'Diseñamos la solución nutricional a la medida.' },
              { step: '4', title: 'Seguimiento', desc: 'Monitoreamos resultados y ajustamos en tiempo real.' },
            ].map((p, i) => (
              <div key={p.step} className="relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-4 left-full w-full h-px border-t border-dashed border-[#faf6ef]/15 -translate-x-4 z-0" />
                )}
                <span className="block font-display font-black text-4xl text-[#c9963f] mb-3">{p.step}</span>
                <span className="block font-semibold text-[#faf6ef] mb-1">{p.title}</span>
                <span className="block text-sm text-[#8ab89a] font-light leading-relaxed">{p.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
