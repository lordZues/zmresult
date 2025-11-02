import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioService } from '../../services/portfolioService';
import { PortfolioWithDetails } from '../../lib/supabase';
import { Plus, Edit, Trash2, Eye, Calendar, Star, Search, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const PortfolioManagement: React.FC = () => {
  const [portfolios, setPortfolios] = useState<PortfolioWithDetails[]>([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState<PortfolioWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const { signOut } = useAuth();

  useEffect(() => {
    loadPortfolios();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = portfolios.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.industry.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPortfolios(filtered);
    } else {
      setFilteredPortfolios(portfolios);
    }
  }, [searchTerm, portfolios]);

  const loadPortfolios = async () => {
    try {
      const data = await portfolioService.getAllPortfoliosForAdmin();
      setPortfolios(data);
      setFilteredPortfolios(data);
    } catch (error) {
      console.error('Error loading portfolios:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await portfolioService.deletePortfolio(id);
      setPortfolios(portfolios.filter(p => p.id !== id));
      setDeleteConfirm(null);
    } catch (error) {
      console.error('Error deleting portfolio:', error);
      alert('Failed to delete portfolio');
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const stats = {
    total: portfolios.length,
    published: portfolios.filter(p => p.is_published).length,
    featured: portfolios.filter(p => p.is_featured).length,
    totalViews: portfolios.reduce((sum, p) => sum + p.view_count, 0),
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 font-semibold">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-black text-white mb-2">Portfolio Management</h1>
            <p className="text-cyan-300">Manage your showcase projects and case studies</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/admin/portfolio/new"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Add New Project
            </Link>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-6 py-3 rounded-xl font-bold hover:bg-red-500/30 border border-red-400/30 transition-all"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-cyan-300 font-semibold">Total Projects</div>
              <Eye className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-4xl font-black text-white">{stats.total}</div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-green-400/20 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-green-300 font-semibold">Published</div>
              <Eye className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-4xl font-black text-white">{stats.published}</div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-yellow-400/20 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-yellow-300 font-semibold">Featured</div>
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="text-4xl font-black text-white">{stats.featured}</div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-purple-300 font-semibold">Total Views</div>
              <Eye className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-4xl font-black text-white">{stats.totalViews}</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title, client, or industry..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            />
          </div>
        </div>

        {filteredPortfolios.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-cyan-400/20 p-12 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-cyan-300 mb-6">
                {searchTerm ? 'Try a different search term' : 'Get started by adding your first project'}
              </p>
              {!searchTerm && (
                <Link
                  to="/admin/portfolio/new"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all"
                >
                  <Plus className="w-5 h-5" />
                  Add Your First Project
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPortfolios.map(portfolio => (
              <div
                key={portfolio.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-6 hover:border-cyan-400 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-48 h-32 flex-shrink-0">
                    {portfolio.thumbnail_url ? (
                      <img
                        src={portfolio.thumbnail_url}
                        alt={portfolio.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Eye className="w-12 h-12 text-white opacity-50" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{portfolio.title}</h3>
                          {portfolio.is_featured && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-bold border border-yellow-400/30 flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              Featured
                            </span>
                          )}
                          {!portfolio.is_published && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-bold border border-red-400/30">
                              Draft
                            </span>
                          )}
                        </div>
                        <p className="text-cyan-300 font-medium">{portfolio.client_name} • {portfolio.industry}</p>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          to={`/portfolio/${portfolio.slug}`}
                          target="_blank"
                          className="p-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all border border-blue-400/30"
                          title="View"
                        >
                          <Eye className="w-5 h-5" />
                        </Link>
                        <Link
                          to={`/admin/portfolio/edit/${portfolio.id}`}
                          className="p-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all border border-cyan-400/30"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5" />
                        </Link>
                        {deleteConfirm === portfolio.id ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleDelete(portfolio.id)}
                              className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-sm font-bold"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="px-3 py-2 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-all text-sm font-bold border border-gray-400/30"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirm(portfolio.id)}
                            className="p-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all border border-red-400/30"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-cyan-200 mb-4">{portfolio.short_description}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Calendar className="w-4 h-4" />
                        {new Date(portfolio.project_date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Eye className="w-4 h-4" />
                        {portfolio.view_count} views
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {portfolio.services.map(service => (
                          <span key={service} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-400/30">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioManagement;
