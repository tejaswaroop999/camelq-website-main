"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Fade } from "./animations/fade"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <Fade direction="up" delay={delay}>
      <div className="hover:-translate-y-2 transition-transform duration-300 h-full">
        <Card className="overflow-hidden border-gray-800 bg-drak:black/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 h-full group">
          <div className="absolute h-1 bg-gradient-to-r from-emerald-500 to-teal-600 top-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <CardHeader>
            <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 hover:scale-110 hover:bg-emerald-500/20 transition-all duration-300">
              {icon}
            </div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 dark:text-gray-400">{description}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </Fade>
  )
}

