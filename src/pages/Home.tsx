import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, TrendingUp, Globe, CheckCircle, Clock, Award, Users, BarChart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-primary text-sm font-semibold rounded-full mb-8">
              Award-Winning Digital Agency
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
              Transform Your Business with
              <span className="gradient-text"> Professional Digital Solutions</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Partner with industry experts to create exceptional digital experiences that drive measurable business growth and lasting customer relationships
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 hover:border-primary text-slate-700 font-semibold rounded-lg transition-all"
              >
                View Our Work
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-slate-200">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '15+', label: 'Years Experience' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Digital Services
            </h2>
            <p className="text-xl text-slate-600">
              End-to-end solutions designed to meet your business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Monitor,
                title: 'Web Design & Development',
                desc: 'Custom, responsive websites built with the latest technologies, optimized for performance and user experience.',
              },
              {
                icon: TrendingUp,
                title: 'Digital Marketing & SEO',
                desc: 'Strategic marketing campaigns and search optimization to increase visibility and drive qualified traffic.',
              },
              {
                icon: Globe,
                title: 'eCommerce Solutions',
                desc: 'Full-featured online stores with secure payment processing and inventory management systems.',
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-slate-50 hover:bg-white rounded-xl hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Leading Businesses Choose Us
            </h2>
            <p className="text-xl text-slate-600">
              Trusted by companies worldwide for delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: 'Industry Expertise',
                desc: 'Certified professionals with proven track records across multiple industries and technologies'
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                desc: 'A committed team focused on your success with ongoing support and strategic guidance'
              },
              {
                icon: CheckCircle,
                title: 'Proven Results',
                desc: 'Measurable outcomes with transparent reporting and data-driven decision making'
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                desc: 'Reliable project management ensuring deadlines are met without compromising quality'
              },
              {
                icon: BarChart,
                title: 'Data-Driven Approach',
                desc: 'Strategic decisions backed by analytics and insights to maximize your ROI'
              },
              {
                icon: Globe,
                title: 'Scalable Solutions',
                desc: 'Future-proof architecture designed to grow with your business needs'
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let's discuss how our expertise can help you achieve your business goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary hover:bg-blue-50 font-semibold rounded-lg transition-all shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
