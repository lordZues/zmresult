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
          <span className="text-orange-500 font-semibold tracking-wider uppercase">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4">
            Here's Exactly What We Do
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            No complicated funnels. No confusing tech stuff. Just a simple system that works every single time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Step 
            number={1}
            title="We Talk"
            description="First, we hop on a call to understand your business. What's working? What isn't? Who's your ideal client? This isn't a sales pitch - we genuinely want to understand your situation."
            icon={<MessageSquare size={24} />}
          />
          
          <Step 
            number={2}
            title="We Plan"
            description="Based on what you told us, we create a custom strategy for YOUR business. Not some cookie-cutter template, but something built specifically for your industry and goals."
            icon={<LineChart size={24} />}
          />
          
          <Step 
            number={3}
            title="We Build"
            description="Here's where the magic happens. We set up your lead generation system, create your content, and get everything running smoothly. You don't have to lift a finger."
            icon={<Target size={24} />}
          />
          
          <Step 
            number={4}
            title="We Grow"
            description="As leads start coming in, we keep tweaking and improving. More leads, better quality, higher conversion rates. We don't stop until you're completely happy."
            icon={<PieChart size={24} />}
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#book-call" 
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Let's Get Started <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;