import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionTemplate } from 'framer-motion'

const CINEMATIC_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4'

const CinematicSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 32,
    mass: 1.8,
  })

  const yScaleValue = useTransform(smoothProgress, [0, 1], [60, -120])
  const opacity = useTransform(smoothProgress, [0.3, 0.5], [0, 1])
  const rotateX = useMotionTemplate`rotateX(24deg) translateY(${yScaleValue}px) translateZ(15px)`

  return (
    <section ref={sectionRef} className="relative h-screen h-[100dvh] w-full overflow-hidden">
      {/* Video background */}
      <video
        src={CINEMATIC_VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Top gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '180px',
          background: 'linear-gradient(to bottom, #010103, transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 sm:px-12" style={{ perspective: '400px' }}>
        <motion.p
          className="max-w-5xl font-sans font-normal text-[22px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-white leading-[1.35] tracking-[-0.02em] select-none text-center px-6 sm:px-12"
          style={{
            transform: rotateX,
            opacity,
          }}
        >
          A neural-AI interface built on the architecture of the human nervous system. napseX translates synaptic activity into computational intelligence. Every signal becomes measurable, structured, and visible. It continuously reconstructs internal state as a dynamic neural map. Biological noise is filtered into actionable cognitive patterns.
        </motion.p>
      </div>
    </section>
  )
}

export default CinematicSection
