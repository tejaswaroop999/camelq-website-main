import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function DatabaseSolutionsPage() {
  return (
    <ServicePageTemplate
      title="Database Solutions"
      intro="We offer tailored database solutions designed to optimize data storage, management, and retrieval for high-performance applications."
      approach="We work closely with you to understand your data needs, designing and implementing the most appropriate database system and ensuring scalability, security, and reliability."
      capabilities={[
        "Database Design & Architecture",
        "SQL & NoSQL Database Solutions",
        "Database Performance Tuning",
        "Data Migration & Integration",
        "Backup & Disaster Recovery",
        "Data Security & Compliance",
        "Database Monitoring & Optimization"
      ]}
      why="Our team ensures that your database solutions are optimized for speed, efficiency, and security, empowering your business to make data-driven decisions."
      techStack={["postgres", "mongodb", "mysql", "docker", "aws"]}
      testimonials={[
        {
          text: "CamelQ provided us with a database solution that scaled effortlessly as our data grew, ensuring fast and secure access for our teams.",
          author: "Arvind Mehta, CTO, DataBridge"
        },
        {
          text: "Their expertise in database management helped us achieve operational excellence with minimal downtime.",
          author: "Nisha Jain, Lead Developer, MedTech Innovations"
        }
      ]}
    />
  );
}
