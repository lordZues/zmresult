import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

interface BlogPostPreview {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogListingPage: React.FC = () => {
  const blogPosts: BlogPostPreview[] = [
    {
      title: 'Top Digital Marketing Trends South Africa 2025',
      slug: 'digital-marketing-trends-south-africa-2025',
      excerpt: 'Discover the latest digital marketing trends in South Africa. Expert insights on SEO, social media marketing, and lead generation strategies.',
      date: '2025-01-15',
      readTime: '8 min',
      category: 'Digital Marketing'
    },
    {
      title: 'Google Ads South Africa 2025: Complete Guide',
      slug: 'google-ads-south-africa-guide-2025',
      excerpt: 'Master Google Ads in South Africa. Learn how to run profitable campaigns, reduce costs, and generate quality leads.',
      date: '2025-01-16',
      readTime: '10 min',
      category: 'PPC Advertising'
    },
    {
      title: 'SEO Checklist for South African Businesses 2025',
      slug: 'seo-checklist-south-africa-2025',
      excerpt: 'Complete SEO checklist to rank #1 on Google in South Africa. Local SEO tips for Durban, Johannesburg, and Cape Town businesses.',
      date: '2025-01-17',
      readTime: '12 min',
      category: 'SEO'
    },
    {
      title: 'Social Media Marketing Strategy for SA Small Businesses',
      slug: 'social-media-marketing-strategy-small-business-2025',
      excerpt: 'How to create a profitable social media marketing strategy. Facebook, Instagram, and LinkedIn tips for South African businesses.',
      date: '2025-01-18',
      readTime: '9 min',
      category: 'Social Media'
    },
    {
      title: 'Website Design Trends South Africa 2025',
      slug: 'website-design-trends-south-africa-2025',
      excerpt: 'Latest website design trends for SA businesses. Mobile-first design, conversion optimization, and user experience best practices.',
      date: '2025-01-19',
      readTime: '7 min',
      category: 'Web Design'
    },
    {
      title: 'Email Marketing Guide for South African Businesses',
      slug: 'email-marketing-guide-south-africa-2025',
      excerpt: 'Build profitable email marketing campaigns. Automation strategies, list building, and conversion optimization for SA businesses.',
      date: '2025-01-20',
      readTime: '11 min',
      category: 'Email Marketing'
    },
    {
      title: 'Facebook Ads vs Google Ads: Which is Better in SA?',
      slug: 'facebook-ads-vs-google-ads-south-africa',
      excerpt: 'Comprehensive comparison of Facebook Ads and Google Ads. Which platform generates better ROI for South African businesses?',
      date: '2025-01-21',
      readTime: '8 min',
      category: 'PPC Advertising'
    },
    {
      title: 'Content Marketing Strategy That Drives Sales',
      slug: 'content-marketing-strategy-south-africa-2025',
      excerpt: 'Create a content marketing strategy that generates leads and sales. Blogging, video content, and SEO integration tips.',
      date: '2025-01-22',
      readTime: '10 min',
      category: 'Content Marketing'
    },
    {
      title: 'Local SEO for Durban Businesses: Complete Guide',
      slug: 'local-seo-durban-businesses-guide',
      excerpt: 'Dominate local search in Durban. Google Business Profile optimization, local citations, and review management strategies.',
      date: '2025-01-23',
      readTime: '9 min',
      category: 'Local SEO'
    },
    {
      title: 'Lead Generation Strategies That Actually Work in 2025',
      slug: 'lead-generation-strategies-south-africa-2025',
      excerpt: 'Proven lead generation strategies for SA businesses. Capture more qualified leads and turn them into paying customers.',
      date: '2025-01-24',
      readTime: '12 min',
      category: 'Lead Generation'
    },
    {
      title: 'E-commerce Marketing Guide for South Africa',
      slug: 'ecommerce-marketing-south-africa-2025',
      excerpt: 'Grow your online store with proven e-commerce marketing strategies. Product ads, retargeting, and conversion optimization.',
      date: '2025-01-25',
      readTime: '11 min',
      category: 'E-commerce'
    },
    {
      title: 'Video Marketing for South African Businesses',
      slug: 'video-marketing-south-africa-2025',
      excerpt: 'Leverage video marketing to grow your business. YouTube, TikTok, and Instagram Reels strategies for SA brands.',
      date: '2025-01-26',
      readTime: '8 min',
      category: 'Video Marketing'
    },
    {
      title: 'How to Choose a Marketing Agency in South Africa',
      slug: 'choose-marketing-agency-south-africa',
      excerpt: 'What to look for when hiring a digital marketing agency. Red flags, pricing, and questions to ask before signing.',
      date: '2025-01-27',
      readTime: '7 min',
      category: 'Business Tips'
    },
    {
      title: 'WhatsApp Business Marketing for SA Companies',
      slug: 'whatsapp-business-marketing-south-africa',
      excerpt: 'Use WhatsApp Business to generate leads and close sales. Automation, broadcast lists, and customer service tips.',
      date: '2025-01-28',
      readTime: '6 min',
      category: 'WhatsApp Marketing'
    },
    {
      title: 'Marketing Budget Planning for Small Businesses',
      slug: 'marketing-budget-small-business-south-africa',
      excerpt: 'How to allocate your marketing budget effectively. ROI-focused spending across digital channels for SA businesses.',
      date: '2025-01-29',
      readTime: '9 min',
      category: 'Business Strategy'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Blog South Africa | SEO, Ads, Social Media Tips</title>
        <meta name="description" content="Expert digital marketing advice for South African businesses. Latest tips on SEO, Google Ads, social media, and lead generation from Durban's top agency." />
        <meta name="keywords" content="digital marketing blog, seo tips south africa, google ads guide, social media marketing, small business marketing, marketing agency durban" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm">Latest Marketing Insights</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
                Digital Marketing Blog
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Expert advice on SEO, Google Ads, social media, and lead generation for South African businesses
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="glass-card rounded-xl overflow-hidden hover-lift group">
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                      <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-ZA', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <div className="flex items-center gap-1 text-slate-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} read</span>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-8 mt-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Get a free marketing consultation from South Africa's top digital marketing agency. We guarantee results or your money back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  Get Free Consultation
                </a>
                <a
                  href="https://wa.me/27736957783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListingPage;
