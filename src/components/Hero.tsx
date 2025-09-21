import React from 'react';
import { ArrowRight, Award, Shield, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Results Guaranteed</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-sm font-medium">No Risk Promise</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-sm font-medium">Proven System</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 animate-pulse">37+ Qualified Leads</span> in 9 Days
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-normal">Without Cold Calling or Expensive Ads</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
            Look, we get it. You're tired of chasing leads that go nowhere. We'll show you exactly how to get qualified prospects reaching out to <span className="text-orange-400 font-semibold">YOU</span> - or you don't pay a cent.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a 
              href="#book-call" 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center border-2 border-orange-400 shadow-lg"
            >
              <span className="mr-3">🚀</span>
              Show Me How This Works 
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#results" 
              className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-950 px-10 py-5 rounded-xl text-xl font-bold transition-all backdrop-blur-sm bg-white/10"
            >
              <span className="mr-3">📊</span>
              See Real Results
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-green-500 text-white p-3 rounded-full mb-3 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-bold text-lg">Results Guaranteed</span>
              <span className="text-gray-300 text-sm text-center mt-1">Or you don't pay anything</span>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-blue-500 text-white p-3 rounded-full mb-3 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-bold text-lg">No Cold Calling</span>
              <span className="text-gray-300 text-sm text-center mt-1">Leads come to you instead</span>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-orange-500 text-white p-3 rounded-full mb-3 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="font-bold text-lg">No Wasted Ad Spend</span>
              <span className="text-gray-300 text-sm text-center mt-1">Organic lead generation</span>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-300 mb-4">Trusted by 500+ Business Owners</p>
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

export default Hero;