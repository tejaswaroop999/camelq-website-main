import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WebApplicationDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Web Application Development"
      intro="We specialize in developing high-performance, scalable, and secure web applications that are customized to your business needs."
      approach="Our approach is customer-centric, starting with a detailed analysis of your goals, followed by a thorough architecture design and agile development cycles to ensure fast delivery with iterative improvements."
      capabilities={[
        "Full-stack Web Development",
        "Progressive Web Applications (PWA)",
        "Single Page Applications (SPA)",
        "Backend API Development",
        "Web Performance Optimization",
        "Responsive Design Implementation",
        "User Authentication & Authorization"
      ]}
      why="We combine robust technologies with user-first design principles, ensuring that your web applications are not only functional but also provide an exceptional user experience."
      techStack={["react", "node", "mongodb", "docker", "aws", "graphql"]}
      testimonials={[
        {
          text: "The web app developed by CamelQ has greatly improved our business operations and user experience. We saw a 30% increase in user retention.",
          author: "Sandeep Kumar, CEO, CloudPro"
        },
        {
          text: "Highly efficient and professional. CamelQ delivered a top-tier application that perfectly matches our needs.",
          author: "Meena Reddy, Product Manager, ShopNow"
        }
      ]}
    />
  );
}
