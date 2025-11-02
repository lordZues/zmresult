import React from 'react';
import { ArrowRight, Clock, Shield, CheckCircle } from 'lucide-react';

const NewHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-green-100 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Urgency Banner */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 border-2 border-red-200 rounded-lg px-5 py-2.5">
              <Clock className="w-4 h-4 text-red-600 animate-pulse" />
              <span className="text-red-700 font-bold text-sm">LIMITED SPOTS: Only 3 consultation slots left this week</span>
            </div>
          </div>

          {/* Main Headline - Simple & Direct */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-center text-gray-900">
            Get More Customers.<br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">Guaranteed.</span>
          </h1>

          {/* Clear Value Prop */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 text-center max-w-3xl mx-auto font-medium">
            Full-service digital marketing agency: Professional websites + Powerful Google Ads + Social Media advertising that delivers real customers to your business.
          </p>

          {/* Social Proof - Simple */}
          <div className="flex justify-center items-center gap-6 mb-10 flex-wrap">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-black bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">30+</div>
              <div className="text-sm text-gray-600 font-semibold">Businesses Helped</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-black bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-transparent">4.4★</div>
              <div className="text-sm text-gray-600 font-semibold">Average Rating</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-black bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-600 font-semibold">Money-Back Guarantee</div>
            </div>
          </div>

          {/* Single Clear CTA */}
          <div className="text-center mb-10">
            <a
              href="#book-call"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative">Book Your Free Strategy Call Now</span>
              <ArrowRight className="ml-3 h-6 w-6 relative group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 mt-3 flex items-center justify-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1">✓ Free 30-minute consultation</span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1">✓ No credit card required</span>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1">✓ No pressure</span>
            </p>
          </div>

          {/* What You Get - Ultra Simple */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl hover:shadow-2xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You Get:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-green-100 rounded-full p-1 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Professional Web Design</div>
                  <div className="text-gray-600 text-sm">Custom websites optimized for conversions and search engines</div>
                </div>
              </div>
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-green-100 rounded-full p-1 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Social Media Advertising</div>
                  <div className="text-gray-600 text-sm">Facebook & Instagram ads that target your ideal customers</div>
                </div>
              </div>
              <div className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-green-100 rounded-full p-1 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Google Ads Management</div>
                  <div className="text-gray-600 text-sm">Search & Display campaigns that generate qualified leads daily</div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee - Creates Trust & Urgency */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <div className="font-bold text-green-900 text-lg">100% Money-Back Guarantee</div>
                <div className="text-green-700 text-sm">If we don't deliver results, you get a full refund. Zero risk.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
