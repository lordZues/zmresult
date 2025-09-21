import React from 'react';

interface LocalSEOProps {
  businessName?: string;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  priceRange?: string;
  openingHours?: string[];
  services?: string[];
  founder?: string;
}

const LocalSEO: React.FC<LocalSEOProps> = ({
  businessName = "ZM Results",
  address = "45 Bale Avenue, Montclair",
  city = "Durban",
  province = "KwaZulu-Natal", 
  postalCode = "4061",
  country = "South Africa",
  phone = "+27736957783",
  email = "zusakhe@zmresultss.org",
  website = "https://zmresults.org",
  description = "South Africa's premier advertising agency helping businesses get more customers through professional digital marketing, social media marketing, website design, and lead generation services.",
  priceRange = "R2500-R15000",
  openingHours = [
    "Mo-Fr 08:00-17:00",
    "Sa 09:00-13:00"
  ],
  services = [
    "Digital Marketing",
    "Customer Acquisition", 
    "Lead Generation",
    "Social Media Marketing",
    "Website Design",
    "Online Advertising",
    "Business Growth Services",
    "SEO Services"
  ],
  founder = "Zusakhe Mazibu"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": businessName,
    "description": description,
    "url": website,
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": city,
      "addressRegion": province,
      "postalCode": postalCode,
      "addressCountry": country
    },
    "founder": {
      "@type": "Person",
      "name": founder
    },
    "serviceArea": {
      "@type": "Country",
      "name": country
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Cape Town"
      },
      {
        "@type": "City", 
        "name": "Johannesburg"
      },
      {
        "@type": "City",
        "name": "Durban"
      },
      {
        "@type": "City",
        "name": "Pretoria"
      },
      {
        "@type": "Country",
        "name": "South Africa"
      }
    ],
    "openingHours": openingHours,
    "priceRange": priceRange,
    "services": services,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Growth Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customer Acquisition Services",
            "description": "Help businesses get more customers through proven marketing strategies",
            "areaServed": country
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Growth",
            "description": "Build and grow social media accounts with professional management",
            "areaServed": country
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Lead Generation",
            "description": "Generate qualified leads and sales opportunities for businesses",
            "areaServed": country
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design",
            "description": "Professional website design and development services",
            "areaServed": country
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-29.8587",
      "longitude": "30.9796"
    },
    "sameAs": [
      "https://www.facebook.com/zmresults",
      "https://www.linkedin.com/company/zmresults", 
      "https://www.instagram.com/zmresults"
    ]
  };

  React.useEffect(() => {
    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes(businessName)) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null; // This component only adds structured data
};

export default LocalSEO;