"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface FadeProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
}

export function Fade({ children, direction = "up", delay = 0, duration = 0.5, className = "" }: FadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!ref.current) return

    const translateValue = direction === "none" ? 0 : "20px"
    const translateDirection =
      direction === "up"
        ? `translateY(${translateValue})`
        : direction === "down"
          ? `translateY(-${translateValue})`
          : direction === "left"
            ? `translateX(${translateValue})`
            : direction === "right"
              ? `translateX(-${translateValue})`
              : ""

    if (isInView) {
      ref.current.style.transform = "translate(0)"
      ref.current.style.opacity = "1"
    } else {
      ref.current.style.transform = translateDirection
      ref.current.style.opacity = "0"
    }
  }, [isInView, direction])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `transform ${duration}s ease-out ${delay}s, opacity ${duration}s ease-out ${delay}s`,
        opacity: 0,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}

