import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface NAPProps {
  variant?: 'header' | 'footer' | 'contact' | 'inline';
  showIcons?: boolean;
  className?: string;
}

const NAP: React.FC<NAPProps> = ({ 
  variant = 'inline', 
  showIcons = true, 
  className = '' 
}) => {
  const businessInfo = {
    name: "ZM Results",
    address: "45 Bale Avenue, Montclair, Durban, KwaZulu-Natal, South Africa",
    phone: "+27 73 695 7783",
    email: "zusakhe@zmresultss.org",
    hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-1PM"
  };

  const baseClasses = {
    header: "text-sm text-gray-600",
    footer: "text-gray-300",
    contact: "text-lg text-gray-700",
    inline: "text-gray-600"
  };

  const containerClasses = {
    header: "flex flex-col space-y-1",
    footer: "space-y-2",
    contact: "space-y-4",
    inline: "space-y-2"
  };

  return (
    <div className={`${containerClasses[variant]} ${className}`}>
      {/* Business Name */}
      <div className={`font-bold ${variant === 'contact' ? 'text-2xl text-blue-950' : ''} ${baseClasses[variant]}`}>
        {businessInfo.name}
      </div>

      {/* Address */}
      <div className={`flex items-center ${baseClasses[variant]}`}>
        {showIcons && <MapPin size={16} className="mr-2 flex-shrink-0" />}
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">45 Bale Avenue, Montclair</span>,{' '}
          <span itemProp="addressLocality">Durban</span>,{' '}
          <span itemProp="addressRegion">KwaZulu-Natal</span>,{' '}
          <span itemProp="addressCountry">South Africa</span>
        </span>
      </div>

      {/* Phone */}
      <div className={`flex items-center ${baseClasses[variant]}`}>
        {showIcons && <Phone size={16} className="mr-2 flex-shrink-0" />}
        <a 
          href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
          className="hover:text-orange-500 transition-colors"
          itemProp="telephone"
        >
          {businessInfo.phone}
        </a>
      </div>

      {/* Email */}
      <div className={`flex items-center ${baseClasses[variant]}`}>
        {showIcons && <Mail size={16} className="mr-2 flex-shrink-0" />}
        <a 
          href={`mailto:${businessInfo.email}`}
          className="hover:text-orange-500 transition-colors"
          itemProp="email"
        >
          {businessInfo.email}
        </a>
      </div>

      {/* Business Hours (for contact variant) */}
      {variant === 'contact' && (
        <div className={`flex items-center ${baseClasses[variant]}`}>
          {showIcons && <Clock size={16} className="mr-2 flex-shrink-0" />}
          <span itemProp="openingHours" content="Mo-Fr 08:00-17:00 Sa 09:00-13:00">
            {businessInfo.hours}
          </span>
        </div>
      )}
    </div>
  );
};

export default NAP;