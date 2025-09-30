import React from 'react';
import { Check, Award, Users, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">About ZM Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4">
            South Africa's #1 Digital Marketing Agency
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We help South African businesses get more customers through proven digital marketing strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">500+</h3>
            <p className="text-gray-700">Businesses Helped</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">R50M+</h3>
            <p className="text-gray-700">Revenue Generated</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">98%</h3>
            <p className="text-gray-700">Client Satisfaction</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">5+</h3>
            <p className="text-gray-700">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;