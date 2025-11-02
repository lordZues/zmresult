import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, TrendingUp, Globe, CheckCircle, Clock, Zap, Shield, Sparkles, Layers } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-space">
      <section className="relative overflow-hidden pt-32 pb-24 min-h-screen flex items-center">
        <div className="absolute inset-0 animated-gradient-bg"></div>
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 noise-texture"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-teal/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="relative container mx-auto px-6 lg:px-12 z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-slate-200">Next-Generation Digital Solutions</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-slide-up">
              <span className="gradient-text">Transform</span>
              <br />
              <span className="text-white">Your Digital</span>
              <br />
              <span className="text-white">Presence</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-slate-300 leading-relaxed max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Cutting-edge web design, powerful SEO strategies, and seamless eCommerce solutions that drive real results
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-electric-blue via-cyber-cyan to-neon-teal font-bold rounded-2xl hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-300 text-white text-lg overflow-hidden hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-teal via-cyber-cyan to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center gap-3 px-12 py-6 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 text-lg hover:scale-105"
              >
                View Our Work
                <Layers className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-space to-transparent"></div>
      </section>

      <section className="relative py-32 bg-deep-space">
        <div className="absolute inset-0 dot-pattern opacity-50"></div>
        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <Zap className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-slate-200">Our Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Complete Digital <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to dominate the digital landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Monitor,
                title: 'Web Design',
                desc: 'Stunning, high-performance websites engineered to convert visitors into loyal customers',
                gradient: 'from-electric-blue to-cyber-cyan'
              },
              {
                icon: TrendingUp,
                title: 'SEO Mastery',
                desc: 'Dominate search rankings with data-driven strategies that deliver sustainable growth',
                gradient: 'from-cyber-cyan to-neon-teal'
              },
              {
                icon: Globe,
                title: 'eCommerce',
                desc: 'Complete online stores with secure payments and seamless user experiences',
                gradient: 'from-neon-teal to-electric-blue'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 glass rounded-3xl hover:bg-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-electric-blue/20"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10`}></div>
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{item.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-electric-blue font-semibold hover:gap-4 transition-all group-hover:text-cyber-cyan"
                  >
                    Explore More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-midnight">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-cyber-cyan/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <Shield className="w-4 h-4 text-electric-blue" />
              <span className="text-sm font-medium text-slate-200">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Built for <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-slate-400">
              Industry-leading expertise meets cutting-edge innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                desc: 'Optimized performance that keeps your users engaged and your competitors behind'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                desc: 'Bank-level security protocols protecting your data and your customers'
              },
              {
                icon: CheckCircle,
                title: 'Proven Results',
                desc: 'Track record of delivering measurable ROI and exceeding expectations'
              },
              {
                icon: Clock,
                title: 'Rapid Deployment',
                desc: 'Fast turnaround times without ever compromising on quality or detail'
              },
              {
                icon: Sparkles,
                title: 'AI-Powered',
                desc: 'Leveraging artificial intelligence to create smarter, more adaptive solutions'
              },
              {
                icon: Layers,
                title: 'Scalable Architecture',
                desc: 'Built to grow with your business from startup to enterprise'
              }
            ].map((item, i) => (
              <div key={i} className="group text-center p-8 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-electric-blue/20 to-cyber-cyan/20 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-deep-space overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight to-deep-space"></div>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-16 glass rounded-[2rem] overflow-hidden group hover:bg-white/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-cyber-cyan/20 to-neon-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric-blue/30 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-teal/30 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative text-center">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ready to <span className="gradient-text">Elevate</span> Your Brand?
                </h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  Join hundreds of successful businesses that trust us with their digital presence
                </p>
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-electric-blue via-cyber-cyan to-neon-teal font-bold rounded-2xl hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-300 text-white text-lg hover:scale-105"
                >
                  Get Started Today
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
