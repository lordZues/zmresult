import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Zap, MessageCircle } from 'lucide-react';
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
      <div className="bg-gray-900 border-b border-gray-800 text-gray-300 py-2 text-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <NAP variant="header" showIcons={false} className="flex flex-row space-x-4 space-y-0" />
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span className="text-gray-400">Mon-Fri: 8AM-5PM</span>
              <span className="text-gray-600">•</span>
              <span className="text-red-500 font-bold">⚡ Only 3 consultation slots left this week</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3 border-b border-gray-200'
            : 'bg-white py-5 border-b border-gray-100'
        }`}
        style={{ top: isScrolled ? '0' : '40px' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3">
                <span className="text-xl md:text-2xl font-black text-gray-900">ZM Results</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">About</Link>
              <a
                href="#book-call"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all flex items-center"
              >
                Book Free Call
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 bg-white border-t border-gray-200' : 'max-h-0 opacity-0'
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              to="/services"
              className="block text-gray-700 hover:text-blue-600 transition-colors py-2.5 px-3 rounded-lg hover:bg-gray-50 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600 transition-colors py-2.5 px-3 rounded-lg hover:bg-gray-50 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <a
              href="#book-call"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-bold"
              onClick={() => setIsOpen(false)}
            >
              Book Free Call
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
