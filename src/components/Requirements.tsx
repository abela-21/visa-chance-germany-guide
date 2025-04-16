
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, FileText, Languages, Clock, Award, Landmark, Heart } from "lucide-react";

export const Requirements = () => {
  const requirements = [
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
      title: "Documents",
      description: "Valid passport, qualification certificates, language certificates, etc.",
      icon: FileText
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
    <section id="requirements" className="py-16 bg-german-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Option 2: Point System</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            To qualify for the German Opportunity Card via the Point System, you must meet certain criteria and achieve at least 6 points
            across different categories.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
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
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Point system evaluation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="mt-6 bg-white p-6 rounded-lg shadow border border-gray-100">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-green-600" />
                Point System Summary
              </h3>
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
    </section>
  );
};
