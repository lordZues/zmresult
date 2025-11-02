import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InternalLink {
  title: string;
  description: string;
  url: string;
  category: 'service' | 'blog' | 'guide';
}

interface InternalLinksProps {
  currentPage?: string;
  intent?: 'learn' | 'service' | 'convert';
}

const InternalLinks: React.FC<InternalLinksProps> = ({ currentPage, intent = 'learn' }) => {
  const allLinks: InternalLink[] = [
    {
      title: 'Get 50 Qualified Leads in 30 Days',
      description: 'Step-by-step lead generation system for South African businesses',
      url: '/blog/get-50-qualified-leads-30-days-south-africa-2025',
      category: 'guide'
    },
    {
      title: 'Why SA Websites Don\'t Convert',
      description: 'Common mistakes killing your website conversions and how to fix them',
      url: '/blog/why-sa-websites-dont-convert-how-to-fix-2025',
      category: 'guide'
    },
    {
      title: 'R100k Social Media Strategy',
      description: 'Proven social media strategy that generated R100k for SA businesses',
      url: '/blog/100k-social-media-strategy-sa-business-2025',
      category: 'guide'
    },
    {
      title: 'Google Ads vs Facebook Ads',
      description: 'Which advertising platform delivers better ROI for SA businesses',
      url: '/blog/google-ads-vs-facebook-ads-sa-businesses-2025',
      category: 'guide'
    },
    {
      title: 'Web Design Services',
      description: 'Professional website design that converts visitors into customers',
      url: '/web-design-services-south-africa',
      category: 'service'
    },
    {
      title: 'Social Media Marketing',
      description: 'Grow your social media presence and generate qualified leads',
      url: '/social-media-marketing-services-south-africa',
      category: 'service'
    },
    {
      title: 'Google Ads Management',
      description: 'Expert Google Ads campaigns that deliver measurable ROI',
      url: '/google-ads-management-south-africa',
      category: 'service'
    },
    {
      title: 'Content Marketing Services',
      description: 'Strategic content that attracts and converts your target audience',
      url: '/content-marketing-services-south-africa',
      category: 'service'
    },
    {
      title: 'Digital Marketing Trends 2025',
      description: 'Latest digital marketing trends every SA business needs to know',
      url: '/blog/digital-marketing-trends-2025',
      category: 'blog'
    },
    {
      title: 'AI Marketing Guide 2025',
      description: 'How to leverage AI for marketing success in South Africa',
      url: '/blog/ai-marketing-guide-2025',
      category: 'blog'
    },
  ];

  const getRelevantLinks = (): InternalLink[] => {
    if (intent === 'service') {
      return allLinks.filter(link => link.category === 'service').slice(0, 3);
    }
    if (intent === 'convert') {
      return [
        ...allLinks.filter(link => link.category === 'service').slice(0, 2),
        ...allLinks.filter(link => link.category === 'guide').slice(0, 1)
      ];
    }
    return allLinks.filter(link =>
      link.url !== currentPage && (link.category === 'guide' || link.category === 'blog')
    ).slice(0, 3);
  };

  const relevantLinks = getRelevantLinks();

  if (relevantLinks.length === 0) return null;

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          {intent === 'service' ? 'Our Services' : 'Continue Learning'}
        </h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          {intent === 'service'
            ? 'Explore our comprehensive digital marketing services designed to grow your business'
            : 'Discover more insights and strategies to boost your digital marketing success'
          }
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {relevantLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  {link.category}
                </span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {link.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
