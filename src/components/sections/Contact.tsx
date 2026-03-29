import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSent(false)
    }, 4000)
  }

  const inputClass = (name: string) =>
    `w-full bg-transparent border-b-2 py-3 text-[#faf6ef] placeholder-[#faf6ef]/25 text-sm outline-none transition-colors duration-300 ${
      focused === name ? 'border-[#c9963f]' : 'border-[#faf6ef]/15 hover:border-[#faf6ef]/30'
    }`

  const fields = [
    { name: 'name', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre' },
    { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu@empresa.com' },
    { name: 'phone', label: 'Teléfono', type: 'tel', placeholder: '+593 9XX XXX XXXX' },
  ]

  return (
    <section id="contact" className="bg-[#faf6ef] py-32 relative overflow-hidden">
      {/* Decorative circle */}
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border-2 border-[#1a3a2a]/5 pointer-events-none"
        style={{ boxShadow: '0 0 0 60px #1a3a2a04' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-[#c9963f] text-xs tracking-[0.3em] uppercase mb-4 font-medium">Hablemos</p>
            <h2 className="font-display font-black text-5xl lg:text-6xl text-[#1a3a2a] leading-tight mb-8">
              Estamos<br />
              <span className="italic">aquí para</span><br />
              ayudarte.
            </h2>

            <p className="text-[#2d5a3f] font-light leading-relaxed mb-12 max-w-md">
              Cuéntanos sobre tu operación. Nuestro equipo técnico te contactará con las soluciones más adecuadas para tus necesidades.
            </p>

            {/* Contact details */}
            <div className="space-y-8">
              {[
                {
                  label: 'Teléfonos',
                  lines: ['(03) 243-4202', '099 395 5330'],
                },
                {
                  label: 'Correo',
                  lines: ['secretaria@vitaam.ec'],
                },
                {
                  label: 'Ubicación',
                  lines: ['Calle 3 y Calle F', 'Parque Industrial Ambato, Ecuador'],
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-6">
                  <span className="text-xs text-[#c9963f] tracking-[0.2em] uppercase font-medium w-20 pt-0.5">
                    {item.label}
                  </span>
                  <div>
                    {item.lines.map((l) => (
                      <p key={l} className="text-[#1a3a2a] font-medium leading-relaxed">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-12 flex gap-3">
              <a
                href="https://www.facebook.com/vitaam.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-[#1a3a2a]/15 text-sm font-medium text-[#1a3a2a] hover:bg-[#1a3a2a] hover:text-[#faf6ef] hover:border-[#1a3a2a] transition-all duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/vitaam.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-[#1a3a2a]/15 text-sm font-medium text-[#1a3a2a] hover:bg-[#1a3a2a] hover:text-[#faf6ef] hover:border-[#1a3a2a] transition-all duration-300"
              >
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="bg-[#1a3a2a] rounded-3xl p-10 lg:p-12 relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, #c9963f12, transparent 70%)' }}
            />

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-6"
              >
                <CheckCircle className="w-14 h-14 text-[#8ab89a]" />
                <div>
                  <p className="font-display font-bold text-2xl text-[#faf6ef] mb-2">¡Mensaje enviado!</p>
                  <p className="text-[#8ab89a] font-light">Nos pondremos en contacto contigo muy pronto.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-8">
                <h3 className="font-display font-bold text-2xl text-[#faf6ef] mb-2">Envía un mensaje</h3>

                {fields.map((f) => (
                  <div key={f.name}>
                    <label className="block text-[10px] tracking-[0.25em] uppercase text-[#8ab89a] mb-2 font-medium">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={formData[f.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocused(f.name)}
                      onBlur={() => setFocused(null)}
                      placeholder={f.placeholder}
                      required
                      className={inputClass(f.name)}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#8ab89a] mb-2 font-medium">Asunto</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`${inputClass('subject')} cursor-pointer`}
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" disabled className="bg-[#1a3a2a]">Selecciona un asunto</option>
                    <option value="productos" className="bg-[#1a3a2a]">Consulta de Productos</option>
                    <option value="asesoria" className="bg-[#1a3a2a]">Solicitud de Asesoría</option>
                    <option value="nir" className="bg-[#1a3a2a]">Análisis NIR</option>
                    <option value="otro" className="bg-[#1a3a2a]">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-[#8ab89a] mb-2 font-medium">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    required
                    placeholder="Cuéntanos sobre tu operación y cómo podemos ayudarte..."
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#c9963f] hover:bg-[#e8b96a] rounded-2xl text-[#1a3a2a] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#c9963f]/20 group"
                >
                  Enviar mensaje
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
