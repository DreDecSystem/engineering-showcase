import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CareersPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and professional development in renewable energy"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals driving sustainable innovation"
    },
    {
      icon: Award,
      title: "Impactful Work",
      description: "Contribute to South Africa's clean energy transition"
    },
    {
      icon: Briefcase,
      title: "Competitive Benefits",
      description: "Comprehensive compensation and work-life balance"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Join Our <span className="text-accent">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Be part of a dynamic team driving innovation in renewable energy and mechanical engineering
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Work With Us
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-card border-2 border-border hover:border-accent transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Current Opportunities
              </h2>
              <div className="bg-card border-2 border-border rounded-xl p-12 mb-8">
                <Briefcase className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  We're Always Looking for Talent
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  While we don't have any open positions at the moment, we're always interested in connecting with talented individuals passionate about renewable energy and engineering.
                </p>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-accent to-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  >
                    Submit Your CV
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Send your resume and cover letter to{" "}
                <a href="mailto:careers@optimaimpactconsulting.com" className="text-accent hover:underline">
                  careers@optimaimpactconsulting.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default CareersPage;
