import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CybersecurityServicesPage() {
  return (
    <ServicePageTemplate
      title="Cybersecurity Services"
      intro="We offer a full range of cybersecurity services to protect your business from evolving threats and ensure your systems remain secure."
      approach="Our team conducts thorough risk assessments and designs tailored security strategies to safeguard your digital assets, from network infrastructure to cloud environments."
      capabilities={[
        "Vulnerability Assessments & Penetration Testing",
        "Network Security & Firewall Protection",
        "Data Encryption & Compliance",
        "Endpoint Protection",
        "Incident Response & Forensics",
        "Security Monitoring & Threat Intelligence",
        "Security Awareness Training"
      ]}
      why="We help you safeguard your critical systems and data, ensuring that your business remains resilient against cyber threats."
      techStack={["aws", "azure", "docker", "kubernetes", "splunk"]}
      testimonials={[
        {
          text: "CamelQ's cybersecurity services provided us with the peace of mind we needed to confidently grow our business in a secure environment.",
          author: "Ramesh Soni, CTO, SecureNet"
        },
        {
          text: "Their proactive approach to cybersecurity helped us identify and mitigate potential threats before they became critical issues.",
          author: "Geeta Sharma, Head of Security, FinTech Solutions"
        }
      ]}
    />
  );
}
