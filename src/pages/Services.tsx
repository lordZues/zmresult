import { Target, Share2, Code, Mail, TrendingUp, BarChart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Target,
      name: 'Search Optimization',
      desc: 'Strategic SEO services that enhance visibility and drive qualified organic traffic to your digital properties.',
      gradient: 'from-electric-blue to-cyber-cyan',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy']
    },
    {
      icon: Share2,
      name: 'Social Media',
      desc: 'Cultivate meaningful connections with sophisticated social media strategies and content excellence.',
      gradient: 'from-cyber-cyan to-neon-teal',
      features: ['Content Creation', 'Community Management', 'Analytics']
    },
    {
      icon: Code,
      name: 'Web Development',
      desc: 'Elegant, high-performance websites crafted with precision and optimized for conversion.',
      gradient: 'from-neon-teal to-electric-blue',
      features: ['Responsive Design', 'Custom Development', 'Performance Optimization']
    },
    {
      icon: Mail,
      name: 'Email Marketing',
      desc: 'Refined email campaigns designed to nurture relationships and drive measurable engagement.',
      gradient: 'from-electric-blue via-cyber-cyan to-neon-teal',
      features: ['Campaign Design', 'Automation', 'A/B Testing']
    },
    {
      icon: TrendingUp,
      name: 'Growth Strategy',
      desc: 'Comprehensive strategic planning focused on sustainable expansion and market leadership.',
      gradient: 'from-cyber-cyan to-electric-blue',
      features: ['Market Analysis', 'Growth Hacking', 'Conversion Optimization']
    },
    {
      icon: BarChart,
      name: 'Analytics & Insights',
      desc: 'Advanced data analysis providing actionable intelligence for informed business decisions.',
      gradient: 'from-neon-teal via-electric-blue to-cyber-cyan',
      features: ['Data Visualization', 'Reporting', 'Predictive Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-deep-space">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-electric-blue/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-slate-200">Premium Services</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-8 animate-slide-up">
              <span className="text-white">Our</span> <span className="gradient-text">Services</span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Comprehensive solutions engineered to elevate your brand and drive exceptional results in the digital landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative p-8 glass rounded-3xl hover:bg-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-electric-blue/20 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}></div>
                </div>

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric-blue/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-electric-blue/30`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-electric-blue font-semibold hover:gap-4 transition-all group-hover:text-cyber-cyan"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
                  Need a <span className="gradient-text">Custom Solution</span>?
                </h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  Every business is unique. Let's discuss how we can tailor our services to your specific needs
                </p>
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-electric-blue via-cyber-cyan to-neon-teal font-bold rounded-2xl hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-300 text-white text-lg hover:scale-105"
                >
                  Let's Talk
                  <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
