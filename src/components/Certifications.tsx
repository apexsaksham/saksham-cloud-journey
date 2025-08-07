import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, Target } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "November 2024",
      status: "Certified",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      credentialId: "AWS-CCP-2024-11",
      verifyUrl: "#",
      badgeColor: "bg-orange-500/10 text-orange-700 border-orange-500/20"
    }
  ];

  const upcomingCertifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      target: "Q2 2025",
      description: "Designing distributed systems and selecting appropriate AWS services for various use cases.",
      importance: "Essential for cloud architecture roles"
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      target: "Q3 2025", 
      description: "Infrastructure automation using Terraform for multi-cloud deployments.",
      importance: "Key for Infrastructure as Code expertise"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      target: "Q4 2025",
      description: "Container orchestration and Kubernetes cluster administration skills.",
      importance: "Critical for modern DevOps roles"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-tech">
            Certifications & Learning Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Committed to continuous learning and professional development in cloud technologies. 
            Building expertise through industry-recognized certifications and hands-on practice.
          </p>
        </div>
        
        {/* Current Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center text-primary">
            <Award className="mr-3 h-7 w-7" />
            Current Certifications
          </h3>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-primary mb-2">{cert.title}</h4>
                    <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                  </div>
                  <Badge className={cert.badgeColor}>
                    {cert.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    {cert.date}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Learning Roadmap */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center text-primary">
            <Target className="mr-3 h-7 w-7" />
            Learning Roadmap
          </h3>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {upcomingCertifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 mb-3">
                    Target: {cert.target}
                  </Badge>
                  <h4 className="text-lg font-bold text-primary mb-2">{cert.title}</h4>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-primary font-medium">
                    {cert.importance}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <Card className="mt-12 p-8 bg-gradient-tech text-white text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Commitment to Excellence</h3>
          <p className="text-white/90 leading-relaxed max-w-3xl mx-auto">
            I believe in staying current with industry standards and best practices. 
            These certifications represent not just knowledge acquired, but a commitment to 
            delivering quality solutions and maintaining professional expertise in an ever-evolving field.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;