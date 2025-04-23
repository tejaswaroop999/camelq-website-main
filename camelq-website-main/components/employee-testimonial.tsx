"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface EmployeeTestimonialProps {
  name: string
  position: string
  years: string
  image: string
  quote: string
}

export default function EmployeeTestimonial({ name, position, years, image, quote }: EmployeeTestimonialProps) {
  return (
    <Card className="overflow-hidden border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/30 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-emerald-500/30">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{position}</p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400">{years}</p>
          </div>
        </div>

        <div className="relative">
          <Quote className="absolute top-0 left-0 h-6 w-6 text-emerald-500/20 -translate-x-2 -translate-y-2" />
          <p className="text-gray-700 dark:text-gray-300 text-sm italic pl-4">{quote}</p>
        </div>
      </CardContent>
    </Card>
  )
}

