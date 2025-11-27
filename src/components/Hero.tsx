import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Animated Gears Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 animate-rotate-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path
              fill="currentColor"
              d="M50,10 L55,30 L60,10 L65,30 L70,10 L75,30 L80,10 L85,30 L90,10 L90,30 C90,65 65,90 50,90 C35,90 10,65 10,30 L10,10 L15,30 L20,10 L25,30 L30,10 L35,30 L40,10 L45,30 Z"
            />
            <circle cx="50" cy="50" r="20" fill="transparent" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-24 h-24 animate-rotate-reverse-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
            <path
              fill="currentColor"
              d="M50,15 L52,32 L54,15 L56,32 L58,15 L60,32 L62,15 L64,32 L66,15 L66,32 C66,58 58,66 50,66 C42,66 34,58 34,32 L34,15 L36,32 L38,15 L40,32 L42,15 L44,32 L46,15 L48,32 Z"
            />
            <circle cx="50" cy="50" r="15" fill="transparent" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 animate-rotate-slow" style={{ animationDelay: '-5s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path
              fill="currentColor"
              d="M50,12 L54,28 L58,12 L62,28 L66,12 L70,28 L74,12 L78,28 L82,12 L82,28 C82,62 62,82 50,82 C38,82 18,62 18,28 L18,12 L22,28 L26,12 L30,28 L34,12 L38,28 L42,12 L46,28 Z"
            />
            <circle cx="50" cy="50" r="18" fill="transparent" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Optima Impact Consulting" className="h-32 w-auto" />
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Driving Innovation in{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Renewable Energy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Empowering industries, communities, and enterprises through innovative and sustainable solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8 py-6"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Our Services
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-3xl mx-auto">
            {[
              { label: "Years of Excellence", value: "5+" },
              { label: "Projects Delivered", value: "100+" },
              { label: "Client Satisfaction", value: "98%" },
              { label: "Industry Recognition", value: "Top Rated" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
