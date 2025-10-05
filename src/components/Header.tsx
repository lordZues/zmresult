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
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 py-2 text-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <NAP variant="header" showIcons={false} className="flex flex-row space-x-4 space-y-0" />
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span className="text-slate-400">Mon-Fri: 8AM-5PM</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Serving all of South Africa</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-xl py-3 border-b border-slate-800'
            : 'bg-slate-900/90 backdrop-blur-lg py-5 border-b border-slate-800/50'
        }`}
        style={{ top: isScrolled ? '0' : '40px' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2.5 rounded-lg border border-slate-700">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl md:text-2xl font-bold text-white">ZM Results</span>
                <span className="ml-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded">GUARANTEED</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/services" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Services</Link>
              <Link to="/about" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">About Us</Link>
              <Link to="/why-choose-us" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Why Us</Link>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">Contact</a>
              <a
                href="#contact"
                className="relative group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-5 py-2.5 rounded-lg font-semibold transition-all"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </a>
              <a
                href="https://wa.me/27736957783"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2.5 rounded-lg font-semibold transition-all"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-slate-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 bg-slate-900/98 backdrop-blur-xl border-t border-slate-800' : 'max-h-0 opacity-0'
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              to="/services"
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/why-choose-us"
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </Link>
            <a
              href="#contact"
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2.5 px-3 rounded-lg hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
            <a
              href="https://wa.me/27736957783"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 text-white px-6 py-3 rounded-lg text-center font-semibold flex items-center justify-center"
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
