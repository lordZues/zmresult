export const useGoogleAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
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

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
