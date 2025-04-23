"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface StatsCounterProps {
  value: string
  className?: string
  duration?: number
}

export default function StatsCounter({ value, className = "", duration = 2000 }: StatsCounterProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return

    // Extract numeric part and suffix (like +, k, etc.)
    const numericMatch = value.match(/^(\d+)(.*)$/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const targetNumber = Number.parseInt(numericMatch[1], 10)
    const suffix = numericMatch[2] || ""

    let startTime: number
    const startValue = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentValue = Math.floor(progress * (targetNumber - startValue) + startValue)

      setDisplayValue(`${currentValue}${suffix}`)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setDisplayValue(value)
        hasAnimated.current = true
      }
    }

    window.requestAnimationFrame(step)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className={className}>
      {displayValue}
    </div>
  )
}

