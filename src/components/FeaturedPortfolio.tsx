import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioService } from '../services/portfolioService';
import { PortfolioWithDetails } from '../lib/supabase';
import { ArrowRight, Briefcase, Eye } from 'lucide-react';

const FeaturedPortfolio: React.FC = () => {
  const [portfolios, setPortfolios] = useState<PortfolioWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setError(true);
      }
    }, 3000);

    loadFeaturedPortfolios();

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadFeaturedPortfolios = async () => {
    try {
      const data = await portfolioService.getFeaturedPortfolios(3);
      setPortfolios(data);
      setError(false);
    } catch (error) {
      console.error('Error loading featured portfolios:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null;
  }

  if (error || portfolios.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase mb-6">
            <Briefcase className="w-4 h-4 mr-2" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 leading-tight">
            Real Results from <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Real Clients</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolios.map(portfolio => (
            <Link
              key={portfolio.id}
              to={`/portfolio/${portfolio.slug}`}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100"
            >
              {portfolio.thumbnail_url ? (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={portfolio.thumbnail_url}
                    alt={portfolio.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Briefcase className="w-24 h-24 text-white opacity-50" />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold">
                    {portfolio.industry}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Eye className="w-4 h-4" />
                    {portfolio.view_count}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-950 mb-2 group-hover:text-orange-600 transition-colors">
                  {portfolio.title}
                </h3>
                <p className="text-gray-600 font-medium mb-3">{portfolio.client_name}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{portfolio.short_description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {portfolio.services.slice(0, 2).map(service => (
                    <span key={service} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {service}
                    </span>
                  ))}
                  {portfolio.services.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      +{portfolio.services.length - 2} more
                    </span>
                  )}
                </div>

                {portfolio.metrics && portfolio.metrics.length > 0 && (
                  <div className="border-t border-gray-100 pt-4 grid grid-cols-2 gap-3">
                    {portfolio.metrics.slice(0, 2).map(metric => (
                      <div key={metric.id}>
                        <div className="text-lg font-bold text-orange-600">{metric.metric_value}</div>
                        <div className="text-xs text-gray-600">{metric.metric_name}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center text-blue-600 font-bold group-hover:text-orange-600 transition-colors">
                  View Case Study
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
