import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Fade } from "@/components/animations/fade";
import Image from "next/image";

export interface ServicePageTemplateProps {
  title: string;
  intro: string;
  approach: string;
  capabilities: string[];
  why: string;
  techStack: string[];
  testimonials: {
    text: string;
    author: string;
  }[];
}

const ServicePageTemplate: FC<ServicePageTemplateProps> = ({
  title,
  intro,
  approach,
  capabilities,
  why,
  techStack,
  testimonials,
}) => {
  return (
    <div className="relative pt-24 pb-16">
      <div className="absolute inset-0 h-[50vh] bg-gradient-to-b from-black via-gray-900 to-transparent -z-10" />
      <Fade direction="up">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-300 mb-6">{title}</h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            At <strong className="text-2xl font-bold  text-emerald-400  mb-6" >CamelQ</strong>,
            {intro}</p>

          <h2 className="text-2xl font-semibold text-emerald-600 mt-10 mb-4">Our Approach</h2>
          <p className="text-gray-1000 dark:text-gray-300 mb-4">{approach}</p>

          <h2 className="text-2xl font-semibold text-emerald-600 mt-10 mb-4">End-to-End Capabilities</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
            {capabilities.map((cap, idx) => (
              <li key={idx}>{cap}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-emerald-400 mt-10 mb-4">Why CamelQ?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{why}</p>

          {/* Tech Stack */}
          <div className="mt-12 mb-8">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">Technologies We Use</h3>
            <div className="flex flex-wrap gap-6 items-center">
              {techStack.map((tech, idx) => (
                <Image
                  key={idx}
                  src={`/tech/${tech}.png`}
                  alt={`${tech} logo`}
                  width={80}
                  height={100}
                />
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-emerald-400 mb-6">What Our Clients Say</h3>
            <div className="space-y-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="border-l-4 border-emerald-500 pl-4 text-gray-700 dark:text-gray-300">
                  “{t.text}”
                  <div className="mt-2 text-sm text-gray-400">— {t.author}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-6">
                📅 Book a Free Consultation
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" className="text-emerald-400 border-emerald-500 hover:bg-emerald-950 text-lg px-6">
                📂 View Case Studies
              </Button>
            </Link>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <Link href="/services">
              <Button className="bg-gray-700 hover:bg-gray-600 text-white">← Back to Services</Button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ServicePageTemplate;
