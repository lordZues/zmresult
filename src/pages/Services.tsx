import { Target, Share2, Code, Mail, TrendingUp, BarChart, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Target,
      name: 'Search Engine Optimization',
      desc: 'Comprehensive SEO strategies that improve organic rankings and drive qualified traffic to your website.',
      features: ['Technical SEO Audits', 'Keyword Research & Strategy', 'Content Optimization', 'Link Building Campaigns']
    },
    {
      icon: Share2,
      name: 'Social Media Marketing',
      desc: 'Strategic social media management to build brand awareness and engage with your target audience.',
      features: ['Social Strategy Development', 'Content Creation & Curation', 'Community Management', 'Paid Social Campaigns']
    },
    {
      icon: Code,
      name: 'Web Development',
      desc: 'Custom website development using modern technologies to deliver exceptional user experiences.',
      features: ['Responsive Web Design', 'Custom Application Development', 'API Integration', 'Performance Optimization']
    },
    {
      icon: Mail,
      name: 'Email Marketing',
      desc: 'Targeted email campaigns designed to nurture leads and drive conversions throughout the customer journey.',
      features: ['Campaign Strategy & Design', 'Marketing Automation', 'List Segmentation', 'A/B Testing & Analytics']
    },
    {
      icon: TrendingUp,
      name: 'Growth Consulting',
      desc: 'Strategic consulting services to identify opportunities and develop data-driven growth strategies.',
      features: ['Market Analysis', 'Competitive Research', 'Growth Strategy Planning', 'Conversion Optimization']
    },
    {
      icon: BarChart,
      name: 'Analytics & Reporting',
      desc: 'Advanced analytics and reporting to measure performance and inform strategic business decisions.',
      features: ['Dashboard Development', 'Custom Analytics Setup', 'Performance Tracking', 'Insight & Recommendations']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-primary text-sm font-semibold rounded-full mb-8">
              Professional Services
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Our <span className="gradient-text">Services</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive digital solutions tailored to your business needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Customized Solutions for Your Business
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Every business is unique, and we understand that one-size-fits-all approaches don't deliver optimal results. Our team works closely with you to understand your specific challenges and objectives.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We combine industry best practices with innovative strategies to create customized solutions that drive real business outcomes and sustainable growth.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all shadow-lg"
                >
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'Discovery & Planning', desc: 'We start by understanding your business, goals, and target audience' },
                  { title: 'Strategy Development', desc: 'Creating a customized roadmap aligned with your objectives' },
                  { title: 'Implementation', desc: 'Expert execution with regular communication and updates' },
                  { title: 'Optimization', desc: 'Continuous improvement based on data and performance metrics' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 bg-white p-6 rounded-lg border border-slate-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-primary">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let's discuss how our services can help you achieve your business goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary hover:bg-blue-50 font-semibold rounded-lg transition-all shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
