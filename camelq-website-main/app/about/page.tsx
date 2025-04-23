import Image from "next/image"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Fade } from "@/components/animations/fade"
import { Linkedin, Twitter, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - CamelQ",
  description: "Learn more about CamelQ Software Solutions",
}

export default function AboutPage() {
  const director = {
    name: "Mahesh Erukulla",
    position: "Director",
    image: "/our-team/ceo.jpg?height=300&width=300",
    bio: "Mr. Mahesh Erukulla is the director of Camelq Software Solutions. He has the tremendous experience in the field of software industry and technology. Mahesh has work experience of more than ten years as Manager. His vision towards delivering quality services to clients is unexpectable. The guidance from director, made Camelq trustworthy and top in Hyderabad.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "mahesh@camelq.com",
    },
  }

  const team = [
    {
      name: "Nagulmeera",
      position: "CEO, Guntur Branch",
      image: "/our-team/ceoguntur.png?height=300&width=300",
      bio: "Nagulmeera leads our technical team with his extensive knowledge in cloud architecture and software engineering.he ensures our solutions are cutting-edge.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@camelq.com",
      },
    },
    {
      name: "Ramu",
      position: " Manager",
      image: "/our-team/hrmanger.jpg?height=300&width=300",
      bio: " Our HR Manager is responsible for overseeing recruitment,employee relations,and performance management.They create an environment that fosters team growth,ensuring a productive and positive workplace culture.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "michael@camelq.com",
      },
    },
    {
      name: "Bhanuchandar",
      position: "BDM",
      image: "/our-team/Bdm.jpg?height=300&width=300",
      bio: "The BDM at CamelQ drives growth by identifying new business opportunities,forging strategic partnerships,and expanding our client base.They play a pivotal role in aligning business goals with solutions to ensure long-term success.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "jessica@camelq.com",
      },
    },
  ]

  return (
    <div className="relative  justify-items-center pt-24 pb-16">
      <div className="absolute inset-0 h-[50vh] bg-gradient-to-b from-white via-gray-50 to-transparent dark:from-black dark:via-gray-900 dark:to-transparent -z-10" />

      <div className="container px-4 md:px-6 pt-12">
        {/* About Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Fade direction="up">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              About Us
            </h1>
          </Fade>
          <Fade direction="up" delay={0.1}>
            <p className="mt-6 text-xl text-gray-700 dark:text-gray-300">
              We are a team of passionate developers, designers, and strategists dedicated to creating exceptional
              software solutions.
            </p>
          </Fade>
        </div>

        {/* Director Section */}
        <div className="mb-24 justify-items-center relative">
          <div className="absolute inset-0 bg-[')] bg-no-repeat bg-cover opacity-5 dark:opacity-10"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm backdrop-blur-sm bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-4"
              >
                Meet Our Director
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">The Master Mind Behind CamelQ</h2>
            </div>

            <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-3xl font-bold">Mr. {director.name}</h3>
                  <Badge className="ml-4 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                    {director.position}
                  </Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{director.bio}</p>
                <div className="flex space-x-4">
                  {director.socialLinks.linkedin && (
                    <a
                      href={director.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
                      aria-label={`${director.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                  {director.socialLinks.twitter && (
                    <a
                      href={director.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
                      aria-label={`${director.name}'s Twitter profile`}
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  )}
                  {director.socialLinks.email && (
                    <a
                      href={`mailto:${director.socialLinks.email}`}
                      className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
                      aria-label={`Email ${director.name}`}
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500/30">
                  <Image src={director.image || "/placeholder.svg"} alt={director.name} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Founded in 2015, CamelQ began with a simple mission: to create software that solves real-world problems.
              What started as a small team of three developers has grown into a full-service software development
              company serving clients across the globe.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our journey has been defined by continuous learning, innovation, and a commitment to excellence. We've
              evolved with changing technologies while staying true to our core values of quality, reliability, and
              client satisfaction.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, we're proud to have helped hundreds of businesses transform their ideas into reality and establish
              a reputation for delivering cutting-edge solutions that drive business growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-xl blur-xl opacity-50"></div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="/ouroffice.jpg?height=600&width=1000"
                alt="Our office"
                width={1000}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="mb-24 bg-gray-50/50 dark:bg-gray-900/30 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our mission is to empower businesses through innovative software solutions that drive growth,
                efficiency, and competitive advantage. We strive to be at the forefront of technological advancement,
                delivering solutions that not only meet but exceed our clients' expectations.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mr-3 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold">Excellence</h3>
                    <p>We strive for excellence in everything we do, from code quality to client communication.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mr-3 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold">Innovation</h3>
                    <p>We embrace new technologies and methodologies to deliver cutting-edge solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mr-3 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold">Integrity</h3>
                    <p>We build relationships based on trust, transparency, and ethical business practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mr-3 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold">Collaboration</h3>
                    <p>We work closely with our clients, treating their challenges as our own.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Our diverse team of experts brings together the perfect blend of technical expertise, creativity, and
              business acumen to deliver outstanding results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900/30 rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-emerald-500">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-3">{member.bio}</p>

                  <div className="mt-4 flex space-x-3">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a
                        href={`mailto:${member.socialLinks.email}`}
                        className="text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

