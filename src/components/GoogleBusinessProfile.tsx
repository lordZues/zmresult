import React from 'react';
import { MapPin, Star, Clock, Phone, Globe } from 'lucide-react';

const GoogleBusinessProfile: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Find Us on Google
            </h2>
            <p className="text-xl text-gray-700">
              ZM Results - Your trusted digital marketing partner in South Africa
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-6">Business Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-950">Address</p>
                      <p className="text-gray-700">45 Bale Avenue, Montclair, Durban, KwaZulu-Natal, South Africa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-950">Phone</p>
                      <a href="tel:+27736957783" className="text-gray-700 hover:text-orange-500">
                        +27 73 695 7783
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-950">Hours</p>
                      <p className="text-gray-700">Mon-Fri: 8AM-5PM, Sat: 9AM-1PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-blue-950">Website</p>
                      <a href="https://zmresults.org" className="text-gray-700 hover:text-orange-500">
                        zmresults.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-6">Customer Reviews</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-3 text-gray-600 font-medium">4.9/5 (200+ reviews)</span>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic mb-2">
                      "ZM Results transformed our business. We went from 5 leads per month to 45+ qualified leads."
                    </p>
                    <p className="text-sm text-gray-600">- Sarah Johnson, Cape Town</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic mb-2">
                      "Finally, an agency that delivers what they promise. Our ROI has been incredible."
                    </p>
                    <p className="text-sm text-gray-600">- Michael Chen, Johannesburg</p>
                  </div>
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