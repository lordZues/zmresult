import React from 'react';
import { Award, Target, Star } from 'lucide-react';

const DirectorSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4">
            Meet Our Founder
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The driving force behind ZM Results' success
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-950 mb-4">Zusakhe Mazibu</h3>
              <p className="text-xl text-orange-600 font-semibold mb-6">Founder & CEO</p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over a decade of experience in digital marketing and business development, 
                Zusakhe founded ZM Results to help South African businesses thrive in the digital age.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="font-bold text-blue-950">500+</p>
                  <p className="text-gray-600 text-sm">Businesses Helped</p>
                </div>
                <div className="text-center">
                  <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-bold text-blue-950">R50M+</p>
                  <p className="text-gray-600 text-sm">Revenue Generated</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Digital Marketing Expert</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Business Strategist</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Growth Specialist</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-blue-950 mb-4">Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                  <span className="text-gray-700">Built South Africa's #1 digital marketing agency</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                  <span className="text-gray-700">Generated R50M+ in client revenue</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                  <span className="text-gray-700">Maintained 98% client satisfaction rate</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                  <span className="text-gray-700">Helped 500+ businesses grow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;