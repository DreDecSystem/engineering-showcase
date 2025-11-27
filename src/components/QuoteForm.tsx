import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Quote Request - ${formData.service}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service: ${formData.service}

Message:
${formData.message}
    `.trim();
    
    const mailtoLink = `mailto:info@optimaimpactconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...", {
      description: "Your quote request is ready to send!",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request a <span className="text-accent">Quote</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with us for a customized solution tailored to your needs
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="border-2 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="border-2 focus:border-accent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+27 123 456 789"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="border-2 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="border-2 focus:border-accent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Required *</Label>
              <Select required onValueChange={(value) => handleChange("service", value)}>
                <SelectTrigger className="border-2 focus:border-accent">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solar-pv">Solar PV System Design</SelectItem>
                  <SelectItem value="energy-audit">Energy Audits & Efficiency</SelectItem>
                  <SelectItem value="project-development">Project Development</SelectItem>
                  <SelectItem value="strategy-advisory">Strategy & Policy Advisory</SelectItem>
                  <SelectItem value="mechanical-engineering">Mechanical Engineering</SelectItem>
                  <SelectItem value="system-optimization">System Optimization</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project Details *</Label>
              <Textarea
                id="message"
                required
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="min-h-32 border-2 focus:border-accent"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-accent to-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-lg py-6"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Quote Request
            </Button>
          </form>

          <div className="mt-12 p-6 rounded-xl bg-secondary/50 border-2 border-border animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="font-semibold text-foreground">Email:</span> info@optimaimpactconsulting.com</p>
              <p><span className="font-semibold text-foreground">Location:</span> South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
