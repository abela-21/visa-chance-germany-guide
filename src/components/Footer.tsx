
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-german-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">
              <span className="text-german-red">Opportunity</span>Card
            </h3>
            <p className="text-gray-300 mb-4">
              Your guide to the German Opportunity Card visa. Check eligibility, understand
              benefits, and plan your move to Germany.
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} OpportunityCard Guide. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#requirements" className="text-gray-300 hover:text-white transition-colors">
                  Requirements
                </Link>
              </li>
              <li>
                <Link to="/#benefits" className="text-gray-300 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/#calculator" className="text-gray-300 hover:text-white transition-colors">
                  Point Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Official Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.make-it-in-germany.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Make it in Germany
                </a>
              </li>
              <li>
                <a 
                  href="https://www.auswaertiges-amt.de/en/visa-service" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  German Federal Foreign Office
                </a>
              </li>
              <li>
                <a 
                  href="https://www.bamf.de/EN/Startseite/startseite_node.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  BAMF (Federal Office for Migration)
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            Disclaimer: This website provides general information only. Always consult official resources
            for the most current requirements and regulations.
          </p>
        </div>
      </div>
    </footer>
  );
};
