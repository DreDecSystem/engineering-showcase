import { Target, Eye, Award } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-accent">Optima Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A dynamic South African consulting firm driving innovation and sustainability within the renewable energy and mechanical engineering sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-xl bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-in-up">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To be a trusted and impactful energy and engineering consulting firm that empowers industries, communities, and enterprises through innovative and sustainable solutions.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To deliver high-quality, practical, and forward-thinking consulting services in renewable energy and mechanical engineering.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Founded</h3>
              <p className="text-muted-foreground">
                Established in 2020 with a bold vision to contribute to South Africa's transition toward clean, efficient, and inclusive energy systems.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border-2 border-accent/20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Strategic Goals</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Expand service offering within the energy transition",
                "Build partnerships with technology providers & government programmes",
                "Develop local capacity through training and mentorship",
                "Position the firm as a leading advisory partner in South Africa",
              ].map((goal, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
