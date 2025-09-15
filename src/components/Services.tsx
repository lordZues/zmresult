import React from 'react';
import { Globe, Users, Target, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mt-2 mb-6 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Complete Solution</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stop juggling multiple agencies. Get everything your business needs in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Service 1: Website */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Globe size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-blue-950 mb-4">Professional Website</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Every company nowadays must have a website. Your digital storefront that works 24/7 to attract and convert customers.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Mobile-responsive design</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">SEO optimized</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Fast loading speed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Lead capture forms</span>
              </div>
            </div>
            
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-6">
              <p className="text-orange-800 font-semibold">
                ✅ ZM Results can help with that
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-2xl font-black text-blue-950">From R2,500</span>
              <p className="text-gray-600">Complete website solution</p>
            </div>
          </div>

          {/* Service 2: Social Media */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Users size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-blue-950 mb-4">Social Media Presence</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Every company must have a social media presence. Connect with your audience where they spend their time.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Content creation & posting</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Community management</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Targeted advertising</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Analytics & reporting</span>
              </div>
            </div>
            
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-6">
              <p className="text-orange-800 font-semibold">
                ✅ ZM Results can help with that
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-2xl font-black text-blue-950">From R2,000/week</span>
              <p className="text-gray-600">Complete with content creation & more</p>
            </div>
          </div>

          {/* Service 3: Customer Access */}
          <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Target size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-blue-950 mb-4">Customer Access</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Every company must have customers or access to customers. We connect you with your ideal clients.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Lead generation campaigns</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Customer database building</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Email marketing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Sales funnel optimization</span>
              </div>
            </div>
            
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-6">
              <p className="text-orange-800 font-semibold">
                ✅ ZM Results can help with that
              </p>
            </div>
            
            <div className="text-center">
              <span className="text-2xl font-black text-blue-950">From R3,000/month</span>
              <p className="text-gray-600">Complete lead generation</p>
            </div>
          </div>
        </div>

        {/* Package Deal */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase mb-6">
              <Star className="w-5 h-5 mr-2" />
              Complete Business Package
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Get All Three from <span className="text-orange-400">R9,500/month</span>
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Instead of paying R11,000+ separately, get our complete digital solution package and save money every month.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Globe size={24} className="text-orange-400 mx-auto mb-3" />
                <p className="font-semibold">Professional Website</p>
                <p className="text-gray-300 text-sm">From R2,500</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users size={24} className="text-orange-400 mx-auto mb-3" />
                <p className="font-semibold">Social Media Management</p>
                <p className="text-gray-300 text-sm">From R2,000/week</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Target size={24} className="text-orange-400 mx-auto mb-3" />
                <p className="font-semibold">Lead Generation</p>
                <p className="text-gray-300 text-sm">From R3,000/month</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl"
            >
              <span className="mr-3">🎯</span>
              Get Complete Package
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            
            <p className="mt-6 text-gray-300">
              💰 Save money every month • 🚀 Launch in 7 days • 📞 Free consultation included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;