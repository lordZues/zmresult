import React from 'react';
import { ExternalLink, Award, Newspaper, BookOpen, TrendingUp, Shield } from 'lucide-react';

const BacklinkStrategy: React.FC = () => {
  const qualityBacklinkSources = [
    {
      category: 'Business Directories',
      icon: Award,
      sources: [
        { name: 'Google Business Profile', url: 'https://business.google.com', da: 95 },
        { name: 'Yelp South Africa', url: 'https://www.yelp.co.za', da: 92 },
        { name: 'Yellow Pages SA', url: 'https://www.yellowpages.co.za', da: 75 },
        { name: 'Brabys', url: 'https://www.brabys.com', da: 68 },
      ]
    },
    {
      category: 'Industry Publications',
      icon: Newspaper,
      sources: [
        { name: 'Business Tech', url: 'https://businesstech.co.za', da: 79 },
        { name: 'SME South Africa', url: 'https://smesouthafrica.co.za', da: 58 },
        { name: 'Entrepreneur Magazine', url: 'https://www.entrepreneurmag.co.za', da: 65 },
        { name: 'Bizcommunity', url: 'https://www.bizcommunity.com', da: 81 },
      ]
    },
    {
      category: 'Educational Resources',
      icon: BookOpen,
      sources: [
        { name: 'Marketing Associations', url: '#', da: 70 },
        { name: 'University Business Centers', url: '#', da: 85 },
        { name: 'Industry Webinars', url: '#', da: 65 },
        { name: 'Professional Training', url: '#', da: 72 },
      ]
    },
    {
      category: 'Social Proof',
      icon: Shield,
      sources: [
        { name: 'Clutch', url: 'https://clutch.co', da: 91 },
        { name: 'Trustpilot', url: 'https://www.trustpilot.com', da: 92 },
        { name: 'G2', url: 'https://www.g2.com', da: 90 },
        { name: 'Facebook Reviews', url: 'https://www.facebook.com', da: 96 },
      ]
    }
  ];

  const backlinkStrategies = [
    {
      title: 'Guest Blogging',
      description: 'Write valuable content for industry publications and blogs',
      difficulty: 'Medium',
      impact: 'High'
    },
    {
      title: 'Resource Page Links',
      description: 'Get featured on resource pages in your industry',
      difficulty: 'Easy',
      impact: 'Medium'
    },
    {
      title: 'Broken Link Building',
      description: 'Find broken links and offer your content as replacement',
      difficulty: 'Medium',
      impact: 'High'
    },
    {
      title: 'Digital PR',
      description: 'Create newsworthy content that attracts media coverage',
      difficulty: 'Hard',
      impact: 'Very High'
    },
    {
      title: 'Partnership Links',
      description: 'Build relationships with complementary businesses',
      difficulty: 'Easy',
      impact: 'Medium'
    },
    {
      title: 'Industry Awards',
      description: 'Apply for and win industry recognition and awards',
      difficulty: 'Medium',
      impact: 'High'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Quality Backlink Strategy
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Build authority and improve search rankings with strategic, high-quality backlinks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {qualityBacklinkSources.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="space-y-3">
                  {category.sources.map((source, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-cyan-400" />
                        <span className="text-slate-200 text-sm">{source.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded">
                        DA {source.da}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Proven Backlink Acquisition Strategies
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {backlinkStrategies.map((strategy, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-2">{strategy.title}</h4>
                <p className="text-slate-400 text-sm mb-4">{strategy.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Difficulty:</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      strategy.difficulty === 'Easy' ? 'bg-green-400/10 text-green-400' :
                      strategy.difficulty === 'Medium' ? 'bg-amber-400/10 text-amber-400' :
                      'bg-red-400/10 text-red-400'
                    }`}>
                      {strategy.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-cyan-400">{strategy.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Help Building Quality Backlinks?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our team specializes in ethical, white-hat link building strategies that improve your domain authority and search rankings.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
          >
            Get Your Free SEO Audit
          </a>
        </div>
      </div>
    </section>
  );
};

export default BacklinkStrategy;
