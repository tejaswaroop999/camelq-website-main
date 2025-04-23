"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  bgImage: string
  speed?: number
  className?: string
  overlayColor?: string
  height?: string
}

export default function ParallaxSection({
  children,
  bgImage,
  speed = 0.5,
  className = "",
  overlayColor = "rgba(0, 0, 0, 0.5)",
  height = "100vh",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return

      const scrollPosition = window.pageYOffset
      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight

      // Check if section is in viewport
      if (scrollPosition + window.innerHeight >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        const relativeScroll = scrollPosition - sectionTop
        const translateY = relativeScroll * speed

        bgRef.current.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`} style={{ height }}>
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: overlayColor }} />
      <div className="relative justify-items-center z-10 h-full">{children}</div>
    </section>
  )
}

