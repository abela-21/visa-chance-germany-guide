
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

        <div className="mt-12 bg-white p-6 rounded-lg shadow max-w-3xl mx-auto border border-gray-100">
          <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-green-600" />
            Recognition Methods
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Foreign University degree recognition:</strong> Printouts of your university and degree from the Anabin Database</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Statement of Comparability:</strong> Completed by the 'Central Office for Foreign Education' (ZAB)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Recognition for vocational training:</strong> Through 'Anerkennung in Deutschland'</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>German qualification:</strong> Vocational training or university degree from Germany</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
