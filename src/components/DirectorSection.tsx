import React from 'react';
import { Award, Users, Target, Mail, MessageCircle } from 'lucide-react';

const DirectorSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold tracking-wider uppercase">Meet Our Director</span>
            <h2 className="text-4xl md:text-6xl font-black mt-2 mb-6 leading-tight">
              The Vision Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">ZM Results</span>
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="/5877404059152009299.jpg" 
                    alt="Zusakhe Mazibu - Director of ZM Results" 
                    className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-orange-500"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl shadow-2xl">
                    <Award size={32} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-black mb-4">Zusakhe Mazibu</h3>
                <p className="text-xl text-orange-400 font-bold mb-8">Director & Founder</p>
                
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  "I started ZM Results because I saw too many good businesses struggling with their digital presence. Every company needs three things to succeed today: a professional website, social media presence, and access to customers. My mission is simple - help businesses get all three working together seamlessly."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Users size={24} className="text-orange-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-gray-300 text-sm">Companies Helped</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Target size={24} className="text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-gray-300 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <Award size={24} className="text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-gray-300 text-sm">Success Rate</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 p-6 rounded-2xl mb-8">
                  <h4 className="text-xl font-bold text-orange-400 mb-3">My Promise to You</h4>
                  <p className="text-gray-200">
                    "Your success is my success. I don't just build websites or manage social media - I build complete digital ecosystems that generate real results for your business. If we can't help you succeed, you don't pay. It's that simple."
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:zusakhe@zmresultss.org"
                    className="flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Zusakhe
                  </a>
                  <a 
                    href="https://wa.me/27736957783?text=Hi%20Zusakhe!%20I%20need%20help%20with%20my%20business's%20digital%20presence."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
                <Target size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Results-Driven</h4>
              <p className="text-gray-300">
                We focus on what matters - getting you more customers and growing your business.
              </p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
                <Users size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Local Understanding</h4>
              <p className="text-gray-300">
                Based in South Africa, we understand your market and your customers.
              </p>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl inline-block mb-6 shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Guaranteed Success</h4>
              <p className="text-gray-300">
                Your success is guaranteed, or you don't pay. We're that confident in our results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;