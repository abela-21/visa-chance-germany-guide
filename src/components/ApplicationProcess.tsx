
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, FileText, Send, Clock, Award } from "lucide-react";

export const ApplicationProcess = () => {
  const steps = [
    {
      title: "Check Your Eligibility",
      description: "Use our eligibility checker or consult with us to determine if you meet the requirements.",
      icon: CheckCircle2,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Prepare Your Documents",
      description: "Gather all necessary documents, ensuring they are complete and accurate. We provide a detailed checklist and assistance.",
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Submit Your Application",
      description: "Applications are typically submitted at the German embassy or consulate in your home country. If already in Germany, apply at the local foreigners authority.",
      icon: Send,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Await Review",
      description: "Your application will be reviewed by the relevant authorities. We'll keep you informed and assist with any additional requests.",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <section id="application" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">The Application Process</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A step-by-step guide to obtaining your German Opportunity Card
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-german-red">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${step.bgColor}`}>
                    <step.icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{step.description}</p>
                <div className="mt-4 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-german-red text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg">
            Throughout this process, our team provides continuous support to ensure your application is completed correctly and efficiently. We handle communication with German authorities and keep you updated on your application status.
          </p>
        </div>
      </div>
    </section>
  );
};
