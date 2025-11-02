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
      <div className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-neutral-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 text-lg">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">Showcasing excellence in digital innovation and strategic execution</p>
        </div>

        {portfolios.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-neutral-400" />
            </div>
            <p className="text-xl text-neutral-600">Our featured projects will be showcased here soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolios.map(p => (
              <div key={p.id} className="group rounded-lg overflow-hidden bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-300">
                {p.thumbnail_url ? (
                  <img src={p.thumbnail_url} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-56 bg-neutral-100 flex items-center justify-center">
                    <Briefcase className="w-12 h-12 text-neutral-400" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{p.title}</h3>
                  <p className="text-neutral-500 text-sm mb-3 font-medium">{p.client_name}</p>
                  <p className="text-neutral-600 leading-relaxed">{p.short_description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
