
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, FileText, Languages, Clock, Award, Landmark, Heart, GraduationCap, Wallet } from "lucide-react";

export const EligibilityCriteria = () => {
  const skilledWorkerRequirements = [
    {
      title: "Recognized Qualification",
      description: "University degree or vocational training obtained/recognized in Germany",
      icon: GraduationCap
    },
    {
      title: "Proof of Funds",
      description: "Blocked account, letter of guarantee, or part-time contract to support yourself",
      icon: Wallet
    },
    {
      title: "Health Insurance",
      description: "Coverage for the entire duration of your stay in Germany",
      icon: Heart
    }
  ];

  const pointSystemRequirements = [
    {
      title: "Qualification",
      description: "University degree (Bachelor's or equivalent) or vocational training",
      icon: Award
    },
    {
      title: "Language Skills",
      description: "German language skills (A1, A2, B1, etc.) or English (B1, B2, etc.)",
      icon: Languages
    },
    {
      title: "Work Experience",
      description: "At least 3 years of professional experience in the past 7 years",
      icon: Clock
    },
    {
      title: "Financial Resources",
      description: "Proof of sufficient financial means to support yourself during your stay",
      icon: Landmark
    },
    {
      title: "Health Insurance",
      description: "Coverage for the entire duration of your stay in Germany",
      icon: Heart
    }
  ];

  return (
    <section id="eligibility" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Eligibility Criteria</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            There are two main pathways to obtaining the Germany Opportunity Card:
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center text-left mb-12">
            <Card className="flex-1 border-l-4 border-l-german-red hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="text-german-red h-6 w-6" />
                  <CardTitle>Skilled Worker Route</CardTitle>
                </div>
                <CardDescription className="text-base">
                  You automatically qualify if you hold a fully recognized German or foreign degree.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="flex-1 border-l-4 border-l-german-gold hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex gap-2 items-center">
                  <CheckCircle2 className="text-german-gold h-6 w-6" />
                  <CardTitle>Points-Based System</CardTitle>
                </div>
                <CardDescription className="text-base">
                  If you don't qualify through the Skilled Worker Route, you can qualify by earning at least 6 points.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        
        {/* Skilled Worker Route */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-6 text-center">Skilled Worker Route</h3>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Professional working in Germany" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <p className="text-lg mb-6">
                For professionals with recognized qualifications who are ready to work in Germany.
                With this route, you can obtain the Opportunity Card without needing to fulfill the point requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skilledWorkerRequirements.map((req, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="bg-german-red/10 p-2 rounded-full">
                        <req.icon className="h-6 w-6 text-german-red" />
                      </div>
                      <CardTitle>{req.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{req.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Points-Based System */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-6 text-center">Points-Based System</h3>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <p className="text-lg mb-6">
                To qualify for the German Opportunity Card via the Point System, you must meet certain 
                criteria and achieve at least 6 points across different categories.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pointSystemRequirements.map((req, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="bg-german-gold/10 p-2 rounded-full">
                        <req.icon className="h-6 w-6 text-german-gold" />
                      </div>
                      <CardTitle>{req.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{req.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Point system evaluation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" />
                  Point System Summary
                </h4>
                <p className="mb-4">
                  The Opportunity Card uses a point-based system. You need to score a minimum of <span className="font-bold">6 points</span> across various categories:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Language Skills:</strong> German (up to 3 points) or English (up to 2 points)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Work Experience:</strong> 3+ years (2 points), in shortage occupation (1 extra point)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Qualifications:</strong> Vocational training (2 points), University degree (3 points)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Age:</strong> 18-35 (2 points), 36-40 (1 point)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>EU Connection:</strong> Previous studies or work in EU (1 point)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
