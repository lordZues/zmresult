import React from 'react';
import { Star, MapPin, Phone, Mail, Award, TrendingUp, Users, Target } from 'lucide-react';

const SEOContent: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero SEO Section */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              South Africa's Premier Digital Marketing & Advertising Agency
            </h1>
            <p className="text-xl mb-8">
              ZM Results is the top-rated marketing agency in South Africa, helping businesses across 
              Cape Town, Johannesburg, Durban, and Pretoria dominate their markets through proven 
              digital marketing strategies, professional website design, and explosive lead generation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-orange-500 px-4 py-2 rounded-full">Marketing Agency South Africa</span>
              <span className="bg-blue-600 px-4 py-2 rounded-full">Digital Marketing Company</span>
              <span className="bg-green-600 px-4 py-2 rounded-full">Advertising Agency Durban</span>
              <span className="bg-purple-600 px-4 py-2 rounded-full">Lead Generation Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Comprehensive Digital Marketing Services Across South Africa
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From Cape Town to Johannesburg, Durban to Pretoria, we deliver results-driven marketing 
              solutions that help South African businesses grow their customer base and increase revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-950 mb-3">Digital Marketing South Africa</h3>
              <p className="text-gray-700">
                Comprehensive digital marketing strategies including SEO, PPC, content marketing, 
                and social media management for businesses across all major South African cities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-950 mb-3">Social Media Marketing Agency</h3>
              <p className="text-gray-700">
                Professional social media management, content creation, and community building 
                to grow your brand presence across Facebook, Instagram, LinkedIn, and Twitter.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Target className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-950 mb-3">Lead Generation Company</h3>
              <p className="text-gray-700">
                Proven lead generation systems that consistently deliver qualified prospects 
                ready to buy your products or services. Guaranteed results or money back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Serving Major Cities Across South Africa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Marketing Agency Durban</h3>
              <p className="text-gray-700 mb-4">
                Based in Durban, KwaZulu-Natal, we're the leading marketing agency helping 
                local businesses dominate their markets through digital marketing excellence.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital Marketing Durban</li>
                <li>• SEO Services KZN</li>
                <li>• Social Media Marketing Durban</li>
                <li>• Website Design Durban</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Marketing Agency Johannesburg</h3>
              <p className="text-gray-700 mb-4">
                Serving Johannesburg and the greater Gauteng region with cutting-edge 
                marketing strategies that drive real business growth and customer acquisition.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital Marketing Johannesburg</li>
                <li>• PPC Management Gauteng</li>
                <li>• Content Marketing Joburg</li>
                <li>• Brand Development Gauteng</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Marketing Agency Cape Town</h3>
              <p className="text-gray-700 mb-4">
                Cape Town businesses trust us to deliver exceptional marketing results 
                through innovative strategies and proven methodologies in the Western Cape.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital Marketing Cape Town</li>
                <li>• SEO Services Western Cape</li>
                <li>• Online Advertising Cape Town</li>
                <li>• Marketing Consulting Cape Town</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Marketing Agency Pretoria</h3>
              <p className="text-gray-700 mb-4">
                Pretoria and surrounding Gauteng areas benefit from our comprehensive 
                marketing services designed to accelerate business growth and market dominance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital Marketing Pretoria</li>
                <li>• Lead Generation Gauteng</li>
                <li>• Social Media Management Pretoria</li>
                <li>• Business Growth Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Industry-Leading Marketing Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Why Choose ZM Results?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">Top-Rated Marketing Agency:</strong>
                    <span className="text-gray-700"> 4.9/5 stars from 200+ satisfied clients across South Africa</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">Proven Track Record:</strong>
                    <span className="text-gray-700"> R50M+ in revenue generated for our clients</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">Results Guaranteed:</strong>
                    <span className="text-gray-700"> Money-back guarantee if we don't deliver promised results</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">500+ Businesses Served:</strong>
                    <span className="text-gray-700"> From startups to enterprises across all industries</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Our Marketing Services Include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-950 mb-2">Digital Marketing</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Search Engine Optimization (SEO)</li>
                    <li>• Pay-Per-Click Advertising (PPC)</li>
                    <li>• Content Marketing</li>
                    <li>• Email Marketing</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-950 mb-2">Social Media Marketing</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Social Media Management</li>
                    <li>• Content Creation</li>
                    <li>• Community Building</li>
                    <li>• Influencer Marketing</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-950 mb-2">Website Services</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Website Design & Development</li>
                    <li>• E-commerce Solutions</li>
                    <li>• Mobile Optimization</li>
                    <li>• Conversion Optimization</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-950 mb-2">Business Growth</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Lead Generation</li>
                    <li>• Customer Acquisition</li>
                    <li>• Marketing Automation</li>
                    <li>• Analytics & Reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Business Information */}
      <section className="py-16 bg-blue-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact South Africa's Leading Marketing Agency
            </h2>
            <p className="text-xl text-gray-300">
              Ready to dominate your market? Get in touch with ZM Results today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-300">
                45 Bale Avenue, Montclair<br />
                Durban, KwaZulu-Natal<br />
                South Africa
              </p>
            </div>
            
            <div>
              <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us Today</h3>
              <p className="text-gray-300">
                <a href="tel:+27736957783" className="hover:text-orange-400">
                  +27 73 695 7783
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Mon-Fri: 8AM-5PM<br />
                Sat: 9AM-1PM
              </p>
            </div>
            
            <div>
              <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300">
                <a href="mailto:zusakhe@zmresultss.org" className="hover:text-orange-400">
                  zusakhe@zmresultss.org
                </a>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Free consultation available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Frequently Asked Questions About Digital Marketing in South Africa
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                What makes ZM Results the best marketing agency in South Africa?
              </h3>
              <p className="text-gray-700">
                ZM Results stands out as South Africa's premier marketing agency due to our proven track record 
                of generating over R50M in revenue for our clients, our money-back guarantee, and our comprehensive 
                approach to digital marketing that includes SEO, social media marketing, lead generation, and 
                professional website design. We serve businesses across Cape Town, Johannesburg, Durban, and Pretoria 
                with customized strategies that deliver measurable results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How much do digital marketing services cost in South Africa?
              </h3>
              <p className="text-gray-700">
                Our digital marketing services start from R2,500 for basic website creation, with comprehensive 
                marketing packages starting from R9,500 per month. We offer customized pricing based on your 
                specific business needs, industry, and growth objectives. All our services come with a money-back 
                guarantee if we don't deliver the promised results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                Do you provide marketing services to businesses outside of Durban?
              </h3>
              <p className="text-gray-700">
                Yes! While we're headquartered in Durban, KwaZulu-Natal, we provide comprehensive digital marketing 
                services to businesses across all major South African cities including Cape Town, Johannesburg, 
                Pretoria, Port Elizabeth, and Bloemfontein. Our digital marketing strategies are designed to work 
                effectively for businesses nationwide.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                What industries do you specialize in for marketing services?
              </h3>
              <p className="text-gray-700">
                We provide marketing services to businesses across all industries including professional services, 
                e-commerce, healthcare, real estate, automotive, hospitality, retail, and B2B companies. Our 
                marketing strategies are customized for each industry's unique challenges and customer acquisition needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How long does it take to see results from digital marketing?
              </h3>
              <p className="text-gray-700">
                Most of our clients start seeing qualified leads within 7-14 days of implementing our marketing 
                strategies. For SEO and organic growth, significant results typically appear within 3-6 months. 
                Our lead generation systems are designed to deliver immediate results while building long-term 
                sustainable growth for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOContent;