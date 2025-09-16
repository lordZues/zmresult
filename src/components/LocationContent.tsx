import React from 'react';
import { MapPin, Users, Award, TrendingUp } from 'lucide-react';

const LocationContent: React.FC = () => {
  const locations = [
    {
      city: "Durban",
      province: "KwaZulu-Natal", 
      description: "Based in Durban's vibrant business district, we're South Africa's top-ranked marketing agency serving the coastal region",
      highlights: ["Port logistics", "Tourism", "Manufacturing", "Healthcare", "Education", "Retail"]
    },
    {
      city: "Johannesburg", 
      province: "Gauteng",
      description: "Dominating Johannesburg's competitive market with data-driven marketing strategies that deliver results",
      highlights: ["Financial services", "Mining companies", "Manufacturing", "Corporate services"]
    },
    {
      city: "Cape Town",
      province: "Western Cape", 
      description: "Expanding our top-tier marketing services to Cape Town's thriving business ecosystem",
      highlights: ["Tourism businesses", "Tech startups", "Wine industry", "Creative agencies"]
    },
    {
      city: "Pretoria",
      province: "Gauteng",
      description: "Leading Pretoria's digital transformation with cutting-edge marketing solutions", 
      highlights: ["Government contractors", "Education", "Healthcare", "Professional services"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Local Presence</span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 mt-2 mb-6 leading-tight">
            Serving Businesses Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">South Africa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As South Africa's premier advertising agency, we understand the unique challenges and opportunities in each major city. Our local expertise helps businesses succeed in their specific markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl mr-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-950">{location.city}</h3>
                  <p className="text-gray-600">{location.province}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {location.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-950 mb-3">Key Industries We Serve:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {location.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Stats */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Our South African Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users size={32} className="text-orange-400" />
              </div>
              <div className="text-4xl font-black text-orange-400 mb-2">500+</div>
              <div className="text-gray-200">Local Businesses Helped</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <MapPin size={32} className="text-green-400" />
              </div>
              <div className="text-4xl font-black text-green-400 mb-2">9</div>
              <div className="text-gray-200">Provinces Served</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award size={32} className="text-blue-400" />
              </div>
              <div className="text-4xl font-black text-blue-400 mb-2">98%</div>
              <div className="text-gray-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <TrendingUp size={32} className="text-yellow-400" />
              </div>
              <div className="text-4xl font-black text-yellow-400 mb-2">R50M+</div>
              <div className="text-gray-200">Revenue Generated</div>
            </div>
          </div>
        </div>

        {/* Local Keywords Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">
              Local Search Terms We Rank For
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
              <div>Advertising agency Cape Town</div>
              <div>Marketing company Johannesburg</div>
              <div>Digital marketing Durban</div>
              <div>SEO services Pretoria</div>
              <div>Social media marketing Cape Town</div>
              <div>Lead generation Johannesburg</div>
              <div>Website design Durban</div>
              <div>Business growth Pretoria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContent;