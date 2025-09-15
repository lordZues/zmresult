import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Award } from 'lucide-react';

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
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-3 border-b border-gray-200' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-xl mr-3 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-black text-blue-950">ZM Results</span>
              <span className="ml-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">GUARANTEED</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">Services</a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">Why Us</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">Contact</a>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl transition-all flex items-center font-bold shadow-lg transform hover:scale-105"
            >
              <span className="mr-2">🚀</span>
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
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
        isOpen ? 'max-h-screen opacity-100 bg-white/95 backdrop-blur-lg shadow-2xl' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a 
            href="#services" 
            className="block text-gray-700 hover:text-orange-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#why-choose-us" 
            className="block text-gray-700 hover:text-orange-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Why Us
          </a>
          <a 
            href="#contact" 
            className="block text-gray-700 hover:text-orange-500 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-xl transition-all text-center font-bold shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            🚀 
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;