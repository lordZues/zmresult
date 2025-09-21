      <section className="py-12">
import { Star, MapPin, Phone, Mail, Award, TrendingUp, Users, Target } from 'lucide-react';

const SEOContent: React.FC = () => {
      }
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
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4">
              Digital Marketing Services Across South Africa
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We help South African businesses grow through proven digital marketing strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <TrendingUp className="w-10 h-10 text-orange-500 mb-3" />
              <h3 className="text-lg font-bold text-blue-950 mb-2">Digital Marketing</h3>
              <p className="text-gray-700">
                SEO, PPC, content marketing, and social media management for SA businesses.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="w-10 h-10 text-blue-500 mb-3" />
              <h3 className="text-lg font-bold text-blue-950 mb-2">Social Media Marketing</h3>
              <p className="text-gray-700">
                Social media management and content creation across all major platforms.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Target className="w-10 h-10 text-green-500 mb-3" />
              <h3 className="text-lg font-bold text-blue-950 mb-2">Lead Generation</h3>
              <p className="text-gray-700">
                Proven systems that deliver qualified prospects ready to buy. Results guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Business Information */}
      <section className="py-12 bg-blue-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Contact ZM Results
            </h2>
            <p className="text-lg text-gray-300">
              Ready to grow your business? Get in touch today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Our Location</h3>
              <p className="text-gray-300">
                45 Bale Avenue, Montclair<br />
                Durban, KwaZulu-Natal<br />
                South Africa
              </p>
            </div>
            
            <div>
              <Phone className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Call Us Today</h3>
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
              <Mail className="w-10 h-10 text-orange-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
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
  )