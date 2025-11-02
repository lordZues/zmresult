import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { portfolioService } from '../../services/portfolioService';
import { ArrowLeft, Save, Loader, Plus, X, Calendar } from 'lucide-react';

const PortfolioForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    client_name: '',
    industry: '',
    slug: '',
    short_description: '',
    full_description: '',
    challenge: '',
    solution: '',
    services: [] as string[],
    thumbnail_url: '',
    client_logo_url: '',
    testimonial: '',
    testimonial_author: '',
    project_date: new Date().toISOString().split('T')[0],
    is_featured: false,
    is_published: true,
  });

  const [metrics, setMetrics] = useState<Array<{ metric_name: string; metric_value: string; metric_type: string }>>([
    { metric_name: '', metric_value: '', metric_type: 'leads' }
  ]);

  const [newService, setNewService] = useState('');

  const serviceOptions = [
    'Google Ads',
    'Social Media Marketing',
    'Web Design',
    'Content Marketing',
    'SEO',
    'Email Marketing',
    'Lead Generation',
  ];

  const industryOptions = [
    'Technology',
    'Healthcare',
    'Retail',
    'Finance',
    'Education',
    'Real Estate',
    'Manufacturing',
    'Professional Services',
    'E-commerce',
    'Hospitality',
  ];

  const metricTypes = [
    { value: 'leads', label: 'Lead Generation' },
    { value: 'revenue', label: 'Revenue' },
    { value: 'conversion', label: 'Conversion Rate' },
    { value: 'engagement', label: 'Engagement' },
  ];

  useEffect(() => {
    if (id && id !== 'new') {
      loadPortfolio(id);
    }
  }, [id]);

  const loadPortfolio = async (portfolioId: string) => {
    try {
      setLoading(true);
      const portfolios = await portfolioService.getAllPortfoliosForAdmin();
      const portfolio = portfolios.find(p => p.id === portfolioId);

      if (portfolio) {
        setFormData({
          title: portfolio.title,
          client_name: portfolio.client_name,
          industry: portfolio.industry,
          slug: portfolio.slug,
          short_description: portfolio.short_description,
          full_description: portfolio.full_description,
          challenge: portfolio.challenge,
          solution: portfolio.solution,
          services: portfolio.services,
          thumbnail_url: portfolio.thumbnail_url || '',
          client_logo_url: portfolio.client_logo_url || '',
          testimonial: portfolio.testimonial || '',
          testimonial_author: portfolio.testimonial_author || '',
          project_date: portfolio.project_date,
          is_featured: portfolio.is_featured,
          is_published: portfolio.is_published,
        });

        if (portfolio.metrics && portfolio.metrics.length > 0) {
          setMetrics(portfolio.metrics.map(m => ({
            metric_name: m.metric_name,
            metric_value: m.metric_value,
            metric_type: m.metric_type,
          })));
        }
      }
    } catch (error) {
      console.error('Error loading portfolio:', error);
      setError('Failed to load portfolio');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'title' && !id) {
      setFormData(prev => ({
        ...prev,
        slug: generateSlug(value)
      }));
    }
  };

  const handleAddService = (service: string) => {
    if (service && !formData.services.includes(service)) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, service]
      }));
    }
  };

  const handleRemoveService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter(s => s !== service)
    }));
  };

  const handleAddMetric = () => {
    setMetrics([...metrics, { metric_name: '', metric_value: '', metric_type: 'leads' }]);
  };

  const handleRemoveMetric = (index: number) => {
    setMetrics(metrics.filter((_, i) => i !== index));
  };

  const handleMetricChange = (index: number, field: string, value: string) => {
    const newMetrics = [...metrics];
    newMetrics[index] = { ...newMetrics[index], [field]: value };
    setMetrics(newMetrics);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    try {
      if (!formData.title || !formData.client_name || !formData.industry || !formData.slug) {
        throw new Error('Please fill in all required fields');
      }

      let portfolioId: string;

      if (id && id !== 'new') {
        await portfolioService.updatePortfolio(id, formData);
        portfolioId = id;
      } else {
        const newPortfolio = await portfolioService.createPortfolio(formData);
        portfolioId = newPortfolio.id;
      }

      const validMetrics = metrics.filter(m => m.metric_name && m.metric_value);
      for (const metric of validMetrics) {
        await portfolioService.addPortfolioMetric({
          portfolio_id: portfolioId,
          metric_name: metric.metric_name,
          metric_value: metric.metric_value,
          metric_type: metric.metric_type,
          display_order: validMetrics.indexOf(metric),
        });
      }

      navigate('/admin/portfolio');
    } catch (error) {
      console.error('Error saving portfolio:', error);
      setError(error instanceof Error ? error.message : 'Failed to save portfolio');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-cyan-400 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <button
          onClick={() => navigate('/admin/portfolio')}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio Management
        </button>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-cyan-400/20 p-8">
          <h1 className="text-4xl font-black text-white mb-2">
            {id && id !== 'new' ? 'Edit Project' : 'Add New Project'}
          </h1>
          <p className="text-cyan-300 mb-8">Fill in the details below to showcase your work</p>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Project Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="e.g., Tech Startup Lead Generation Campaign"
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Client Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="client_name"
                  value={formData.client_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="e.g., TechCorp Solutions"
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Industry <span className="text-red-400">*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                >
                  <option value="">Select Industry</option>
                  {industryOptions.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  URL Slug <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="tech-startup-lead-generation"
                />
              </div>
            </div>

            <div>
              <label className="block text-cyan-300 font-semibold mb-2">
                Short Description <span className="text-red-400">*</span>
              </label>
              <textarea
                name="short_description"
                value={formData.short_description}
                onChange={handleInputChange}
                required
                rows={3}
                maxLength={200}
                className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                placeholder="Brief summary for gallery cards (max 200 characters)"
              />
              <div className="text-right text-cyan-300 text-sm mt-1">
                {formData.short_description.length}/200
              </div>
            </div>

            <div>
              <label className="block text-cyan-300 font-semibold mb-2">
                Services Provided <span className="text-red-400">*</span>
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.services.map(service => (
                  <span key={service} className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                    {service}
                    <button
                      type="button"
                      onClick={() => handleRemoveService(service)}
                      className="hover:text-red-400 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <select
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.filter(s => !formData.services.includes(s)).map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => {
                    if (newService) {
                      handleAddService(newService);
                      setNewService('');
                    }
                  }}
                  className="px-6 py-3 bg-cyan-500/20 text-cyan-300 rounded-xl font-bold hover:bg-cyan-500/30 border border-cyan-400/30 transition-all"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-cyan-300 font-semibold mb-2">
                The Challenge <span className="text-red-400">*</span>
              </label>
              <textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                placeholder="What problem did the client face?"
              />
            </div>

            <div>
              <label className="block text-cyan-300 font-semibold mb-2">
                Our Solution <span className="text-red-400">*</span>
              </label>
              <textarea
                name="solution"
                value={formData.solution}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                placeholder="How did you solve their problem?"
              />
            </div>

            <div>
              <label className="block text-cyan-300 font-semibold mb-2">
                Full Story <span className="text-red-400">*</span>
              </label>
              <textarea
                name="full_description"
                value={formData.full_description}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                placeholder="Detailed project overview and results"
              />
            </div>

            <div>
              <label className="block text-cyan-300 font-semibold mb-4">
                Key Metrics
              </label>
              <div className="space-y-3">
                {metrics.map((metric, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      value={metric.metric_name}
                      onChange={(e) => handleMetricChange(index, 'metric_name', e.target.value)}
                      placeholder="Metric Name (e.g., Leads Generated)"
                      className="flex-1 px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                    <input
                      type="text"
                      value={metric.metric_value}
                      onChange={(e) => handleMetricChange(index, 'metric_value', e.target.value)}
                      placeholder="Value (e.g., 37+ Leads)"
                      className="flex-1 px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                    <select
                      value={metric.metric_type}
                      onChange={(e) => handleMetricChange(index, 'metric_type', e.target.value)}
                      className="px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    >
                      {metricTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => handleRemoveMetric(index)}
                      className="p-3 bg-red-500/20 text-red-300 rounded-xl hover:bg-red-500/30 border border-red-400/30 transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddMetric}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-xl font-bold hover:bg-cyan-500/30 border border-cyan-400/30 transition-all"
              >
                <Plus className="w-4 h-4" />
                Add Metric
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Thumbnail URL
                </label>
                <input
                  type="url"
                  name="thumbnail_url"
                  value={formData.thumbnail_url}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Project Date <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  name="project_date"
                  value={formData.project_date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-cyan-300 font-semibold mb-2">
                Client Testimonial
              </label>
              <textarea
                name="testimonial"
                value={formData.testimonial}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                placeholder="Client feedback or quote"
              />
            </div>

            <div>
              <label className="block text-cyan-300 font-semibold mb-2">
                Testimonial Author
              </label>
              <input
                type="text"
                name="testimonial_author"
                value={formData.testimonial_author}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                placeholder="e.g., John Smith, CEO"
              />
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="is_featured"
                  checked={formData.is_featured}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-cyan-400/30 bg-white/10 text-cyan-500 focus:ring-cyan-400"
                />
                <span className="text-cyan-300 font-semibold">Featured Project</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="is_published"
                  checked={formData.is_published}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-cyan-400/30 bg-white/10 text-cyan-500 focus:ring-cyan-400"
                />
                <span className="text-cyan-300 font-semibold">Published</span>
              </label>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {saving ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Save Project
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate('/admin/portfolio')}
                className="px-8 py-4 bg-white/10 text-cyan-300 rounded-xl font-bold hover:bg-white/20 border border-cyan-400/30 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortfolioForm;
