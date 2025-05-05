
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react";

export const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-10 text-center">
          Get in Touch
        </h2>
        
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl font-semibold mb-6">Request a Consultation</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Opportunity Card Inquiry" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="bg-german-red hover:bg-red-700 text-white w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Information and Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-german-red mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Berlin, Germany</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-german-red mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@opportunitycard.de" className="text-gray-600 hover:text-german-red transition-colors">
                      info@opportunitycard.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-german-red mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+4930123456789" className="text-gray-600 hover:text-german-red transition-colors">
                      +49 30 123 456 789
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Social Media */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              
              <p className="text-gray-600 mb-6">
                Stay updated with our latest news, resources, and opportunities by following us on social media.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-gray-700" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5 text-gray-700" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5 text-gray-700" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
