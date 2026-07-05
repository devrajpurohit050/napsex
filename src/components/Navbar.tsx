import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NapseXLogo from './NapseXLogo'
import ScrambleText from './ScrambleText'
import SquashHamburger from './SquashHamburger'

interface NavbarProps {
  entranceComplete: boolean
}

const Navbar: React.FC<NavbarProps> = ({ entranceComplete }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const scrollTo = (y: number) => {
    window.scrollTo({ top: y, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const scrollToId = (id: string, fallbackY?: number) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    } else if (fallbackY !== undefined) {
      window.scrollTo({ top: fallbackY, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-4 sm:px-6 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: entranceComplete ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Desktop */}
      <div className="hidden md:flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo pill */}
          <motion.div
            className="h-12 px-5 flex items-center gap-2 rounded-[14px] bg-white/15 backdrop-blur-md"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.22)' }}
            whileTap={{ scale: 0.98 }}
          >
            <NapseXLogo size={18} className="text-white" />
            <span className="text-[16px] font-medium tracking-tight text-white">napseX</span>
          </motion.div>

          {/* Expanding menu pill */}
          <motion.div
            className="h-12 flex items-center rounded-[14px] bg-white/15 backdrop-blur-md overflow-hidden"
            animate={{ width: menuOpen ? 290 : 48 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center shrink-0"
              animate={{
                width: menuOpen ? 36 : 48,
                height: menuOpen ? 36 : 48,
                borderRadius: menuOpen ? 11 : 14,
                marginLeft: menuOpen ? 6 : 0,
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              style={menuOpen ? { backgroundColor: 'rgba(255,255,255,0.1)' } : undefined}
            >
              <SquashHamburger isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} size="desktop" />
            </motion.button>
            <AnimatePresence>
              {menuOpen && (
                <div className="flex items-center gap-6 pl-3 pr-4">
                  {[
                    { label: 'About', y: window.innerHeight },
                    { label: 'Metrics', y: window.innerHeight * 2 },
                    { label: 'Contact', y: window.innerHeight * 3, id: 'contact' },
                  ].map((item) => (
                    <motion.button
                      key={item.label}
                      className="text-[16px] font-normal text-white/85 hover:text-white"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => (item.id ? scrollToId(item.id, item.y) : scrollTo(item.y))}
                      onMouseEnter={() => setHoveredLink(item.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <ScrambleText
                        text={item.label}
                        isHovered={hoveredLink === item.label}
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Download button */}
        <motion.button
          className="h-12 px-6 bg-white rounded-full flex items-center gap-2 text-black"
          whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
          whileTap={{ scale: 0.97 }}
          onMouseEnter={() => setHoveredLink('download')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <i className="bi bi-apple text-[16px]" />
          <span className="text-[14px] font-medium">
            <ScrambleText text="Download" isHovered={hoveredLink === 'download'} />
          </span>
        </motion.button>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          {/* Logo pill */}
          <motion.div
            className="h-9 px-3 flex items-center gap-2 rounded-[10px] bg-white/15 backdrop-blur-md"
            animate={{ width: menuOpen ? 0 : undefined, opacity: menuOpen ? 0 : 1, padding: menuOpen ? 0 : undefined }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            style={{ overflow: 'hidden' }}
          >
            <NapseXLogo size={14} className="text-white" />
            <span className="text-[13px] font-medium tracking-tight text-white whitespace-nowrap">napseX</span>
          </motion.div>

          {/* Expanding menu pill */}
          <motion.div
            className="h-9 flex items-center rounded-[10px] bg-white/15 backdrop-blur-md overflow-hidden"
            animate={{ width: menuOpen ? '100%' : 36 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center shrink-0"
              animate={{
                width: menuOpen ? 28 : 36,
                height: menuOpen ? 28 : 36,
                borderRadius: menuOpen ? 8 : 10,
                marginLeft: menuOpen ? 4 : 0,
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            >
              <SquashHamburger isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} size="mobile" />
            </motion.button>
            <AnimatePresence>
              {menuOpen && (
                <div className="flex items-center gap-4 pl-2 pr-3">
                  {[
                    { label: 'About', y: window.innerHeight },
                    { label: 'Metrics', y: window.innerHeight * 2 },
                    { label: 'Contact', y: window.innerHeight * 3, id: 'contact' },
                  ].map((item) => (
                    <motion.button
                      key={item.label}
                      className="text-[13px] font-normal text-white/85 hover:text-white"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => (item.id ? scrollToId(item.id, item.y) : scrollTo(item.y))}
                      onMouseEnter={() => setHoveredLink(item.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <ScrambleText
                        text={item.label}
                        isHovered={hoveredLink === item.label}
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Download button */}
        <motion.button
          className="h-9 px-3.5 bg-white rounded-full flex items-center gap-1.5 text-black ml-2"
          whileHover={{ scale: 1.03, backgroundColor: '#e2e2e6' }}
          whileTap={{ scale: 0.97 }}
          onMouseEnter={() => setHoveredLink('download')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <i className="bi bi-apple text-[13px]" />
          <span className="text-[12px] font-medium">
            <ScrambleText text="Download" isHovered={hoveredLink === 'download'} />
          </span>
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
