import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Portfolio {
  id: string;
  title: string;
  client_name: string;
  industry: string;
  slug: string;
  short_description: string;
  full_description: string;
  challenge: string;
  solution: string;
  services: string[];
  thumbnail_url: string | null;
  client_logo_url: string | null;
  testimonial: string | null;
  testimonial_author: string | null;
  project_date: string;
  is_featured: boolean;
  is_published: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface PortfolioImage {
  id: string;
  portfolio_id: string;
  image_url: string;
  caption: string | null;
  display_order: number;
  created_at: string;
}

export interface PortfolioMetric {
  id: string;
  portfolio_id: string;
  metric_name: string;
  metric_value: string;
  metric_type: string;
  display_order: number;
  created_at: string;
}

export interface PortfolioWithDetails extends Portfolio {
  images?: PortfolioImage[];
  metrics?: PortfolioMetric[];
}
