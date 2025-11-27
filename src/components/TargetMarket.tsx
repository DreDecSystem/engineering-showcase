import { Building2, Factory, Landmark, Home, Users, Zap, Building } from "lucide-react";

export const TargetMarket = () => {
  const markets = [
    { icon: Building2, label: "SMEs" },
    { icon: Factory, label: "Industrial & Manufacturing" },
    { icon: Landmark, label: "Government & Municipalities" },
    { icon: Zap, label: "Renewable Energy Developers" },
    { icon: Building, label: "Property & Infrastructure" },
    { icon: Users, label: "Community Projects" },
    { icon: Home, label: "Households" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Who We <span className="text-accent">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Delivering tailored solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {markets.map((market, index) => {
              const Icon = market.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border-2 border-border hover:border-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-semibold text-center text-foreground group-hover:text-accent transition-colors">
                    {market.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
