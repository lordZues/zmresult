import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, ArrowRight, Globe, Users, TrendingUp, Target, Smartphone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketingServicesLanding: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Professional Marketing Services South Africa | Affordable Custom Website Creation | ZM Results</title>
        <meta name="description" content="Get professional marketing services and affordable custom website creation in South Africa. Expert web design, SEO, social media marketing & lead generation. Proven results for 500+ businesses. Free consultation." />
        <meta name="keywords" content="professional marketing services south africa, affordable custom website creation, custom website design, digital marketing agency, web design services, social media marketing, SEO services, lead generation, marketing company south africa" />
        <link rel="canonical" href="https://zmresults.org/professional-marketing-services-affordable-website-creation" />

        <meta property="og:title" content="Professional Marketing Services & Affordable Website Creation | ZM Results" />
        <meta property="og:description" content="Transform your business with professional marketing services and custom website creation. Affordable packages starting from R2,500. Money-back guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zmresults.org/professional-marketing-services-affordable-website-creation" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Professional Marketing Services",
            "provider": {
              "@type": "Organization",
              "name": "ZM Results",
              "areaServed": "South Africa"
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "R2,500 - R10,000",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">Professional Marketing Services &amp;</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Affordable Custom Website Creation
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Transform your South African business with expert <strong>professional marketing services</strong> and <strong>affordable custom website creation</strong>. Get more customers, increase revenue, and dominate your market.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <div className="flex items-center bg-cyan-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-slate-200">500+ Businesses Helped</span>
                </div>
                <div className="flex items-center bg-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-slate-200">Money-Back Guarantee</span>
                </div>
                <div className="flex items-center bg-purple-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-slate-200">From R2,500</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
                >
                  Get Your Free Consultation <ArrowRight className="ml-2" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Professional Marketing Services</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Complete digital marketing solutions designed to grow your South African business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-xl inline-block mb-6">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Affordable Custom Website Creation</h3>
                <p className="text-slate-300 mb-6">
                  Professional, conversion-optimized websites designed to attract customers and grow your business. Starting from just R2,500.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Custom responsive web design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Mobile-friendly &amp; fast loading</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">SEO-optimized from day one</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Conversion-focused design</span>
                  </li>
                </ul>
                <Link
                  to="/web-design-services-south-africa"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl inline-block mb-6">
                  <Search size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">SEO &amp; Search Marketing</h3>
                <p className="text-slate-300 mb-6">
                  Get found by customers searching for your services. Professional SEO services that deliver real results.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Local SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Keyword research &amp; targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Content optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Google My Business setup</span>
                  </li>
                </ul>
                <Link
                  to="/content-marketing-services-south-africa"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-xl inline-block mb-6">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
                <p className="text-slate-300 mb-6">
                  Build your brand and engage customers on Facebook, Instagram, LinkedIn, and more with expert social media management.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Content creation &amp; posting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Community management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Paid social advertising</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Analytics &amp; reporting</span>
                  </li>
                </ul>
                <Link
                  to="/social-media-marketing-services-south-africa"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="bg-gradient-to-r from-cyan-500 to-teal-600 p-4 rounded-xl inline-block mb-6">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Google Ads Management</h3>
                <p className="text-slate-300 mb-6">
                  Get instant visibility and qualified leads with expertly managed Google Ads campaigns that deliver ROI.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Campaign setup &amp; optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Keyword research &amp; bidding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Ad copywriting &amp; testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Performance tracking</span>
                  </li>
                </ul>
                <Link
                  to="/google-ads-management-south-africa"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-4 rounded-xl inline-block mb-6">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Lead Generation</h3>
                <p className="text-slate-300 mb-6">
                  Fill your pipeline with qualified leads using proven strategies that convert browsers into buyers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Landing page creation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Email marketing campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">CRM integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Conversion optimization</span>
                  </li>
                </ul>
                <Link
                  to="/blog/complete-lead-generation-guide-south-africa"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 rounded-xl inline-block mb-6">
                  <Smartphone size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Content Marketing</h3>
                <p className="text-slate-300 mb-6">
                  Attract and engage your target audience with high-quality content that establishes authority and drives conversions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Blog writing &amp; strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Video content creation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Infographic design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Content distribution</span>
                  </li>
                </ul>
                <Link
                  to="/content-marketing-services-south-africa"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Professional Marketing Services</span>?
              </h2>
              <p className="text-xl text-slate-300 mb-12">
                We deliver results that matter to your business
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                    Proven Track Record
                  </h3>
                  <p className="text-slate-300">
                    Over 500 South African businesses trust us to grow their online presence and generate quality leads.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3" />
                    Affordable Pricing
                  </h3>
                  <p className="text-slate-300">
                    Professional marketing services and custom website creation that fits your budget, starting from just R2,500.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3" />
                    Money-Back Guarantee
                  </h3>
                  <p className="text-slate-300">
                    We're so confident in our services, we offer a money-back guarantee if you're not satisfied.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
                    Local Expertise
                  </h3>
                  <p className="text-slate-300">
                    We understand the South African market and create strategies that work for local businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Grow Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Professional Marketing Services</span>?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get your free consultation today and discover how affordable custom website creation and expert marketing can transform your business.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Link
                  to="/"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
                >
                  Schedule Free Consultation <ArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20"
                >
                  View All Services
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  No long-term contracts
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                  Free consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                  Fast turnaround
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarketingServicesLanding;
