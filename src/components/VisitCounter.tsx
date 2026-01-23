import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const VisitCounter = () => {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const incrementAndFetchViews = async () => {
      try {
        // Increment the view count
        const { data, error } = await supabase.rpc('increment_page_views');
        
        if (error) {
          console.error('Error incrementing views:', error);
          // Try to fetch current count if increment fails
          const { data: countData } = await supabase
            .from('page_views')
            .select('view_count')
            .maybeSingle();
          
          if (countData) {
            setViewCount(countData.view_count);
          }
        } else {
          setViewCount(data);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    incrementAndFetchViews();
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('es-CO');
  };

  return (
    <div className="flex items-center justify-center gap-3 py-6 border-t border-border/50">
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
        <Eye className="w-5 h-5 text-primary animate-pulse" />
        <span className="font-cormorant text-muted-foreground">
          {isLoading ? (
            <span className="inline-block w-16 h-4 bg-primary/20 rounded animate-pulse" />
          ) : (
            <>
              <span className="text-primary font-semibold text-lg">
                {viewCount !== null ? formatNumber(viewCount) : '0'}
              </span>
              {' '}
              <span className="text-sm">
                {viewCount === 1 ? 'visita' : 'visitas'}
              </span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default VisitCounter;
