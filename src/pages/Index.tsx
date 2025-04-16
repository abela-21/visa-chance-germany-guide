
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SkilledWorker } from "@/components/SkilledWorker";
import { Requirements } from "@/components/Requirements";
import { Benefits } from "@/components/Benefits";
import { PointCalculator } from "@/components/PointCalculator";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <div className="options-container">
        <SkilledWorker />
        <Requirements />
      </div>
      <Benefits />
      <PointCalculator />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
