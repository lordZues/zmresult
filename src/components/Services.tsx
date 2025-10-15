import React from 'react';
import { Globe, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>

            <div className="text-blue-600 font-bold text-sm mb-2">STEP 1</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Your Website</h3>
            <p className="text-gray-600 mb-8">
              Professional website that turns visitors into customers. Mobile-friendly, SEO-optimized, conversion-focused.
            </p>

            <Link
              to="/web-design-services-south-africa"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>

            <div className="text-green-600 font-bold text-sm mb-2">STEP 2</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Grow Social Media</h3>
            <p className="text-gray-600 mb-8">
              Engaging content that attracts your ideal customers. Build your brand and following on Facebook, Instagram, LinkedIn.
            </p>

            <Link
              to="/social-media-marketing-services-south-africa"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600 hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-orange-600" />
            </div>

            <div className="text-orange-600 font-bold text-sm mb-2">STEP 3</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Customers</h3>
            <p className="text-gray-600 mb-8">
              Qualified leads ready to buy. We run targeted ads and implement systems that bring you real sales opportunities.
            </p>

            <Link
              to="/google-ads-management-south-africa"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="#book-call"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg"
          >
            Start Growing Your Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
