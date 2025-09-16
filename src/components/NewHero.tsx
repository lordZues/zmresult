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
            <span className="text-white">We Get You</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 animate-pulse">MORE CUSTOMERS</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-orange-300 font-bold">It's That Simple!</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white mb-12 leading-relaxed max-w-4xl mx-auto font-bold">
            📞 <span className="text-yellow-400">More Phone Calls</span><br />
            💰 <span className="text-green-400">More Money</span><br />
            🚀 <span className="text-blue-400">Bigger Business</span>
          </p>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-12 border-4 border-orange-400">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              🎯 HERE'S WHAT WE DO:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-500 rounded-2xl p-6">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-white mb-2">Build Your Website</h3>
                <p className="text-white text-lg">So people can find you online</p>
              </div>
              <div className="bg-purple-500 rounded-2xl p-6">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-white mb-2">Grow Social Media</h3>
                <p className="text-white text-lg">Get lots of followers</p>
              </div>
              <div className="bg-orange-500 rounded-2xl p-6">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-white mb-2">Send You Customers</h3>
                <p className="text-white text-lg">People who want to buy from you</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-500 rounded-3xl p-8 mb-12 border-4 border-yellow-400">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              💸 HOW MUCH DOES IT COST?
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-4">
              Starting at R2,500
            </p>
            <p className="text-xl text-white">
              (That's like R83 per day to get more customers!)
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
            <a 
              href="#services" 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-2xl text-2xl md:text-3xl font-black transition-all transform hover:scale-110 hover:shadow-2xl flex items-center justify-center border-4 border-yellow-400 shadow-lg animate-pulse"
            >
              <span className="mr-4 text-4xl">🚀</span>
              YES! GET ME MORE CUSTOMERS
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              className="border-4 border-white text-white hover:bg-white hover:text-blue-950 px-12 py-6 rounded-2xl text-2xl md:text-3xl font-black transition-all backdrop-blur-sm bg-white/20"
            >
              <span className="mr-4 text-4xl">📞</span>
              CALL ME NOW
            </a>
          </div>
          
          <div className="bg-red-500 rounded-3xl p-8 mb-8 border-4 border-white">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              ⚡ PROMISE TO YOU:
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-white">
              If we don't get you more customers,<br />
              <span className="text-yellow-300">YOU DON'T PAY!</span>
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 pt-8">
            <p className="text-2xl text-yellow-300 mb-6 font-bold">500+ Happy Business Owners ⭐⭐⭐⭐⭐</p>
            <div className="flex justify-center items-center gap-2">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-10 h-10 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-4 text-white font-bold text-xl">Everyone Loves Us!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;