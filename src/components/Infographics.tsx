import React from 'react';
import { TrendingUp, Users, Target, DollarSign, BarChart3, Zap, Award, CheckCircle2 } from 'lucide-react';

interface InfographicProps {
  type: 'stats' | 'process' | 'comparison' | 'timeline';
  title: string;
  data?: any;
}

export const StatsInfographic: React.FC<{ title: string; stats: Array<{label: string; value: string; icon: any; color: string}> }> = ({ title, stats }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 my-12">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ProcessInfographic: React.FC<{ title: string; steps: Array<{title: string; description: string; icon: any}> }> = ({ title, steps }) => {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 my-12">
      <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">{title}</h3>
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 hidden lg:block"></div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="flex-1"></div>

                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-cyan-600">0{index + 1}</span>
                    <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                  </div>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const ComparisonInfographic: React.FC<{
  title: string;
  items: Array<{name: string; pros: string[]; cons: string[]; score: number}>
}> = ({ title, items }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 my-12">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-bold text-white">{item.name}</h4>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold text-cyan-400">{item.score}</div>
                <div className="text-sm text-slate-400">/10</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-green-400">Pros</span>
              </div>
              <ul className="space-y-1 ml-7">
                {item.pros.map((pro, i) => (
                  <li key={i} className="text-slate-300 text-sm">{pro}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-amber-400">Cons</span>
              </div>
              <ul className="space-y-1 ml-7">
                {item.cons.map((con, i) => (
                  <li key={i} className="text-slate-300 text-sm">{con}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TimelineInfographic: React.FC<{
  title: string;
  events: Array<{period: string; milestone: string; description: string}>
}> = ({ title, events }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 my-12">
      <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">{title}</h3>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="relative pl-16">
              <div className="absolute left-5 top-2 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">
                    {event.period}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{event.milestone}</h4>
                </div>
                <p className="text-slate-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ResultsInfographic: React.FC = () => {
  return (
    <StatsInfographic
      title="Proven Results That Speak for Themselves"
      stats={[
        { label: 'Businesses Helped', value: '500+', icon: Users, color: 'bg-gradient-to-br from-cyan-500 to-blue-600' },
        { label: 'Average ROI', value: '350%', icon: TrendingUp, color: 'bg-gradient-to-br from-green-500 to-emerald-600' },
        { label: 'Leads Generated', value: '25K+', icon: Target, color: 'bg-gradient-to-br from-purple-500 to-pink-600' },
        { label: 'Revenue Growth', value: 'R50M+', icon: DollarSign, color: 'bg-gradient-to-br from-amber-500 to-orange-600' },
      ]}
    />
  );
};

export const MarketingProcessInfographic: React.FC = () => {
  return (
    <ProcessInfographic
      title="Our Proven 5-Step Marketing Process"
      steps={[
        {
          title: 'Discovery & Strategy',
          description: 'We analyze your business, competitors, and target audience to create a custom strategy',
          icon: Target
        },
        {
          title: 'Campaign Setup',
          description: 'Professional setup of all marketing channels, tracking, and automation systems',
          icon: Zap
        },
        {
          title: 'Launch & Optimize',
          description: 'Launch campaigns and continuously optimize for maximum performance',
          icon: TrendingUp
        },
        {
          title: 'Scale & Grow',
          description: 'Scale successful campaigns and expand to new channels for exponential growth',
          icon: BarChart3
        },
        {
          title: 'Report & Refine',
          description: 'Detailed reporting with insights and ongoing refinement for sustained success',
          icon: Award
        }
      ]}
    />
  );
};

const Infographics: React.FC<InfographicProps> = ({ type, title, data }) => {
  if (type === 'stats') {
    return <StatsInfographic title={title} stats={data} />;
  }
  if (type === 'process') {
    return <ProcessInfographic title={title} steps={data} />;
  }
  if (type === 'comparison') {
    return <ComparisonInfographic title={title} items={data} />;
  }
  if (type === 'timeline') {
    return <TimelineInfographic title={title} events={data} />;
  }
  return null;
};

export default Infographics;
