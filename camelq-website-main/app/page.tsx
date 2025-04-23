 import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Code,
  Database,
  LineChart,
  Laptop,
  Server,
  Users,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";
import ParticlesBackground from "@/components/particles-background";
import { Fade } from "@/components/animations/fade";
import TextReveal from "@/components/animations/text-reveal";
import ParallaxSection from "@/components/animations/parallax-section";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import ClientLogo from "@/components/client-logo";
import TeamMember from "@/components/team-member";
import StatsCounter from "@/components/stats-counter";

export default function HomePage() {
  const clients = [
    {name: "Capemini", logo: "/clients-logo/capemini.png?height=100&width=200"},
    {name: "YASH Technologies", logo: "/clients-logo/yash.png?height=100&width=200"},
    { name: "OLGA", logo: "/clients-logo/olga.png?height=100&width=200" },
    { name: "Wipro", logo: "/clients-logo/wipro.png?height=100&width=200" },
    { name: "Accenture", logo: "/clients-logo/accenture.png?height=100&width=200"},
    { name: "OLGA", logo: "/clients-logo/olga.png?height=100&width=200" },
  ];

  const testimonials = [
    {
      name: "Shahi Brand Builders",
      position: "CTO",
      company: "TechGlobal",
      image: "/clients-feedback/preson2.jpg?height=100&width=100",
      testimonial:
        "Choosing Camelq Software Solutions was one of our best decisions. They have become a trusted partner in our software development journey, consistently exceeding our expectations.",
      rating: 4,
    },
    {
      name: "Modem softech",
      position: "CEO",
      company: "Innovate Solutions",
      image: "/clients-feedback/preson3.jpg?height=100&width=100",
      testimonial:
        "Camelq Software Solutions provides cost-effective solutions without compromising on quality. They understand budget constraints and deliver value for money.",
      rating: 5,
    },
    {
      name: "Raja Ravindra",
      position: "Product Manager",
      company: "NextGen Systems",
      image: "/clients-feedback/preson1.jpg?height=100&width=100",
      testimonial:
        "With Camelq Software Solutions, we benefit from their extensive expertise across a wide range of technologies. They have the skills to tackle any technical challenge.",
      rating: 4,
    },
  ];

  const team = [
    {
      name: "Mr. Mahesh Erukulla",
      position: "CEO & Founder",
      image: "/our-team/ceo.jpg?height=300&width=300",
      bio: "Mahesh has over 15 years of experience in software development and business leadership. He founded CamelQ with a vision to create innovative software solutions.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "Mahesh@camelq.com",
      },
    },
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
      position: "Manager",
      image: "/our-team/hrmanger.jpg?height=300&width=300",
      bio: " Ramu hiring new employees, coordinating workplace activities and administration, ensuring smooth functioning of different departments, manage talent development, etc.",
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
      bio: "Our HR Manager is responsible for overseeing recruitment,employee relations,and performance management.They create an environment that fosters team growth,ensuring a productive and positive workplace culture.",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "jessica@camelq.com",
      },
    },
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "200+",
      label: "Clients Worldwide",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "50+",
      label: "Industry Awards",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      value: "500+",
      label: "Projects Completed",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: "10+",
      label: "Years Experience",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        <div className="container px-4 md:px-6 z-10">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <Fade direction="up" delay={0.2}>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm backdrop-blur-sm bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
              >
                Next Generation Software Solutions
              </Badge>
            </Fade>

            <Fade direction="up" delay={0.3}>
              <TextReveal
                text="We Provide Software Services"
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                tag="h1"
              />
            </Fade>

            <Fade direction="up" delay={0.4}>
              <p className="max-w-[800px] text-gray-300 md:text-xl dark:text-gray-400">
                CamelQ Software Solutions is a creative and dynamic software
                provider committed to delivering state-of-the-art solutions that
                are customized to satisfy the various needs of companies in a
                variety of industries.
              </p>
            </Fade>

            <Fade direction="up" delay={0.5}>
              <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full px-8 group">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-700 dark:text-gray-400 bg-drak:gray-800 hover:bg-gray-800 rounded-full px-8"
                >
                  View Our Services
                </Button>
                </Link>
              </div>
            </Fade>

            <Fade direction="up" delay={0.7}>
              <div className="relative w-full max-w-5xl mt-12">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:translate-y-[-5px] transition-transform duration-300">
                  <Image
                    src="/officebrach.png?height=600&width=1200"
                    width={1200}
                    height={600}
                    alt="Dashboard Preview"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "1.5s", animationDuration: "1s" }}
          >
            <ChevronRight className="h-8 w-8 text-emerald-500 rotate-90" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative justify-items-center py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Fade direction="up">
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm backdrop-blur-sm bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                >
                  About Us
                </Badge>
              </Fade>
              <Fade direction="up" delay={0.1}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  We're a Team of Software Experts
                </h2>
              </Fade>
              <Fade direction="up" delay={0.2}>
                <p className="text-gray-text-gray-700 dark:text-gray-400">
                  Founded in 2015, CamelQ began with a simple mission: to create
                  software that solves real-world problems. What started as a
                  small team of three developers has grown into a full-service
                  software development company serving clients across the globe.
                </p>
              </Fade>
              <Fade direction="up" delay={0.3}>
                <p className="text-gray-700 dark:text-gray-400">
                  Our journey has been defined by continuous learning,
                  innovation, and a commitment to excellence. We've evolved with
                  changing technologies while staying true to our core values of
                  quality, reliability, and client satisfaction.
                </p>
              </Fade>
              <Fade direction="up" delay={0.4}>
                <div className="pt-4">
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10"
                    >
                      Learn More About Us
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Fade>
            </div>
            <Fade direction="up" delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-xl blur-xl opacity-50"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden hover:scale-[1.03] transition-transform duration-300">
                  <Image
                    src="/officeteam.jpg?height=600&width=1000"
                    alt="Our team"
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Fade>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Fade key={index} direction="up" delay={index * 0.1}>
                <div className="bg-drak:gray-900/30 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <StatsCounter
                    value={stat.value}
                    className="text-3xl font-bold text-gray-700 dark:text-gray-400 mb-1"
                  />
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative justify-items-center py-24 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Fade direction="up">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm backdrop-blur-sm bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
              >
                Our Services
              </Badge>
            </Fade>
            <Fade direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700 dark:text-gray-400">
                Extensive Array Of Services
              </h2>
            </Fade>
            <Fade direction="up" delay={0.2}>
              <p className="max-w-[700px] text-gray-700 md:text-xl dark:text-gray-400">
                We are providing a wide range of software services for a lot of
                organizations according to their requirements.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="w-10 h-10" />}
              title="Custom Software Development"
              description="Tailored software solutions designed to address your unique business challenges and requirements."
              delay={0.1}
            />
            <ServiceCard
              icon={<Laptop className="w-10 h-10" />}
              title="Web Application Development"
              description="Modern, responsive web applications built with cutting-edge technologies for optimal performance."
              delay={0.2}
            />
            <ServiceCard
              icon={<Database className="w-10 h-10" />}
              title="Database Solutions"
              description="Robust database design, optimization, and management services to ensure data integrity and performance."
              delay={0.3}
            />
            <ServiceCard
              icon={<Server className="w-10 h-10" />}
              title="Cloud Services"
              description="Scalable cloud solutions that optimize resources, enhance security and reduce operational costs."
              delay={0.4}
            />
            <ServiceCard
              icon={<LineChart className="w-10 h-10" />}
              title="Business Intelligence"
              description="Data analytics and visualization tools that transform your data into actionable business insights."
              delay={0.5}
            />
            <ServiceCard
              icon={<Code className="w-10 h-10" />}
              title="API Development & Integration"
              description="Seamless integration services to connect your systems and streamline your business processes."
              delay={0.6}
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full px-8">
                View All Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection
        bgImage="/placeholder.svg?height=1000&width=2000"
        speed={0.3}
        overlayColor="rgba(0, 0, 0, 0.7)"
        height="auto"
      >
        <div className="container  px-4 md:px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Fade direction="up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                Transforming Ideas into Powerful Solutions
              </h2>
            </Fade>
            <Fade direction="up" delay={0.1}>
              <p className="text-xl text-gray-300 mb-8">
                We combine technical expertise with industry knowledge to
                deliver software that drives business growth.
              </p>
            </Fade>
            <Fade direction="up" delay={0.2}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full px-8"
                >
                  Start Your Project
                </Button>
              </Link>
            </Fade>
          </div>
        </div>
      </ParallaxSection>

      {/* Team Section */}
      <section className="relative justify-items-center py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Fade direction="up">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm backdrop-blur-sm bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
              >
                Our Team
              </Badge>
            </Fade>
            <Fade direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700 dark:text-gray-400">
                Meet Our Experts
              </h2>
            </Fade>
            <Fade direction="up" delay={0.2}>
              <p className="max-w-[700px] text-gray-700 dark:text-gray-400 md:text-xl">
                Our diverse team of experts brings together the perfect blend of
                technical expertise, creativity, and business acumen.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Fade key={index} direction="up" delay={index * 0.1}>
                <TeamMember {...member} />
              </Fade>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/about">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-700 dark:text-gray-400 bg-drak:gray-800 hover:bg-gray-800 rounded-full px-8"
              >
                View Full Team
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative justify-items-center py-24 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Fade direction="up">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm backdrop-blur-sm bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
              >
                Testimonials
              </Badge>
            </Fade>
            <Fade direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700 dark:text-white">
                What Our Clients Say
              </h2>
            </Fade>
            <Fade direction="up" delay={0.2}>
              <p className="max-w-[700px] text-gray-700 dark:text-gray-300 md:text-xl">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Fade key={index} direction="up" delay={index * 0.1}>
                <TestimonialCard {...testimonial} />
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative  justify-items-center py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Fade direction="up">
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm backdrop-blur-sm bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
              >
                Our Clients
              </Badge>
            </Fade>
            <Fade direction="up" delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-700 dark:text-white">
                Trusted by Industry Leaders
              </h2>
            </Fade>
            <Fade direction="up" delay={0.2}>
              <p className="max-w-[700px] text-gray-700 dark:text-gray-400 md:text-xl">
                We've had the privilege of working with some amazing companies
                across various industries.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <Fade key={index} direction="up" delay={index * 0.05}>
                <ClientLogo logo={client.logo} name={client.name} />
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative justify-items-center py-24">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl backdrop-blur-sm border border-gray-800 bg-drak:black/40">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-600/10"></div>
            <div className="relative px-6 py-12 md:py-16 md:px-12 lg:py-20 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-700 dark:text-gray-400 md:text-xl max-w-[600px]">
                  Let us help you build the software solution that will take
                  your business to the next level.
                </p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 rounded-full text-lg"
                  asChild
                >
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
