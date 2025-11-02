import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioService } from '../../services/portfolioService';
import { PortfolioWithDetails } from '../../lib/supabase';
import { TrendingUp, Calendar, Filter, Grid, List, Eye, Briefcase } from 'lucide-react';

const PortfolioGallery: React.FC = () => {
  const [portfolios, setPortfolios] = useState<PortfolioWithDetails[]>([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState<PortfolioWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    loadPortfolios();
  }, []);

  useEffect(() => {
    filterPortfolios();
  }, [selectedService, selectedIndustry, portfolios]);

  const loadPortfolios = async () => {
    try {
      const data = await portfolioService.getAllPortfolios();
      setPortfolios(data);
      setFilteredPortfolios(data);
    } catch (error) {
      console.error('Error loading portfolios:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPortfolios = () => {
    let filtered = [...portfolios];

    if (selectedService !== 'all') {
      filtered = filtered.filter(p => p.services.includes(selectedService));
    }

    if (selectedIndustry !== 'all') {
      filtered = filtered.filter(p => p.industry === selectedIndustry);
    }

    setFilteredPortfolios(filtered);
  };

  const allServices = portfolioService.getUniqueServices(portfolios);
  const allIndustries = portfolioService.getUniqueIndustries(portfolios);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 font-semibold">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-500/20 text-cyan-300 px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase mb-6 border border-cyan-400/30">
            <Briefcase className="w-4 h-4 mr-2" />
            Our Work
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Showcase</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-200 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-cyan-400/20 p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex-1">
                <label className="block text-cyan-300 text-sm font-semibold mb-2">
                  <Filter className="inline w-4 h-4 mr-1" />
                  Filter by Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                >
                  <option value="all">All Services</option>
                  {allServices.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-cyan-300 text-sm font-semibold mb-2">
                  <Briefcase className="inline w-4 h-4 mr-1" />
                  Filter by Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                >
                  <option value="all">All Industries</option>
                  {allIndustries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-cyan-300 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'list'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-cyan-300 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 text-cyan-300 text-sm font-medium">
            Showing {filteredPortfolios.length} of {portfolios.length} projects
          </div>
        </div>

        {filteredPortfolios.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-cyan-400/20 p-12 max-w-md mx-auto">
              <Briefcase className="w-16 h-16 text-cyan-400 mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-cyan-300">Try adjusting your filters to see more results.</p>
            </div>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredPortfolios.map(portfolio => (
              <PortfolioCard key={portfolio.id} portfolio={portfolio} viewMode={viewMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface PortfolioCardProps {
  portfolio: PortfolioWithDetails;
  viewMode: 'grid' | 'list';
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio, viewMode }) => {
  const topMetrics = portfolio.metrics?.slice(0, 3) || [];

  if (viewMode === 'list') {
    return (
      <Link
        to={`/portfolio/${portfolio.slug}`}
        className="block bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-6 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all group"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            {portfolio.thumbnail_url ? (
              <img
                src={portfolio.thumbnail_url}
                alt={portfolio.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Briefcase className="w-16 h-16 text-white opacity-50" />
              </div>
            )}
          </div>
          <div className="md:w-2/3">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {portfolio.title}
                </h3>
                <p className="text-cyan-300 font-medium">{portfolio.client_name} • {portfolio.industry}</p>
              </div>
              <div className="flex items-center gap-2 text-cyan-300 text-sm">
                <Eye className="w-4 h-4" />
                {portfolio.view_count}
              </div>
            </div>
            <p className="text-cyan-200 mb-4">{portfolio.short_description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {portfolio.services.map(service => (
                <span key={service} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30">
                  {service}
                </span>
              ))}
            </div>
            {topMetrics.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {topMetrics.map(metric => (
                  <div key={metric.id}>
                    <div className="text-2xl font-bold text-cyan-400">{metric.metric_value}</div>
                    <div className="text-xs text-cyan-300">{metric.metric_name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/portfolio/${portfolio.slug}`}
      className="block bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 overflow-hidden hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all transform hover:scale-105 group"
    >
      {portfolio.thumbnail_url ? (
        <img
          src={portfolio.thumbnail_url}
          alt={portfolio.title}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
          <Briefcase className="w-24 h-24 text-white opacity-50" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-bold border border-cyan-400/30">
            {portfolio.industry}
          </span>
          <div className="flex items-center gap-1 text-cyan-300 text-sm">
            <Eye className="w-4 h-4" />
            {portfolio.view_count}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {portfolio.title}
        </h3>
        <p className="text-cyan-300 font-medium mb-3">{portfolio.client_name}</p>
        <p className="text-cyan-200 text-sm mb-4 line-clamp-2">{portfolio.short_description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {portfolio.services.slice(0, 3).map(service => (
            <span key={service} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-medium border border-cyan-400/30">
              {service}
            </span>
          ))}
        </div>
        {topMetrics.length > 0 && (
          <div className="border-t border-cyan-400/20 pt-4 grid grid-cols-2 gap-3">
            {topMetrics.slice(0, 2).map(metric => (
              <div key={metric.id}>
                <div className="text-lg font-bold text-cyan-400">{metric.metric_value}</div>
                <div className="text-xs text-cyan-300">{metric.metric_name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default PortfolioGallery;
