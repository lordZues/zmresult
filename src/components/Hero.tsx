import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight mb-6">
            Stop Chasing Leads. <span className="text-orange-500">Start Growing</span> Your Business.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
            We help business owners get more qualified leads and sales without wasting money on ads that don't work or relying on referrals that dry up.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#book-call" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="#results" 
              className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
            >
              See Our Results
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-700">
            <div className="flex items-center">
              <div className="bg-green-100 text-green-700 p-2 rounded-full mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-medium">Results Guaranteed</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-100 text-green-700 p-2 rounded-full mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-medium">No Cold Calling</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-100 text-green-700 p-2 rounded-full mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-medium">No Wasted Ad Spend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;