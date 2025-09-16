import React from 'react';
import { Star, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const GoogleBusinessProfile: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Find Us on Google Business Profile
            </h2>
            <p className="text-xl text-gray-600">
              Connect with us on Google for reviews, directions, and business updates
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                    alt="Google" 
                    className="h-8 mr-4"
                  />
                  <span className="text-xl font-bold text-blue-950">Business Profile</span>
                </div>

                <h3 className="text-2xl font-bold text-blue-950 mb-4">ZM Results</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex items-center mr-4">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-gray-700">4.9 (200+ reviews)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <MapPin size={16} className="mr-3 text-blue-500" />
                    <span>Cape Town, Western Cape, South Africa</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <Phone size={16} className="mr-3 text-green-500" />
                    <span>+27 73 695 7783</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <Clock size={16} className="mr-3 text-orange-500" />
                    <span>Mon-Fri: 8AM-5PM, Sat: 9AM-1PM</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a 
                    href="https://www.google.com/search?q=ZM+Results+advertising+agency+Cape+Town"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    View on Google <ExternalLink size={16} className="ml-2" />
                  </a>
                  
                  <div className="text-sm text-gray-600">
                    <p>• Leave us a review</p>
                    <p>• Get directions</p>
                    <p>• See our latest posts</p>
                    <p>• Contact us directly</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-blue-950 mb-4">Recent Reviews</h4>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-3">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} size={12} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="font-medium text-gray-900">Sarah M.</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "ZM Results transformed our business! We went from struggling to get leads to having a full pipeline of qualified prospects."
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-3">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} size={12} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="font-medium text-gray-900">David K.</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Professional service and real results. Our social media following grew by 300% in just 3 months!"
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-3">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} size={12} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="font-medium text-gray-900">Lisa R.</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Best investment we made for our business. The team at ZM Results knows what they're doing!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Business Profile Setup Guide */}
          <div className="mt-12 bg-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">
              Google Business Profile Optimization Tips
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-950 mb-3">For Business Owners:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Claim and verify your Google Business Profile</li>
                  <li>• Add high-quality photos of your business</li>
                  <li>• Keep your business hours updated</li>
                  <li>• Respond to all customer reviews</li>
                  <li>• Post regular updates and offers</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-950 mb-3">Why It Matters:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Appear in local search results</li>
                  <li>• Build trust with customer reviews</li>
                  <li>• Provide easy contact information</li>
                  <li>• Show up in Google Maps</li>
                  <li>• Increase local visibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleBusinessProfile;