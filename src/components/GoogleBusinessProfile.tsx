import React from 'react';
import { MapPin, Star, Clock, Phone } from 'lucide-react';

const GoogleBusinessProfile: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">Local Business</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4">
              Find Us on Google
            </h2>
            <p className="text-xl text-gray-700">
              Serving businesses across South Africa from our Durban headquarters
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-6">ZM Results</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">45 Bale Avenue, Montclair, Durban, KwaZulu-Natal</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-orange-500 mr-3" />
                    <a href="tel:+27736957783" className="text-gray-700 hover:text-orange-500">
                      +27 73 695 7783
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-gray-700">Mon-Fri: 8AM-5PM, Sat: 9AM-1PM</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-gray-700">4.9/5 stars from 200+ reviews</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-blue-950 mb-4">Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Digital Marketing</li>
                  <li>• Website Design</li>
                  <li>• Social Media Marketing</li>
                  <li>• Lead Generation</li>
                  <li>• Customer Acquisition</li>
                  <li>• Business Growth Services</li>
                </ul>
                
                <div className="mt-6">
                  <a 
                    href="https://www.google.com/maps/search/ZM+Results+45+Bale+Avenue+Montclair+Durban"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium transition-all"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleBusinessProfile;