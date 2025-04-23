import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function BusinessIntelligencePage() {
  return (
    <ServicePageTemplate
      title="Business Intelligence"
      intro="We provide data-driven insights to help you make informed decisions and optimize business performance using powerful business intelligence tools."
      approach="We leverage cutting-edge BI tools and technologies to transform your raw data into meaningful, actionable insights. We focus on reporting, analytics, and dashboards that help drive decision-making."
      capabilities={[
        "Data Analysis & Reporting",
        "Business Dashboard Creation",
        "Data Warehousing & ETL Processes",
        "Predictive Analytics",
        "KPI Definition & Monitoring",
        "Custom BI Solutions",
        "Real-time Data Processing"
      ]}
      why="We turn your business data into valuable insights that enhance decision-making, giving you a clear competitive advantage."
      techStack={["powerbi", "tableau", "python", "sql", "aws", "azure"]}
      testimonials={[
        {
          text: "The insights we gained from CamelQ’s BI solutions helped us optimize our operations and achieve a 25% improvement in our KPIs.",
          author: "Siddharth Agarwal, VP of Operations, FinCloud"
        },
        {
          text: "CamelQ's BI expertise enabled us to understand our data better and make smarter decisions that directly impacted our bottom line.",
          author: "Rajesh Kapoor, Business Analyst, TechGrow"
        }
      ]}
    />
  );
}
