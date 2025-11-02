import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

const NewHero = lazy(() => import('./components/NewHero'));
const Services = lazy(() => import('./components/Services'));
const BookCall = lazy(() => import('./components/BookCall'));
const BlogSection = lazy(() => import('./components/BlogSection'));
const LocalSEO = lazy(() => import('./components/LocalSEO'));
const SEOContent = lazy(() => import('./components/SEOContent'));
const InternalLinks = lazy(() => import('./components/InternalLinks'));
const SEOKeywords = lazy(() => import('./components/SEOKeywords'));
const SEOFAQSection = lazy(() => import('./components/SEOFAQSection'));

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
const BlogListingPage = lazy(() => import('./components/pages/BlogListingPage'));
const Day1DigitalMarketingTrends = lazy(() => import('./components/BlogPosts/Daily/Day1'));
const Day2GoogleAdsGuide = lazy(() => import('./components/BlogPosts/Daily/Day2'));
const MarketingServicesLanding = lazy(() => import('./components/MarketingServicesLanding'));
const WebDevelopmentTrends2025 = lazy(() => import('./components/BlogPosts/WebDevelopmentTrends2025'));
const LocationSEO = lazy(() => import('./components/LocationSEO'));
const PortfolioGallery = lazy(() => import('./components/portfolio/PortfolioGallery'));
const CaseStudyPage = lazy(() => import('./components/portfolio/CaseStudyPage'));
const LoginPage = lazy(() => import('./components/auth/LoginPage'));
const ProtectedRoute = lazy(() => import('./components/auth/ProtectedRoute'));
const PortfolioManagement = lazy(() => import('./components/admin/PortfolioManagement'));
const PortfolioForm = lazy(() => import('./components/admin/PortfolioForm'));
const FeaturedPortfolio = lazy(() => import('./components/FeaturedPortfolio'));

function HomePage() {
  useEffect(() => {
    document.title = "ZM Results | Digital Marketing Agency South Africa 2025 | 30+ Businesses Helped";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional digital marketing agency in South Africa with 30+ successful clients. Get more customers with proven website design, social media marketing & lead generation. Money-back guarantee. Free consultation.');
    }
  }, []);

  return (
    <>
      <GoogleAnalytics />
      <LocalSEO />
      <SEOKeywords />
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50" />}>
        <NewHero />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <SEOContent />
        <Services />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <FeaturedPortfolio />
      </Suspense>
      <Suspense fallback={<div className="py-12" />}>
        <InternalLinks intent="service" />
        <SEOFAQSection />
        <BlogSection />
        <BookCall />
      </Suspense>
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
    <div className="font-sans bg-white min-h-screen">
      <Header />
      <main>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 font-semibold">Loading...</p>
            </div>
          </div>
        }>
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
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/digital-marketing-trends-south-africa-2025" element={<Day1DigitalMarketingTrends />} />
            <Route path="/blog/google-ads-south-africa-guide-2025" element={<Day2GoogleAdsGuide />} />
            <Route path="/blog/website-development-trends-2025-south-africa" element={<WebDevelopmentTrends2025 />} />
            <Route path="/professional-marketing-services-affordable-website-creation" element={<MarketingServicesLanding />} />
            <Route path="/web-design-services-south-africa" element={<WebDesignPage />} />
            <Route path="/social-media-marketing-services-south-africa" element={<SocialMediaPage />} />
            <Route path="/google-ads-management-south-africa" element={<GoogleAdsPage />} />
            <Route path="/content-marketing-services-south-africa" element={<ContentMarketingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/location/:city" element={<SEOPages />} />
            <Route path="/durban-marketing-agency" element={<LocationSEO />} />
            <Route path="/johannesburg-marketing-agency" element={<LocationSEO />} />
            <Route path="/cape-town-marketing-agency" element={<LocationSEO />} />
            <Route path="/pretoria-marketing-agency" element={<LocationSEO />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/portfolio" element={<PortfolioGallery />} />
            <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin/portfolio" element={<ProtectedRoute><PortfolioManagement /></ProtectedRoute>} />
            <Route path="/admin/portfolio/new" element={<ProtectedRoute><PortfolioForm /></ProtectedRoute>} />
            <Route path="/admin/portfolio/edit/:id" element={<ProtectedRoute><PortfolioForm /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;