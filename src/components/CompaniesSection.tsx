import React from 'react';
import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

const CompaniesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Trusted Partners</span>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mt-2 mb-6 leading-tight">
            Companies We've <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Helped Succeed</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From logistics to consulting, we've helped businesses across South Africa build their digital presence and grow their customer base.
          </p>
        </div>

        {/* Featured Client */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/5879759277483215502.jpg" 
                alt="SCM Logistics - Professional logistics and transportation services" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase mb-6">
                <Award className="w-5 h-5 mr-2" />
                Featured Success Story
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-6">
                SCM Logistics
              </h3>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A leading logistics and transportation company that needed a complete digital transformation to compete in the modern marketplace.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-black text-blue-950 mb-2">300%</div>
                  <div className="text-gray-600">Website Traffic Increase</div>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-black text-blue-950 mb-2">150%</div>
                  <div className="text-gray-600">Social Media Growth</div>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-black text-blue-950 mb-2">85%</div>
                  <div className="text-gray-600">More Qualified Leads</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Complete website redesign and development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Social media management across all platforms</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Lead generation system implementation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Ongoing digital marketing support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Industries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">Consulting Firms</h3>
            <p className="text-gray-700">
              Helped professional service firms establish credibility online and generate qualified leads through strategic digital presence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <TrendingUp size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">E-commerce Businesses</h3>
            <p className="text-gray-700">
              Transformed online stores with better websites, social media strategies, and customer acquisition systems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Award size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">Service Providers</h3>
            <p className="text-gray-700">
              Local service businesses now dominate their markets with professional websites and targeted lead generation.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">Trusted Across Industries</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-black text-orange-400 mb-2">50+</div>
                <div className="text-gray-200">Companies Served</div>
              </div>
              <div>
                <div className="text-4xl font-black text-green-400 mb-2">15+</div>
                <div className="text-gray-200">Industries</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-400 mb-2">98%</div>
                <div className="text-gray-200">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-200">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;