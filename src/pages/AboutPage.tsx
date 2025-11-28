import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { TargetMarket } from "@/components/TargetMarket";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <About />
        <TargetMarket />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
