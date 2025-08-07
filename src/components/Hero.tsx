import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cloud computing background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-tech">
          Saksham Singh
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
          Aspiring Cloud & DevOps Engineer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about building scalable cloud infrastructure and automating deployment pipelines. 
          Ready to transform ideas into robust, cloud-native solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="min-w-[200px]">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button variant="cloud" size="lg" className="min-w-[200px]">
            Let's Connect
          </Button>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-primary hover:text-accent transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;