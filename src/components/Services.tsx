import React from 'react';
import { Globe, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Complete digital marketing solutions under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200 transform -translate-y-1/2 z-0" style={{top: '45%'}}></div>
          {/* Step 1 */}
          <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>

            <div className="relative inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs rounded-full mb-3">WEB DESIGN</div>
            <h3 className="relative text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Professional Websites</h3>
            <p className="text-gray-600 mb-8">
              Custom website design and development. Mobile-responsive, fast-loading, SEO-optimized, and built to convert visitors into paying customers.
            </p>

            <Link
              to="/web-design-services-south-africa"
              className="relative inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform"
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-green-600" />
            </div>

            <div className="relative inline-block px-3 py-1 bg-green-100 text-green-700 font-bold text-xs rounded-full mb-3">SOCIAL ADS</div>
            <h3 className="relative text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Social Media Advertising</h3>
            <p className="text-gray-600 mb-8">
              Strategic Facebook, Instagram, and LinkedIn ad campaigns. Precise audience targeting, compelling creatives, and data-driven optimization for maximum ROI.
            </p>

            <Link
              to="/social-media-marketing-services-south-africa"
              className="relative inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-2 transition-transform"
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-orange-600" />
            </div>

            <div className="relative inline-block px-3 py-1 bg-orange-100 text-orange-700 font-bold text-xs rounded-full mb-3">GOOGLE ADS</div>
            <h3 className="relative text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Google Ads Management</h3>
            <p className="text-gray-600 mb-8">
              Expert Google Search, Display, and Shopping campaign management. Target high-intent buyers actively searching for your services and products.
            </p>

            <Link
              to="/google-ads-management-south-africa"
              className="relative inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group-hover:translate-x-2 transition-transform"
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="#book-call"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span className="relative">Start Growing Your Business</span>
            <ArrowRight className="ml-2 h-5 w-5 relative group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
