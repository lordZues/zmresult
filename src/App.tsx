import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewHero from './components/NewHero';
import Services from './components/Services';
import BookCall from './components/BookCall';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import LocalSEO from './components/LocalSEO';
import SEOContent from './components/SEOContent';
import InternalLinks from './components/InternalLinks';

const BlogPost = lazy(() => import('./components/BlogPost'));
const SocialMediaConversionPost = lazy(() => import('./components/AdditionalBlogPosts').then(m => ({ default: m.SocialMediaConversionPost })));
const WebsiteConversionPost = lazy(() => import('./components/AdditionalBlogPosts').then(m => ({ default: m.WebsiteConversionPost })));
const LocalSEOPost = lazy(() => import('./components/AdditionalBlogPosts').then(m => ({ default: m.LocalSEOPost })));
const MarketingTrendsPost = lazy(() => import('./components/BlogPosts/MarketingTrendsPost'));
const LeadGenerationGuidePost = lazy(() => import('./components/BlogPosts/LeadGenerationGuidePost'));
const DigitalMarketingTrends2025 = lazy(() => import('./components/BlogPosts/DigitalMarketingTrends2025'));
const AIMarketingGuide2025 = lazy(() => import('./components/BlogPosts/AIMarketingGuide2025'));
const SocialMediaStrategy2025 = lazy(() => import('./components/BlogPosts/SocialMediaStrategy2025'));
const Week1LeadGeneration = lazy(() => import('./components/BlogPosts/Week1LeadGeneration'));
const Week2WebsiteConversion = lazy(() => import('./components/BlogPosts/Week2WebsiteConversion'));
const Week3SocialMediaStrategy = lazy(() => import('./components/BlogPosts/Week3SocialMediaStrategy'));
const Week4GoogleVsFacebook = lazy(() => import('./components/BlogPosts/Week4GoogleVsFacebook'));
const Privacy = lazy(() => import('./components/Privacy'));
const SEOPages = lazy(() => import('./components/SEOPages'));
const WebDesignPage = lazy(() => import('./components/ServicePages/WebDesignPage'));
const SocialMediaPage = lazy(() => import('./components/ServicePages/SocialMediaPage'));
const GoogleAdsPage = lazy(() => import('./components/ServicePages/GoogleAdsPage'));
const ContentMarketingPage = lazy(() => import('./components/ServicePages/ContentMarketingPage'));
const ThankYouPage = lazy(() => import('./components/ThankYouPage'));
const ServicesPage = lazy(() => import('./components/pages/ServicesPage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const WhyChooseUsPage = lazy(() => import('./components/pages/WhyChooseUsPage'));

function HomePage() {
  useEffect(() => {
    document.title = "ZM Results | #1 Digital Marketing Agency South Africa 2025 | 500+ Businesses Helped";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'South Africa\'s #1 digital marketing agency with 500+ successful clients. Get more customers with proven website design, social media marketing & lead generation. Money-back guarantee. Free consultation.');
    }
  }, []);

  return (
    <>
      <GoogleAnalytics />
      <LocalSEO />
      <NewHero />
      <SEOContent />
      <Services />
      <InternalLinks intent="service" />
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
    
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ZM Results",
      "url": "https://zmresults.org",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://zmresults.org/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-sans bg-slate-950 min-h-screen">
      <Header />
      <main>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-slate-950"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/client-acquisition-system" element={<BlogPost />} />
            <Route path="/blog/social-media-conversion-strategy" element={<SocialMediaConversionPost />} />
            <Route path="/blog/website-conversion-mistakes" element={<WebsiteConversionPost />} />
            <Route path="/blog/local-seo-domination-guide" element={<LocalSEOPost />} />
            <Route path="/blog/digital-marketing-trends-south-africa-2024" element={<MarketingTrendsPost />} />
            <Route path="/blog/complete-lead-generation-guide-south-africa" element={<LeadGenerationGuidePost />} />
            <Route path="/blog/digital-marketing-trends-2025" element={<DigitalMarketingTrends2025 />} />
            <Route path="/blog/ai-marketing-guide-2025" element={<AIMarketingGuide2025 />} />
            <Route path="/blog/social-media-strategy-2025" element={<SocialMediaStrategy2025 />} />
            <Route path="/blog/get-50-qualified-leads-30-days-south-africa-2025" element={<Week1LeadGeneration />} />
            <Route path="/blog/why-sa-websites-dont-convert-how-to-fix-2025" element={<Week2WebsiteConversion />} />
            <Route path="/blog/100k-social-media-strategy-sa-business-2025" element={<Week3SocialMediaStrategy />} />
            <Route path="/blog/google-ads-vs-facebook-ads-sa-businesses-2025" element={<Week4GoogleVsFacebook />} />
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
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;