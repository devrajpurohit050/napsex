import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CinematicSection from './components/CinematicSection'
import MetricsSection from './components/MetricsSection'
import TechnologySection from './components/TechnologySection'
import ArchitectureSection from './components/ArchitectureSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [entranceComplete, setEntranceComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntranceComplete(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ fontFamily: '"Space Mono", monospace' }}>
      <Navbar entranceComplete={entranceComplete} />
      <HeroSection entranceComplete={entranceComplete} />
      <CinematicSection />
      <MetricsSection />
      <TechnologySection />
      <ArchitectureSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
