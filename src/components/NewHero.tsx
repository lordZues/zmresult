import React from 'react';
import { Zap, Target, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#050812] via-[#0a0e27] to-[#0f1432] text-white overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 scanline"></div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/50 rounded-full px-6 py-3 neon-border-cyan">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold">CYBERPUNK MARKETING 2025</span>
              <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="text-cyan-400 neon-glow-cyan glitch">South Africa's #1</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 neon-glow-pink">
              Digital Marketing Agency
            </span>
            <br />
            <span className="text-pink-500 neon-glow-pink text-2xl md:text-3xl">
              500+ Businesses • Money Back Guarantee
            </span>
          </h1>

          <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <Link
              to="/web-design-services-south-africa"
              className="group relative bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border-2 border-cyan-500/50 rounded-lg p-4 hover:border-cyan-500 transition-all neon-box-cyan hover:scale-105"
            >
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <span className="text-cyan-300 font-bold block">Website Design</span>
            </Link>
            <Link
              to="/social-media-marketing-services-south-africa"
              className="group relative bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border-2 border-pink-500/50 rounded-lg p-4 hover:border-pink-500 transition-all neon-box-pink hover:scale-105"
            >
              <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <span className="text-pink-300 font-bold block">Social Media</span>
            </Link>
            <Link
              to="/blog/get-50-qualified-leads-30-days-south-africa-2025"
              className="group relative bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border-2 border-purple-500/50 rounded-lg p-4 hover:border-purple-500 transition-all neon-box-purple hover:scale-105"
            >
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <span className="text-purple-300 font-bold block">Lead Generation</span>
            </Link>
            <Link
              to="/about"
              className="group relative bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border-2 border-green-500/50 rounded-lg p-4 hover:border-green-500 transition-all hover:scale-105"
              style={{ boxShadow: '0 0 20px rgba(0, 255, 157, 0.3)' }}
            >
              <Sparkles className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <span className="text-green-300 font-bold block">Award Winning</span>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] border-2 border-cyan-500 rounded-2xl p-8 mb-8 neon-box-cyan relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-cyan-500/10 animate-pulse"></div>
            <h2 className="text-3xl md:text-4xl font-black text-cyan-400 neon-glow-cyan mb-3 relative z-10">
              Starting at R2,500
            </h2>
            <p className="text-cyan-300 text-lg relative z-10">
              Custom pricing after consultation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a
              href="#services"
              className="group relative bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 text-white px-8 py-5 rounded-lg text-xl font-black transition-all transform hover:scale-105 flex items-center justify-center neon-box-cyan overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Zap className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">GET MORE CUSTOMERS</span>
            </a>

            <a
              href="#contact"
              className="relative bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] border-2 border-pink-500 text-pink-400 px-8 py-5 rounded-lg text-xl font-black transition-all hover:scale-105 neon-box-pink"
            >
              <Target className="inline mr-3 h-6 w-6" />
              CALL ME NOW
            </a>

            <a
              href="https://wa.me/27736957783"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-5 rounded-lg text-xl font-black transition-all flex items-center justify-center transform hover:scale-105"
              style={{ boxShadow: '0 0 30px rgba(0, 255, 157, 0.5)' }}
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp Me
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/50 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-green-400" />
              <p className="text-lg text-green-400 font-bold">500+ Happy Business Owners • Money Back Guarantee</p>
              <Sparkles className="w-5 h-5 text-green-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    </section>
  );
};

export default NewHero;
