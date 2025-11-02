import { supabase, Portfolio, PortfolioImage, PortfolioMetric, PortfolioWithDetails } from '../lib/supabase';

export const portfolioService = {
  async getAllPortfolios(filters?: {
    service?: string;
    industry?: string;
    isFeatured?: boolean;
  }): Promise<PortfolioWithDetails[]> {
    let query = supabase
      .from('portfolios')
      .select(`
        *,
        images:portfolio_images(*),
        metrics:portfolio_metrics(*)
      `)
      .eq('is_published', true)
      .order('project_date', { ascending: false });

    if (filters?.service) {
      query = query.contains('services', [filters.service]);
    }

    if (filters?.industry) {
      query = query.eq('industry', filters.industry);
    }

    if (filters?.isFeatured) {
      query = query.eq('is_featured', true);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  },

  async getPortfolioBySlug(slug: string): Promise<PortfolioWithDetails | null> {
    const { data, error } = await supabase
      .from('portfolios')
      .select(`
        *,
        images:portfolio_images(*),
        metrics:portfolio_metrics(*)
      `)
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }

    if (data) {
      await this.incrementViewCount(data.id);
    }

    return data;
  },

  async incrementViewCount(portfolioId: string): Promise<void> {
    const { error } = await supabase.rpc('increment_view_count', {
      portfolio_id: portfolioId
    });

    if (error) console.error('Error incrementing view count:', error);
  },

  async getFeaturedPortfolios(limit: number = 3): Promise<PortfolioWithDetails[]> {
    const { data, error } = await supabase
      .from('portfolios')
      .select(`
        *,
        images:portfolio_images(*),
        metrics:portfolio_metrics(*)
      `)
      .eq('is_published', true)
      .eq('is_featured', true)
      .order('project_date', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  },

  async createPortfolio(portfolio: Omit<Portfolio, 'id' | 'created_at' | 'updated_at' | 'view_count'>): Promise<Portfolio> {
    const { data, error } = await supabase
      .from('portfolios')
      .insert(portfolio)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updatePortfolio(id: string, updates: Partial<Portfolio>): Promise<Portfolio> {
    const { data, error } = await supabase
      .from('portfolios')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deletePortfolio(id: string): Promise<void> {
    const { error } = await supabase
      .from('portfolios')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async addPortfolioImage(image: Omit<PortfolioImage, 'id' | 'created_at'>): Promise<PortfolioImage> {
    const { data, error } = await supabase
      .from('portfolio_images')
      .insert(image)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deletePortfolioImage(id: string): Promise<void> {
    const { error } = await supabase
      .from('portfolio_images')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async addPortfolioMetric(metric: Omit<PortfolioMetric, 'id' | 'created_at'>): Promise<PortfolioMetric> {
    const { data, error } = await supabase
      .from('portfolio_metrics')
      .insert(metric)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deletePortfolioMetric(id: string): Promise<void> {
    const { error } = await supabase
      .from('portfolio_metrics')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async getAllPortfoliosForAdmin(): Promise<PortfolioWithDetails[]> {
    const { data, error } = await supabase
      .from('portfolios')
      .select(`
        *,
        images:portfolio_images(*),
        metrics:portfolio_metrics(*)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  getUniqueIndustries(portfolios: Portfolio[]): string[] {
    const industries = portfolios.map(p => p.industry);
    return Array.from(new Set(industries)).sort();
  },

  getUniqueServices(portfolios: Portfolio[]): string[] {
    const allServices = portfolios.flatMap(p => p.services);
    return Array.from(new Set(allServices)).sort();
  }
};
