
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-montserrat text-german-dark flex items-center gap-2">
            <span className="text-german-red">Opportunity</span>Card
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Eligibility Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium hover:text-german-red transition-colors">
              Eligibility <ChevronDown className="h-4 w-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => scrollToSection("eligibility")}>
                Overview
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection("skilled-worker")}>
                Skilled Worker Route
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => scrollToSection("point-system")}>
                Point System Route
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Application Process */}
          <button 
            onClick={() => scrollToSection("application")} 
            className="font-medium hover:text-german-red transition-colors"
          >
            Application Process
          </button>

          {/* Services */}
          <button 
            onClick={() => scrollToSection("services")} 
            className="font-medium hover:text-german-red transition-colors"
          >
            Our Services
          </button>

          {/* Benefits */}
          <button 
            onClick={() => scrollToSection("benefits")} 
            className="font-medium hover:text-german-red transition-colors"
          >
            Benefits
          </button>

          {/* FAQ */}
          <button 
            onClick={() => scrollToSection("faq")} 
            className="font-medium hover:text-german-red transition-colors"
          >
            FAQ
          </button>

          <Button 
            onClick={() => scrollToSection("contact")} 
            variant="default" 
            className="bg-german-red hover:bg-red-700 text-white"
          >
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
            <button 
              onClick={() => scrollToSection("eligibility")} 
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded text-left"
            >
              Eligibility
            </button>
            <button 
              onClick={() => scrollToSection("application")} 
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded text-left"
            >
              Application Process
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded text-left"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection("benefits")} 
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded text-left"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded text-left"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              variant="default" 
              className="bg-german-red hover:bg-red-700 text-white w-full"
            >
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};
