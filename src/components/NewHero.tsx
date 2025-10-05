import React from 'react';
import { Zap, Target, Sparkles, MessageCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 subtle-grid opacity-40"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="flex items-center justify-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm">Professional Digital Marketing 2025</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">South Africa's</span>
            <br />
            <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-gradient">
              #1 Digital Marketing Agency
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            500+ Businesses Helped • Proven Results • Money Back Guarantee
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <Link
              to="/web-design-services-south-africa"
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <Target className="w-10 h-10 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-slate-200 font-semibold block">Website Design</span>
            </Link>
            <Link
              to="/social-media-marketing-services-south-africa"
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <Sparkles className="w-10 h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-slate-200 font-semibold block">Social Media</span>
            </Link>
            <Link
              to="/blog/get-50-qualified-leads-30-days-south-africa-2025"
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <Zap className="w-10 h-10 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-slate-200 font-semibold block">Lead Generation</span>
            </Link>
            <Link
              to="/about"
              className="glass-card rounded-xl p-6 hover-lift group"
            >
              <TrendingUp className="w-10 h-10 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-slate-200 font-semibold block">Growth Strategy</span>
            </Link>
          </div>

          <div className="glass-card rounded-2xl p-8 mb-12 relative overflow-hidden glow-effect">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 relative z-10">
              Starting at R2,500
            </h2>
            <p className="text-slate-400 text-lg relative z-10">
              Custom pricing after consultation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#services"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover-lift flex items-center justify-center"
            >
              <Zap className="mr-2 h-5 w-5" />
              <span>Get More Customers</span>
            </a>

            <a
              href="#contact"
              className="glass-card border-2 border-slate-700 hover:border-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover-lift flex items-center justify-center"
            >
              <Target className="mr-2 h-5 w-5 text-cyan-400" />
              Book Consultation
            </a>

            <a
              href="https://wa.me/27736957783"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover-lift flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <p className="text-slate-300 font-medium">500+ Happy Business Owners • Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </section>
  );
};

export default NewHero;
