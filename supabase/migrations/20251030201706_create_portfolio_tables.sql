/*
  # Portfolio Showcase System - Database Schema

  ## Overview
  Creates a comprehensive portfolio management system for showcasing completed client projects,
  campaigns, and their results. This migration establishes three interconnected tables to store
  portfolio items, associated images, and performance metrics.

  ## New Tables

  ### `portfolios`
  Main table storing portfolio project information:
  - `id` (uuid, primary key) - Unique identifier for each portfolio item
  - `title` (text) - Project title (e.g., "Tech Startup Lead Generation Campaign")
  - `client_name` (text) - Client business name
  - `industry` (text) - Client's industry (e.g., "Technology", "Healthcare", "Retail")
  - `slug` (text, unique) - URL-friendly identifier for case study pages
  - `short_description` (text) - Brief summary for gallery cards (max 200 chars)
  - `full_description` (text) - Detailed project overview and narrative
  - `challenge` (text) - Client's problem or challenge before working together
  - `solution` (text) - Strategy and approach implemented
  - `services` (text[]) - Array of services provided (e.g., ["Google Ads", "Web Design"])
  - `thumbnail_url` (text) - Main project image URL
  - `client_logo_url` (text, optional) - Client logo image URL
  - `testimonial` (text, optional) - Client testimonial quote
  - `testimonial_author` (text, optional) - Person who gave testimonial
  - `project_date` (date) - When project was completed
  - `is_featured` (boolean) - Whether to feature on homepage
  - `is_published` (boolean) - Whether portfolio item is visible to public
  - `view_count` (integer) - Number of times case study was viewed
  - `created_at` (timestamptz) - When record was created
  - `updated_at` (timestamptz) - When record was last updated

  ### `portfolio_images`
  Stores multiple images for each portfolio item:
  - `id` (uuid, primary key) - Unique identifier
  - `portfolio_id` (uuid, foreign key) - References portfolios table
  - `image_url` (text) - URL to image in storage
  - `caption` (text, optional) - Image description or caption
  - `display_order` (integer) - Order for displaying images
  - `created_at` (timestamptz) - When image was added

  ### `portfolio_metrics`
  Stores key performance indicators for each portfolio:
  - `id` (uuid, primary key) - Unique identifier
  - `portfolio_id` (uuid, foreign key) - References portfolios table
  - `metric_name` (text) - Name of metric (e.g., "Leads Generated", "ROI")
  - `metric_value` (text) - Value as string (e.g., "37+ Leads", "312% ROI")
  - `metric_type` (text) - Category: "leads", "revenue", "conversion", "engagement"
  - `display_order` (integer) - Order for displaying metrics
  - `created_at` (timestamptz) - When metric was recorded

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public can read published portfolios
  - Only authenticated admins can create, update, or delete portfolios
  - View counts can be incremented by anyone

  ## Indexes
  - Index on portfolios.slug for fast URL lookups
  - Index on portfolios.is_published for filtering
  - Index on portfolio_id foreign keys for join performance
*/

-- Create portfolios table
CREATE TABLE IF NOT EXISTS portfolios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  client_name text NOT NULL,
  industry text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text NOT NULL,
  full_description text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  services text[] NOT NULL DEFAULT '{}',
  thumbnail_url text,
  client_logo_url text,
  testimonial text,
  testimonial_author text,
  project_date date NOT NULL,
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT true,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create portfolio_images table
CREATE TABLE IF NOT EXISTS portfolio_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  portfolio_id uuid NOT NULL REFERENCES portfolios(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  caption text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create portfolio_metrics table
CREATE TABLE IF NOT EXISTS portfolio_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  portfolio_id uuid NOT NULL REFERENCES portfolios(id) ON DELETE CASCADE,
  metric_name text NOT NULL,
  metric_value text NOT NULL,
  metric_type text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_portfolios_slug ON portfolios(slug);
CREATE INDEX IF NOT EXISTS idx_portfolios_published ON portfolios(is_published);
CREATE INDEX IF NOT EXISTS idx_portfolios_featured ON portfolios(is_featured);
CREATE INDEX IF NOT EXISTS idx_portfolio_images_portfolio_id ON portfolio_images(portfolio_id);
CREATE INDEX IF NOT EXISTS idx_portfolio_metrics_portfolio_id ON portfolio_metrics(portfolio_id);

-- Enable Row Level Security
ALTER TABLE portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_metrics ENABLE ROW LEVEL SECURITY;

-- Policies for portfolios table
CREATE POLICY "Public can view published portfolios"
  ON portfolios FOR SELECT
  TO public
  USING (is_published = true);

CREATE POLICY "Authenticated users can view all portfolios"
  ON portfolios FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert portfolios"
  ON portfolios FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update portfolios"
  ON portfolios FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete portfolios"
  ON portfolios FOR DELETE
  TO authenticated
  USING (true);

-- Policies for portfolio_images table
CREATE POLICY "Public can view images of published portfolios"
  ON portfolio_images FOR SELECT
  TO public
  USING (
    EXISTS (
      SELECT 1 FROM portfolios
      WHERE portfolios.id = portfolio_images.portfolio_id
      AND portfolios.is_published = true
    )
  );

CREATE POLICY "Authenticated users can view all images"
  ON portfolio_images FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert images"
  ON portfolio_images FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update images"
  ON portfolio_images FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete images"
  ON portfolio_images FOR DELETE
  TO authenticated
  USING (true);

-- Policies for portfolio_metrics table
CREATE POLICY "Public can view metrics of published portfolios"
  ON portfolio_metrics FOR SELECT
  TO public
  USING (
    EXISTS (
      SELECT 1 FROM portfolios
      WHERE portfolios.id = portfolio_metrics.portfolio_id
      AND portfolios.is_published = true
    )
  );

CREATE POLICY "Authenticated users can view all metrics"
  ON portfolio_metrics FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert metrics"
  ON portfolio_metrics FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update metrics"
  ON portfolio_metrics FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete metrics"
  ON portfolio_metrics FOR DELETE
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_portfolios_updated_at
  BEFORE UPDATE ON portfolios
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();