import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { TargetMarket } from "@/components/TargetMarket";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <TargetMarket />
      <QuoteForm />
      <Footer />
    </main>
  );
};

export default Index;
