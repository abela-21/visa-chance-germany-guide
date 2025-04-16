
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";
import { toast } from "./ui/sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Mail, Phone, User, Calendar, Send, Briefcase, Book, GraduationCap, Globe, CheckCircle2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  birthdate: z.string().min(1, "Please select your birth date"),
  germanLanguage: z.string(),
  englishLanguage: z.string(),
  qualification: z.string(),
  fieldOfStudy: z.string().optional(),
  workExperience: z.string(),
  workField: z.string().optional(),
  shortageOccupation: z.string(),
  euConnection: z.string(),
  consultancyPackage: z.string(),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      birthdate: "",
      germanLanguage: "none",
      englishLanguage: "none",
      qualification: "none",
      fieldOfStudy: "",
      workExperience: "0-3",
      workField: "",
      shortageOccupation: "no",
      euConnection: "no",
      consultancyPackage: "standard",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log(values);
    toast.success("Your consultation request has been sent! Our experts will contact you soon.");
    form.reset();
    setSubmitted(true);
  };

  const watchQualification = form.watch("qualification");
  const watchWorkExperience = form.watch("workExperience");

  const showFieldOfStudy = watchQualification === "university" || watchQualification === "vocational";
  const showWorkField = watchWorkExperience === "3-5" || watchWorkExperience === "5+";

  if (submitted) {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Thank You for Your Interest!</CardTitle>
              <CardDescription>
                Your consultation request has been received.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center py-6">
              <CheckCircle2 className="h-16 w-16 mx-auto text-green-500 mb-4" />
              <p className="text-gray-700 my-4">
                One of our Opportunity Card consultants will review your information and contact you 
                within 24 hours to discuss your application and our service packages.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6 max-w-md mx-auto">
                <p className="font-medium text-center mb-2">What happens next?</p>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-german-red mr-2" />
                    Our experts will analyze your profile
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-german-red mr-2" />
                    We'll prepare a personalized consultation plan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-german-red mr-2" />
                    You'll receive a detailed quote based on your needs
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-german-red hover:bg-red-700"
                onClick={() => setSubmitted(false)}
              >
                Send Another Request
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Request a Consultation
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our expert consultants are ready to guide you through the entire Opportunity Card application process. 
            Fill out the form below to get started with your personalized consultation.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Get Expert Help</CardTitle>
            <CardDescription>
              Fill out the form below and our consultants will prepare a tailored plan for your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Info Section */}
                <div className="space-y-4">
                  <h3 className="font-medium text-lg border-b pb-2">Personal Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="h-4 w-4" /> Full Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="h-4 w-4" /> Email
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Phone className="h-4 w-4" /> Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="+49 123 4567890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="birthdate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> Date of Birth
                        </FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Qualification Section */}
                <div className="space-y-4">
                  <h3 className="font-medium text-lg border-b pb-2">Qualifications & Experience</h3>
                  
                  {/* Language Skills */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="germanLanguage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>German Language Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="none">None</SelectItem>
                              <SelectItem value="A1">A1</SelectItem>
                              <SelectItem value="A2">A2</SelectItem>
                              <SelectItem value="B1">B1</SelectItem>
                              <SelectItem value="B2">B2</SelectItem>
                              <SelectItem value="C1">C1</SelectItem>
                              <SelectItem value="C2">C2</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="englishLanguage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>English Language Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="none">None</SelectItem>
                              <SelectItem value="A1">A1</SelectItem>
                              <SelectItem value="A2">A2</SelectItem>
                              <SelectItem value="B1">B1</SelectItem>
                              <SelectItem value="B2">B2</SelectItem>
                              <SelectItem value="C1">C1</SelectItem>
                              <SelectItem value="C2">C2</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Qualification */}
                  <FormField
                    control={form.control}
                    name="qualification"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" /> Highest Qualification
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select qualification" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="vocational">Vocational Training</SelectItem>
                            <SelectItem value="university">University Degree</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Field of Study (Conditional) */}
                  {showFieldOfStudy && (
                    <FormField
                      control={form.control}
                      name="fieldOfStudy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Book className="h-4 w-4" /> Field of Study
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Computer Science, Engineering, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Work Experience */}
                  <FormField
                    control={form.control}
                    name="workExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" /> Work Experience
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0-3">0-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">Over 5 years</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Work Field (Conditional) */}
                  {showWorkField && (
                    <FormField
                      control={form.control}
                      name="workField"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Field of Work</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. IT, Healthcare, Engineering, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Shortage Occupation */}
                  <FormField
                    control={form.control}
                    name="shortageOccupation"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Is your profession a shortage occupation in Germany?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="shortage-yes" />
                              <Label htmlFor="shortage-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="shortage-no" />
                              <Label htmlFor="shortage-no">No</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* EU Connection */}
                  <FormField
                    control={form.control}
                    name="euConnection"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="flex items-center gap-2">
                          <Globe className="h-4 w-4" /> Have you previously studied or worked in the EU?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="eu-yes" />
                              <Label htmlFor="eu-yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="eu-no" />
                              <Label htmlFor="eu-no">No</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Consultancy Package */}
                <div className="space-y-4">
                  <h3 className="font-medium text-lg border-b pb-2">Consultancy Package</h3>
                  <FormField
                    control={form.control}
                    name="consultancyPackage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Preferred Package</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose package" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="basic">Basic - Document Review (€249)</SelectItem>
                            <SelectItem value="standard">Standard - Full Application Support (€499)</SelectItem>
                            <SelectItem value="premium">Premium - VIP Full Service (€999)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide any additional details about your situation or specific questions you have..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-german-red hover:bg-red-700">
                  <Send className="mr-2 h-4 w-4" />
                  Request Consultation
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
