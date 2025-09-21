import React from 'react';
import { Download, ArrowRight, CheckCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stop Chasing Leads and Start Attracting Them?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Look, you can keep doing what you're doing and hope things change. Or you can try something that's actually working for businesses just like yours.
          </p>
          
          <div className="bg-blue-800 rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Download size={32} className="text-orange-400 mr-3" />
              <h3 className="text-2xl font-bold">FREE: The 9-Day Lead Generation Blueprint</h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              Before we hop on a call, grab our free guide that shows you exactly how we generated 37+ qualified leads in 9 days. No fluff, just the step-by-step process.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm">The exact 3-step system we use for every client</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm">How to identify your highest-value prospects</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm">The messaging framework that converts 68% of leads</span>
              </div>
              <div className="flex items-start">
                <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-sm">Real examples from actual client campaigns</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#book-call" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all flex items-center"
            >
              Get the Free Guide + Book My Call <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <div className="mt-8 text-gray-400 text-sm">
            <p>No spam. No BS. Just the blueprint that's working right now.</p>
            <p className="mt-2">Join 500+ business owners who are already using this system.</p>
          </div>
          
          <div className="mt-12 border-t border-blue-800 pt-8">
            <p className="text-lg text-gray-300 mb-4">
              Still on the fence? Here's what happens next:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">1</span>
                </div>
                <p className="text-sm">You book a call (takes 30 seconds)</p>
              </div>
              <div>
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">2</span>
                </div>
                <p className="text-sm">We analyze your business (free strategy session)</p>
              </div>
              <div>
                <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <p className="text-sm">You decide if you want our help (no pressure)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;