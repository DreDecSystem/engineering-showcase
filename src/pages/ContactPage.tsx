import { Navigation } from "@/components/Navigation";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <QuoteForm />
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
