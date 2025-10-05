import React from 'react';
import { Globe, Users, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 subtle-grid opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
            <span className="gradient-text">Best Marketing Company SA</span><br />
            <span className="text-white">3-Step Customer-Getting System</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Proven process that drives real business results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover-lift">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-xl inline-block mb-6 subtle-shadow">
              <Globe size={32} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">STEP 1: Professional Website</h3>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              We design and build a conversion-focused website that showcases your business professionally and turns visitors into paying customers.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={18} className="text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Professional design that builds trust</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">SEO optimized for Google visibility</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Mobile-responsive design</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Conversion-optimized</span>
              </div>
            </div>

            <div className="bg-cyan-500/10 border-l-4 border-cyan-500 p-4 mb-6 rounded">
              <p className="text-cyan-300 font-semibold text-sm">
                Money Back Guarantee
              </p>
            </div>

            <div className="text-center mb-6">
              <span className="text-2xl font-bold text-white">From R2,500</span>
              <p className="text-slate-400 text-sm mt-1">Final pricing after consultation</p>
            </div>

            <div className="text-center">
              <Link
                to="/web-design-services-south-africa"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-all text-sm"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover-lift">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl inline-block mb-6 subtle-shadow">
              <Users size={32} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">STEP 2: Social Media Growth</h3>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              We create and manage engaging content across your social platforms to build your brand, grow your following, and attract ideal customers.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={18} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Strategic content creation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Targeted audience growth</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Brand consistency</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Community engagement</span>
              </div>
            </div>

            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 mb-6 rounded">
              <p className="text-blue-300 font-semibold text-sm">
                Money Back Guarantee
              </p>
            </div>

            <div className="text-center mb-6">
              <span className="text-2xl font-bold text-white">From R2,000/week</span>
              <p className="text-slate-400 text-sm mt-1">Customized to your needs</p>
            </div>

            <div className="text-center">
              <Link
                to="/social-media-marketing-services-south-africa"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-all text-sm"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover-lift">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-xl inline-block mb-6 subtle-shadow">
              <Target size={32} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">STEP 3: Customer Acquisition</h3>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              We implement targeted marketing strategies and lead generation systems that consistently bring you qualified prospects ready to buy.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={18} className="text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Targeted lead generation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">CRM management</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Sales funnel optimization</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={18} className="text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Performance tracking</span>
              </div>
            </div>

            <div className="bg-purple-500/10 border-l-4 border-purple-500 p-4 mb-6 rounded">
              <p className="text-purple-300 font-semibold text-sm">
                Money Back Guarantee
              </p>
            </div>

            <div className="text-center mb-6">
              <span className="text-2xl font-bold text-white">From R3,000/month</span>
              <p className="text-slate-400 text-sm mt-1">Based on your goals</p>
            </div>

            <div className="text-center">
              <Link
                to="/google-ads-management-south-africa"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-all text-sm"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </section>
  );
};

export default Services;
