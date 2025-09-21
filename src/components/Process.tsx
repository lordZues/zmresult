import React from 'react';
import { MessageSquare, LineChart, Target, PieChart, ChevronRight } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="bg-blue-950 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
        {number}
      </div>
      
      <div>
        <div className="flex items-center mb-3">
          <div className="mr-3 text-orange-500">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4">
            How We Deliver Results
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our proven 4-step system has helped businesses just like yours achieve remarkable growth without the guesswork.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Step 
            number={1}
            title="Strategy Session"
            description="We start with a deep-dive call to understand your business goals, current challenges, and ideal client profile. This gives us the foundation to build your custom growth plan."
            icon={<MessageSquare size={24} />}
          />
          
          <Step 
            number={2}
            title="Custom Growth Plan"
            description="Based on our analysis, we develop a tailored strategy designed specifically for your business model and target market. No cookie-cutter approaches here."
            icon={<LineChart size={24} />}
          />
          
          <Step 
            number={3}
            title="Implementation"
            description="We handle the heavy lifting by implementing your growth strategy, optimizing your lead generation, and setting up your conversion system."
            icon={<Target size={24} />}
          />
          
          <Step 
            number={4}
            title="Scale & Optimize"
            description="As leads and sales come in, we continuously refine the process, identify new opportunities, and scale what's working to accelerate your growth."
            icon={<PieChart size={24} />}
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#book-call" 
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Book Your Strategy Session <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;