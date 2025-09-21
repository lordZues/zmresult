import React, { useEffect } from 'react';

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    // Google Analytics 4 tracking code
    const GA_MEASUREMENT_ID = 'G-0Q3E05Z2T0';
    
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);
    
    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);
    
    // Track page views on route changes
    const handleRouteChange = () => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href
        });
      }
    };
    
    // Listen for route changes (for SPA)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

// Custom hook for tracking events
export const useGoogleAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, parameters);
    }
  };
  
  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submit', {
      form_name: formName,
      page_location: window.location.href
    });
  };
  
  const trackButtonClick = (buttonName: string) => {
    trackEvent('click', {
      button_name: buttonName,
      page_location: window.location.href
    });
  };
  
  const trackPhoneCall = () => {
    trackEvent('phone_call', {
      page_location: window.location.href
    });
  };
  
  return {
    trackEvent,
    trackFormSubmission,
    trackButtonClick,
    trackPhoneCall
  };
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default GoogleAnalytics;