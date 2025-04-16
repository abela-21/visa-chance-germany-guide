
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CheckCircle2, FileText, GraduationCap, Heart, Wallet } from "lucide-react";

export const SkilledWorker = () => {
  const requirements = [
    {
      title: "Recognized Qualification",
      description: "University degree or vocational training obtained/recognized in Germany",
      icon: GraduationCap
    },
    {
      title: "Qualification Recognition",
      description: "Foreign degree recognition (Anabin), ZAB Statement of Comparability, or German qualification",
      icon: FileText
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

  return (
    <section id="skilled-worker" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Option 1: Skilled Worker Route</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            For professionals with recognized qualifications who are ready to work in Germany.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Professional working in Germany" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
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
        </div>
      </div>
    </section>
  );
};
