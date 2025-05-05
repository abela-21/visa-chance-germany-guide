
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-10 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline font-medium">
                What is the German Opportunity Card?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                The German Opportunity Card (Chancenkarte) is a job seeker visa that allows skilled 
                workers to come to Germany for up to one year to search for employment without needing 
                a job offer beforehand. It's based on a points system or qualification recognition.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline font-medium">
                How long can I stay in Germany with the Opportunity Card?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                The Opportunity Card allows you to stay in Germany for up to one year to search for a job. 
                Once you find employment that matches your qualifications, you can apply to change your 
                residence status to a work permit.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline font-medium">
                Can I bring my family with the Opportunity Card?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                Generally, family members cannot accompany the Opportunity Card holder during the initial 
                job-seeking period. However, once you secure a position and convert to a work permit, 
                you may be eligible to bring your family members under family reunification rules.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline font-medium">
                What happens if I don't find a job within one year?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                If you don't find suitable employment within the one-year period, you will generally need to 
                leave Germany when your Opportunity Card expires. The card is not typically extended beyond 
                the initial one-year period.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline font-medium">
                Can I work part-time while searching for a full-time job?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                Yes, the German Opportunity Card allows you to work up to 20 hours per week in any job 
                while you search for full-time employment related to your qualifications. This helps you 
                support yourself financially during your job search.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
