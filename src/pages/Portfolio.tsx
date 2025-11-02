import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Briefcase } from 'lucide-react';

interface Portfolio {
  id: string;
  title: string;
  client_name: string;
  short_description: string;
  thumbnail_url: string | null;
}

export default function Portfolio() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('portfolios').select('id, title, client_name, short_description, thumbnail_url').eq('is_published', true).then(({ data }) => {
      setPortfolios(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 text-lg">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400">Showcasing our best work and success stories</p>
        </div>

        {portfolios.length === 0 ? (
          <div className="text-center py-20">
            <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-2xl text-gray-400">No projects yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolios.map(p => (
              <div key={p.id} className="group rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
                {p.thumbnail_url ? (
                  <img src={p.thumbnail_url} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Briefcase className="w-12 h-12 text-cyan-400" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{p.client_name}</p>
                  <p className="text-gray-400">{p.short_description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
