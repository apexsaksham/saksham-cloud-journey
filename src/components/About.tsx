import { Card } from "@/components/ui/card";
import { Code, Cloud, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud Architecture",
      description: "Designing scalable and cost-effective cloud solutions on AWS"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Infrastructure as Code",
      description: "Automating infrastructure deployment with Terraform and CloudFormation"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "CI/CD Automation",
      description: "Streamlining development workflows with modern DevOps practices"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "Eager to learn and contribute to cross-functional development teams"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-tech">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a passionate fresher in the Cloud & DevOps space, I'm driven by the excitement of solving 
            complex infrastructure challenges and building automated solutions that scale. My journey began 
            with a fascination for how modern applications run in the cloud, and I've been dedicating my 
            time to mastering the tools and practices that make it all possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-gradient-card border-primary/10 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently building my expertise in cloud technologies and DevOps methodologies. 
                I believe in the power of automation to transform how we build, deploy, and maintain software.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not diving into cloud architecture or setting up CI/CD pipelines, 
                you can find me exploring new technologies, contributing to open-source projects, 
                or documenting my learning journey to help fellow aspiring engineers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Problem-solving mindset</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Continuous learning approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Team collaboration focus</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Quality-driven development</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;