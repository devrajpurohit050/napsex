import React, { useState } from 'react'
import { motion } from 'framer-motion'
import NapseXLogo from './NapseXLogo'

const ContactSection: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${name || 'Website'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:dev@example.com?subject=${subject}&body=${body}`
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full bg-black text-white py-20 px-6 sm:px-12"
    >
      {/* subtle dot grid like other sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.02,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <NapseXLogo size={20} className="text-white/80" />
          <h2 className="text-3xl font-light">Contact</h2>
        </div>

        <p className="text-white/60 mb-8">Have questions or want to collaborate? Send a message and we'll get back to you.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            aria-label="Your name"
            className="bg-white/4 p-3 rounded-md border border-white/8 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/10"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            aria-label="Email"
            className="bg-white/4 p-3 rounded-md border border-white/8 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/10"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            aria-label="Message"
            className="bg-white/4 p-3 rounded-md border border-white/8 placeholder-white/40 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-white/10"
            rows={6}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="md:col-span-2 flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-full"
            >
              Send Message
            </motion.button>
            <p className="text-white/40 text-sm">Or email us directly at <span className="text-white/80">dev@example.com</span></p>
          </div>
        </form>
      </div>
    </motion.section>
  )
}

export default ContactSection
