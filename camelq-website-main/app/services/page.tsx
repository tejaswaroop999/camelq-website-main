import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code,
  Database,
  LineChart,
  Laptop,
  Server,
  Shield,
  Activity,} from "lucide-react";
import { Fade } from "@/components/animations/fade"; // Import Fade component


export const metadata: Metadata = {
  title: "Services - CamelQ",
  description: "Explore our comprehensive range of software services",
};
const slugify = (str: string) =>
  str.toLowerCase().replace(/ & /g, '-').replace(/[ ]+/g, '-');

export default function ServicesPage() {

  const services = [
    
    {
      icon: <Code className="h-10 w-10" />,
      slug: "Custom-Software-Development",
      title: "Custom Software Development",
      description:
        "We build tailored software solutions designed to address your unique business challenges and requirements. Our team of developers use the latest technologies to create robust, scalable, and secure custom software.",
      features: [
        "Requirement Analysis",
        "Software Architecture Design",
        "Frontend & Backend Development",
        "Quality Assurance & Testing",
        "Deployment & Maintenance",
      ],
    },
    {
      icon: <Laptop className="h-10 w-10" />,
      slug: "web-application-development",
      title: "Web Application Development",
      description:
        "Create powerful web applications that drive business growth. Our web solutions are designed to be responsive, user-friendly, and optimized for performance across all devices.",
      features: [
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "E-commerce Solutions",
        "CMS Development",
        "API Development & Integration",
      ],
    },
    {
      icon: <Database className="h-10 w-10" />,
      slug: "database-solutions",
      title: "Database Solutions",
      description:
        "Optimize your data management with our comprehensive database services. We design, implement, and manage database solutions that ensure data integrity, security, and accessibility.",
      features: [
        "Database Design & Modeling",
        "Database Migration & Optimization",
        "Data Warehousing",
        "NoSQL & SQL Solutions",
        "Database Administration",
      ],
    },
    {
      icon: <Server className="h-10 w-10" />,
      slug: "cloud-services",
      title: "Cloud Services",
      description:
        "Leverage the power of cloud computing to reduce costs and increase operational efficiency. We provide end-to-end cloud solutions from migration to management and optimization.",
      features: [
        "Cloud Migration",
        "Cloud Architecture Design",
        "Serverless Applications",
        "DevOps & CI/CD Pipelines",
        "Cloud Security & Compliance",
      ],
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      slug: "business-intelligence",
      title: "Business Intelligence",
      description:
        "Transform your raw data into actionable insights with our BI solutions. We help you make data-driven decisions with advanced analytics and visualization tools.",
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Real-time Dashboards",
        "Reporting Systems",
        "Data Integration",
      ],
    },
    {
      icon: <Activity className="h-10 w-10" />,
      slug: "ai-machine-learning",
      title: "AI & Machine Learning",
      description:
        "Harness the power of artificial intelligence to gain a competitive edge. Our AI solutions help automate processes, gain insights, and enhance decision-making.",
      features: [
        "Predictive Modeling",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Recommendation Systems",
        "AI Integration Services",
      ],
    },
    {
      icon: <Shield className="h-10 w-10" />,
      slug: "cybersecurity-services",
      title: "Cybersecurity Services",
      description:
        "Protect your digital assets with our comprehensive cybersecurity solutions. We implement robust security measures to safeguard your data and infrastructure.",
      features: [
        "Security Assessment",
        "Penetration Testing",
        "Security Architecture Design",
        "Security Monitoring",
        "Incident Response Planning",
      ],
    },
  ];

  return (
    <div className="relative justify-items-center pt-24 pb-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 h-[50vh] bg-gradient-to-b from-black via-gray-900 to-transparent -z-10" />

      {/* Header Section */}
      <section className="container px-4 md:px-6 pt-12 pb-24">
        <Fade direction="up">
          <div className="max-w-3xl mx-auto justify-items-center text-center mb-20">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-gray-1000 dark:text-gray-300 mb-4">
              We provide a comprehensive range of software solutions tailored to
              meet your business needs.
            </p>
          </div>
        </Fade>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Fade key={index} direction="up" delay={index * 0.1}>
              <div className="bg-drak:black/40 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
                <div className="p-8">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-emerald-500 mr-2 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`}>
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <Fade direction="up" delay={0.2}>
        <section className="bg-drak:gray-900/50 w-full justify-items-center py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto justify-items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 mb-8">
                Contact us today for a free consultation and let us help you
                bring your ideas to life.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}
