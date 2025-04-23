"use client"

interface ClientLogoProps {
  logo: string
  name: string
  className?: string
}

export default function ClientLogo({ logo, name, className = "" }: ClientLogoProps) {
  return (
    <div
      className={`bg-drak:gray-900/50 backdrop-blur-sm p-6 rounded-lg flex items-center justify-center h-24 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(16,185,129,0.1),0_4px_6px_-2px_rgba(16,185,129,0.05)] transition-all duration-300 ${className}`}
    >
      <img
        src={logo || "/placeholder.svg"}
        alt={`${name} logo`}
        className="max-h-20 max-w-full object-contain  hover:grayscale-0 transition-all duration-300"
      />
    </div>
  )
}