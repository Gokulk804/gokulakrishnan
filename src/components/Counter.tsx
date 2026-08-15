import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CounterProps {
  value: number
  suffix?: string
}

export default function Counter({ value, suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 90 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(() => {
    const unsub = springValue.on('change', (v) => setDisplay(Math.round(v)))
    return unsub
  }, [springValue])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
