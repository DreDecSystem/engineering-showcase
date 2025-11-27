import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Wrench, BarChart3, Lightbulb, Settings, FileText } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Sun,
      title: "Solar PV System Design",
      description: "Comprehensive solar PV system design and feasibility assessments tailored to your energy needs.",
      category: "Renewable Energy",
    },
    {
      icon: BarChart3,
      title: "Energy Audits & Efficiency",
      description: "Detailed energy audits and efficiency analysis to optimize your energy consumption and reduce costs.",
      category: "Renewable Energy",
    },
    {
      icon: Lightbulb,
      title: "Project Development",
      description: "End-to-end project development and implementation support for renewable energy initiatives.",
      category: "Renewable Energy",
    },
    {
      icon: FileText,
      title: "Strategy & Policy Advisory",
      description: "Expert renewable energy strategy and policy advisory services for informed decision-making.",
      category: "Renewable Energy",
    },
    {
      icon: Wrench,
      title: "Mechanical Engineering",
      description: "Professional mechanical engineering consulting services for industrial and commercial applications.",
      category: "Engineering",
    },
    {
      icon: Settings,
      title: "System Optimization",
      description: "Mechanical system optimization and performance enhancement for maximum efficiency.",
      category: "Engineering",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive consulting solutions in renewable energy and mechanical engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-semibold text-accent mb-2">{service.category}</div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
