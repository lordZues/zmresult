import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import NAP from './NAP';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="absolute inset-0 subtle-grid opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <NAP variant="footer" />
            <p className="text-slate-400 mt-6 mb-6 max-w-md text-sm leading-relaxed">
              South Africa's #1 digital marketing agency helping businesses nationwide dominate their markets through proven strategies, professional website design, and guaranteed lead generation services.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com" className="glass-card border border-slate-700 hover:border-pink-500 h-10 w-10 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Instagram size={18} className="text-slate-400 hover:text-pink-400 transition-colors" />
              </a>
              <a href="https://linkedin.com" className="glass-card border border-slate-700 hover:border-cyan-500 h-10 w-10 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Linkedin size={18} className="text-slate-400 hover:text-cyan-400 transition-colors" />
              </a>
              <a href="https://facebook.com" className="glass-card border border-slate-700 hover:border-blue-500 h-10 w-10 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Facebook size={18} className="text-slate-400 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Why Choose Us</Link>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Contact</a>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="glass-card border border-slate-800 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2.5">Durban (HQ)</h5>
              <p className="text-slate-400 text-xs mb-1">Top Marketing Agency</p>
              <p className="text-slate-400 text-xs mb-1">Digital Marketing</p>
              <p className="text-slate-400 text-xs mb-1">Social Media</p>
              <p className="text-slate-400 text-xs">Lead Generation</p>
            </div>
            <div className="glass-card border border-slate-800 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2.5">Johannesburg</h5>
              <p className="text-slate-400 text-xs mb-1">Marketing Services</p>
              <p className="text-slate-400 text-xs mb-1">Advertising</p>
              <p className="text-slate-400 text-xs mb-1">Website Design</p>
              <p className="text-slate-400 text-xs">Business Growth</p>
            </div>
            <div className="glass-card border border-slate-800 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2.5">Cape Town</h5>
              <p className="text-slate-400 text-xs mb-1">Market Leadership</p>
              <p className="text-slate-400 text-xs mb-1">Customer Acquisition</p>
              <p className="text-slate-400 text-xs mb-1">Online Marketing</p>
              <p className="text-slate-400 text-xs">SEO Services</p>
            </div>
            <div className="glass-card border border-slate-800 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2.5">Pretoria</h5>
              <p className="text-slate-400 text-xs mb-1">Growth Specialists</p>
              <p className="text-slate-400 text-xs mb-1">Marketing Consulting</p>
              <p className="text-slate-400 text-xs mb-1">Digital Advertising</p>
              <p className="text-slate-400 text-xs">Brand Building</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ZM Results. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
