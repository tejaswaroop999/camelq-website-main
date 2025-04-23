import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CloudServicesPage() {
  return (
    <ServicePageTemplate
      title="Cloud Services"
      intro="We provide comprehensive cloud solutions to help your business scale, optimize, and secure its digital infrastructure."
      approach="We design cloud solutions that maximize efficiency, scalability, and cost-effectiveness. Our experts will guide you through selecting the right cloud platforms and architectures."
      capabilities={[
        "Cloud Infrastructure Setup & Management",
        "Cloud Migration Services",
        "Multi-cloud & Hybrid Cloud Solutions",
        "DevOps Automation",
        "Cloud Security & Compliance",
        "Cost Optimization & Performance Tuning",
        "Disaster Recovery & Backup Solutions"
      ]}
      why="We ensure that your business is ready for the future by implementing reliable and scalable cloud solutions that minimize risks and maximize operational efficiency."
      techStack={["aws", "azure", "google-cloud", "docker", "kubernetes"]}
      testimonials={[
        {
          text: "Thanks to CamelQ, our cloud infrastructure is more scalable and cost-efficient than ever.",
          author: "Vinay Kumar, CTO, CloudEdge"
        },
        {
          text: "CamelQ helped us migrate to the cloud seamlessly, improving our operations and providing us with a competitive edge.",
          author: "Neelam Bhardwaj, Head of IT, LogiTech"
        }
      ]}
    />
  );
}
