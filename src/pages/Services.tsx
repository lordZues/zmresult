import { Target, Share2, Code, Mail, TrendingUp, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Target, name: 'Search Optimization', desc: 'Strategic SEO services that enhance visibility and drive qualified organic traffic to your digital properties.' },
    { icon: Share2, name: 'Social Media Management', desc: 'Cultivate meaningful connections with sophisticated social media strategies and content excellence.' },
    { icon: Code, name: 'Web Development', desc: 'Elegant, high-performance websites crafted with precision and optimized for conversion.' },
    { icon: Mail, name: 'Email Marketing', desc: 'Refined email campaigns designed to nurture relationships and drive measurable engagement.' },
    { icon: TrendingUp, name: 'Growth Strategy', desc: 'Comprehensive strategic planning focused on sustainable expansion and market leadership.' },
    { icon: BarChart, name: 'Analytics & Insights', desc: 'Advanced data analysis providing actionable intelligence for informed business decisions.' }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to elevate your brand and drive exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="group p-8 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.name}</h3>
              <p className="text-neutral-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
