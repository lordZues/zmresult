import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ZM Results</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Helping business owners get more qualified leads and sales without wasting money on ads that don't work or relying on referrals that dry up.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="bg-blue-900 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="bg-blue-900 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" className="bg-blue-900 hover:bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#results" className="text-gray-300 hover:text-orange-400 transition-colors">Results</a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-orange-400 transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-orange-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#book-call" className="text-gray-300 hover:text-orange-400 transition-colors">Book a Call</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={20} className="text-orange-400 mr-3" />
                <a href="mailto:hello@zmresults.com" className="text-gray-300 hover:text-white">
                  hello@zmresults.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-orange-400 mr-3" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ZM Results. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;