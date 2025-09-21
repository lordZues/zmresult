import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';

interface ResultCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  color: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, description, metric, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-t-4 border-blue-950">
      <div className={`${color} p-3 rounded-full inline-block mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="text-3xl font-bold text-blue-950">{metric}</div>
    </div>
  );
};

const Results: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Our Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4">
            Numbers Don't Lie
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We've helped business owners across multiple industries achieve these results without wasting money on ineffective marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ResultCard 
            icon={<TrendingUp size={24} className="text-blue-600" />}
            title="Lead Generation"
            description="Qualified leads coming directly to your business without cold outreach."
            metric="37+ Leads in 9 Days"
            color="bg-blue-100"
          />
          
          <ResultCard 
            icon={<Users size={24} className="text-purple-600" />}
            title="Client Acquisition"
            description="Convert more prospects into paying clients with our proven system."
            metric="68% Close Rate"
            color="bg-purple-100"
          />
          
          <ResultCard 
            icon={<Calendar size={24} className="text-green-600" />}
            title="Booked Calls"
            description="Get your calendar filled with qualified prospects ready to buy."
            metric="15+ Calls Weekly"
            color="bg-green-100"
          />
          
          <ResultCard 
            icon={<DollarSign size={24} className="text-orange-600" />}
            title="ROI Increase"
            description="Our clients see significant return on their marketing investment."
            metric="312% Average ROI"
            color="bg-orange-100"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#book-call" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Get These Results For Your Business
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;