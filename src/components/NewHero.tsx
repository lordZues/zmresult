import React from 'react';
import { ArrowRight, Clock, Shield, CheckCircle } from 'lucide-react';

const NewHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
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
            <span className="text-blue-600">Guaranteed.</span>
          </h1>

          {/* Clear Value Prop */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 text-center max-w-3xl mx-auto font-medium">
            We build your website, grow your social media, and bring you qualified leads. If it doesn't work, you get your money back.
          </p>

          {/* Social Proof - Simple */}
          <div className="flex justify-center items-center gap-6 mb-10 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-black text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Businesses Helped</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-gray-900">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-gray-900">R2,500</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
          </div>

          {/* Single Clear CTA */}
          <div className="text-center mb-10">
            <a
              href="#book-call"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg text-xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Book Your Free Strategy Call Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <p className="text-sm text-gray-500 mt-3">
              Free 30-minute consultation • No credit card required • No pressure
            </p>
          </div>

          {/* What You Get - Ultra Simple */}
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You Get:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900">Professional Website</div>
                  <div className="text-gray-600 text-sm">Built to convert visitors into customers</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900">Social Media Growth</div>
                  <div className="text-gray-600 text-sm">Content that attracts your ideal customers</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-900">Qualified Leads</div>
                  <div className="text-gray-600 text-sm">Real customers ready to buy from you</div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee - Creates Trust & Urgency */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-lg px-6 py-4">
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
