import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <section className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-7xl font-bold text-white mb-6">
          Transform Your Digital<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Presence Today</span>
        </h1>
        <p className="text-2xl text-blue-200 mb-10">We craft innovative marketing strategies that drive real results</p>
        <div className="flex gap-4 justify-center">
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2">
            Get Started <ArrowRight size={20} />
          </Link>
          <Link to="/portfolio" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm border border-white/20">
            View Our Work
          </Link>
        </div>
      </section>
    </div>
  );
}
