import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  {
    id: 'aditivos',
    num: '01',
    title: 'Aditivos',
    subtitle: 'Soporte funcional de alto rendimiento',
    color: '#3d7a54',
    products: [
      { name: 'AVISTIM', desc: 'Soporte durante períodos críticos: inicio, traslado, vacunación, enfermedad.' },
      { name: 'BIOBRON 10', desc: 'Estrés respiratorio — reactiva el apetito y fortalece las defensas naturales.' },
      { name: 'HEPAFLUSH', desc: 'Complemento líquido universal para aves, cerdos y rumiantes.' },
      { name: 'VITASTRONG', desc: 'Preparación para el estro y soporte reproductivo en ponedoras y pollos.' },
      { name: 'Blend Enzimático', desc: 'Formulado para mejorar la producción en aves ponedoras.' },
      { name: 'Blend Cáscara', desc: 'Fortalece la calidad de la cáscara en huevos.' },
      { name: 'Blend Conversión', desc: 'Optimiza la conversión alimenticia en broilers.' },
      { name: 'Permeato de Suero', desc: 'Ingrediente nutricional derivado de suero de leche (Lactosa).' },
    ],
  },
  {
    id: 'nutricionales',
    num: '02',
    title: 'Nutricionales',
    subtitle: 'Pigmentación y calidad del producto final',
    color: '#c9963f',
    products: [
      { name: 'PIGMENTANTE YEMA', desc: 'Mejora la coloración de yema para mayor calidad y valor comercial del huevo.' },
      { name: 'PIGMENTO POLLO', desc: 'Potencia la coloración en pollos de engorde para cumplir estándares de mercado.' },
    ],
  },
  {
    id: 'premezclas',
    num: '03',
    title: 'Premezclas V&M',
    subtitle: 'Vitaminas y minerales por especie',
    color: '#8ab89a',
    products: [
      { name: 'Ponedoras', desc: 'Formuladas específicamente para maximizar la producción de huevos.' },
      { name: 'Broiler', desc: 'Diseñadas para optimizar el crecimiento en pollos de engorde.' },
      { name: 'Cerdos', desc: 'Núcleos y premezclas con soluciones nutricionales completas.' },
      { name: 'Bovinos', desc: 'Mezclas adaptadas a las necesidades de ganado vacuno.' },
      { name: 'Peces', desc: 'Formulaciones específicas para acuicultura sostenible.' },
    ],
  },
  {
    id: 'servicios',
    num: '04',
    title: 'Formulación',
    subtitle: 'Consultoría técnica especializada',
    color: '#1a3a2a',
    products: [
      { name: 'Formulación de Dietas', desc: 'Diseño personalizado de dietas para aves y cerdos según necesidades específicas.' },
      { name: 'Análisis NIR', desc: 'Evaluación de composición nutricional de materias primas por Near Infrared Reflectance.' },
    ],
  },
]

export default function Products() {
  const [active, setActive] = useState(0)

  return (
    <section id="products" className="bg-[#f0e9db] py-32 relative overflow-hidden">
      {/* Large ghost text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[18vw] leading-none select-none pointer-events-none uppercase"
        style={{ color: '#1a3a2a', opacity: 0.04 }}
      >
        V&M
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[#c9963f] text-xs tracking-[0.3em] uppercase mb-3 font-medium">Línea completa</p>
            <h2 className="font-display font-black text-5xl lg:text-7xl text-[#1a3a2a] leading-tight">
              Nuestros<br /><span className="italic">Productos</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-sm text-[#2d5a3f] font-light leading-relaxed"
          >
            Cuatro líneas complementarias para una nutrición completa a lo largo del ciclo productivo de tu rebaño.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActive(i)}
              className={`shrink-0 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'text-[#faf6ef]'
                  : 'bg-white/60 text-[#2d5a3f] hover:bg-white'
              }`}
              style={active === i ? { background: cat.color } : {}}
            >
              <span className="opacity-50 mr-2 text-xs">{cat.num}</span>
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left: category info */}
              <div className="lg:w-72 shrink-0">
                <span
                  className="block font-display font-black text-8xl leading-none mb-4"
                  style={{ color: categories[active].color, opacity: 0.15 }}
                >
                  {categories[active].num}
                </span>
                <h3 className="font-display font-bold text-3xl text-[#1a3a2a] mb-2">
                  {categories[active].title}
                </h3>
                <p className="text-[#2d5a3f] font-light text-sm leading-relaxed mb-6">
                  {categories[active].subtitle}
                </p>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full text-[#faf6ef] transition-all hover:opacity-90"
                  style={{ background: categories[active].color }}
                >
                  Solicitar info
                  <span>→</span>
                </button>
              </div>

              {/* Right: product list */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories[active].products.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="p-5 rounded-2xl border border-[#e8ddd0] hover:border-[#1a3a2a]/20 hover:shadow-sm transition-all duration-300 group"
                  >
                    <span
                      className="block font-display font-semibold text-sm mb-1.5 group-hover:opacity-80 transition-colors"
                      style={{ color: categories[active].color }}
                    >
                      {p.name}
                    </span>
                    <p className="text-[#3d2b1f]/60 text-sm leading-relaxed font-light">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
