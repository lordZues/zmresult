import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, TrendingUp, MessageSquare, Camera, CheckCircle, Star, Award, Target } from 'lucide-react';

const SocialMediaPage: React.FC = () => {
  useEffect(() => {
    document.title = "Social Media Marketing Services South Africa | Social Media Management Durban | ZM Results";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional social media marketing services in South Africa. Social media management, content creation, Facebook & Instagram marketing. Top social media agency in Durban, Cape Town, Johannesburg.');
    }
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
            Social Media Marketing Services in South Africa
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Professional social media marketing and management services across Durban, Cape Town, Johannesburg, and Pretoria. 
            We grow your social media presence and turn followers into paying customers.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Social Media Marketing</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Facebook Marketing</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Instagram Management</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Content Creation</span>
          </div>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Get Your Free Social Media Audit
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Management</h3>
            <p className="text-gray-700 mb-4">
              Complete social media management across all platforms. We handle posting, engagement, 
              community management, and growth strategies for your social media accounts.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Daily posting and scheduling</li>
              <li>• Community management</li>
              <li>• Audience engagement</li>
              <li>• Performance analytics</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Camera className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Content Creation</h3>
            <p className="text-gray-700 mb-4">
              Professional content creation for social media platforms. High-quality graphics, 
              videos, and copy that engages your audience and drives conversions.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Custom graphic design</li>
              <li>• Video content creation</li>
              <li>• Copywriting services</li>
              <li>• Brand-consistent visuals</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Advertising</h3>
            <p className="text-gray-700 mb-4">
              Targeted social media advertising campaigns on Facebook, Instagram, LinkedIn, and Twitter. 
              Drive traffic, generate leads, and increase sales through strategic ad campaigns.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Facebook & Instagram ads</li>
              <li>• LinkedIn advertising</li>
              <li>• Audience targeting</li>
              <li>• Campaign optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <MessageSquare className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Strategy</h3>
            <p className="text-gray-700 mb-4">
              Comprehensive social media strategies tailored to your business goals. We develop 
              data-driven strategies that align with your brand and target audience.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Strategic planning</li>
              <li>• Competitor analysis</li>
              <li>• Content calendars</li>
              <li>• Growth strategies</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Target className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Influencer Marketing</h3>
            <p className="text-gray-700 mb-4">
              Connect with relevant influencers to expand your reach and credibility. 
              We manage influencer partnerships and campaigns for maximum impact.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Influencer identification</li>
              <li>• Partnership management</li>
              <li>• Campaign coordination</li>
              <li>• Performance tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Award className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Consulting</h3>
            <p className="text-gray-700 mb-4">
              Expert social media consulting to optimize your existing efforts. Get strategic 
              advice and actionable recommendations to improve your social media performance.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Account audits</li>
              <li>• Strategy recommendations</li>
              <li>• Training and workshops</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
        </div>

        {/* Platform Expertise */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Social Media Platforms We Specialize In
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">f</span>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Facebook Marketing</h3>
              <p className="text-gray-700 text-sm">
                Facebook page management, advertising, and community building for South African businesses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Camera size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Instagram Marketing</h3>
              <p className="text-gray-700 text-sm">
                Instagram content creation, stories, reels, and advertising to engage your audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">in</span>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">LinkedIn Marketing</h3>
              <p className="text-gray-700 text-sm">
                Professional LinkedIn marketing for B2B businesses and personal branding.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">▶</span>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">YouTube Marketing</h3>
              <p className="text-gray-700 text-sm">
                YouTube channel optimization, video marketing, and advertising strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Location-Specific Content */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Social Media Marketing Across South Africa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Marketing Durban</h3>
              <p className="text-gray-700 mb-4">
                Leading social media marketing agency in Durban, KwaZulu-Natal. We help local businesses 
                grow their social media presence and engage with customers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Facebook Marketing Durban</li>
                <li>• Instagram Management KZN</li>
                <li>• Social Media Advertising</li>
                <li>• Content Creation Services</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Marketing Cape Town</h3>
              <p className="text-gray-700 mb-4">
                Expert social media marketing services in Cape Town, Western Cape. Strategic social 
                media management for businesses in the Mother City.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Social Media Management Cape Town</li>
                <li>• Instagram Marketing Western Cape</li>
                <li>• Facebook Advertising</li>
                <li>• Social Media Strategy</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Marketing Johannesburg</h3>
              <p className="text-gray-700 mb-4">
                Professional social media marketing in Johannesburg, Gauteng. Helping businesses 
                in Joburg dominate social media and attract customers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Social Media Marketing Sandton</li>
                <li>• Facebook Marketing Gauteng</li>
                <li>• LinkedIn Marketing Joburg</li>
                <li>• Social Media Consulting</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Marketing Pretoria</h3>
              <p className="text-gray-700 mb-4">
                Strategic social media marketing services in Pretoria, Gauteng. Growing social media 
                presence for businesses in the capital city.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Social Media Management Pretoria</li>
                <li>• Instagram Marketing Centurion</li>
                <li>• Social Media Advertising</li>
                <li>• Content Marketing Services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-950 text-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Social Media Marketing Results
            </h2>
            <p className="text-xl text-gray-300">
              Real results from our social media marketing campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">500%</div>
              <div className="text-lg">Average Engagement Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">250+</div>
              <div className="text-lg">Businesses Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">R25M+</div>
              <div className="text-lg">Revenue Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Social Media Marketing Pricing
            </h2>
            <p className="text-xl text-gray-700">
              Affordable social media marketing packages for South African businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Starter Package</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">R2,000<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 2 social media platforms</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 12 posts per month</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Basic graphics</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Monthly reporting</li>
              </ul>
              <a href="/#contact" className="block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-all text-center">
                Get Started
              </a>
            </div>
            
            <div className="bg-orange-500 text-white rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-950 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Growth Package</h3>
              <div className="text-4xl font-bold mb-4">R4,500<span className="text-lg">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> 4 social media platforms</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> 20 posts per month</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Custom graphics & videos</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Community management</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Monthly strategy calls</li>
              </ul>
              <a href="/#contact" className="block bg-white text-orange-500 hover:bg-gray-100 py-3 px-6 rounded-lg font-medium transition-all text-center">
                Get Started
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Premium Package</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">R8,500<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> All social media platforms</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 30+ posts per month</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Premium content creation</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Paid advertising management</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Weekly strategy calls</li>
              </ul>
              <a href="/#contact" className="block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-all text-center">
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Social Media Marketing FAQ
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How much does social media marketing cost in South Africa?
              </h3>
              <p className="text-gray-700">
                Social media marketing costs vary based on the number of platforms, posting frequency, and services included. 
                Our packages start from R2,000/month for basic management and go up to R8,500/month for comprehensive 
                social media marketing with advertising management.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                Which social media platforms should my business be on?
              </h3>
              <p className="text-gray-700">
                The best platforms depend on your target audience and business type. Facebook and Instagram work well for 
                most businesses, LinkedIn is essential for B2B companies, and YouTube is great for educational content. 
                We'll help you choose the right platforms during our strategy consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How often should I post on social media?
              </h3>
              <p className="text-gray-700">
                Posting frequency depends on the platform and your audience. Generally, we recommend 1-2 posts per day 
                on Facebook and Instagram, 3-5 posts per week on LinkedIn, and consistent video uploads on YouTube. 
                Quality is more important than quantity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How do you measure social media marketing success?
              </h3>
              <p className="text-gray-700">
                We track various metrics including engagement rates, follower growth, website traffic from social media, 
                lead generation, and conversions. We provide monthly reports showing your social media performance and 
                ROI from our marketing efforts.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-950 text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful South African businesses who trust ZM Results 
            for their social media marketing and management needs.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
          >
            Get Your Free Social Media Audit
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPage;