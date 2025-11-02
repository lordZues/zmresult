import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Briefcase, Sparkles, ExternalLink } from 'lucide-react';

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
      <div className="min-h-screen bg-deep-space pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-electric-blue border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg font-medium">Loading amazing projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-space">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-electric-blue/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-slate-200">Our Work</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-8 animate-slide-up">
              <span className="gradient-text">Portfolio</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Showcasing excellence in digital innovation and strategic execution
            </p>
          </div>

          {portfolios.length === 0 ? (
            <div className="max-w-2xl mx-auto">
              <div className="relative p-16 glass rounded-[2rem] overflow-hidden group hover:bg-white/10 transition-all duration-500 animate-fade-in">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric-blue/20 rounded-full blur-[80px]"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-teal/20 rounded-full blur-[80px]"></div>

                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-electric-blue/20 to-cyber-cyan/20 rounded-3xl mb-8">
                    <Briefcase className="w-12 h-12 text-electric-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
                  <p className="text-xl text-slate-400">
                    Our featured projects will be showcased here soon. Stay tuned for impressive work that speaks for itself.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {portfolios.map((p, i) => (
                <div
                  key={p.id}
                  className="group relative rounded-3xl overflow-hidden glass hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-electric-blue/20 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-cyber-cyan/10 to-neon-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative aspect-video overflow-hidden bg-midnight/50">
                    {p.thumbnail_url ? (
                      <>
                        <img
                          src={p.thumbnail_url}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-space/90 via-deep-space/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Briefcase className="w-16 h-16 text-electric-blue/30" />
                      </div>
                    )}

                    <div className="absolute top-4 right-4 w-10 h-10 glass rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <ExternalLink className="w-5 h-5 text-electric-blue" />
                    </div>
                  </div>

                  <div className="relative p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                        {p.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-electric-blue to-cyber-cyan"></div>
                      <p className="text-sm text-slate-400 font-medium">{p.client_name}</p>
                    </div>

                    <p className="text-slate-400 leading-relaxed">{p.short_description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative py-32 bg-midnight overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-teal/10 rounded-full blur-[150px] animate-pulse-slow"></div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-16 glass rounded-[2rem] overflow-hidden group hover:bg-white/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-cyber-cyan/20 to-neon-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric-blue/30 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-teal/30 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative text-center">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ready to Create <span className="gradient-text">Your Success Story</span>?
                </h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  Let's build something remarkable together and add your project to our portfolio
                </p>
                <a
                  href="/contact"
                  className="group/btn inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-electric-blue via-cyber-cyan to-neon-teal font-bold rounded-2xl hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-300 text-white text-lg hover:scale-105"
                >
                  Start Your Project
                  <ExternalLink className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
