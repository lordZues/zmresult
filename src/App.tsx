import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewHero from './components/NewHero';
import Services from './components/Services';
import About from './components/About';
import DirectorSection from './components/DirectorSection';
import BookCall from './components/BookCall';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import { SocialMediaConversionPost, WebsiteConversionPost, LocalSEOPost } from './components/AdditionalBlogPosts';
import MarketingTrendsPost from './components/BlogPosts/MarketingTrendsPost';
import LeadGenerationGuidePost from './components/BlogPosts/LeadGenerationGuidePost';
import Privacy from './components/Privacy';
import LocalSEO from './components/LocalSEO';
import GoogleBusinessProfile from './components/GoogleBusinessProfile';
import GoogleAnalytics from './components/GoogleAnalytics';
import SEOPages from './components/SEOPages';
import SEOContent from './components/SEOContent';
import WebDesignPage from './components/ServicePages/WebDesignPage';
import SocialMediaPage from './components/ServicePages/SocialMediaPage';
import GoogleAdsPage from './components/ServicePages/GoogleAdsPage';
import ContentMarketingPage from './components/ServicePages/ContentMarketingPage';
import ThankYouPage from './components/ThankYouPage';
import ServicesPage from './components/pages/ServicesPage';
import AboutPage from './components/pages/AboutPage';
import WhyChooseUsPage from './components/pages/WhyChooseUsPage';

function HomePage() {
  return (
    <>
      <GoogleAnalytics />
      <LocalSEO />
      <NewHero />
      <SEOContent />
      <Services />
      <BlogSection />
      <BookCall />
    </>
  );
}

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/client-acquisition-system" element={<BlogPost />} />
          <Route path="/blog/social-media-conversion-strategy" element={<SocialMediaConversionPost />} />
          <Route path="/blog/website-conversion-mistakes" element={<WebsiteConversionPost />} />
          <Route path="/blog/local-seo-domination-guide" element={<LocalSEOPost />} />
          <Route path="/blog/digital-marketing-trends-south-africa-2024" element={<MarketingTrendsPost />} />
          <Route path="/blog/complete-lead-generation-guide-south-africa" element={<LeadGenerationGuidePost />} />
          <Route path="/web-design-services-south-africa" element={<WebDesignPage />} />
          <Route path="/social-media-marketing-services-south-africa" element={<SocialMediaPage />} />
          <Route path="/google-ads-management-south-africa" element={<GoogleAdsPage />} />
          <Route path="/content-marketing-services-south-africa" element={<ContentMarketingPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/location/:city" element={<SEOPages />} />
          <Route path="/durban-marketing-agency" element={<SEOPages />} />
          <Route path="/johannesburg-marketing-agency" element={<SEOPages />} />
          <Route path="/cape-town-marketing-agency" element={<SEOPages />} />
          <Route path="/pretoria-marketing-agency" element={<SEOPages />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;