import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function CustomSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Custom Software Development"
      intro=" we craft bespoke software solutions tailored to meet the specific goals and operational needs of your business. We don’t just build software — we build digital capabilities that give you a competitive edge."
      approach="We begin with a deep dive into your business model, customer journey, and technical landscape. From there, we define the architecture, select the right tech stack, and collaborate closely with your team through agile sprints."
      capabilities={[
        "Business & Technical Requirements Analysis",
        "UI/UX Design & Prototyping",
        "Frontend and Backend Development",
        "API Development & Integrations",
        "QA Automation and Manual Testing",
        "Cloud-native Deployment",
        "Ongoing Support and Optimization"
      ]}
      why="We focus on performance, scalability, and clean code architecture. Our team blends strategic thinking with technical expertise to solve business problems through reliable and scalable custom software."
      techStack={["react", "node", "python", "docker", "aws", "postgres"]}
      testimonials={[
        {
          text: "CamelQ transformed our outdated systems into a modern, responsive solution that boosted our customer engagement by 40%.",
          author: "Aishwarya Patel, CTO, FinEdge"
        },
        {
          text: "Reliable, innovative, and professional — they became an extension of ours from day one.",
          author: "Rajeev Sharma, Founder, LogisticsLoop"
        }
      ]}
    />
  );
}
