import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium mb-8 shadow-lg">
              <Award className="w-4 h-4" />
              <span>Premium Digital Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight text-balance">
              Elevate Your Brand with
              <span className="block mt-2 text-neutral-700">Exceptional Marketing</span>
            </h1>

            <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Strategic excellence meets creative innovation. We transform businesses through refined digital experiences and data-driven results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 font-semibold rounded-lg border-2 border-neutral-900 hover:bg-neutral-50 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: 'Strategic Growth',
                desc: 'Tailored strategies that drive measurable business outcomes and sustainable expansion.'
              },
              {
                icon: Shield,
                title: 'Trusted Expertise',
                desc: 'Industry-leading professionals committed to delivering exceptional quality and results.'
              },
              {
                icon: Award,
                title: 'Award-Winning Work',
                desc: 'Recognized excellence in digital marketing, design, and brand development.'
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-neutral-50 rounded-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-neutral-300">
                <div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
