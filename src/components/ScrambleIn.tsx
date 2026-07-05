import React, { useEffect, useRef, useState } from 'react'

interface ScrambleInProps {
  text: string
  delay?: number
  triggered?: boolean
}

const CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><'

const ScrambleIn: React.FC<ScrambleInProps> = ({ text, delay = 0, triggered = true }) => {
  const [display, setDisplay] = useState<string>('')
  const [started, setStarted] = useState(false)
  const revealRef = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!triggered) return
    const timer = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [triggered, delay])

  useEffect(() => {
    if (!started) return
    revealRef.current = 0
    intervalRef.current = setInterval(() => {
      const revealPos = revealRef.current
      let result = ''
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          result += ' '
        } else if (i < revealPos) {
          result += text[i]
        } else if (i < revealPos + 3) {
          result += CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)]
        } else {
          result += ' '
        }
      }
      setDisplay(result)
      revealRef.current += 0.5
      if (revealRef.current >= text.length) {
        setDisplay(text)
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, 25)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [started, text])

  if (!started) {
    return <span dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />
  }

  return <span>{display}</span>
}

export default ScrambleIn
