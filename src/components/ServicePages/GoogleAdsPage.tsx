import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, TrendingUp, Search, BarChart, CheckCircle, Star, Award, DollarSign } from 'lucide-react';

const GoogleAdsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Google Ads Management Services South Africa | PPC Advertising Durban | ZM Results";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional Google Ads management services in South Africa. PPC advertising, Google AdWords campaigns, search ads management. Expert Google Ads agency in Durban, Cape Town, Johannesburg.');
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
            Google Ads Management Services in South Africa
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Professional Google Ads management and PPC advertising services across Durban, Cape Town, Johannesburg, and Pretoria. 
            We create high-converting Google AdWords campaigns that drive qualified traffic and increase sales.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Google Ads Management</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">PPC Advertising</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Search Ads</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Shopping Campaigns</span>
          </div>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Get Your Free Google Ads Audit
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Search className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Search Ads Management</h3>
            <p className="text-gray-700 mb-4">
              Strategic Google Search Ads campaigns targeting high-intent keywords. We create compelling 
              ad copy and optimize campaigns for maximum ROI and conversions.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Keyword research & selection</li>
              <li>• Ad copy creation & testing</li>
              <li>• Bid management & optimization</li>
              <li>• Landing page optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Target className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Display Advertising</h3>
            <p className="text-gray-700 mb-4">
              Eye-catching display ads across Google's network to increase brand awareness and 
              retarget website visitors. Professional banner design and strategic placement.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Banner ad design</li>
              <li>• Audience targeting</li>
              <li>• Remarketing campaigns</li>
              <li>• Placement optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <DollarSign className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Shopping Campaigns</h3>
            <p className="text-gray-700 mb-4">
              Google Shopping ads for e-commerce businesses. Showcase your products with images, 
              prices, and reviews to drive qualified traffic and increase online sales.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Product feed optimization</li>
              <li>• Shopping campaign setup</li>
              <li>• Bid strategy optimization</li>
              <li>• Performance monitoring</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">YouTube Advertising</h3>
            <p className="text-gray-700 mb-4">
              Video advertising on YouTube to reach your target audience with engaging video content. 
              Drive brand awareness, website traffic, and conversions through video ads.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Video ad creation</li>
              <li>• Audience targeting</li>
              <li>• Campaign optimization</li>
              <li>• Performance tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <BarChart className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Campaign Optimization</h3>
            <p className="text-gray-700 mb-4">
              Continuous campaign optimization to improve performance and reduce costs. 
              Regular testing, analysis, and refinement of your Google Ads campaigns.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• A/B testing</li>
              <li>• Bid optimization</li>
              <li>• Quality Score improvement</li>
              <li>• Conversion tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Award className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Google Ads Consulting</h3>
            <p className="text-gray-700 mb-4">
              Expert Google Ads consulting to optimize your existing campaigns or develop 
              new strategies. Get professional advice to maximize your advertising ROI.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Account audits</li>
              <li>• Strategy development</li>
              <li>• Training & workshops</li>
              <li>• Performance analysis</li>
            </ul>
          </div>
        </div>

        {/* Campaign Types */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Google Ads Campaign Types We Manage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Search Campaigns</h3>
              <p className="text-gray-700 text-sm">
                Text ads that appear when people search for your products or services on Google.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Display Campaigns</h3>
              <p className="text-gray-700 text-sm">
                Visual banner ads shown across Google's Display Network of websites and apps.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Shopping Campaigns</h3>
              <p className="text-gray-700 text-sm">
                Product ads with images and prices that appear in Google Shopping results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">▶</span>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Video Campaigns</h3>
              <p className="text-gray-700 text-sm">
                Video ads on YouTube and across Google's video partner sites.
              </p>
            </div>
          </div>
        </div>

        {/* Location-Specific Content */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Google Ads Management Across South Africa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Google Ads Management Durban</h3>
              <p className="text-gray-700 mb-4">
                Expert Google Ads management in Durban, KwaZulu-Natal. Professional PPC advertising 
                services for businesses across the greater Durban area.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PPC Advertising Durban</li>
                <li>• Google AdWords KZN</li>
                <li>• Search Ads Management</li>
                <li>• Local Campaign Targeting</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Google Ads Management Cape Town</h3>
              <p className="text-gray-700 mb-4">
                Professional Google Ads services in Cape Town, Western Cape. Strategic PPC campaigns 
                for businesses in the Mother City and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PPC Management Cape Town</li>
                <li>• Google Ads Western Cape</li>
                <li>• Search Marketing</li>
                <li>• Display Advertising</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Google Ads Management Johannesburg</h3>
              <p className="text-gray-700 mb-4">
                Expert Google Ads management in Johannesburg, Gauteng. High-performance PPC campaigns 
                for businesses in Joburg and the greater Gauteng region.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PPC Advertising Sandton</li>
                <li>• Google Ads Gauteng</li>
                <li>• AdWords Management</li>
                <li>• Shopping Campaigns</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Google Ads Management Pretoria</h3>
              <p className="text-gray-700 mb-4">
                Strategic Google Ads management in Pretoria, Gauteng. Professional PPC advertising 
                services for businesses in the capital city and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PPC Management Pretoria</li>
                <li>• Google Ads Centurion</li>
                <li>• Search Advertising</li>
                <li>• Campaign Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-950 text-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Google Ads Results That Matter
            </h2>
            <p className="text-xl text-gray-300">
              Real performance metrics from our Google Ads campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">300%</div>
              <div className="text-lg">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">45%</div>
              <div className="text-lg">Cost Per Click Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">R15M+</div>
              <div className="text-lg">Ad Spend Managed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-lg">Successful Campaigns</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Why Choose ZM Results for Google Ads?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Google Ads Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">Google Ads Certified:</strong>
                    <span className="text-gray-700"> Our team holds official Google Ads certifications</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">Proven Track Record:</strong>
                    <span className="text-gray-700"> 200+ successful Google Ads campaigns managed</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">Transparent Reporting:</strong>
                    <span className="text-gray-700"> Detailed monthly reports showing campaign performance</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Our Google Ads Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-blue-950">Account Audit & Strategy</h4>
                    <p className="text-gray-700">Comprehensive audit and strategic planning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-blue-950">Campaign Setup & Launch</h4>
                    <p className="text-gray-700">Professional campaign creation and launch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-blue-950">Optimization & Testing</h4>
                    <p className="text-gray-700">Continuous optimization and A/B testing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-blue-950">Reporting & Analysis</h4>
                    <p className="text-gray-700">Detailed reporting and performance analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Google Ads Management Pricing
            </h2>
            <p className="text-xl text-gray-700">
              Transparent pricing for Google Ads management services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Starter Package</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">15%<span className="text-lg text-gray-600"> of ad spend</span></div>
              <div className="text-gray-600 mb-4">Minimum R3,000/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Search campaigns</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Basic optimization</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Monthly reporting</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Email support</li>
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
              <div className="text-4xl font-bold mb-4">12%<span className="text-lg"> of ad spend</span></div>
              <div className="mb-4">Minimum R5,000/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> All campaign types</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Advanced optimization</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Bi-weekly reporting</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Phone & email support</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Landing page optimization</li>
              </ul>
              <a href="/#contact" className="block bg-white text-orange-500 hover:bg-gray-100 py-3 px-6 rounded-lg font-medium transition-all text-center">
                Get Started
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Enterprise Package</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">10%<span className="text-lg text-gray-600"> of ad spend</span></div>
              <div className="text-gray-600 mb-4">Minimum R10,000/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Full-service management</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Weekly optimization</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Weekly reporting</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Dedicated account manager</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Custom landing pages</li>
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
            Google Ads Management FAQ
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How much should I spend on Google Ads?
              </h3>
              <p className="text-gray-700">
                Google Ads budgets vary based on your industry, competition, and goals. We typically recommend 
                starting with at least R5,000-R10,000 per month for meaningful results. We'll help you determine 
                the optimal budget during our initial consultation based on your specific business needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How long does it take to see results from Google Ads?
              </h3>
              <p className="text-gray-700">
                You can start seeing traffic immediately after launching your campaigns, but meaningful results 
                typically take 2-4 weeks as we optimize and refine your campaigns. Full optimization and 
                maximum performance usually occur within 2-3 months of continuous management.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                Do you provide Google Ads training?
              </h3>
              <p className="text-gray-700">
                Yes, we offer Google Ads training and workshops for businesses who want to manage their own 
                campaigns. Our training covers campaign setup, optimization techniques, and best practices 
                for maximizing your Google Ads performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                What makes your Google Ads management different?
              </h3>
              <p className="text-gray-700">
                We focus on ROI-driven campaigns with transparent reporting and continuous optimization. 
                Our Google Ads certified team uses advanced strategies, conducts regular A/B testing, 
                and provides detailed monthly reports showing exactly how your campaigns are performing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-950 text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Google Search Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful South African businesses who trust ZM Results 
            for their Google Ads management and PPC advertising needs.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
          >
            Get Your Free Google Ads Audit
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsPage;