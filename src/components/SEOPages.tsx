import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface SEOPageProps {
  city: string;
  province: string;
  title: string;
  description: string;
  services: string[];
  localKeywords: string[];
}

const SEOPageTemplate: React.FC<SEOPageProps> = ({ 
  city, 
  province, 
  title, 
  description, 
  services, 
  localKeywords 
}) => {
  useEffect(() => {
    document.title = `${title} | ZM Results`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {localKeywords.map((keyword, index) => (
              <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                {keyword}
              </span>
            ))}
          </div>
          <a 
            href="#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Get Started Today
          </a>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full inline-block mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">{service}</h3>
              <p className="text-gray-700 mb-4">
                Professional {service.toLowerCase()} services in {city}, {province}. 
                We help local businesses grow their online presence and attract more customers.
              </p>
              <a href="#contact" className="text-orange-500 font-medium hover:text-orange-600 flex items-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Local Business Info */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Serving {city} & {province}
              </h2>
              <p className="text-gray-700 mb-6">
                Based in Durban, we proudly serve businesses throughout {city} and the greater {province} region. 
                Our local expertise combined with proven digital marketing strategies helps businesses dominate their local markets.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">45 Bale Avenue, Montclair, Durban</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-500 mr-3" />
                  <a href="tel:+27736957783" className="text-gray-700 hover:text-orange-500">
                    +27 73 695 7783
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-500 mr-3" />
                  <a href="mailto:zusakhe@zmresultss.org" className="text-gray-700 hover:text-orange-500">
                    zusakhe@zmresultss.org
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Why Choose ZM Results?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                  <span className="text-gray-700">4.9/5 star rating from 200+ local businesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">Money-back guarantee on all services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">Local {province} expertise and market knowledge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">Proven track record with R50M+ revenue generated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-950 text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate {city}'s Market?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful businesses in {province} who trust ZM Results 
            to grow their customer base and increase revenue.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105"
          >
            Get Your Free Strategy Call
          </a>
        </div>
      </div>
    </div>
  );
};

export const DurbanPage: React.FC = () => (
  <SEOPageTemplate
    city="Durban"
    province="KwaZulu-Natal"
    title="Top Marketing Agency Durban | Digital Marketing KwaZulu-Natal"
    description="Durban's #1 marketing agency helping local businesses get more customers. Professional digital marketing, social media management, and lead generation services in KwaZulu-Natal."
    services={[
      "Digital Marketing Durban",
      "Social Media Marketing KZN",
      "Website Design Durban",
      "Lead Generation Services",
      "SEO Services Durban",
      "Google Ads Management"
    ]}
    localKeywords={[
      "Durban Marketing Agency",
      "KZN Digital Marketing",
      "Durban SEO Company",
      "Marketing Consultants Durban",
      "Advertising Agency KZN"
    ]}
  />
);

export const JohannesburgPage: React.FC = () => (
  <SEOPageTemplate
    city="Johannesburg"
    province="Gauteng"
    title="Best Marketing Agency Johannesburg | Digital Marketing Gauteng"
    description="Johannesburg's premier marketing agency delivering results for local businesses. Expert digital marketing, social media growth, and customer acquisition services in Gauteng."
    services={[
      "Digital Marketing Johannesburg",
      "Social Media Marketing Gauteng",
      "Website Design Joburg",
      "Lead Generation Johannesburg",
      "SEO Services Gauteng",
      "PPC Management Joburg"
    ]}
    localKeywords={[
      "Johannesburg Marketing Agency",
      "Gauteng Digital Marketing",
      "Joburg SEO Company",
      "Marketing Consultants Johannesburg",
      "Advertising Agency Gauteng"
    ]}
  />
);

export const CapeTownPage: React.FC = () => (
  <SEOPageTemplate
    city="Cape Town"
    province="Western Cape"
    title="Top Marketing Agency Cape Town | Digital Marketing Western Cape"
    description="Cape Town's leading marketing agency helping businesses grow. Professional digital marketing, social media management, and lead generation services in Western Cape."
    services={[
      "Digital Marketing Cape Town",
      "Social Media Marketing Western Cape",
      "Website Design Cape Town",
      "Lead Generation Services",
      "SEO Services Cape Town",
      "Online Advertising"
    ]}
    localKeywords={[
      "Cape Town Marketing Agency",
      "Western Cape Digital Marketing",
      "Cape Town SEO Company",
      "Marketing Consultants Cape Town",
      "Advertising Agency Western Cape"
    ]}
  />
);

export const PretoriaPage: React.FC = () => (
  <SEOPageTemplate
    city="Pretoria"
    province="Gauteng"
    title="Marketing Agency Pretoria | Digital Marketing Services Gauteng"
    description="Pretoria's trusted marketing agency for business growth. Expert digital marketing, social media strategies, and customer acquisition services in Gauteng."
    services={[
      "Digital Marketing Pretoria",
      "Social Media Marketing Gauteng",
      "Website Design Pretoria",
      "Lead Generation Pretoria",
      "SEO Services Gauteng",
      "Business Growth Services"
    ]}
    localKeywords={[
      "Pretoria Marketing Agency",
      "Gauteng Digital Marketing",
      "Pretoria SEO Company",
      "Marketing Consultants Pretoria",
      "Advertising Agency Gauteng"
    ]}
  />
);

const SEOPages: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  
  switch (city) {
    case 'durban':
      return <DurbanPage />;
    case 'johannesburg':
      return <JohannesburgPage />;
    case 'cape-town':
      return <CapeTownPage />;
    case 'pretoria':
      return <PretoriaPage />;
    default:
      return <DurbanPage />;
  }
};

export default SEOPages;