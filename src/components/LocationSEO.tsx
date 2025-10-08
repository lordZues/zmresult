import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface LocationData {
  city: string;
  province: string;
  description: string;
  landmarks: string[];
  industries: string[];
  population: string;
  economicHub: string;
}

const locationData: Record<string, LocationData> = {
  johannesburg: {
    city: "Johannesburg",
    province: "Gauteng",
    description: "South Africa's economic powerhouse and largest city, home to thousands of businesses across all industries.",
    landmarks: ["Sandton", "Rosebank", "Midrand", "Fourways", "Braamfontein"],
    industries: ["Finance", "Mining", "Technology", "Retail", "Professional Services"],
    population: "5.6 million",
    economicHub: "Africa's financial capital with the highest concentration of businesses and startups"
  },
  'cape-town': {
    city: "Cape Town",
    province: "Western Cape",
    description: "South Africa's legislative capital and tourism hub, with a thriving tech and creative industry scene.",
    landmarks: ["V&A Waterfront", "City Bowl", "Century City", "Claremont", "Bellville"],
    industries: ["Tourism", "Technology", "Creative Arts", "Wine & Agriculture", "Real Estate"],
    population: "4.6 million",
    economicHub: "Leading destination for startups and digital businesses with growing tech ecosystem"
  },
  durban: {
    city: "Durban",
    province: "KwaZulu-Natal",
    description: "South Africa's busiest port city and gateway to Africa, with diverse business opportunities.",
    landmarks: ["Umhlanga", "Gateway", "Durban CBD", "Ballito", "Westville"],
    industries: ["Logistics", "Manufacturing", "Tourism", "Healthcare", "Retail"],
    population: "3.9 million",
    economicHub: "Major logistics and manufacturing hub with Africa's busiest port"
  },
  pretoria: {
    city: "Pretoria",
    province: "Gauteng",
    description: "South Africa's administrative capital, home to government, automotive industry, and technology sector.",
    landmarks: ["Menlyn", "Centurion", "Hatfield", "Brooklyn", "Waterkloof"],
    industries: ["Government", "Automotive", "Technology", "Education", "Research"],
    population: "2.9 million",
    economicHub: "Administrative capital with strong automotive and technology sectors"
  }
};

const LocationSEO: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const location = locationData[city || 'johannesburg'] || locationData.johannesburg;

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency {location.city} | Professional Marketing Services {location.province} | ZM Results</title>
        <meta name="description" content={`Leading digital marketing agency in ${location.city}, ${location.province}. Professional web design, SEO, social media marketing & Google Ads. Serving ${location.city} businesses since 2020. Free consultation.`} />
        <meta name="keywords" content={`digital marketing ${location.city.toLowerCase()}, marketing agency ${location.city.toLowerCase()}, web design ${location.city.toLowerCase()}, seo services ${location.city.toLowerCase()}, social media marketing ${location.city.toLowerCase()}, google ads ${location.city.toLowerCase()}, ${location.province.toLowerCase()} marketing`} />
        <link rel="canonical" href={`https://zmresults.org/${city}-marketing-agency`} />

        <meta property="og:title" content={`Digital Marketing Agency ${location.city} | ZM Results`} />
        <meta property="og:description" content={`Professional marketing services in ${location.city}. Web design, SEO, social media & more. 500+ businesses helped.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://zmresults.org/${city}-marketing-agency`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": `ZM Results - Digital Marketing Agency ${location.city}`,
            "description": `Professional digital marketing services in ${location.city}, ${location.province}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location.city,
              "addressRegion": location.province,
              "addressCountry": "ZA"
            },
            "areaServed": {
              "@type": "City",
              "name": location.city
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "addressLocality": location.city
              }
            }
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center bg-cyan-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-cyan-300 font-semibold">Serving {location.city}, {location.province}</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-center">
                <span className="text-white">Digital Marketing Agency</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  {location.city}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 text-center leading-relaxed">
                Professional marketing services helping <strong>{location.city}</strong> businesses grow through expert web design, SEO, social media marketing, and lead generation.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <div className="flex items-center bg-cyan-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-500/30">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-slate-200">Local {location.city} Team</span>
                </div>
                <div className="flex items-center bg-blue-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/30">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-slate-200">500+ Businesses Helped</span>
                </div>
                <div className="flex items-center bg-purple-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/30">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-slate-200">Free Consultation</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
                >
                  Get Free Consultation <ArrowRight className="ml-2" />
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

        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">ZM Results</span> in {location.city}?
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  We understand the {location.city} market and deliver results that matter to local businesses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <MapPin className="w-8 h-8 text-cyan-400 mr-3" />
                    Local {location.city} Expertise
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {location.description}
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    We know the {location.city} market inside and out, from {location.landmarks.slice(0, 3).join(', ')} and beyond.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <CheckCircle className="w-8 h-8 text-blue-400 mr-3" />
                    Industry-Specific Solutions
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Specialized marketing strategies for {location.city}'s key industries:
                  </p>
                  <ul className="space-y-2">
                    {location.industries.map((industry, index) => (
                      <li key={index} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        <span>{industry}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Clock className="w-8 h-8 text-purple-400 mr-3" />
                    Fast Response Times
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Being local to {location.city} means we're in your timezone and available when you need us. Get same-day responses and quick turnaround times on all projects.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <CheckCircle className="w-8 h-8 text-cyan-400 mr-3" />
                    Proven Track Record
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Over 500 South African businesses, including many in {location.city} and {location.province}, trust us to deliver results. Money-back guarantee on all our services.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-black text-cyan-400 mb-2">{location.population}</div>
                    <div className="text-slate-300">Population Reach</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-blue-400 mb-2">500+</div>
                    <div className="text-slate-300">Businesses Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-purple-400 mb-2">100%</div>
                    <div className="text-slate-300">Money-Back Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Digital Marketing Services</span> in {location.city}
                </h2>
                <p className="text-xl text-slate-300">
                  Complete marketing solutions designed for {location.city} businesses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">Website Design & Development</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Custom, mobile-responsive websites designed for {location.city} businesses. SEO-optimized, fast-loading, and conversion-focused. Starting from R2,500.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Custom responsive design</span>
                    </li>
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Local SEO optimization</span>
                    </li>
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Google My Business setup</span>
                    </li>
                  </ul>
                  <Link to="/web-design-services-south-africa" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Social Media Marketing</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Build your brand and engage customers across Facebook, Instagram, LinkedIn, and more. Expert content creation and community management.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Content creation & posting</span>
                    </li>
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Community management</span>
                    </li>
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Targeted advertising</span>
                    </li>
                  </ul>
                  <Link to="/social-media-marketing-services-south-africa" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Google Ads Management</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Get instant visibility in {location.city} with expertly managed Google Ads campaigns. Target local customers and track every rand spent.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Local campaign setup</span>
                    </li>
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Keyword research & bidding</span>
                    </li>
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      <span>ROI tracking & reporting</span>
                    </li>
                  </ul>
                  <Link to="/google-ads-management-south-africa" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">SEO & Content Marketing</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Dominate local search results in {location.city}. Our SEO strategies get you found by customers searching for your services.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Local SEO optimization</span>
                    </li>
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Content writing & blogging</span>
                    </li>
                    <li className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <span>Link building strategies</span>
                    </li>
                  </ul>
                  <Link to="/content-marketing-services-south-africa" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10 text-center">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Ready to Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{location.city}</span> Business?
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Get your free consultation with {location.city}'s leading digital marketing agency. Let's discuss how we can help your business thrive.
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white mb-1">Call Us</div>
                      <div className="text-slate-300 text-sm">Available 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white mb-1">Email Us</div>
                      <div className="text-slate-300 text-sm">Quick response guaranteed</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-white mb-1">Visit Us</div>
                      <div className="text-slate-300 text-sm">Serving all of {location.city}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Areas We Serve in {location.city}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {location.landmarks.map((landmark, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="text-cyan-400 font-semibold">{landmark}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-center mt-8">
                And surrounding areas throughout {location.province}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LocationSEO;
