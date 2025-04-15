
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-montserrat text-german-dark flex items-center gap-2">
            <span className="text-german-red">Opportunity</span>Card
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#requirements" className="font-medium hover:text-german-red transition-colors">
            Requirements
          </Link>
          <Link to="/#benefits" className="font-medium hover:text-german-red transition-colors">
            Benefits
          </Link>
          <Link to="/#calculator" className="font-medium hover:text-german-red transition-colors">
            Point Calculator
          </Link>
          <Button variant="default" className="bg-german-red hover:bg-red-700 text-white">
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 px-4 bg-white border-t">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/#requirements" 
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Requirements
            </Link>
            <Link 
              to="/#benefits" 
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              to="/#calculator" 
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Point Calculator
            </Link>
            <Button 
              variant="default" 
              className="bg-german-red hover:bg-red-700 text-white w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};
