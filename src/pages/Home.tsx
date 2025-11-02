import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, TrendingUp, Users, Globe, CheckCircle, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 pt-32 pb-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Professional Web Design & Digital Marketing Solutions
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Transform your online presence with expert website design, SEO, and eCommerce solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-xl text-lg uppercase tracking-wide"
              >
                Talk To Us!
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all text-lg uppercase tracking-wide"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              One Stop Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed online, from web design to digital marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Monitor,
                title: 'Website Design',
                desc: 'Custom, responsive websites that convert visitors into customers. Professional designs tailored to your brand.'
              },
              {
                icon: TrendingUp,
                title: 'SEO Services',
                desc: 'Dominate search rankings with proven SEO strategies. Drive organic traffic and grow your online visibility.'
              },
              {
                icon: Globe,
                title: 'eCommerce Solutions',
                desc: 'Complete online store setup with secure payment integration. Start selling online today.'
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-white rounded-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Experience, efficiency, and results you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                desc: 'Experienced professionals dedicated to your success'
              },
              {
                icon: CheckCircle,
                title: 'Proven Results',
                desc: 'Track record of delivering measurable outcomes'
              },
              {
                icon: Clock,
                title: 'Fast Delivery',
                desc: 'Quick turnaround times without compromising quality'
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
