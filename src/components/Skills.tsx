import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["Amazon Web Services (AWS)", "AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "AWS CloudFormation", "AWS IAM"],
      color: "bg-blue-500/10 text-blue-700 border-blue-500/20"
    },
    {
      title: "DevOps & Automation",
      skills: ["Docker", "Jenkins", "GitHub Actions", "Terraform", "Ansible", "CI/CD Pipelines", "GitOps"],
      color: "bg-green-500/10 text-green-700 border-green-500/20"
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash/Shell Scripting", "YAML", "JSON", "Git", "Linux Command Line"],
      color: "bg-purple-500/10 text-purple-700 border-purple-500/20"
    },
    {
      title: "Monitoring & Security",
      skills: ["AWS CloudWatch", "System Monitoring", "Log Analysis", "Security Best Practices", "Backup Strategies"],
      color: "bg-orange-500/10 text-orange-700 border-orange-500/20"
    },
    {
      title: "Operating Systems",
      skills: ["Linux (Ubuntu, CentOS)", "Windows Server", "Container Orchestration", "Virtual Machines"],
      color: "bg-cyan-500/10 text-cyan-700 border-cyan-500/20"
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Documentation", "Eager to Learn", "Attention to Detail"],
      color: "bg-pink-500/10 text-pink-700 border-pink-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-tech">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through hands-on learning, personal projects, and continuous exploration 
            of modern cloud and DevOps technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="outline" 
                    className={`${category.color} hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="mt-12 p-8 bg-gradient-tech text-white animate-fade-in">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Actively expanding my knowledge in Kubernetes, microservices architecture, 
              and advanced AWS services to stay current with industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Kubernetes
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                AWS EKS
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Microservices
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                AWS Advanced Networking
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;