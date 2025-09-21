import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <span className="text-orange-500 font-semibold tracking-wider uppercase">About ZM Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-6">
              We Help Business Owners Break Through Growth Plateaus
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              At ZM Results, we understand the challenges business owners face when trying to generate consistent leads and sales. After years of working with businesses across multiple industries, we've developed a proven system that delivers predictable results.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Unlike traditional marketing agencies that focus on vanity metrics, we're obsessed with one thing: generating qualified leads that convert into paying clients for your business.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-gray-700">No more wasting money on ineffective ads</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-gray-700">No more relying on referrals that eventually dry up</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-gray-700">No more spending hours on cold outreach with little return</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 p-1 rounded-full mr-3 mt-1">
                  <Check size={16} />
                </div>
                <p className="text-gray-700">Just a reliable system that brings qualified leads to you</p>
              </div>
            </div>
            
            <a 
              href="#book-call" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
            >
              Let's Talk About Your Business
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
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Our Guarantee</h3>
                
                <p className="text-gray-700 mb-6">
                  We're so confident in our approach that we offer a simple guarantee: If we don't deliver the results we promise, you don't pay. It's that simple.
                </p>
                
                <div className="bg-orange-100 border-l-4 border-orange-500 p-4">
                  <p className="text-orange-800 font-medium italic">
                    "We don't succeed unless your business grows. That's why we're fully invested in your success from day one."
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