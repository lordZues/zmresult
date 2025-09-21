import React from 'react';
import { User, Award, Target } from 'lucide-react';

const DirectorSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4">
              Meet Our Director
            </h2>
            <p className="text-xl text-gray-700">
              Leading ZM Results with passion and expertise
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="/5879759277483215502.jpg" 
                  alt="Zusakhe Mazibu - Director" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-2/3 p-8 md:p-12">
                <h3 className="text-3xl font-bold text-blue-950 mb-2">Zusakhe Mazibu</h3>
                <p className="text-xl text-orange-500 font-semibold mb-6">Founder & Director</p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Zusakhe Mazibu is the visionary founder and director of ZM Results, South Africa's premier 
                  digital marketing and advertising agency. With a proven track record of helping over 500 
                  businesses generate more than R50 million in revenue, Zusakhe has established himself as 
                  a leading authority in customer acquisition and business growth strategies across South Africa.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full inline-block mb-3">
                      <User size={24} />
                    </div>
                    <p className="font-semibold text-blue-950">500+</p>
                    <p className="text-gray-600 text-sm">Clients Served</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-orange-100 text-orange-600 p-3 rounded-full inline-block mb-3">
                      <Award size={24} />
                    </div>
                    <p className="font-semibold text-blue-950">4.9/5</p>
                    <p className="text-gray-600 text-sm">Client Rating</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full inline-block mb-3">
                      <Target size={24} />
                    </div>
                    <p className="font-semibold text-blue-950">R50M+</p>
                    <p className="text-gray-600 text-sm">Revenue Generated</p>
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

export default DirectorSection;