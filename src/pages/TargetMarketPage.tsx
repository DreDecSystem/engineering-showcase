import { Navigation } from "@/components/Navigation";
import { TargetMarket } from "@/components/TargetMarket";
import { Footer } from "@/components/Footer";

const TargetMarketPage = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <TargetMarket />
      </div>
      <Footer />
    </main>
  );
};

export default TargetMarketPage;
