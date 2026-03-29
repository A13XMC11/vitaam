import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const links = [
    { label: 'Nosotros', id: 'about' },
    { label: 'Productos', id: 'products' },
    { label: 'Servicios', id: 'services' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contacto', id: 'contact' },
  ]

  return (
    <footer className="bg-[#0f2018] text-[#faf6ef] pt-20 pb-8 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9963f]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-16 border-b border-white/8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <button onClick={() => scrollTo('home')} className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-full bg-[#1a3a2a] border border-[#3d7a54]/40 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#c9963f]">
                  <path d="M12 2C8 6 4 8 4 13a8 8 0 0016 0c0-5-4-7-8-11z" fill="currentColor" opacity="0.9"/>
                  <path d="M12 8v10M8 14c1.5-1 4-1 4 0" stroke="#faf6ef" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="block font-display font-bold text-base text-[#faf6ef] leading-none">VITAAM</span>
                <span className="block text-[9px] text-[#8ab89a] tracking-[0.2em] uppercase mt-0.5">Nutrición Animal</span>
              </div>
            </button>
            <p className="text-[#faf6ef]/50 text-sm leading-relaxed font-light mb-6 max-w-xs">
              Vitaminas, aminoácidos y minerales de alta calidad para el sector pecuario ecuatoriano desde 2010.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/vitaam.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/10 text-xs text-[#faf6ef]/60 hover:border-[#c9963f]/40 hover:text-[#c9963f] transition-all duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/vitaam.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/10 text-xs text-[#faf6ef]/60 hover:border-[#c9963f]/40 hover:text-[#c9963f] transition-all duration-300"
              >
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8ab89a] mb-6 font-medium">Navegación</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-[#faf6ef]/60 hover:text-[#c9963f] text-sm transition-colors duration-300 font-light"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8ab89a] mb-6 font-medium">Contacto</p>
            <div className="space-y-4 text-sm font-light text-[#faf6ef]/60">
              <p>(03) 243-4202 &nbsp;·&nbsp; 099 395 5330</p>
              <a href="mailto:secretaria@vitaam.ec" className="block hover:text-[#c9963f] transition-colors">
                secretaria@vitaam.ec
              </a>
              <p className="leading-relaxed">
                Calle 3 y Calle F<br />
                Parque Industrial Ambato<br />
                Ecuador
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#faf6ef]/25">
          <p>&copy; {year} VITAAM. Todos los derechos reservados.</p>
          <p className="font-display italic text-[#c9963f]/30">Nutrición que transforma el campo ecuatoriano.</p>
        </div>
      </div>
    </footer>
  )
}
