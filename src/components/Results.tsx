import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign, Award, Zap } from 'lucide-react';

interface ResultCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  gradient: string;
  badge?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, description, metric, gradient, badge }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:shadow-3xl hover:scale-105 border border-gray-100 relative overflow-hidden group">
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
      
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      
      <div className={`${gradient} p-4 rounded-2xl inline-block mb-6 shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="text-4xl font-black bg-gradient-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent">{metric}</div>
    </div>
  );
};

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-20 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase mb-6">
            <Award className="w-4 h-4 mr-2" />
            Proven Results
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-blue-950 mt-2 mb-6 leading-tight">
            Here's What Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Happened</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're not going to show you fake screenshots or made-up numbers. These are <span className="font-bold text-blue-950">real results</span> from real businesses who were exactly where you are right now.
          </p>
          
          {/* Trust Indicator */}
          <div className="mt-8 inline-flex items-center bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-full">
            <Zap className="w-5 h-5 mr-2 text-green-600" />
            <span className="font-semibold">100% Verified Results</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ResultCard 
            icon={<TrendingUp size={32} className="text-white" />}
            title="Lead Generation"
            description="Qualified leads that actually want what you're selling and are ready to buy."
            metric="37+ Leads in 9 Days"
            gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            badge="GUARANTEED"
          />
          
          <ResultCard 
            icon={<Users size={32} className="text-white" />}
            title="Client Acquisition"
            description="Turn more conversations into actual paying clients with our proven system."
            metric="68% Close Rate"
            gradient="bg-gradient-to-br from-purple-500 to-purple-600"
            badge="PROVEN"
          />
          
          <ResultCard 
            icon={<Calendar size={32} className="text-white" />}
            title="Booked Calls"
            description="Your calendar filled with qualified prospects ready to buy from you."
            metric="15+ Calls Weekly"
            gradient="bg-gradient-to-br from-green-500 to-green-600"
            badge="CONSISTENT"
          />
          
          <ResultCard 
            icon={<DollarSign size={32} className="text-white" />}
            title="ROI Increase"
            description="More money in your pocket, not wasted on ads that don't work."
            metric="R312k Average ROI"
            gradient="bg-gradient-to-br from-orange-500 to-red-500"
            badge="MASSIVE"
          />
        </div>
        
        {/* Success Stories Counter */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl p-12 text-white text-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-black text-orange-400 mb-2">500+</div>
              <div className="text-xl font-semibold">Businesses Helped</div>
            </div>
            <div>
              <div className="text-5xl font-black text-green-400 mb-2">R50M+</div>
              <div className="text-xl font-semibold">Revenue Generated</div>
            </div>
            <div>
              <div className="text-5xl font-black text-yellow-400 mb-2">98%</div>
              <div className="text-xl font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#book-call" 
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl border-2 border-orange-400"
          >
            <span className="mr-3">🎯</span>
            I Want These Results Too
          </a>
          <p className="mt-6 text-gray-600 font-medium">Join 500+ successful business owners</p>
        </div>
      </div>
    </section>
  );
};

export default Results;