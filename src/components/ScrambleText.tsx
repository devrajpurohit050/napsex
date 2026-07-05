import React, { useEffect, useRef, useState } from 'react'

interface ScrambleTextProps {
  text: string
  isHovered: boolean
  className?: string
}

const CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><'

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, isHovered, className = '' }) => {
  const [display, setDisplay] = useState(text)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    if (isHovered) {
      frameRef.current = 0
      intervalRef.current = setInterval(() => {
        const f = frameRef.current
        let result = ''
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            result += ' '
          } else if (i < f / 4) {
            result += text[i]
          } else {
            result += CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)]
          }
        }
        setDisplay(result)
        frameRef.current += 1
        if (frameRef.current >= text.length * 4) {
          setDisplay(text)
          if (intervalRef.current) clearInterval(intervalRef.current)
        }
      }, 25)
    } else {
      setDisplay(text)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered, text])

  return <span className={className}>{display}</span>
}

export default ScrambleText
