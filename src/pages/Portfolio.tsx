import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Briefcase, ExternalLink } from 'lucide-react';

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
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-primary text-sm font-semibold rounded-full mb-8">
              Our Work
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              <span className="gradient-text">Portfolio</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              Explore our successful projects and the results we've delivered for clients
            </p>
          </div>

          {portfolios.length === 0 ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-xl mb-6">
                  <Briefcase className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Projects Coming Soon</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our portfolio showcases will be available here shortly. We're excited to share our work with you.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all shadow-lg"
                >
                  Contact Us
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {portfolios.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    {p.thumbnail_url ? (
                      <>
                        <img
                          src={p.thumbnail_url}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Briefcase className="w-16 h-16 text-slate-300" />
                      </div>
                    )}

                    <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-sm text-primary font-medium mb-3">{p.client_name}</p>

                    <p className="text-slate-600 leading-relaxed">{p.short_description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let's work together to create something exceptional for your business
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary hover:bg-blue-50 font-semibold rounded-lg transition-all shadow-lg"
            >
              Get in Touch
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
