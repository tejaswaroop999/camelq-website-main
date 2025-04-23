"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
  
      toast({
        title: "Message sent!",
        description: data.message,
      });
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Submission failed.",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative justify-items-center pt-24 pb-16"
    >
      <div className="absolute inset-0 h-[50vh] bg-gradient-to-b from-black via-gray-900 to-transparent -z-10" />

      <div className="container px-4 md:px-6 pt-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Contact Us
          </h1>
          <p className="mt-6 text-xl  text-gray-300">
            Have a question or want to discuss your project? Get in touch with
            our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border border-gray-800 rounded-2xl p-6 bg-drak:black/40 backdrop-blur-sm"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur opacity-10"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium  text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-drak:gray-900/50 text-gray-700 dark:text-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium  text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-drak:gray-900/50 text-gray-700 dark:text-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium  text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (123) 456-7890"
                      className="bg-drak:gray-900/50 text-gray-700 dark:text-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium  text-gray-700 dark:text-gray-300"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="bg-drak:gray-900/50 text-gray-700 dark:text-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium  text-gray-700 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="bg-drak:gray-900/50 text-gray-700 dark:text-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium  text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="min-h-[120px] bg-drak:gray-900/50 text-gray-700 dark:text-gray-300"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Have questions about our services or want to start a project?
                  Our team is ready to answer your questions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-emerald-500/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:info@camelq.com"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      info@camelq.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-500/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-gray-400 hover:text-emerald-500 transition-colors"
                    >
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-500/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Office</h4>
                    <address className="text-gray-400 not-italic">
                      123 Tech Park, Digital Avenue
                      <br />
                      Silicon Valley, CA 94043
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              <h3 className="text-xl font-bold mb-4">Working Hours</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 w-full bg- drak:gray-900/50 px-4 py-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-8">
          Our Branches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Branch 1 Map */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-8">
              Our Branches
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3823689720384!2d78.38987527462919!3d17.489251399863722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9133284cdff7%3A0x583a5c3833bd86d6!2sCamelQ%20Software%20Solutions%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1743970499031!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Branch 2 Map */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300 mb-8">
              Our Branches
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=BRANCH2_LINK"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
