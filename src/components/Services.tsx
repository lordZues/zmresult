import React from 'react';
import { Globe, Users, Target, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-[#0f1432] via-[#0a0e27] to-[#050812] overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase neon-glow-cyan">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 neon-glow-pink">BEST MARKETING COMPANY SA</span><br />
            <span className="text-white">3-Step Customer-Getting System 2025</span>
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto leading-relaxed font-bold">
            #1 Digital Marketing Agency South Africa Process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Service 1: Website */}
          <div className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] rounded-3xl p-8 relative overflow-hidden group border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-500 neon-box-cyan hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>

            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl inline-block mb-6 neon-box-cyan">
              <Globe size={32} className="text-white" />
            </div>

            <h3 className="text-3xl font-bold text-cyan-400 mb-4 neon-glow-cyan">STEP 1: Create Your Professional Website</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              As the best marketing company SA, we design and build a conversion-focused website that showcases your business professionally and turns visitors into paying customers with guaranteed results.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-cyan-400 mr-3" />
                <span className="text-gray-300">Professional website design South Africa that builds trust</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-cyan-400 mr-3" />
                <span className="text-gray-300">SEO optimized for Google visibility South Africa 2025</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-cyan-400 mr-3" />
                <span className="text-gray-300">Mobile-responsive website design SA</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-cyan-400 mr-3" />
                <span className="text-gray-300">Conversion-optimized for sales South Africa</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border-l-4 border-cyan-500 p-4 mb-6 neon-border-cyan">
              <p className="text-cyan-300 font-semibold">
                Money Back Guarantee - Best Marketing Company SA Promise
              </p>
            </div>

            <div className="text-center">
              <span className="text-3xl font-black text-cyan-400 neon-glow-cyan">Website Design from R2,500</span>
              <p className="text-gray-400">Professional website design South Africa - Final pricing after consultation</p>
            </div>
            
            <div className="mt-6 text-center">
              <Link
                to="/web-design-services-south-africa"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-all"
              >
                Learn More About Web Design <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Service 2: Social Media */}
          <div className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] rounded-3xl p-8 relative overflow-hidden group border-2 border-pink-500/30 hover:border-pink-500 transition-all duration-500 neon-box-pink hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"></div>

            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-2xl inline-block mb-6 neon-box-pink">
              <Users size={32} className="text-white" />
            </div>

            <h3 className="text-3xl font-bold text-pink-400 mb-4 neon-glow-pink">STEP 2: Strategic Social Media Growth</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We create and manage engaging content across your social platforms to build your brand, grow your following, and attract ideal customers.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-pink-400 mr-3" />
                <span className="text-gray-300">Strategic content creation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-pink-400 mr-3" />
                <span className="text-gray-300">Targeted audience growth</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-pink-400 mr-3" />
                <span className="text-gray-300">Brand consistency across platforms</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-pink-400 mr-3" />
                <span className="text-gray-300">Customer engagement & community building</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border-l-4 border-pink-500 p-4 mb-6 neon-border-pink">
              <p className="text-pink-300 font-semibold">
                Money Back Guarantee if it doesn't work
              </p>
            </div>

            <div className="text-center">
              <span className="text-3xl font-black text-pink-400 neon-glow-pink">Estimated from R2,000/week</span>
              <p className="text-gray-400">Pricing customized to your needs</p>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/social-media-marketing-services-south-africa"
                className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold transition-all"
              >
                Learn More About Social Media <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Service 3: Customer Access */}
          <div className="bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] rounded-3xl p-8 relative overflow-hidden group border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-500 neon-box-purple hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-6 neon-box-purple">
              <Target size={32} className="text-white" />
            </div>

            <h3 className="text-3xl font-bold text-purple-400 mb-4 neon-glow-purple">STEP 3: Customer Acquisition System</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We implement targeted marketing strategies and lead generation systems that consistently bring you qualified prospects ready to buy.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-purple-400 mr-3" />
                <span className="text-gray-300">Targeted lead generation campaigns</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-purple-400 mr-3" />
                <span className="text-gray-300">Customer relationship management</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-purple-400 mr-3" />
                <span className="text-gray-300">Sales funnel optimization</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-purple-400 mr-3" />
                <span className="text-gray-300">Performance tracking & optimization</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-l-4 border-purple-500 p-4 mb-6 neon-border-pink">
              <p className="text-purple-300 font-semibold">
                Money Back Guarantee if it doesn't work
              </p>
            </div>

            <div className="text-center">
              <span className="text-3xl font-black text-purple-400 neon-glow-purple">Estimated from R3,000/month</span>
              <p className="text-gray-400">Investment based on your goals</p>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                to="/google-ads-management-south-africa"
                className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold"
              >
                Learn More About Google Ads <ArrowRight size={16} className="ml-1" />
              </Link>
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
            
            <h3 className="text-5xl md:text-6xl font-black mb-6">
              🎉 COMPLETE PACKAGE <span className="text-orange-400">Estimated from R9,500/month</span>
            </h3>
            <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
              Get all three services working together for maximum impact. Final pricing determined after we understand your specific business needs and goals.
            </p>
            <div className="bg-red-500/20 border border-red-300 rounded-xl p-4 mb-8">
              <p className="text-white font-bold">
                ⚡ LIMITED AVAILABILITY: We only partner with a select number of businesses each month to ensure maximum results for each client.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Globe size={24} className="text-orange-400 mx-auto mb-3" />
                <p className="font-semibold">Professional Website</p>
                <p className="text-gray-300 text-sm">Est. from R2,500</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users size={24} className="text-orange-400 mx-auto mb-3" />
                <p className="font-semibold">Social Media Management</p>
                <p className="text-gray-300 text-sm">Est. from R2,000/week</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Target size={24} className="text-orange-400 mx-auto mb-3" />
                <p className="font-semibold">Lead Generation</p>
                <p className="text-gray-300 text-sm">Est. from R3,000/month</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl"
            >
              <span className="mr-3">🎯</span>
              Schedule Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            
            <p className="mt-6 text-gray-300">
              💰 Custom pricing after consultation • 🚀 Tailored strategy • 📞 Free assessment call
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                to="/content-marketing-services-south-africa"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all"
              >
                <p className="font-semibold text-white">Content Marketing</p>
                <p className="text-gray-300 text-sm">Blog writing & SEO content</p>
              </Link>
              <Link 
                to="/google-ads-management-south-africa"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-all"
              >
                <p className="font-semibold text-white">Google Ads Management</p>
                <p className="text-gray-300 text-sm">PPC advertising & optimization</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;