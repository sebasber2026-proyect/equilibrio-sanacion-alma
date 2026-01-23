-- Create table for page views counter
CREATE TABLE IF NOT EXISTS public.page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  view_count BIGINT NOT NULL DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert initial row
INSERT INTO public.page_views (view_count) 
VALUES (0)
ON CONFLICT DO NOTHING;

-- Enable RLS (but allow public read access for the counter)
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the counter
CREATE POLICY "Anyone can view page counter"
  ON public.page_views
  FOR SELECT
  USING (true);

-- Create function to increment page views
CREATE OR REPLACE FUNCTION public.increment_page_views()
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.page_views
  SET view_count = view_count + 1,
      last_updated = now()
  WHERE id = (SELECT id FROM public.page_views LIMIT 1)
  RETURNING view_count INTO new_count;
  
  RETURN new_count;
END;
$$;