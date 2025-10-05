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
      <div className="bg-gradient-to-r from-[#0a0e27] via-[#0f1432] to-[#0a0e27] text-cyan-400 py-2 text-sm border-b border-cyan-500/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <NAP variant="header" showIcons={false} className="flex flex-row space-x-4 space-y-0" />
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span className="text-cyan-300">Mon-Fri: 8AM-5PM</span>
              <span className="text-cyan-500">•</span>
              <span className="text-cyan-300">Serving all of South Africa</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0e27]/95 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.3)] py-3 border-b-2 border-cyan-500/50'
            : 'bg-[#0a0e27]/90 backdrop-blur-lg py-5 border-b border-cyan-500/20'
        }`}
        style={{ top: isScrolled ? '0' : '40px' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] p-2 rounded-xl border-2 border-cyan-500 neon-box-cyan">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl md:text-2xl font-black text-cyan-400 neon-glow-cyan glitch">ZM Results</span>
                <span className="ml-2 bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full neon-box-pink">GUARANTEED</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/services" className="text-cyan-300 hover:text-cyan-400 transition-all font-semibold hover:neon-glow-cyan">Services</Link>
              <Link to="/about" className="text-cyan-300 hover:text-cyan-400 transition-all font-semibold hover:neon-glow-cyan">About Us</Link>
              <Link to="/why-choose-us" className="text-cyan-300 hover:text-cyan-400 transition-all font-semibold hover:neon-glow-cyan">Why Us</Link>
              <a href="#contact" className="text-cyan-300 hover:text-cyan-400 transition-all font-semibold hover:neon-glow-cyan">Contact</a>
              <a
                href="#contact"
                className="relative group bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-3 rounded-lg font-bold transition-all overflow-hidden neon-box-cyan hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="mr-2 h-4 w-4" />
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </a>
              <a
                href="https://wa.me/27736957783"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-lg font-bold transition-all neon-box-purple hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-cyan-400 focus:outline-none neon-glow-cyan"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 bg-[#0a0e27]/98 backdrop-blur-xl border-t border-cyan-500/30' : 'max-h-0 opacity-0'
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/services"
              className="block text-cyan-300 hover:text-cyan-400 transition-colors py-2 border-l-2 border-transparent hover:border-cyan-500 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-cyan-300 hover:text-cyan-400 transition-colors py-2 border-l-2 border-transparent hover:border-cyan-500 pl-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/why-choose-us"
              className="block text-cyan-300 hover:text-cyan-400 transition-colors py-2 border-l-2 border-transparent hover:border-cyan-500 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </Link>
            <a
              href="#contact"
              className="block text-cyan-300 hover:text-cyan-400 transition-colors py-2 border-l-2 border-transparent hover:border-cyan-500 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="block bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-4 rounded-lg text-center font-bold neon-box-cyan"
              onClick={() => setIsOpen(false)}
            >
              <Zap className="inline mr-2 h-5 w-5" />
              Get Started
            </a>
            <a
              href="https://wa.me/27736957783"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-lg text-center font-bold neon-box-purple flex items-center justify-center"
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
