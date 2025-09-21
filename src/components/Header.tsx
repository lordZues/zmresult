import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-blue-950">ZM Results</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#results" className="text-gray-700 hover:text-orange-500 transition-colors">Results</a>
            <a href="#process" className="text-gray-700 hover:text-orange-500 transition-colors">Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">Testimonials</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
            <a 
              href="#book-call" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md transition-colors flex items-center"
            >
              Book a Call <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100 bg-white' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a 
            href="#results" 
            className="block text-gray-700 hover:text-orange-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Results
          </a>
          <a 
            href="#process" 
            className="block text-gray-700 hover:text-orange-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Process
          </a>
          <a 
            href="#testimonials" 
            className="block text-gray-700 hover:text-orange-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#about" 
            className="block text-gray-700 hover:text-orange-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#book-call" 
            className="block bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;