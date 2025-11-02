import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Portfolio } from '../lib/supabase';

export default function Portfolio() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('portfolios').select('*').eq('is_published', true).then(({ data }) => {
      setPortfolios(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center"><p className="text-white text-lg">Loading...</p></div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-white mb-16 text-center">Our Portfolio</h1>
        {portfolios.length === 0 ? (
          <p className="text-2xl text-blue-200 text-center">No projects yet. Check back soon!</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {portfolios.map(p => (
              <div key={p.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all">
                {p.thumbnail_url && <img src={p.thumbnail_url} alt={p.title} className="w-full h-48 object-cover" />}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-blue-200 mb-2">{p.client_name}</p>
                  <p className="text-blue-300">{p.short_description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
