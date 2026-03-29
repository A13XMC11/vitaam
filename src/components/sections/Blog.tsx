import { motion } from 'framer-motion'

const articles = [
  {
    category: 'Ganadería',
    date: 'Sep 3, 2024',
    title: 'Las Principales Razas de Ganado Vacuno en las Regiones de Ecuador',
    excerpt: 'Un recorrido por las razas más productivas y adaptadas a los distintos pisos climáticos del país.',
    tag: 'lectura recomendada',
  },
  {
    category: 'Ovinocultura',
    date: 'Jun 17, 2024',
    title: 'Razas de Ovejas y Regiones Aptas en Ecuador',
    excerpt: 'Guía práctica para elegir la raza correcta según tu zona y objetivos productivos.',
  },
  {
    category: 'Producción Lechera',
    date: 'Ene 13, 2024',
    title: 'Claves para Maximizar la Producción de Leche en el Ganado Vacuno',
    excerpt: 'Prácticas, nutrición y tecnología para aumentar la productividad láctea de forma sostenible.',
    tag: 'popular',
  },
  {
    category: 'Avicultura',
    date: 'Dic 7, 2023',
    title: 'Todo sobre Avicultura: Consejos, Técnicas y Mejores Prácticas',
    excerpt: 'Guía completa para la producción avícola exitosa con máximos rendimientos.',
  },
  {
    category: 'Nutrición',
    date: 'Nov 23, 2023',
    title: 'Principios Básicos de la Nutrición Animal',
    excerpt: 'Los fundamentos esenciales que todo productor pecuario debería dominar.',
    tag: 'fundamental',
  },
  {
    category: 'Porcicultura',
    date: 'Ene 10, 2020',
    title: 'Enfermedades en Granjas Porcinas: Prevención y Control',
    excerpt: 'Identificación temprana y estrategias de manejo para proteger tu hato porcino.',
  },
]

const tagColors: Record<string, { bg: string; text: string }> = {
  'lectura recomendada': { bg: '#c9963f18', text: '#c9963f' },
  'popular': { bg: '#3d7a5418', text: '#3d7a54' },
  'fundamental': { bg: '#1a3a2a18', text: '#1a3a2a' },
}

export default function Blog() {
  return (
    <section id="blog" className="bg-[#1c2320] py-32 relative overflow-hidden">
      {/* Large italic watermark */}
      <div
        className="absolute -bottom-10 left-0 font-display font-black italic text-[16vw] leading-none select-none pointer-events-none text-[#faf6ef] opacity-[0.02]"
      >
        Blog
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[#8ab89a] text-xs tracking-[0.3em] uppercase mb-4 font-medium">Conocimiento del campo</p>
            <h2 className="font-display font-black text-5xl lg:text-7xl text-[#faf6ef] leading-tight">
              Artículos &<br /><span className="italic text-[#8ab89a]">Recursos</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:max-w-xs"
          >
            <p className="text-[#8ab89a] font-light leading-relaxed mb-5">
              Publicaciones sobre nutrición, producción animal y tendencias del sector pecuario ecuatoriano.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="tu@correo.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-[#faf6ef] placeholder-[#faf6ef]/30 focus:outline-none focus:border-[#8ab89a]/50 transition-colors"
              />
              <button className="px-5 py-2.5 bg-[#c9963f] rounded-full text-sm font-medium text-[#1c2320] hover:bg-[#e8b96a] transition-colors whitespace-nowrap">
                Suscribir
              </button>
            </div>
          </motion.div>
        </div>

        {/* Articles Grid – editorial asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className={`group relative rounded-2xl border border-white/8 hover:border-white/15 bg-white/3 hover:bg-white/5 transition-all duration-400 overflow-hidden ${
                i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs text-[#8ab89a] tracking-wide font-medium">{a.category}</span>
                  <span className="text-xs text-[#faf6ef]/30">{a.date}</span>
                </div>

                {a.tag && (
                  <span
                    className="inline-block text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-full mb-4"
                    style={tagColors[a.tag]}
                  >
                    {a.tag}
                  </span>
                )}

                <h3 className="font-display font-semibold text-[#faf6ef] text-lg leading-snug mb-3 group-hover:text-[#e8b96a] transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="text-[#faf6ef]/40 text-sm leading-relaxed font-light mb-6">{a.excerpt}</p>

                <button className="flex items-center gap-2 text-xs font-medium text-[#8ab89a] group-hover:text-[#c9963f] transition-colors duration-300">
                  Leer artículo
                  <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 inline-block">→</span>
                </button>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-[#c9963f] transition-all duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
