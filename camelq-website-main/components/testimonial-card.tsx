"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  image: string
  testimonial: string
  rating?: number
}

export default function TestimonialCard({
  name,
  position,
  company,
  image,
  testimonial,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="hover:-translate-y-1 transition-transform duration-300">
      <Card className="overflow-hidden border-gray-800 bg-black/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 h-full">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-emerald-500/30">
              <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-white">{name}</h4>
              <p className="text-sm text-gray-400">
                {position}, {company}
              </p>
            </div>
          </div>

          <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`} />
            ))}
          </div>

          <blockquote className="text-gray-300 italic relative">
            <span className="text-4xl absolute -top-2 -left-1 text-emerald-500/20">"</span>
            <p className="relative z-10 pl-4">{testimonial}</p>
            <span className="text-4xl absolute -bottom-6 right-0 text-emerald-500/20">"</span>
          </blockquote>
        </CardContent>
      </Card>
    </div>
  )
}

