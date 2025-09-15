import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ZM Results</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              South Africa's premier advertising agency helping businesses get more customers. We specialize in customer acquisition, social media growth, lead generation, website design, and proven advertising strategies that grow your business.
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
                <a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-300 hover:text-orange-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a>
              </li>
              <li>
                <a href="mailto:zusakhe@zmresultss.org" className="text-gray-300 hover:text-orange-400 transition-colors">Email Us</a>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
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
      </div>
    </footer>
  );
};

export default Footer;