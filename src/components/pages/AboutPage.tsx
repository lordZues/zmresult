import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Target, CheckCircle, Star, TrendingUp, MessageCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | ZM Results - Leading Digital Marketing Agency South Africa";
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
            About ZM Results
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            South Africa's premier digital marketing and advertising agency, helping businesses 
            across Durban, Cape Town, Johannesburg, and Pretoria dominate their markets.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ZM Results was founded with a simple mission: to help South African businesses 
              get more customers through proven digital marketing strategies. Based in Durban, 
              KwaZulu-Natal, we've grown to serve businesses across the entire country.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              What started as a passion for helping local businesses grow has evolved into 
              South Africa's most trusted digital marketing agency. We've helped over 500 
              businesses generate more than R50 million in additional revenue.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our approach is different. We don't just create pretty websites or post on 
              social media. We build complete customer acquisition systems that consistently 
              deliver qualified leads and paying customers.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To empower South African businesses with digital marketing strategies that 
              deliver measurable results and sustainable growth.
            </p>
            
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the leading digital marketing agency in South Africa, known for 
              delivering exceptional results and transforming businesses across the country.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-700">The driving force behind ZM Results</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-blue-950 mb-4">Zusakhe Mazibu</h3>
              <p className="text-xl text-orange-600 font-semibold mb-6">Founder & CEO</p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over a decade of experience in digital marketing and business development, 
                Zusakhe founded ZM Results to bridge the gap between traditional South African 
                businesses and modern digital marketing strategies.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                His passion for helping businesses grow, combined with deep understanding of 
                the South African market, has made ZM Results the go-to agency for businesses 
                serious about growth.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Digital Marketing Expert</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Business Strategist</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Growth Specialist</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-blue-950 mb-4">Zusakhe's Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                  <span className="text-gray-700">Helped 500+ businesses grow their revenue</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">Generated R50M+ in client revenue</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                  <span className="text-gray-700">Built a team of marketing specialists</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                  <span className="text-gray-700">Maintained 98% client satisfaction rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-700">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Results-Driven</h3>
              <p className="text-gray-700">We measure success by your business growth, not vanity metrics.</p>
            </div>
            
            <div className="text-center bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Client-Focused</h3>
              <p className="text-gray-700">Your success is our success. We're partners in your growth journey.</p>
            </div>
            
            <div className="text-center bg-white rounded-lg shadow-md p-6">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Transparency</h3>
              <p className="text-gray-700">Clear communication, honest reporting, and no hidden costs.</p>
            </div>
            
            <div className="text-center bg-white rounded-lg shadow-md p-6">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Innovation</h3>
              <p className="text-gray-700">We stay ahead of trends to keep your business competitive.</p>
            </div>
          </div>
        </div>

        {/* Our Track Record */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl p-12 text-white text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Track Record</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Numbers don't lie. Here's what we've achieved for our clients across South Africa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-lg">Businesses Helped</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400 mb-2">R50M+</div>
              <div className="text-lg">Revenue Generated</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-lg">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Our Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Our Location</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Based in the heart of Durban, KwaZulu-Natal, we're perfectly positioned to serve 
              businesses across South Africa. Our central location allows us to understand the 
              unique challenges and opportunities in the South African market.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg mr-4">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Address</h4>
                  <p className="text-gray-700">45 Bale Avenue, Montclair, Durban, KwaZulu-Natal, South Africa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Contact</h4>
                  <p className="text-gray-700">+27 73 695 7783 | zusakhe@zmresultss.org</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">Serving All of South Africa</h3>
            <p className="text-lg text-gray-700 mb-6">
              While we're based in Durban, we proudly serve businesses across:
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-blue-950">KwaZulu-Natal</h4>
                <p className="text-sm text-gray-600">Durban, Pietermaritzburg, Newcastle</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-blue-950">Gauteng</h4>
                <p className="text-sm text-gray-600">Johannesburg, Pretoria, Sandton</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-blue-950">Western Cape</h4>
                <p className="text-sm text-gray-600">Cape Town, Stellenbosch, Paarl</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-blue-950">Eastern Cape</h4>
                <p className="text-sm text-gray-600">Port Elizabeth, East London</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-950 text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with South Africa's Top Marketing Agency?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful businesses who trust ZM Results to grow their customer base and increase revenue.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;