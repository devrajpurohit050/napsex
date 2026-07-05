import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ScrambleIn from './ScrambleIn'

const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4'

interface HeroSectionProps {
  entranceComplete: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({ entranceComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const lastMouseX = useRef(0)
  const isSeeking = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    video.currentTime = 0

    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - lastMouseX.current
      lastMouseX.current = e.clientX
      if (!video || video.readyState < 2) return
      const newTime = Math.max(0, Math.min(video.duration || 0, video.currentTime + delta * 0.008))
      if (!isSeeking.current) {
        isSeeking.current = true
        video.currentTime = newTime
      }
    }

    const handleSeeked = () => {
      isSeeking.current = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    video.addEventListener('seeked', handleSeeked)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [])

  return (
    <section className="relative h-screen h-[100dvh] w-full overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.05,
        }}
      />

      {/* Watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none select-none"
        style={{ paddingTop: '50px' }}
      >
        <span
          className="uppercase tracking-[-4px] font-['Anton_SC',sans-serif]"
          style={{
            fontSize: 'clamp(120px, 30vw, 521px)',
            background: 'radial-gradient(circle, rgba(142,127,148,0) 0%, #8E7F94 70%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            opacity: 0.10,
          }}
        >
          TRANSCENDENCE
        </span>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col h-full px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex-1" />
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)]">
              <ScrambleIn text="Brain" delay={200} triggered={entranceComplete} />
              <br />
              <ScrambleIn text="And Body" delay={500} triggered={entranceComplete} />
            </h1>
            <motion.p
              className="max-w-sm text-[13px] sm:text-[15px] text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              animate={entranceComplete ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.215, 0.610, 0.355, 1.000],
              }}
            >
              Built at the intersection of neuroscience and artificial intelligence. napseX continuously maps neural pathways, cognitive load, and physiological states into a single adaptive intelligence layer.
            </motion.p>
          </div>

          {/* Right h1 */}
          <h1 className="text-white font-light leading-[0.95] tracking-[-0.03em] text-[clamp(40px,10vw,100px)] text-left md:text-right">
            <ScrambleIn text="One" delay={700} triggered={entranceComplete} />
            <br />
            <ScrambleIn text="Network" delay={1000} triggered={entranceComplete} />
          </h1>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
