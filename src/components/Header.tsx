import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Award, MessageCircle } from 'lucide-react';
import NAP from './NAP';

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
    <>
      {/* Top Bar with NAP */}
      <div className="bg-blue-950 text-white py-2 text-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <NAP variant="header" showIcons={false} className="flex flex-row space-x-4 space-y-0" />
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span>Mon-Fri: 8AM-5PM</span>
              <span>•</span>
              <span>Serving all of South Africa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-3 border-b border-gray-200' : 'bg-transparent py-5'
        }`}
        style={{ top: isScrolled ? '0' : '40px' }}
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
              <a 
                href="https://wa.me/27736957783" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl transition-all flex items-center font-bold shadow-lg transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
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
            <a 
              href="https://wa.me/27736957783" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl transition-all text-center font-bold shadow-lg flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;