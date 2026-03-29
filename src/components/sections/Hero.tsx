import { motion } from 'framer-motion'

export default function Hero() {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="home" className="relative w-full min-h-screen bg-[#faf6ef] overflow-hidden flex flex-col justify-end pb-20 pt-32">
      {/* Deep forest background shape */}
      <div
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 30%, #2d5a3f22 0%, transparent 70%)',
        }}
      />

      {/* Large decorative number */}
      <div
        className="absolute top-24 right-8 lg:right-24 font-display font-black text-[20vw] leading-none select-none pointer-events-none"
        style={{ color: '#1a3a2a', opacity: 0.03 }}
      >
        2010
      </div>

      {/* Floating botanical orb */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 right-12 lg:right-32 w-80 h-80 lg:w-125 lg:h-125 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #3d7a54, #1a3a2a)',
          boxShadow: '0 60px 120px -30px #1a3a2a55',
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-8 rounded-full" style={{ background: 'radial-gradient(circle at 35% 35%, #52b78830, transparent)' }} />

        {/* Organic plant silhouette overlay */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-20" fill="none">
          <path d="M200 340 C200 340 120 260 130 180 C140 100 200 60 200 60 C200 60 260 100 270 180 C280 260 200 340 200 340Z" fill="#faf6ef" />
          <path d="M200 200 C200 200 130 160 120 100" stroke="#faf6ef" strokeWidth="8" strokeLinecap="round" />
          <path d="M200 200 C200 200 270 160 280 100" stroke="#faf6ef" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
          {/* Badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-[#c9963f]">
              <span className="w-8 h-px bg-[#c9963f]"></span>
              Ambato, Ecuador · Desde 2010
              <span className="w-8 h-px bg-[#c9963f]"></span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="font-display font-black text-[#1a3a2a] leading-[0.92] mb-8">
            <span className="block text-6xl lg:text-8xl">Nutrición</span>
            <span className="block text-6xl lg:text-8xl italic text-[#2d5a3f]">que eleva</span>
            <span className="block text-5xl lg:text-7xl mt-2">el campo</span>
            <span className="block text-5xl lg:text-7xl text-[#c9963f]">ecuatoriano.</span>
          </motion.h1>

          {/* Body */}
          <motion.p variants={item} className="text-[#2d5a3f] text-lg leading-relaxed mb-12 max-w-md font-light">
            Vitaminas, aminoácidos y minerales de alta calidad. Potenciamos la salud y productividad de tu rebaño en avicultura, porcicultura y ganadería.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-[#1a3a2a] text-[#faf6ef] font-medium rounded-full hover:bg-[#2d5a3f] transition-colors duration-400 flex items-center gap-3"
            >
              <span>Ver Productos</span>
              <span className="w-5 h-5 rounded-full bg-[#c9963f] flex items-center justify-center text-xs group-hover:scale-110 transition-transform">↓</span>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-[#1a3a2a]/30 text-[#1a3a2a] font-medium rounded-full hover:border-[#c9963f] hover:text-[#c9963f] transition-colors duration-400"
            >
              Solicitar Asesoría
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#1a3a2a]/10 pt-10"
        >
          {[
            { num: '15+', label: 'Años de experiencia' },
            { num: '4', label: 'Líneas de productos' },
            { num: '3', label: 'Sectores pecuarios' },
            { num: '100%', label: 'Capital ecuatoriano' },
          ].map((s) => (
            <div key={s.num}>
              <span className="block font-display font-bold text-4xl text-[#1a3a2a]">{s.num}</span>
              <span className="block text-sm text-[#2d5a3f] mt-1 font-light tracking-wide">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#1a3a2a]/20 to-transparent" />
    </section>
  )
}
