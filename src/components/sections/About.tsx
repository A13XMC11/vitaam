import { motion } from 'framer-motion'

export default function About() {
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
  }

  const values = [
    { label: 'Orientación al Cliente', desc: 'El productor nacional es nuestra razón de ser.' },
    { label: 'Ética', desc: 'Operamos con los más altos estándares de integridad.' },
    { label: 'Liderazgo', desc: 'Referentes en nutrición animal del Ecuador.' },
    { label: 'Innovación', desc: 'Soluciones de vanguardia para el campo moderno.' },
    { label: 'Trabajo en Equipo', desc: 'La colaboración es nuestra mayor fortaleza.' },
  ]

  return (
    <section id="about" className="bg-[#1a3a2a] text-[#faf6ef] py-32 relative overflow-hidden">
      {/* Decorative texture ring */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full border border-[#faf6ef]/5 pointer-events-none"
        style={{ boxShadow: '0 0 0 60px #faf6ef08, 0 0 0 120px #faf6ef04' }}
      />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c9963f15, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Header – asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#c9963f] text-xs tracking-[0.3em] uppercase mb-4 font-medium">Sobre VITAAM</p>
            <h2 className="font-display text-5xl lg:text-7xl font-black leading-tight">
              Más de una<br />
              <span className="italic text-[#8ab89a]">década</span><br />
              transformando
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:pb-4"
          >
            <p className="text-[#8ab89a] text-lg leading-relaxed mb-6 font-light">
              Fundada el 4 de agosto de 2010 con capital ecuatoriano, VITAAM nació de la convicción de que el productor nacional merece las mejores herramientas para prosperar.
            </p>
            <p className="text-[#faf6ef]/60 leading-relaxed font-light">
              Hoy somos referentes en nutrición y salud animal, sirviendo a los sectores de avicultura, porcicultura y ganadería con productos de calidad internacional y asesoría técnica de alto nivel.
            </p>
          </motion.div>
        </div>

        {/* Mission / Vision – big cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: 'Misión',
              body: 'Contribuir a la nutrición y salud animal del sector pecuario ecuatoriano, a través de productos reconocidos y asesoría técnica altamente calificada, en estricto cumplimiento a la normativa vigente.',
              accent: '#c9963f',
            },
            {
              title: 'Visión',
              body: 'Ser la empresa referente en nutrición y salud animal, aportando conocimiento e innovación al sector pecuario ecuatoriano.',
              accent: '#8ab89a',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              style={{ transitionDelay: `${i * 0.1}s` }}
              className="group p-10 rounded-2xl border border-[#faf6ef]/10 hover:border-[#faf6ef]/20 transition-all duration-500 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                style={{ background: card.accent }}
              />
              <span className="font-display text-xs tracking-[0.3em] uppercase" style={{ color: card.accent }}>
                {card.title}
              </span>
              <p className="mt-4 text-[#faf6ef]/80 leading-relaxed text-lg font-light">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Values – horizontal scroll of pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#c9963f] text-xs tracking-[0.3em] uppercase mb-6 font-medium">Valores corporativos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-6 rounded-xl border border-[#faf6ef]/8 hover:border-[#c9963f]/30 hover:bg-[#faf6ef]/5 transition-all duration-400 group"
              >
                <span className="block font-display font-semibold text-[#faf6ef] mb-2 group-hover:text-[#c9963f] transition-colors">
                  {v.label}
                </span>
                <span className="block text-sm text-[#faf6ef]/50 leading-relaxed font-light">{v.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
