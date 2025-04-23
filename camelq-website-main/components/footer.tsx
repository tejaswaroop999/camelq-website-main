import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-drak:gray-900/50  justify-items-center border-t  pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-3">
                <Image src="/logo2.png?height=100&width=100" alt="CamelQ Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
                CamelQ
              </span>
            </Link>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              CamelQ Software Solutions is a creative and dynamic software provider committed to delivering
              state-of-the-art solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/people/CamelQ-Software-Solutions/61563781927395/" className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://x.com/camel_q31616" className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/camelqsoftwaresolutions/?hl=en" className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Custom Software Development",
                "Web Application Development",
                "Cloud Services",
                "Database Solutions",
                "Business Intelligence",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
                // { name: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
            <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-400 text-sm">
                Head Office
                <br />
                Hyderabad
                </span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-400 text-sm">
                Guntur:
                <br />
                #10/3, Arundelpet, Near Tagore chowk, Guntur.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-3" />
                <Link
                  href="tel:+11234567890"
                  className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  Head Office: +91 8121444692
                  <br/>
                  Guntur Office: +91 9989681812
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-3" />
                <Link
                  href="mailto:info@camelq.com"
                  className="text-gray-700 dark:text-gray-400 hover:text-emerald-500 transition-colors text-sm"
                >
                  info@camelq.in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} CamelQ Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

