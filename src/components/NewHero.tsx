import React from 'react';
import { ArrowRight, Globe, Users, Target, CheckCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-blue-950">South Africa's #1</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Digital Marketing Agency 2025</span>
            <br />
            <span className="text-xl md:text-2xl text-orange-600 font-bold">Best Marketing Company SA • 500+ Businesses Helped • Money Back Guarantee</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-bold">
            🎯 <Link to="/web-design-services-south-africa" className="text-orange-600 hover:underline">Professional Website Creation</Link><br />
            📱 <Link to="/social-media-marketing-services-south-africa" className="text-green-600 hover:underline">Social Media Growth Strategy</Link><br />
            💰 <Link to="/blog/get-50-qualified-leads-30-days-south-africa-2025" className="text-blue-600 hover:underline">Customer Acquisition System</Link><br />
            🏆 <Link to="/about" className="text-purple-600 hover:underline">Award-Winning Digital Marketing Agency South Africa</Link>
          </p>
          
          <div className="bg-green-500 rounded-2xl p-6 mb-8 shadow-lg">
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
              className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white px-8 py-4 rounded-xl text-xl font-bold transition-all"
            >
              <span className="mr-3">📞</span>
              CALL ME NOW
            </a>
            
            <a 
              href="https://wa.me/27736957783" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all flex items-center justify-center shadow-lg transform hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp Me
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-lg text-green-600 font-bold">500+ Happy Business Owners • Money Back Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;