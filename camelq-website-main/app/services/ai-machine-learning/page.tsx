import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function AIMachineLearningPage() {
  return (
    <ServicePageTemplate
      title="AI & Machine Learning"
      intro="We build intelligent systems powered by AI and machine learning to enhance automation, improve decision-making, and transform business operations."
      approach="Our approach involves understanding your business problems, applying machine learning models, and integrating AI solutions that drive value and efficiency."
      capabilities={[
        "Predictive Modeling & Analytics",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Custom AI Model Development",
        "Data Science & Algorithm Design",
        "AI Integration into Applications",
        "Model Training & Deployment"
      ]}
      why="Our AI and ML solutions enable your business to harness the power of automation and data-driven insights, creating new opportunities for innovation."
      techStack={["python", "tensorflow", "keras", "pytorch", "aws", "azure"]}
      testimonials={[
        {
          text: "CamelQ’s AI-powered solutions have significantly improved our product’s predictive capabilities, leading to higher user satisfaction.",
          author: "Rahul Patel, CTO, TechVision"
        },
        {
          text: "Their machine learning models helped us reduce operational costs by 15% and enhanced our customer experience.",
          author: "Kavita Mehra, Head of AI, RetailPro"
        }
      ]}
    />
  );
}
