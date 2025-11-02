import { Target, Share2, Code, Mail, TrendingUp, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Target, name: 'SEO Optimization', desc: 'Dominate search rankings with advanced SEO strategies' },
    { icon: Share2, name: 'Social Media', desc: 'Build engaging communities across all platforms' },
    { icon: Code, name: 'Web Development', desc: 'High-performance websites that convert visitors' },
    { icon: Mail, name: 'Email Marketing', desc: 'Personalized campaigns that drive engagement' },
    { icon: TrendingUp, name: 'Growth Strategy', desc: 'Scalable plans for sustainable business growth' },
    { icon: BarChart, name: 'Analytics', desc: 'Data insights that inform smarter decisions' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
              <service.icon className="w-14 h-14 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
