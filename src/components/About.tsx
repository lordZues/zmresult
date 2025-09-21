import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-6">
              We Get It - You're Tired of Empty Promises
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Look, we've been where you are. Trying every marketing "hack" you read about online. Spending money on ads that don't work. Waiting for referrals that never come.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              That's exactly why we started ZM Results. We were sick of seeing good businesses struggle with lead generation while marketing agencies got rich selling them false hope.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-gray-700">No more throwing money at ads that don't convert</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-gray-700">No more hoping referrals will save your month</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-gray-700">No more cold calling people who hang up on you</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-gray-700">Just qualified leads calling YOU instead</p>
              </div>
            </div>
            
            <a 
              href="#book-call" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
            >
              Let's Fix This Together
            </a>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Business growth team meeting" 
                className="w-full h-64 md:h-96 object-cover"
              />
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Here's Our Promise</h3>
                
                <p className="text-gray-700 mb-6">
                  We're not like other agencies. We don't get paid unless you get results. If we can't deliver the leads we promise, you don't owe us anything.
                </p>
                
                <div className="bg-orange-100 border-l-4 border-orange-500 p-4">
                  <p className="text-orange-800 font-medium italic">
                    "Your success is literally our paycheck. We can't afford to let you down."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;