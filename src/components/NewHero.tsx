import React from 'react';
import { ArrowRight, Globe, Users, Target, CheckCircle } from 'lucide-react';

const NewHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            South Africa's Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Digital Marketing Agency</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-normal">Complete Advertising & Marketing Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-16 leading-relaxed max-w-4xl mx-auto">
            Professional digital marketing and advertising services that get results. <span className="text-orange-400 font-semibold">ZM Results</span> is your trusted marketing partner for website design, social media marketing, and lead generation across South Africa.
          </p>
          
          {/* Three Core Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Website</h3>
              <p className="text-gray-300 mb-4">Every company nowadays must have a website.</p>
              <div className="flex items-center text-orange-400 font-semibold">
                <CheckCircle size={20} className="mr-2" />
                ZM Results can help with that
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Social Media Presence</h3>
              <p className="text-gray-300 mb-4">Every company must have a social media presence.</p>
              <div className="flex items-center text-orange-400 font-semibold">
                <CheckCircle size={20} className="mr-2" />
                ZM Results can help with that
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl inline-block mb-6 shadow-lg">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer Access</h3>
              <p className="text-gray-300 mb-4">Every company must have customers or access to customers.</p>
              <div className="flex items-center text-orange-400 font-semibold">
                <CheckCircle size={20} className="mr-2" />
                ZM Results can help with that
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a 
              href="#services" 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center border-2 border-orange-400 shadow-lg"
            >
              <span className="mr-3">🚀</span>
              Get All Three Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-950 px-10 py-5 rounded-xl text-xl font-bold transition-all backdrop-blur-sm bg-white/10"
            >
              <span className="mr-3">📞</span>
              Talk to an Expert
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-300 mb-4">Trusted by 500+ Business Owners Across South Africa</p>
            <div className="flex justify-center items-center gap-2">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-3 text-gray-300 font-medium">4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;