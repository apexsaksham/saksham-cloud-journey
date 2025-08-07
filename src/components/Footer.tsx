import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-tech hover:scale-105 transition-transform duration-200 mb-4"
            >
              Saksham Singh
            </button>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Aspiring Cloud & DevOps Engineer passionate about building scalable infrastructure 
              and automating deployment pipelines. Always eager to learn and contribute to innovative projects.
            </p>
            <div className="flex space-x-4">
              <Button variant="cloud" size="icon" asChild>
                <a href="https://instagram.com/becomingsakshamm" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="cloud" size="icon" asChild>
                <a href="https://linkedin.com/in/sakshamsingh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="cloud" size="icon" asChild>
                <a href="https://github.com/sakshamsingh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="cloud" size="icon" asChild>
                <a href="mailto:sakshamsingh@email.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Technical Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Certifications
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="font-medium">Email:</span><br />
                sakshamsingh@email.com
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Phone:</span><br />
                +91 12345 67890
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Follow:</span><br />
                @becomingsakshamm
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Saksham Singh. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-muted-foreground text-sm mt-4 md:mt-0">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;