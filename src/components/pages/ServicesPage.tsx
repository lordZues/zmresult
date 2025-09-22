import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Users, Target, CheckCircle, Star, Award, TrendingUp } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Our Services | ZM Results - Digital Marketing & Web Design South Africa";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Comprehensive digital marketing and web design services to grow your South African business. 
            From professional websites to social media marketing and lead generation.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Service 1: Website Design */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Globe size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-blue-950 mb-4">Professional Website Design</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Custom, conversion-focused websites that showcase your business professionally and turn visitors into paying customers.
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
                <span className="text-gray-700">Fast loading speeds</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">E-commerce ready</span>
              </div>
            </div>
            
            <div className="text-center">
              <span className="text-3xl font-black text-blue-950">From R2,500</span>
              <p className="text-gray-600">Custom pricing after consultation</p>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                to="/web-design-services-south-africa"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Service 2: Social Media Marketing */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Users size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-blue-950 mb-4">Social Media Marketing</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Strategic social media management and content creation to build your brand and attract ideal customers.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Content creation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Community management</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Paid advertising</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Analytics & reporting</span>
              </div>
            </div>
            
            <div className="text-center">
              <span className="text-3xl font-black text-blue-950">From R2,000/month</span>
              <p className="text-gray-600">Customized to your needs</p>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                to="/social-media-marketing-services-south-africa"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Service 3: Lead Generation */}
          <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
            
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Target size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-blue-950 mb-4">Lead Generation & Google Ads</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Targeted marketing strategies and Google Ads campaigns that consistently bring you qualified prospects.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Google Ads management</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Lead generation campaigns</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Conversion optimization</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-3" />
                <span className="text-gray-700">Performance tracking</span>
              </div>
            </div>
            
            <div className="text-center">
              <span className="text-3xl font-black text-blue-950">From R3,000/month</span>
              <p className="text-gray-600">Based on your goals</p>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                to="/google-ads-management-south-africa"
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Additional Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-950 mb-3">Content Marketing</h3>
              <p className="text-gray-700 mb-4">
                Professional blog writing, SEO content, and content strategy to establish your authority and improve search rankings.
              </p>
              <Link 
                to="/content-marketing-services-south-africa"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-950 mb-3">SEO Services</h3>
              <p className="text-gray-700 mb-4">
                Search engine optimization to help your business rank higher on Google and attract more organic traffic.
              </p>
              <a 
                href="/#contact"
                className="text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Get Quote →
              </a>
            </div>
          </div>
        </div>

        {/* Package Deal */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl p-12 text-white text-center mb-16">
          <div className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase mb-6">
            <Star className="w-5 h-5 mr-2" />
            Complete Business Package
          </div>
          
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            Complete Package from R9,500/month
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get all services working together for maximum impact. Website + Social Media + Lead Generation.
          </p>
          
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
          >
            Get Your Custom Quote
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let's discuss which services are right for your business and create a custom strategy.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
          >
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;