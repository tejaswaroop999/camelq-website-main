"use client";

// import type { Metadata } from "next"
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Fade } from "@/components/animations/fade";
import { Briefcase, Award, Users, Coffee } from "lucide-react";
import JobCard from "@/components/job-card";
import EmployeeTestimonial from "@/components/employee-testimonial";

// export const metadata: Metadata = {
//   title: "Careers - CamelQ",
//   description: "Join our team and build the future of software",
// }

export default function CareersPage() {
  const jobs = [
    {
      title: "Java Developer",
      location: "Hyderabad, India (Hybrid)",
      type: "Full-time",
      salary: "₹8,00,000 - ₹12,00,000",
      description:
        "Responsible for developing high-quality software applications, collaborating with cross-functional teams, and ensuring code quality.",
      requirements: [
        "3+ years of experience in Java development",
        "Strong knowledge of Spring Boot and microservices",
        "Experience with RESTful APIs and SQL databases",
        "Good understanding of software design patterns",
      ],
    },
    {
      title: "Python Developer",
      location: "Remote (India)",
      type: "Full-time",
      salary: "₹7,00,000 - ₹11,00,000",
      description:
        "Develop and maintain web applications, ensure responsiveness, and coordinate with front-end developers.",
      requirements: [
        "2+ years of experience in Python development",
        "Proficiency in Django or Flask frameworks",
        "Experience with database design and ORM",
        "Knowledge of front-end technologies (HTML, CSS, JavaScript)",
      ],
    },
    {
      title: "Azure Specialist",
      location: "Hyderabad, India (On-site)",
      type: "Full-time",
      salary: "₹10,00,000 - ₹15,00,000",
      description:
        "Manage cloud infrastructure, implement security measures, and optimize performance on Microsoft Azure.",
      requirements: [
        "3+ years of experience with Azure cloud services",
        "Azure certifications (AZ-104, AZ-204, or AZ-303)",
        "Experience with IaaS, PaaS, and SaaS solutions",
        "Knowledge of DevOps practices and tools",
      ],
    },
    {
      title: "SAP Consultant",
      location: "Bangalore, India (Hybrid)",
      type: "Full-time",
      salary: "₹12,00,000 - ₹18,00,000",
      description:
        "Provide expertise in SAP modules, assist in system configuration, and support end-users.",
      requirements: [
        "5+ years of experience in SAP implementation",
        "Expertise in at least one SAP module (FI/CO, MM, SD, etc.)",
        "Experience with SAP HANA and S/4HANA",
        "Strong analytical and problem-solving skills",
      ],
    },
    {
      title: "AWS DevOps Engineer",
      location: "Remote (India)",
      type: "Full-time",
      salary: "₹9,00,000 - ₹14,00,000",
      description:
        "Implement CI/CD pipelines, manage cloud resources, and ensure system reliability on AWS.",
      requirements: [
        "3+ years of experience in DevOps or SRE roles",
        "AWS certifications (Solutions Architect, DevOps Engineer)",
        "Experience with containerization (Docker, Kubernetes)",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "Senior Developer",
      years: "4 years at CamelQ",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working at CamelQ has been the most rewarding experience of my career. The collaborative environment and challenging projects have helped me grow both professionally and personally.",
    },
    {
      name: "Rahul Verma",
      position: "Project Manager",
      years: "3 years at CamelQ",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "CamelQ truly values work-life balance. The flexible work arrangements and supportive management have made it possible for me to excel in my role while maintaining time for my family.",
    },
    {
      name: "Ananya Patel",
      position: "UX Designer",
      years: "2 years at CamelQ",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The culture at CamelQ encourages innovation and creative thinking. I've had the opportunity to work on cutting-edge projects and implement my ideas with full support from the team.",
    },
  ];

  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Competitive Compensation",
      description:
        "Attractive salary packages with performance bonuses and equity options for eligible roles.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Health Benefits",
      description:
        "Comprehensive health, dental, and vision insurance for you and your family.",
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Work-Life Balance",
      description:
        "Flexible work hours, remote work options, and generous paid time off policy.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Growth Opportunities",
      description:
        "Professional development budget, mentorship programs, and clear career advancement paths.",
    },
  ];
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/applyjob", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative  justify-items-center pt-24 pb-16">
      <div className="absolute inset-0 h-[50vh] bg-gradient-to-b from-white via-gray-50 to-transparent dark:from-black dark:via-gray-900 dark:to-transparent -z-10" />

      <div className="container px-4 md:px-6 pt-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Fade direction="up">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm backdrop-blur-sm bg-emerald-500/10 text-emerald-500 border-emerald-500/20 mb-4"
            >
              Join Our Team
            </Badge>
          </Fade>
          <Fade direction="up" delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
              Careers at CamelQ
            </h1>
          </Fade>
          <Fade direction="up" delay={0.2}>
            <p className="mt-6 text-xl text-gray-700 dark:text-gray-300">
              Join our team of passionate professionals and help us build the
              next generation of software solutions.
            </p>
          </Fade>
        </div>

        {/* Why Join Us */}
        <section className="mb-20">
          <div className="bg-white dark:bg-gray-900/30 rounded-3xl p-8 md:p-12 shadow-sm">
            <Fade direction="up">
              <h2 className="text-3xl font-bold mb-6">Why Join CamelQ?</h2>
            </Fade>
            <Fade direction="up" delay={0.1}>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                At CamelQ, we believe in creating an environment where talented
                individuals can thrive, innovate, and grow. We're committed to
                fostering a culture of collaboration, continuous learning, and
                work-life balance.
              </p>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Fade direction="up" delay={0.2}>
                <div className="bg-gray-50 dark:bg-black/40 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                    Innovative Work
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Work on cutting-edge projects using the latest technologies.
                    We tackle complex challenges and create solutions that make
                    a real impact.
                  </p>
                </div>
              </Fade>
              <Fade direction="up" delay={0.3}>
                <div className="bg-gray-50 dark:bg-black/40 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                    Growth Opportunities
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We invest in our team's professional development through
                    mentorship, training programs, and opportunities to work on
                    diverse projects.
                  </p>
                </div>
              </Fade>
              <Fade direction="up" delay={0.4}>
                <div className="bg-gray-50 dark:bg-black/40 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                    Collaborative Culture
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Join a team of passionate professionals who value
                    collaboration, open communication, and mutual respect.
                  </p>
                </div>
              </Fade>
              <Fade direction="up" delay={0.5}>
                <div className="bg-gray-50 dark:bg-black/40 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                    Work-Life Balance
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We understand the importance of balance. Flexible work
                    arrangements and generous time off help our team stay
                    refreshed and motivated.
                  </p>
                </div>
              </Fade>
            </div>

            {/* Benefits */}
            <div className="mt-12">
              <Fade direction="up" delay={0.6}>
                <h3 className="text-2xl font-bold mb-8">Benefits & Perks</h3>
              </Fade>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Fade key={index} direction="up" delay={0.1 * index}>
                    <div className="bg-white dark:bg-gray-800/30 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <h4 className="text-lg font-bold mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Fade direction="up">
              <h2 className="text-3xl font-bold mb-4">Life at CamelQ</h2>
            </Fade>
            <Fade direction="up" delay={0.1}>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Hear from our team members about their experiences working at
                CamelQ.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Fade key={index} direction="up" delay={index * 0.1}>
                <EmployeeTestimonial {...testimonial} />
              </Fade>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <Fade direction="up">
            <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
          </Fade>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Fade key={index} direction="up" delay={index * 0.1}>
                <JobCard job={job} scrollToForm={scrollToForm} />
              </Fade>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-20" ref={formRef}>
          <div className="bg-white dark:bg-gray-900/30 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl mx-auto">
              <Fade direction="up">
                <h2 className="text-3xl font-bold mb-6">Apply Now</h2>
              </Fade>
              <Fade direction="up" delay={0.1}>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Interested in joining our team? Fill out the form below and
                  we'll get back to you as soon as possible.
                </p>
              </Fade>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-medium">
                      Position Applying For{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-3 py-2 text-sm"
                    >
                      <option value="">Select a position</option>
                      {jobs.map((job, index) => (
                        <option key={index} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                      <option value="other">
                        Other (specify in cover letter)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-3 py-2 text-sm"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="resume" className="text-sm font-medium">
                    Resume/CV <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="resume-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PDF, DOCX (MAX. 2MB)
                        </p>
                      </div>
                      <input
                        id="resume-upload"
                        type="file"
                        className="hidden"
                        accept=".pdf,.docx"
                        required
                      />
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="cover-letter" className="text-sm font-medium">
                    Cover Letter
                  </label>
                  <Textarea
                    id="cover-letter"
                    name="cover-letter"
                    placeholder="Tell us why you're interested in this position and what you can bring to the team..."
                    className="min-h-[120px] bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <Fade direction="up">
            <h2 className="text-3xl font-bold mb-8">Our Application Process</h2>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Application",
                description:
                  "Submit your resume and cover letter through our online portal.",
              },
              {
                step: "2",
                title: "Initial Screening",
                description:
                  "Our HR team will review your application and schedule a brief phone interview.",
              },
              {
                step: "3",
                title: "Technical Assessment",
                description:
                  "Complete a technical assessment or project relevant to the position.",
              },
              {
                step: "4",
                title: "Final Interviews",
                description:
                  "Meet with the team for in-depth discussions about your experience and fit.",
              },
            ].map((step, index) => (
              <Fade key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-900/30 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 mt-2">{step.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
