import React from 'react';
import { ArrowRight, Globe, Users, Target, CheckCircle } from 'lucide-react';

const NewHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">We Build Your</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Online Powerhouse</span>
            <br />
            <span className="text-xl md:text-2xl text-orange-300 font-bold">Get More Customers. Let's Talk.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto font-bold">
            🎯 <span className="text-yellow-400">Professional Website Creation</span><br />
            📱 <span className="text-green-400">Social Media Growth Strategy</span><br />
            💰 <span className="text-blue-400">Customer Acquisition System</span>
          </p>
          
          <div className="bg-green-500 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
              Starting at R2,500
            </h2>
            <p className="text-white">
              Custom pricing after consultation
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a 
              href="#services" 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <span className="mr-3">🚀</span>
              YES! GET ME MORE CUSTOMERS
            </a>
            
            <a 
              href="#contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-950 px-8 py-4 rounded-xl text-xl font-bold transition-all backdrop-blur-sm bg-white/20"
            >
              <span className="mr-3">📞</span>
              CALL ME NOW
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-lg text-yellow-300 font-bold">500+ Happy Business Owners • Money Back Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;