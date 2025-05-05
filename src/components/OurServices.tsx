
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  CheckCircle2, FileText, Award, Briefcase, 
  Calendar, Users, Globe, Heart, GraduationCap, Home, Headphones
} from "lucide-react";

export const OurServices = () => {
  const services = [
    {
      title: "Personalized Eligibility Assessment",
      description: "We provide a thorough evaluation of your qualifications and experience to determine your eligibility for the Opportunity Card.",
      icon: CheckCircle2,
      color: "text-blue-600"
    },
    {
      title: "Document Assistance",
      description: "We assist you in gathering, organizing, and verifying all necessary documents for your application.",
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "Credential Recognition",
      description: "We guide you through the process of getting your educational credentials recognized in Germany.",
      icon: Award,
      color: "text-purple-600"
    },
    {
      title: "Financial Guidance",
      description: "We provide detailed advice on how to meet and document the required financial means.",
      icon: Briefcase,
      color: "text-indigo-600"
    },
    {
      title: "Application Review",
      description: "We ensure your application is accurately completed and reviewed before submission.",
      icon: FileText,
      color: "text-red-600"
    },
    {
      title: "Appointment Scheduling",
      description: "We assist you with scheduling necessary appointments at German embassies or consulates.",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Interview Preparation",
      description: "We provide thorough preparation for any required interviews.",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Job Market Insights",
      description: "We offer insights into the German job market and effective job search strategies.",
      icon: Briefcase,
      color: "text-yellow-600"
    },
    {
      title: "Cultural Adaptation",
      description: "We provide guidance and support for cultural adaptation and settling into life in Germany.",
      icon: Globe,
      color: "text-purple-600"
    },
    {
      title: "Ongoing Support",
      description: "We offer continuous support and communication throughout the entire application journey.",
      icon: Headphones,
      color: "text-indigo-600"
    },
    {
      title: "Health Insurance Advice",
      description: "We provide expert advice on securing the necessary health insurance coverage.",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "Permanent Residency Guidance",
      description: "We offer guidance on potential pathways to permanent residency after securing employment.",
      icon: Home,
      color: "text-green-600"
    }
  ];

  return (
    <section id="services" className="py-16 bg-german-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive assistance at every step of your journey to Germany
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
