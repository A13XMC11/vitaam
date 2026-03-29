import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const links = [
    { label: 'Nosotros', id: 'about' },
    { label: 'Productos', id: 'products' },
    { label: 'Servicios', id: 'services' },
    { label: 'Blog', id: 'blog' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#faf6ef]/95 backdrop-blur-md border-b border-[#e8ddd0]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1a3a2a] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#e8b96a]">
                <path d="M12 2C8 6 4 8 4 13a8 8 0 0016 0c0-5-4-7-8-11z" fill="currentColor" opacity="0.9"/>
                <path d="M12 8v10M8 14c1.5-1 4-1 4 0" stroke="#faf6ef" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span className="block font-display font-bold text-[#1a3a2a] text-lg leading-none tracking-wide">VITAAM</span>
              <span className="block text-[10px] text-[#8ab89a] tracking-[0.2em] uppercase leading-none mt-0.5">Nutrición Animal</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium text-[#2d5a3f] hover:text-[#c9963f] transition-colors duration-300 tracking-wide"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="relative px-6 py-2.5 text-sm font-medium overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[#1a3a2a] rounded-full transition-transform duration-500 group-hover:scale-105"></span>
              <span className="relative text-[#faf6ef] tracking-wide">Contáctenos</span>
            </button>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#1a3a2a]">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#faf6ef] pt-20 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-2 mt-8">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(l.id)}
                  className="text-left text-4xl font-display font-semibold text-[#1a3a2a] py-3 border-b border-[#e8ddd0] hover:text-[#c9963f] transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.07 }}
                onClick={() => scrollTo('contact')}
                className="text-left text-4xl font-display font-semibold text-[#c9963f] py-3"
              >
                Contáctenos
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
