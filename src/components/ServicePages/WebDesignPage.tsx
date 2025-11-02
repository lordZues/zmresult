import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Smartphone, Search, TrendingUp, CheckCircle, Star, Award } from 'lucide-react';

const WebDesignPage: React.FC = () => {
  useEffect(() => {
    document.title = "Professional Web Design Services South Africa | Website Designers Durban | ZM Results";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional web design services in South Africa. Custom website design, e-commerce development, mobile-responsive sites. Top web designers in Durban, Cape Town, Johannesburg. Get a quote today!');
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
            Professional Web Design Services in South Africa
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Custom website design and development services across Durban, Cape Town, Johannesburg, and Pretoria. 
            We create stunning, mobile-responsive websites that convert visitors into customers.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Web Design Durban</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Website Designers Cape Town</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Custom Web Development</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">E-commerce Websites</span>
          </div>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Get Your Free Web Design Quote
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Globe className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Custom Website Design</h3>
            <p className="text-gray-700 mb-4">
              Bespoke website designs tailored to your brand and business goals. Professional web designers 
              creating unique, conversion-focused websites for South African businesses.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Custom design mockups</li>
              <li>• Brand-aligned aesthetics</li>
              <li>• User experience optimization</li>
              <li>• Conversion-focused layouts</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Smartphone className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Mobile-Responsive Design</h3>
            <p className="text-gray-700 mb-4">
              Mobile-first web design ensuring your website looks perfect on all devices. 
              With 80% of South Africans browsing on mobile, responsive design is essential.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Mobile-first approach</li>
              <li>• Cross-device compatibility</li>
              <li>• Fast loading speeds</li>
              <li>• Touch-friendly navigation</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Search className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">SEO-Optimized Websites</h3>
            <p className="text-gray-700 mb-4">
              Websites built with SEO best practices from day one. Get found on Google with 
              search engine optimized web design and development.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• On-page SEO optimization</li>
              <li>• Fast loading speeds</li>
              <li>• Clean, semantic code</li>
              <li>• Local SEO integration</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">E-commerce Development</h3>
            <p className="text-gray-700 mb-4">
              Professional e-commerce website development for online stores. Secure, scalable 
              online shopping solutions with payment gateway integration.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Online store development</li>
              <li>• Payment gateway integration</li>
              <li>• Inventory management</li>
              <li>• Order processing systems</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <CheckCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Website Maintenance</h3>
            <p className="text-gray-700 mb-4">
              Ongoing website maintenance and support services. Keep your website secure, 
              updated, and performing optimally with our maintenance packages.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Regular security updates</li>
              <li>• Content management</li>
              <li>• Performance monitoring</li>
              <li>• Technical support</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <Award className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-blue-950 mb-3">Website Redesign</h3>
            <p className="text-gray-700 mb-4">
              Transform your outdated website with a modern redesign. Improve user experience, 
              increase conversions, and modernize your online presence.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Modern design updates</li>
              <li>• Improved user experience</li>
              <li>• Conversion optimization</li>
              <li>• Performance improvements</li>
            </ul>
          </div>
        </div>

        {/* Location-Specific Content */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Web Design Services Across South Africa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Web Designers Durban</h3>
              <p className="text-gray-700 mb-4">
                Professional web design services in Durban, KwaZulu-Natal. Custom website development 
                for businesses across the greater Durban area.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Web Design Durban North</li>
                <li>• Website Designers Umhlanga</li>
                <li>• Web Development Pinetown</li>
                <li>• Custom Websites Westville</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Web Designers Cape Town</h3>
              <p className="text-gray-700 mb-4">
                Expert web design and development services in Cape Town, Western Cape. 
                Creating stunning websites for businesses throughout the Mother City.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Web Design Cape Town CBD</li>
                <li>• Website Designers Stellenbosch</li>
                <li>• Web Development Bellville</li>
                <li>• Custom Websites Paarl</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Web Designers Johannesburg</h3>
              <p className="text-gray-700 mb-4">
                Professional website design services in Johannesburg, Gauteng. Custom web development 
                for businesses across the economic hub of South Africa.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Web Design Sandton</li>
                <li>• Website Designers Randburg</li>
                <li>• Web Development Roodepoort</li>
                <li>• Custom Websites Midrand</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">Web Designers Pretoria</h3>
              <p className="text-gray-700 mb-4">
                Expert web design and development in Pretoria, Gauteng. Professional website 
                creation for businesses in the capital city and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Web Design Centurion</li>
                <li>• Website Designers Hatfield</li>
                <li>• Web Development Menlyn</li>
                <li>• Custom Websites Brooklyn</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Why Choose ZM Results for Web Design?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Professional Web Design Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">500+ Websites Created:</strong>
                    <span className="text-gray-700"> Extensive experience designing websites for South African businesses</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">Conversion-Focused Design:</strong>
                    <span className="text-gray-700"> Websites designed to turn visitors into customers</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                  <div>
                    <strong className="text-blue-950">Money-Back Guarantee:</strong>
                    <span className="text-gray-700"> 100% satisfaction guarantee on all web design projects</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-6">Our Web Design Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-blue-950">Discovery & Planning</h4>
                    <p className="text-gray-700">Understanding your business, goals, and target audience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-blue-950">Design & Development</h4>
                    <p className="text-gray-700">Creating custom designs and building your website</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-blue-950">Testing & Launch</h4>
                    <p className="text-gray-700">Thorough testing and successful website launch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-blue-950">Support & Maintenance</h4>
                    <p className="text-gray-700">Ongoing support and website maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-blue-950 text-white rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Web Design Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Transparent, affordable web design packages for South African businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Basic Website</h3>
              <div className="text-4xl font-bold text-orange-400 mb-4">From R2,500</div>
              <ul className="text-left space-y-2 mb-6">
                <li>• 5-page website</li>
                <li>• Mobile responsive design</li>
                <li>• Basic SEO optimization</li>
                <li>• Contact form integration</li>
                <li>• 1 month support</li>
              </ul>
              <a href="/#contact" className="block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-all">
                Get Started
              </a>
            </div>
            
            <div className="bg-orange-500 rounded-xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-950 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Business Website</h3>
              <div className="text-4xl font-bold mb-4">From R5,500</div>
              <ul className="text-left space-y-2 mb-6">
                <li>• 10-page website</li>
                <li>• Custom design</li>
                <li>• Advanced SEO optimization</li>
                <li>• E-commerce ready</li>
                <li>• 3 months support</li>
              </ul>
              <a href="/#contact" className="block bg-white text-orange-500 hover:bg-gray-100 py-3 px-6 rounded-lg font-medium transition-all">
                Get Started
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Enterprise Website</h3>
              <div className="text-4xl font-bold text-orange-400 mb-4">From R12,500</div>
              <ul className="text-left space-y-2 mb-6">
                <li>• Unlimited pages</li>
                <li>• Premium custom design</li>
                <li>• Full e-commerce functionality</li>
                <li>• Advanced integrations</li>
                <li>• 6 months support</li>
              </ul>
              <a href="/#contact" className="block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Frequently Asked Questions About Web Design
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How much does web design cost in South Africa?
              </h3>
              <p className="text-gray-700">
                Web design costs in South Africa vary depending on complexity and features. Our basic websites 
                start from R2,500, business websites from R5,500, and enterprise solutions from R12,500. 
                We provide transparent pricing with no hidden costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                How long does it take to design a website?
              </h3>
              <p className="text-gray-700">
                Most websites are completed within 2-4 weeks, depending on complexity and content requirements. 
                We provide a detailed timeline during the initial consultation and keep you updated throughout 
                the design and development process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                Do you provide website hosting and domain registration?
              </h3>
              <p className="text-gray-700">
                Yes, we offer complete web hosting solutions and can help with domain registration. 
                Our hosting packages include SSL certificates, regular backups, and technical support 
                to keep your website running smoothly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                Will my website be mobile-friendly?
              </h3>
              <p className="text-gray-700">
                Absolutely! All our websites are designed with a mobile-first approach, ensuring they 
                look and function perfectly on smartphones, tablets, and desktop computers. With 80% 
                of South Africans browsing on mobile, this is essential.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-950 text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Professional Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful South African businesses who trust ZM Results 
            for their web design and development needs.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
          >
            Get Your Free Web Design Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDesignPage;