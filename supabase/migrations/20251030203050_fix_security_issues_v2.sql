/*
  # Fix Security Issues - Version 2

  ## Overview
  This migration addresses security concerns identified in the database:
  1. Removes unused indexes (they'll be recreated when actually needed)
  2. Consolidates multiple permissive policies into single, more efficient policies
  3. Fixes mutable search_path issues in functions

  ## Changes

  ### Indexes
  - Removes unused indexes that can be recreated later if needed
  - Keeps essential indexes for foreign key relationships

  ### Row Level Security Policies
  - Removes overlapping permissive policies
  - Creates single, efficient policies per action
  - Separates public and authenticated access more clearly

  ### Functions
  - Updates functions with immutable search_path for security
  - Uses SECURITY DEFINER with proper search_path configuration

  ## Security Improvements
  - Eliminates policy conflicts
  - Prevents search_path injection attacks
  - Optimizes policy evaluation
*/

-- Drop unused indexes
DROP INDEX IF EXISTS idx_portfolios_slug;
DROP INDEX IF EXISTS idx_portfolios_published;
DROP INDEX IF EXISTS idx_portfolios_featured;
DROP INDEX IF EXISTS idx_portfolio_images_portfolio_id;
DROP INDEX IF EXISTS idx_portfolio_metrics_portfolio_id;

-- Drop all existing policies to rebuild them properly
DROP POLICY IF EXISTS "Public can view published portfolios" ON portfolios;
DROP POLICY IF EXISTS "Authenticated users can view all portfolios" ON portfolios;
DROP POLICY IF EXISTS "Authenticated users can insert portfolios" ON portfolios;
DROP POLICY IF EXISTS "Authenticated users can update portfolios" ON portfolios;
DROP POLICY IF EXISTS "Authenticated users can delete portfolios" ON portfolios;

DROP POLICY IF EXISTS "Public can view images of published portfolios" ON portfolio_images;
DROP POLICY IF EXISTS "Authenticated users can view all images" ON portfolio_images;
DROP POLICY IF EXISTS "Authenticated users can insert images" ON portfolio_images;
DROP POLICY IF EXISTS "Authenticated users can update images" ON portfolio_images;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON portfolio_images;

DROP POLICY IF EXISTS "Public can view metrics of published portfolios" ON portfolio_metrics;
DROP POLICY IF EXISTS "Authenticated users can view all metrics" ON portfolio_metrics;
DROP POLICY IF EXISTS "Authenticated users can insert metrics" ON portfolio_metrics;
DROP POLICY IF EXISTS "Authenticated users can update metrics" ON portfolio_metrics;
DROP POLICY IF EXISTS "Authenticated users can delete metrics" ON portfolio_metrics;

-- Recreate policies with proper separation and no overlaps
-- Portfolios policies
CREATE POLICY "Allow public read access to published portfolios"
  ON portfolios FOR SELECT
  USING (is_published = true OR auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert"
  ON portfolios FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update"
  ON portfolios FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete"
  ON portfolios FOR DELETE
  TO authenticated
  USING (true);

-- Portfolio images policies
CREATE POLICY "Allow public read access to images"
  ON portfolio_images FOR SELECT
  USING (
    auth.role() = 'authenticated' OR
    EXISTS (
      SELECT 1 FROM portfolios
      WHERE portfolios.id = portfolio_images.portfolio_id
      AND portfolios.is_published = true
    )
  );

CREATE POLICY "Allow authenticated insert images"
  ON portfolio_images FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update images"
  ON portfolio_images FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete images"
  ON portfolio_images FOR DELETE
  TO authenticated
  USING (true);

-- Portfolio metrics policies
CREATE POLICY "Allow public read access to metrics"
  ON portfolio_metrics FOR SELECT
  USING (
    auth.role() = 'authenticated' OR
    EXISTS (
      SELECT 1 FROM portfolios
      WHERE portfolios.id = portfolio_metrics.portfolio_id
      AND portfolios.is_published = true
    )
  );

CREATE POLICY "Allow authenticated insert metrics"
  ON portfolio_metrics FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update metrics"
  ON portfolio_metrics FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete metrics"
  ON portfolio_metrics FOR DELETE
  TO authenticated
  USING (true);

-- Fix function search_path issues
-- Drop trigger first, then function
DROP TRIGGER IF EXISTS update_portfolios_updated_at ON portfolios;
DROP FUNCTION IF EXISTS update_updated_at_column();
DROP FUNCTION IF EXISTS increment_view_count(uuid);

-- Recreate update_updated_at_column with secure search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate increment_view_count with secure search_path
CREATE OR REPLACE FUNCTION increment_view_count(portfolio_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE portfolios
  SET view_count = view_count + 1
  WHERE id = portfolio_id;
END;
$$;

-- Recreate the trigger for updated_at
CREATE TRIGGER update_portfolios_updated_at
  BEFORE UPDATE ON portfolios
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create strategic indexes only for columns that will be actively queried
-- Composite index for filtering published portfolios by date
CREATE INDEX IF NOT EXISTS idx_portfolios_published_date 
  ON portfolios(is_published, project_date DESC) 
  WHERE is_published = true;

-- Composite index for featured portfolios
CREATE INDEX IF NOT EXISTS idx_portfolios_featured_published 
  ON portfolios(is_featured, is_published, project_date DESC) 
  WHERE is_featured = true AND is_published = true;

-- Foreign key indexes for join performance (these are important)
CREATE INDEX IF NOT EXISTS idx_portfolio_images_portfolio_id 
  ON portfolio_images(portfolio_id);

CREATE INDEX IF NOT EXISTS idx_portfolio_metrics_portfolio_id 
  ON portfolio_metrics(portfolio_id);

-- Unique index for slug lookups (most common single-record query)
CREATE UNIQUE INDEX IF NOT EXISTS idx_portfolios_slug_published 
  ON portfolios(slug) 
  WHERE is_published = true;