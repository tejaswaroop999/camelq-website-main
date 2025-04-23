"use client"

import { Linkedin, Twitter, Mail } from "lucide-react"

interface TeamMemberProps {
  name: string
  position: string
  image: string
  bio: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export default function TeamMember({ name, position, image, bio, socialLinks = {} }: TeamMemberProps) {
  return (
    <div className="bg-gray-900/30 rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-sm line-clamp-3">{bio}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-emerald-500">{position}</p>

        <div className="mt-4 flex space-x-3">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

