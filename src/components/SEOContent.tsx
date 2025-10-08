import React from 'react';
import { MapPin, Phone, Mail, TrendingUp, Users, Target } from 'lucide-react';

const SEOContent: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero SEO Section */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              South Africa's #1 Digital Marketing & Advertising Agency 2025 | Best Marketing Company SA
            </h1>
            <p className="text-xl mb-8">
              ZM Results is South Africa's #1 digital marketing agency 2025 and best marketing company SA with 500+ successful clients and a money-back guarantee. 
              We help businesses across Cape Town, Johannesburg, Durban, and Pretoria get more customers through proven 
              digital marketing strategies, professional website design, social media marketing, and guaranteed lead generation services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-orange-500 px-4 py-2 rounded-full">#1 Digital Marketing Agency South Africa 2025</span>
              <span className="bg-red-500 px-4 py-2 rounded-full">Best Marketing Company SA</span>
              <span className="bg-blue-600 px-4 py-2 rounded-full">500+ Successful Clients</span>
              <span className="bg-green-600 px-4 py-2 rounded-full">Money Back Guarantee</span>
              <span className="bg-purple-600 px-4 py-2 rounded-full">Free Consultation</span>
              <span className="bg-yellow-600 px-4 py-2 rounded-full">Award-Winning Agency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4">
              Award-Winning Digital Marketing Services Across South Africa 2025 | Best Marketing Company SA
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              ZM Results is the best marketing company SA helping South African businesses get more customers and increase revenue through proven digital marketing strategies 2025 with guaranteed results and money-back guarantee.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-lg font-bold text-blue-950 mb-2">Digital Marketing Agency Services 2025</h3>
              <p className="text-gray-700">
                Best digital marketing agency SA offering SEO, PPC, content marketing, and social media management for South African businesses 2025.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="text-lg font-bold text-blue-950 mb-2">Social Media Marketing South Africa 2025</h3>
              <p className="text-gray-700">
                Top social media marketing agency SA providing social media management and content creation across all major platforms for South African businesses.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Target className="w-10 h-10 text-green-500 mb-3" />
              <h3 className="text-lg font-bold text-blue-950 mb-2">Lead Generation Company South Africa 2025</h3>
              <p className="text-gray-700">
                Best lead generation company SA with proven systems that deliver qualified prospects ready to buy. Results guaranteed with money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Business Information */}
      <section className="py-12 bg-blue-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Contact ZM Results | #1 Digital Marketing Agency South Africa 2025
            </h2>
            <p className="text-lg text-gray-300">
              Ready to grow your business with the best marketing company SA? Contact South Africa's #1 digital marketing agency today for free consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">ZM Results Location | Digital Marketing Agency Durban</h3>
              <p className="text-gray-300">
                45 Bale Avenue, Montclair<br />
                Durban, KwaZulu-Natal<br />
                South Africa<br />
                <span className="text-orange-400 font-semibold">Best Marketing Agency Durban KZN</span>
              </p>
            </div>
            
            <div>
              <Phone className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Call #1 Marketing Agency SA Today</h3>
              <p className="text-gray-300">
                <a href="tel:+27736957783" className="hover:text-orange-400">
                  +27 73 695 7783
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Mon-Fri: 8AM-5PM<br />
                Sat: 9AM-1PM
                <br />
                <span className="text-orange-400 font-semibold">Free Digital Marketing Consultation</span>
              </p>
            </div>
            
            <div>
              <Mail className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Email Best Marketing Company SA</h3>
              <p className="text-gray-300">
                <a href="mailto:zusakhe@zmresultss.org" className="hover:text-orange-400">
                  zusakhe@zmresultss.org
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Free digital marketing consultation available<br />
                <span className="text-orange-400 font-semibold">Money Back Guarantee</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOContent;