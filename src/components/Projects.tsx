import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Cloud, Server, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Tier Web Application on AWS",
      description: "Deployed a scalable 3-tier web application using AWS services including EC2, RDS, and Application Load Balancer. Implemented auto-scaling groups and CloudWatch monitoring for optimal performance and cost management.",
      technologies: ["AWS EC2", "AWS RDS", "AWS ALB", "Auto Scaling", "CloudWatch", "Linux", "Python"],
      icon: <Cloud className="h-8 w-8 text-primary" />,
      features: [
        "Auto-scaling based on CPU and memory metrics",
        "Multi-AZ deployment for high availability",
        "Database backup and disaster recovery",
        "CloudWatch dashboards and alarms"
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Infrastructure as Code with Terraform",
      description: "Created comprehensive Terraform modules to automate AWS infrastructure provisioning. Built reusable templates for VPC, subnets, security groups, and EC2 instances with proper state management and version control.",
      technologies: ["Terraform", "AWS", "Git", "YAML", "Shell Scripting", "Infrastructure as Code"],
      icon: <Server className="h-8 w-8 text-primary" />,
      features: [
        "Modular Terraform configuration",
        "Remote state management with S3",
        "Environment-specific deployments",
        "Automated resource tagging and cost optimization"
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Serverless Application with CI/CD Pipeline",
      description: "Built a serverless web application using AWS Lambda, API Gateway, and DynamoDB. Implemented complete CI/CD pipeline with GitHub Actions for automated testing, building, and deployment to multiple environments.",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "GitHub Actions", "Python", "CloudFormation"],
      icon: <Zap className="h-8 w-8 text-primary" />,
      features: [
        "Serverless architecture with Lambda functions",
        "RESTful API with API Gateway",
        "NoSQL database with DynamoDB",
        "Automated deployment pipeline"
      ],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-tech">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hands-on projects that demonstrate my understanding of cloud architecture, 
            automation, and modern DevOps practices. Each project showcases real-world problem-solving skills.
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="hero" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </a>
                    </Button>
                    <Button variant="cloud" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-primary">Key Features</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button variant="cloud" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;