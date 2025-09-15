import React from 'react';
import { Shield, Clock, Award, Users, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Why Choose ZM Results</span>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mt-2 mb-6 leading-tight">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Marketing Agency</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As South Africa's leading digital marketing and advertising agency, we focus on delivering real results for your business through proven marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Shield size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">Results Guaranteed</h3>
            <p className="text-gray-600">
              We don't get paid unless you see real results. Your success is our success.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Clock size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your complete digital presence up and running in just 7 days.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Award size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our team has helped 500+ businesses across South Africa succeed online.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl inline-block mb-6 shadow-lg">
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-4">Local Support</h3>
            <p className="text-gray-600">
              Based in South Africa, we understand your market and your customers.
            </p>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Real Results from Real Businesses
            </h3>
            <p className="text-xl text-gray-600">
              Here's what happens when you get all three essentials working together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-black text-blue-950">87%</span>
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-3">More Website Traffic</h4>
              <p className="text-gray-600">
                Our clients see an average 87% increase in website visitors within 30 days
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-black text-blue-950">156%</span>
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-3">Social Engagement</h4>
              <p className="text-gray-600">
                Social media followers and engagement rates increase by 156% on average
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-black text-blue-950">243%</span>
              </div>
              <h4 className="text-xl font-bold text-blue-950 mb-3">Lead Generation</h4>
              <p className="text-gray-600">
                Qualified leads increase by 243% when all three systems work together
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 inline-block">
              <div className="flex items-center justify-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} size={24} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-xl font-bold text-blue-950 mb-2">4.9/5 Client Satisfaction</p>
              <p className="text-gray-600">Based on 200+ client reviews</p>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <div className="mt-20 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Here's the Problem Most Businesses Face
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl mb-4">😤</div>
              <h4 className="text-xl font-bold text-red-600 mb-3">Juggling Multiple Vendors</h4>
              <p className="text-gray-700">
                One company for your website, another for social media, a third for leads. It's expensive and chaotic.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">💸</div>
              <h4 className="text-xl font-bold text-red-600 mb-3">Wasting Money</h4>
              <p className="text-gray-700">
                Paying premium prices for services that don't work together, with no guarantee of results.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">⏰</div>
              <h4 className="text-xl font-bold text-red-600 mb-3">Losing Time</h4>
              <p className="text-gray-700">
                Managing multiple relationships, contracts, and expectations while your business suffers.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <h4 className="text-2xl font-bold text-blue-950 mb-4">
                🎯 ZM Results Solves All of This
              </h4>
              <div className="space-y-3 text-left max-w-md">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">One company, one contact, one solution</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">All services work together seamlessly</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Results guaranteed or money back</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <span className="text-gray-700">Save money with our package deals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;