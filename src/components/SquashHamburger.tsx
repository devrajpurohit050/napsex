import React from 'react'
import { motion } from 'framer-motion'

interface SquashHamburgerProps {
  isOpen: boolean
  onClick: () => void
  size?: 'desktop' | 'mobile'
}

const SquashHamburger: React.FC<SquashHamburgerProps> = ({ isOpen, onClick, size = 'desktop' }) => {
  const isDesktop = size === 'desktop'
  const w = isDesktop ? 18 : 15
  const h = isDesktop ? 12 : 10
  const barH = isDesktop ? 1.5 : 1.2
  const gap = isDesktop ? 4.5 : 3.75

  const barVariants = {
    top: isOpen
      ? { rotate: 45, y: gap }
      : { rotate: 0, y: 0 },
    middle: isOpen
      ? { opacity: 0, scaleX: 0 }
      : { opacity: 1, scaleX: 1 },
    bottom: isOpen
      ? { rotate: -45, y: -gap }
      : { rotate: 0, y: 0 },
  }

  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center"
      style={{ width: w, height: h }}
      aria-label="Toggle menu"
    >
      <motion.span
        className="absolute bg-white rounded-sm"
        style={{ width: w, height: barH, top: 0 }}
        animate={barVariants.top}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      <motion.span
        className="absolute bg-white rounded-sm"
        style={{ width: w, height: barH, top: gap }}
        animate={barVariants.middle}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      <motion.span
        className="absolute bg-white rounded-sm"
        style={{ width: w, height: barH, top: gap * 2 }}
        animate={barVariants.bottom}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </button>
  )
}

export default SquashHamburger
