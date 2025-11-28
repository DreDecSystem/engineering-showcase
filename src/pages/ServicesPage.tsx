import { Navigation } from "@/components/Navigation";
import { Services } from "@/components/Services";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Services />
        <QuoteForm />
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
