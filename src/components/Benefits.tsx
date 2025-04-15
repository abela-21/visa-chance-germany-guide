
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Briefcase, Home, GraduationCap, Heart, Map, Users } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      title: "Job Search Freedom",
      description: "1-year visa to search for jobs in Germany without needing a job offer first",
      icon: Briefcase,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Family Inclusion",
      description: "Bring your spouse and children with you to Germany",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Part-time Work",
      description: "Work up to 20 hours per week in any job while searching",
      icon: Briefcase,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "EU Travel",
      description: "Travel freely within the Schengen area for up to 90 days",
      icon: Map,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Access to Healthcare",
      description: "Access to Germany's excellent healthcare system",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      title: "Education Opportunities",
      description: "Potential to pursue further education while in Germany",
      icon: GraduationCap,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Benefits of the Opportunity Card</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The German Opportunity Card visa offers numerous advantages for skilled professionals
            looking to build a career in Germany.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-german-red">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${benefit.bgColor}`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-german-dark text-white p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-german-gold">Why Choose Germany?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                <Briefcase className="h-5 w-5" /> Strong Economy
              </h4>
              <p className="text-gray-300">
                Europe's largest economy with opportunities in various industries
                including engineering, IT, healthcare, and manufacturing.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                <Home className="h-5 w-5" /> High Quality of Life
              </h4>
              <p className="text-gray-300">
                Excellent public services, healthcare, education, and work-life balance.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" /> Education Excellence
              </h4>
              <p className="text-gray-300">
                World-class universities and vocational training opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                <Map className="h-5 w-5" /> Central European Location
              </h4>
              <p className="text-gray-300">
                Travel easily to other European countries for work or leisure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
