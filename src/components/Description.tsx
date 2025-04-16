
import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Description = () => {
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("benefits");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="description" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="German parliament building" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6">The German Opportunity Card</h2>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <p className="text-lg mb-4">
                  The German Opportunity Card (Chancenkarte) is a new job seeker visa that allows skilled 
                  workers to come to Germany for up to one year to search for employment.
                </p>
                <p className="text-lg mb-4">
                  Unlike traditional work visas, you do not need a job offer before arriving in Germany, 
                  making it an excellent opportunity for skilled professionals looking to start a career in Europe's largest economy.
                </p>
                <p className="text-lg mb-4">
                  There are two main pathways to obtain this visa - the Skilled Worker route for those with 
                  recognized qualifications, or the Point System option for those who meet specific criteria.
                </p>
                <Button 
                  onClick={scrollToBenefits} 
                  variant="default" 
                  className="mt-4 bg-german-red hover:bg-red-700 text-white"
                >
                  Explore Benefits <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
