
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Linkedin, Facebook, Instagram } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ContactForm = () => {
  const [areaOfStudy, setAreaOfStudy] = useState<string>("");
  
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
                      First Name <span className="text-german-red">*</span>
                    </label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name <span className="text-german-red">*</span>
                    </label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-german-red">*</span>
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone <span className="text-german-red">*</span>
                  </label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="education" className="text-sm font-medium">
                    Education Level
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School Diploma</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="area-of-study" className="text-sm font-medium">
                    Area of Study
                  </label>
                  <Select onValueChange={(value) => setAreaOfStudy(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of study" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="economics">Economics & Finance</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                      <SelectItem value="other">Other (please specify)</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {areaOfStudy === "other" && (
                    <div className="mt-2">
                      <Input placeholder="Please specify your area of study" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="degree-location" className="text-sm font-medium">
                    Where was your degree acquired?
                  </label>
                  <Input id="degree-location" placeholder="University/Institution and Country" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="work-experience" className="text-sm font-medium">
                    Work Experience in Field
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your work experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0 - 2 years</SelectItem>
                      <SelectItem value="3-5">3 - 5 years</SelectItem>
                      <SelectItem value="5+">Above 5 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="english-skill" className="text-sm font-medium">
                    English Language Skill
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your English proficiency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="fluent">Fluent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="german-skill" className="text-sm font-medium">
                    German Language Skill
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your German proficiency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="fluent">Fluent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Note
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Any additional information you'd like to share..." 
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
