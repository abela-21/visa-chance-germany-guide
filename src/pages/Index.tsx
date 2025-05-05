
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Description } from "@/components/Description";
import { EligibilityCriteria } from "@/components/EligibilityCriteria";
import { PointCalculator } from "@/components/PointCalculator";
import { ApplicationProcess } from "@/components/ApplicationProcess";
import { Benefits } from "@/components/Benefits";
import { OurServices } from "@/components/OurServices";
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
      <PointCalculator />
      <ApplicationProcess />
      <Benefits />
      <OurServices />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
