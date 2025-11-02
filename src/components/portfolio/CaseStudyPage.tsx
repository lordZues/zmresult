import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioService } from '../../services/portfolioService';
import { PortfolioWithDetails } from '../../lib/supabase';
import { ArrowLeft, Calendar, Briefcase, TrendingUp, Quote, ExternalLink, Eye } from 'lucide-react';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [portfolio, setPortfolio] = useState<PortfolioWithDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPortfolios, setRelatedPortfolios] = useState<PortfolioWithDetails[]>([]);

  useEffect(() => {
    if (slug) {
      loadPortfolio(slug);
    }
  }, [slug]);

  const loadPortfolio = async (portfolioSlug: string) => {
    try {
      setLoading(true);
      const data = await portfolioService.getPortfolioBySlug(portfolioSlug);
      setPortfolio(data);

      if (data) {
        const related = await portfolioService.getAllPortfolios({
          service: data.services[0]
        });
        setRelatedPortfolios(related.filter(p => p.id !== data.id).slice(0, 3));
      }
    } catch (error) {
      console.error('Error loading portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 font-semibold">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 font-semibold">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-cyan-400/20 overflow-hidden mb-12">
          {portfolio.thumbnail_url && (
            <div className="w-full h-96 overflow-hidden">
              <img
                src={portfolio.thumbnail_url}
                alt={portfolio.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {portfolio.services.map(service => (
                <span key={service} className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-bold border border-cyan-400/30">
                  {service}
                </span>
              ))}
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold border border-blue-400/30">
                {portfolio.industry}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {portfolio.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-cyan-300 mb-8">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                <span className="font-semibold">{portfolio.client_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(portfolio.project_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>{portfolio.view_count} views</span>
              </div>
            </div>

            <p className="text-xl text-cyan-200 leading-relaxed">
              {portfolio.short_description}
            </p>
          </div>
        </div>

        {portfolio.metrics && portfolio.metrics.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolio.metrics.map(metric => (
              <div
                key={metric.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-6 text-center hover:border-cyan-400 transition-all"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                  {metric.metric_value}
                </div>
                <div className="text-cyan-300 font-semibold">{metric.metric_name}</div>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
                The Challenge
              </h2>
              <p className="text-cyan-200 text-lg leading-relaxed whitespace-pre-line">
                {portfolio.challenge}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
                Our Solution
              </h2>
              <p className="text-cyan-200 text-lg leading-relaxed whitespace-pre-line">
                {portfolio.solution}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Full Story</h2>
              <div className="text-cyan-200 text-lg leading-relaxed whitespace-pre-line">
                {portfolio.full_description}
              </div>
            </div>

            {portfolio.images && portfolio.images.length > 0 && (
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolio.images.map(image => (
                    <div key={image.id} className="group">
                      <img
                        src={image.image_url}
                        alt={image.caption || portfolio.title}
                        className="w-full h-64 object-cover rounded-xl border border-cyan-400/20 group-hover:border-cyan-400 transition-all"
                      />
                      {image.caption && (
                        <p className="text-cyan-300 text-sm mt-2">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {portfolio.testimonial && (
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-8">
                <Quote className="w-12 h-12 text-cyan-400 mb-4" />
                <p className="text-white text-lg leading-relaxed mb-4 italic">
                  "{portfolio.testimonial}"
                </p>
                {portfolio.testimonial_author && (
                  <p className="text-cyan-300 font-semibold">
                    — {portfolio.testimonial_author}
                  </p>
                )}
              </div>
            )}

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-cyan-400 font-semibold mb-1">Client</div>
                  <div className="text-white">{portfolio.client_name}</div>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold mb-1">Industry</div>
                  <div className="text-white">{portfolio.industry}</div>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold mb-1">Services Provided</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {portfolio.services.map(service => (
                      <span key={service} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-cyan-400 font-semibold mb-1">Completion Date</div>
                  <div className="text-white">
                    {new Date(portfolio.project_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-2xl border border-orange-400/30 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready for Results Like These?</h3>
              <p className="text-orange-200 mb-6">Let's discuss how we can help your business grow.</p>
              <a
                href="/#book-call"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </div>

        {relatedPortfolios.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPortfolios.map(related => (
                <Link
                  key={related.id}
                  to={`/portfolio/${related.slug}`}
                  className="block bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 overflow-hidden hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all transform hover:scale-105"
                >
                  {related.thumbnail_url ? (
                    <img
                      src={related.thumbnail_url}
                      alt={related.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Briefcase className="w-16 h-16 text-white opacity-50" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-cyan-300 text-sm">{related.client_name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyPage;
