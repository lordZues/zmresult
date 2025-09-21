import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Edit, Video, FileText, Megaphone, CheckCircle, Star, Award, TrendingUp } from 'lucide-react';

const ContentMarketingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Content Marketing Services South Africa | Content Creation Durban | ZM Results";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional content marketing services in South Africa. Blog writing, video content, social media content creation. Expert content marketing agency in Durban, Cape Town, Johannesburg.');
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
            Content Marketing Services in South Africa
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Professional content marketing and creation services across Durban, Cape Town, Johannesburg, and Pretoria. 
            We create compelling content that engages your audience, builds authority, and drives conversions.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Content Marketing</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Blog Writing</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Video Content</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">SEO Content</span>
          </div>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Get Your Free Content Strategy
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Edit className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Blog Writing & SEO Content</h3>
            <p className="text-gray-700 mb-4">
              Professional blog writing and SEO-optimized content creation. We write engaging articles 
              that rank on Google and establish your business as an industry authority.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• SEO-optimized blog posts</li>
              <li>• Keyword research & targeting</li>
              <li>• Industry-specific content</li>
              <li>• Content calendar planning</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Video className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Video Content Creation</h3>
            <p className="text-gray-700 mb-4">
              Professional video content creation for social media, websites, and marketing campaigns. 
              Engaging videos that tell your story and connect with your audience.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Promotional videos</li>
              <li>• Social media videos</li>
              <li>• Educational content</li>
              <li>• Video editing & production</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <FileText className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Website Content Writing</h3>
            <p className="text-gray-700 mb-4">
              Compelling website copy that converts visitors into customers. Professional copywriting 
              for landing pages, service pages, and product descriptions.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Landing page copy</li>
              <li>• Service descriptions</li>
              <li>• Product copywriting</li>
              <li>• About page content</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Megaphone className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Content</h3>
            <p className="text-gray-700 mb-4">
              Engaging social media content creation for all platforms. Posts, captions, and graphics 
              that increase engagement and build your social media presence.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Social media posts</li>
              <li>• Caption writing</li>
              <li>• Hashtag research</li>
              <li>• Content scheduling</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <TrendingUp className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Email Marketing Content</h3>
            <p className="text-gray-700 mb-4">
              Persuasive email marketing content that drives opens, clicks, and conversions. 
              Newsletter content, email sequences, and promotional campaigns.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Email newsletters</li>
              <li>• Drip campaigns</li>
              <li>• Promotional emails</li>
              <li>• Subject line optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Award className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Content Strategy & Planning</h3>
            <p className="text-gray-700 mb-4">
              Comprehensive content strategy development and planning. We create content roadmaps 
              that align with your business goals and target audience needs.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Content strategy development</li>
              <li>• Editorial calendars</li>
              <li>• Audience research</li>
              <li>• Performance tracking</li>
            </ul>
          </div>
        </div>

        {/* Content Types */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Types of Content We Create
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Edit size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Blog Articles</h3>
              <p className="text-gray-700 text-sm">
                In-depth, SEO-optimized blog posts that educate your audience and improve search rankings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Video size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Video Content</h3>
              <p className="text-gray-700 text-sm">
                Engaging video content for social media, websites, and marketing campaigns.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Whitepapers & Guides</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive guides and whitepapers that showcase your expertise and generate leads.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Megaphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Posts</h3>
              <p className="text-gray-700 text-sm">
                Engaging social media content that builds community and drives engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Location-Specific Content */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Content Marketing Services Across South Africa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Content Marketing Durban</h3>
              <p className="text-gray-700 mb-4">
                Professional content marketing services in Durban, KwaZulu-Natal. Creating compelling 
                content for businesses across the greater Durban area.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Blog Writing Durban</li>
                <li>• Content Creation KZN</li>
                <li>• SEO Content Writing</li>
                <li>• Video Production Services</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Content Marketing Cape Town</h3>
              <p className="text-gray-700 mb-4">
                Expert content marketing services in Cape Town, Western Cape. Strategic content creation 
                for businesses in the Mother City and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Content Writing Cape Town</li>
                <li>• Blog Services Western Cape</li>
                <li>• Video Content Creation</li>
                <li>• Social Media Content</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Content Marketing Johannesburg</h3>
              <p className="text-gray-700 mb-4">
                Professional content marketing in Johannesburg, Gauteng. High-quality content creation 
                for businesses in Joburg and the greater Gauteng region.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Content Marketing Sandton</li>
                <li>• Blog Writing Gauteng</li>
                <li>• Content Strategy Joburg</li>
                <li>• Copywriting Services</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Content Marketing Pretoria</h3>
              <p className="text-gray-700 mb-4">
                Strategic content marketing services in Pretoria, Gauteng. Professional content creation 
                for businesses in the capital city and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Content Creation Pretoria</li>
                <li>• Blog Writing Centurion</li>
                <li>• SEO Content Services</li>
                <li>• Content Marketing Strategy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Marketing Process */}
        <div className="bg-blue-950 text-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Content Marketing Process
            </h2>
            <p className="text-xl text-gray-300">
              How we create content that drives results for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">Research & Strategy</h3>
              <p className="text-gray-300">Audience research, competitor analysis, and content strategy development</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">Content Creation</h3>
              <p className="text-gray-300">Professional content creation aligned with your brand and goals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">Distribution</h3>
              <p className="text-gray-300">Strategic content distribution across multiple channels</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-gray-300">Performance tracking and content optimization for better results</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Content Marketing Pricing
            </h2>
            <p className="text-xl text-gray-700">
              Flexible content marketing packages for South African businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Content Starter</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">R3,500<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 4 blog posts per month</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> SEO optimization</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Content calendar</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Basic graphics</li>
              </ul>
              <a href="/#contact" className="block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-all text-center">
                Get Started
              </a>
            </div>
            
            <div className="bg-orange-500 text-white rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-950 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Growth</h3>
              <div className="text-4xl font-bold mb-4">R6,500<span className="text-lg">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> 8 blog posts per month</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Social media content</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Email newsletter content</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Custom graphics</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-2" /> Performance reporting</li>
              </ul>
              <a href="/#contact" className="block bg-white text-orange-500 hover:bg-gray-100 py-3 px-6 rounded-lg font-medium transition-all text-center">
                Get Started
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Content Premium</h3>
              <div className="text-4xl font-bold text-orange-500 mb-4">R12,500<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 12+ blog posts per month</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Video content creation</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Comprehensive content strategy</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Premium graphics & design</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Dedicated content manager</li>
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
            Content Marketing FAQ
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                What is content marketing and why is it important?
              </h3>
              <p className="text-gray-700">
                Content marketing is a strategic approach to creating and distributing valuable, relevant content 
                to attract and engage your target audience. It builds trust, establishes authority, improves SEO 
                rankings, and ultimately drives profitable customer action for your business.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How often should I publish new content?
              </h3>
              <p className="text-gray-700">
                Content publishing frequency depends on your goals and resources. We typically recommend at least 
                2-4 blog posts per month for SEO benefits, with additional social media content published regularly. 
                Consistency is more important than frequency - it's better to publish quality content regularly 
                than to publish frequently but inconsistently.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How do you measure content marketing success?
              </h3>
              <p className="text-gray-700">
                We track various metrics including website traffic, search engine rankings, social media engagement, 
                lead generation, email subscribers, and conversions. We provide monthly reports showing how your 
                content is performing and contributing to your business goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                Do you write content for specific industries?
              </h3>
              <p className="text-gray-700">
                Yes, we have experience creating content for various industries including professional services, 
                healthcare, technology, retail, hospitality, and more. Our writers research your industry thoroughly 
                to create authoritative, relevant content that resonates with your target audience.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-950 text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Content Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful South African businesses who trust ZM Results 
            for their content marketing and creation needs.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
          >
            Get Your Free Content Strategy
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketingPage;