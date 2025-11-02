import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Award, TrendingUp, Users, CheckCircle, Star, Target, Zap, MessageCircle } from 'lucide-react';

const WhyChooseUsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Why Choose ZM Results | Top Digital Marketing Agency South Africa";
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
            Why Choose ZM Results?
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            We're not just another marketing agency. Here's what makes ZM Results the #1 choice 
            for South African businesses serious about growth.
          </p>
        </div>

        {/* Main Differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
            <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Results Guaranteed</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We're so confident in our system that we offer a money-back guarantee. 
              If our services don't work for your business, you get your money back. 
              <span className="font-bold text-green-600"> 100% guaranteed.</span>
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Proven Track Record</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Over 500 businesses helped, R50M+ in revenue generated, and a 98% client satisfaction rate. 
              Our results speak for themselves.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
            <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4">Local Expertise</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Based in South Africa, we understand the local market, culture, and business challenges. 
              We know what works for SA businesses.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              What Makes Us Different?
            </h2>
            <p className="text-xl text-gray-700">
              Here's why businesses choose ZM Results over other agencies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Other Agencies</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-red-600 text-xs">✗</span>
                  </div>
                  <span className="text-gray-700">Focus on vanity metrics (likes, followers)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-red-600 text-xs">✗</span>
                  </div>
                  <span className="text-gray-700">One-size-fits-all solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-red-600 text-xs">✗</span>
                  </div>
                  <span className="text-gray-700">Long-term contracts with no guarantees</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-red-600 text-xs">✗</span>
                  </div>
                  <span className="text-gray-700">Poor communication and reporting</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <span className="text-red-600 text-xs">✗</span>
                  </div>
                  <span className="text-gray-700">Charge upfront with no results</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">ZM Results</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Focus on leads, sales, and revenue</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Custom strategies for each business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Money-back guarantee on results</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Weekly updates and transparent reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Pay based on results achieved</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Unique Approach */}
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Unique Approach</h2>
            <p className="text-xl text-gray-300">
              The ZM Results methodology that delivers consistent results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">Listen & Understand</h3>
              <p className="text-gray-300">We start by understanding your business, goals, and challenges</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">Custom Strategy</h3>
              <p className="text-gray-300">We create a tailored strategy specific to your industry and market</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">Execute & Optimize</h3>
              <p className="text-gray-300">We implement the strategy and continuously optimize for better results</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="text-xl font-bold mb-3">Deliver Results</h3>
              <p className="text-gray-300">We measure success by your business growth and revenue increase</p>
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700">
              Real testimonials from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "ZM Results transformed our business. We went from 5 leads per month to 45+ qualified leads. 
                Our revenue increased by 280% in just 6 months."
              </p>
              <div className="font-bold text-blue-950">Sarah Johnson</div>
              <div className="text-gray-600">CEO, Cape Town Consulting</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Finally, an agency that delivers what they promise. Our website now converts 3x better 
                and our social media actually brings in customers."
              </p>
              <div className="font-bold text-blue-950">Michael Chen</div>
              <div className="text-gray-600">Owner, Durban Restaurant Group</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The ROI has been incredible. We've generated over R500k in new business from their 
                lead generation system. Best investment we've made."
              </p>
              <div className="font-bold text-blue-950">David Williams</div>
              <div className="text-gray-600">Director, Johannesburg Law Firm</div>
            </div>
          </div>
        </div>

        {/* Our Guarantees */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Our Guarantees to You
            </h2>
            <p className="text-xl text-gray-700">
              We stand behind our work with these iron-clad guarantees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Money-Back Guarantee</h3>
              <p className="text-gray-700 text-sm">If we don't deliver results, you get your money back</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Fast Response</h3>
              <p className="text-gray-700 text-sm">We respond to all inquiries within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Transparent Reporting</h3>
              <p className="text-gray-700 text-sm">Weekly updates on your campaign performance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-blue-950 mb-2">Dedicated Support</h3>
              <p className="text-gray-700 text-sm">Direct access to your account manager</p>
            </div>
          </div>
        </div>

        {/* Why Now */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            Why Choose ZM Results Now?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-700 mb-3">The Problem</h3>
              <p className="text-gray-700">
                Your competitors are already using digital marketing to steal your customers. 
                Every day you wait is revenue lost.
              </p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-700 mb-3">The Opportunity</h3>
              <p className="text-gray-700">
                The South African digital market is growing rapidly. Early adopters are 
                capturing the majority of online customers.
              </p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-3">The Solution</h3>
              <p className="text-gray-700">
                Partner with ZM Results and get ahead of your competition with proven 
                strategies that deliver results.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-blue-950 text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the ZM Results Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful South African businesses who chose ZM Results 
            and transformed their growth trajectory.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
            >
              Schedule Free Consultation
            </a>
            
            <a 
              href="https://wa.me/27736957783" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp Us Now
            </a>
          </div>
          
          <p className="mt-6 text-gray-300">
            💰 Money-back guarantee • 📞 Free consultation • 🚀 Results within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsPage;