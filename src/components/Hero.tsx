
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight mb-4">
              Germany's <span className="text-german-red">Opportunity Card</span> Visa
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Your pathway to working and living in Germany - check your eligibility, 
              understand the benefits, and calculate your points.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-german-red hover:bg-red-700 text-white"
                onClick={scrollToCalculator}
              >
                Calculate Your Points
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-german-gold opacity-50 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-german-red opacity-50 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80" 
                alt="German flag and Brandenburg Gate" 
                className="rounded-lg shadow-lg relative z-10 object-cover h-72 w-full md:h-96"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <a href="#requirements" className="flex flex-col items-center text-gray-600 hover:text-german-red transition-colors animate-bounce">
            <p className="mb-2">Learn More</p>
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
