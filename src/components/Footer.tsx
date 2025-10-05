import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import NAP from './NAP';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0e27] to-[#050812] text-white py-12 border-t-2 border-cyan-500/30">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <NAP variant="footer" />
            <p className="text-gray-400 mt-6 mb-6 max-w-md">
              South Africa's #1 digital marketing agency 2025 and best marketing company SA based in Durban, helping businesses nationwide dominate their markets through proven digital marketing strategies, social media marketing, professional website design, and guaranteed lead generation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border-2 border-pink-500/50 hover:border-pink-500 neon-box-pink h-10 w-10 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Instagram size={20} className="text-pink-400" />
              </a>
              <a href="https://linkedin.com" className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border-2 border-cyan-500/50 hover:border-cyan-500 neon-box-cyan h-10 w-10 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Linkedin size={20} className="text-cyan-400" />
              </a>
              <a href="https://facebook.com" className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border-2 border-purple-500/50 hover:border-purple-500 neon-box-purple h-10 w-10 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Facebook size={20} className="text-purple-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400 neon-glow-cyan">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors border-l-2 border-transparent hover:border-cyan-500 pl-2">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors border-l-2 border-transparent hover:border-cyan-500 pl-2">About Us</Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-gray-400 hover:text-cyan-400 transition-colors border-l-2 border-transparent hover:border-cyan-500 pl-2">Why Choose Us</Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors border-l-2 border-transparent hover:border-cyan-500 pl-2">Contact</a>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors border-l-2 border-transparent hover:border-cyan-500 pl-2">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/30 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-400">
            <div className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border border-cyan-500/30 rounded-lg p-4">
              <h5 className="font-semibold text-cyan-400 mb-2 neon-glow-cyan">Durban (HQ)</h5>
              <p>Top Marketing Agency</p>
              <p>Digital Marketing Agency</p>
              <p>Social Media Marketing</p>
              <p>Lead Generation</p>
            </div>
            <div className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border border-pink-500/30 rounded-lg p-4">
              <h5 className="font-semibold text-pink-400 mb-2 neon-glow-pink">Johannesburg</h5>
              <p>Marketing Dominance</p>
              <p>Advertising Services</p>
              <p>Website Design</p>
              <p>Business Growth</p>
            </div>
            <div className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border border-purple-500/30 rounded-lg p-4">
              <h5 className="font-semibold text-purple-400 mb-2 neon-glow-purple">Cape Town</h5>
              <p>Market Leadership</p>
              <p>Customer Acquisition</p>
              <p>Online Marketing</p>
              <p>SEO Services</p>
            </div>
            <div className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border border-green-500/30 rounded-lg p-4">
              <h5 className="font-semibold text-green-400 mb-2">Pretoria</h5>
              <p>Growth Specialists</p>
              <p>Marketing Consulting</p>
              <p>Digital Advertising</p>
              <p>Brand Building</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ZM Results. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-orange-400 text-sm">
              Privacy Policy
            </Link>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Created and Maintained by <span className="text-orange-400 font-semibold">ZM RESULTS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;