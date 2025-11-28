import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";

export const CareerForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      position: formData.get("position"),
      experience: formData.get("experience"),
      message: formData.get("message"),
    };

    const cvNote = fileName ? `%0A*CV Attached:* ${fileName}` : "";
    const message = `*New Career Application*%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Phone:* ${data.phone}%0A*Position:* ${data.position}%0A*Experience:* ${data.experience}${cvNote}%0A%0A*Cover Letter:*%0A${data.message}%0A%0APlease request CV via email: ${data.email}`;
    
    const whatsappUrl = `https://wa.me/27760663663?text=${message}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon. Please also email your CV to careers@optimaimpactconsulting.com",
    });

    e.currentTarget.reset();
    setFileName("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-2 border-border">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Apply Now</CardTitle>
            <CardDescription className="text-center">
              Send us your application and we'll get back to you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Thabo Malema"
                  required
                  className="border-2 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="thabo@example.com"
                  required
                  className="border-2 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+27 82 123 4567"
                  required
                  className="border-2 focus:border-accent"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position of Interest *</Label>
                <Select name="position" required>
                  <SelectTrigger className="border-2 focus:border-accent">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="renewable-energy-engineer">Renewable Energy Engineer</SelectItem>
                    <SelectItem value="mechanical-engineer">Mechanical Engineer</SelectItem>
                    <SelectItem value="energy-consultant">Energy Consultant</SelectItem>
                    <SelectItem value="project-manager">Project Manager</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select name="experience" required>
                  <SelectTrigger className="border-2 focus:border-accent">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv">Upload CV/Resume *</Label>
                <div className="relative">
                  <Input
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="border-2 focus:border-accent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-primary-foreground hover:file:bg-accent/90 file:cursor-pointer"
                  />
                </div>
                {fileName && (
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    {fileName}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Cover Letter *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about yourself and why you'd be a great fit..."
                  required
                  rows={6}
                  className="border-2 focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                size="lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                You can also email your CV to{" "}
                <a href="mailto:careers@optimaimpactconsulting.com" className="text-accent hover:underline">
                  careers@optimaimpactconsulting.com
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
