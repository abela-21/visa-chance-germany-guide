
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-8">About <span className="text-german-red">ChanceUp</span></h1>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg mb-6">
                ChanceUp is a top-notch consultancy firm, specializing in the recent Opportunity Visa for Germany, with a great success rate.
              </p>
              
              <p className="text-lg mb-6">
                Our team of expert consultants has years of experience helping individuals navigate the complex German immigration system. We pride ourselves on staying up-to-date with the latest policy changes and offering personalized guidance tailored to each client's unique situation.
              </p>
              
              <p className="text-lg mb-6">
                Whether you're pursuing the Skilled Worker route or exploring the Point System option, our dedicated professionals will support you through every step of your journey to Germany.
              </p>
              
              <div className="bg-gray-50 border-l-4 border-german-red p-4 mt-8">
                <p className="italic text-gray-700">
                  "Our mission is to simplify the complex immigration process and help talented individuals achieve their dreams of living and working in Germany."
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-german-red rounded-full text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="font-bold mb-2">Expertise</h3>
                  <p>Specialized knowledge of German immigration pathways</p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-german-red rounded-full text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h3 className="font-bold mb-2">Personalized Service</h3>
                  <p>Tailored consulting for your unique situation</p>
                </div>
                <div className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-german-red rounded-full text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                  </div>
                  <h3 className="font-bold mb-2">Success Rate</h3>
                  <p>Proven track record of successful applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
