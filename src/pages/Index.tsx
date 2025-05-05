
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Description } from "@/components/Description";
import { EligibilityCriteria } from "@/components/EligibilityCriteria";
import { Benefits } from "@/components/Benefits";
import { PointCalculator } from "@/components/PointCalculator";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Description />
      <EligibilityCriteria />
      <Benefits />
      <PointCalculator />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
