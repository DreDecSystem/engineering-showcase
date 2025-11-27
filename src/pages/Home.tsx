import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Hero />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
