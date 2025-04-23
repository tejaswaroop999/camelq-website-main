"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, MapPin, DollarSign, Clock } from "lucide-react"
import { useState,useRef} from "react"

interface JobProps {
  job: {
    title: string
    location: string
    type: string
    salary: string
    description: string
    requirements: string[]
  }
  scrollToForm: () => void
}

export default function JobCard({ job, scrollToForm }: JobProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`bg-white dark:bg-gray-900/30 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 ${
        expanded ? "ring-2 ring-emerald-500/50" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">{job.title}</h3>
        <Badge
          variant="outline"
          className="mt-2 md:mt-0 w-fit bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
        >
          {job.type}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-emerald-500 mr-2 shrink-0" />
          <span className="text-gray-700 dark:text-gray-300 text-sm">{job.location}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="h-5 w-5 text-emerald-500 mr-2 shrink-0" />
          <span className="text-gray-700 dark:text-gray-300 text-sm">{job.salary}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-emerald-500 mr-2 shrink-0" />
          <span className="text-gray-700 dark:text-gray-300 text-sm">{job.type}</span>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>

      {expanded && (
        <div className="mt-4 mb-6 animate-fadeIn">
          <h4 className="font-bold mb-2">Requirements:</h4>
          <ul className="space-y-2">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          className="text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "View Details"}
        </Button>
      
        <Button onClick={scrollToForm} className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
          Apply Now
        </Button>
      </div>
    </div>
  )
}

