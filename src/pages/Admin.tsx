import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, Briefcase, FileText, Mail } from 'lucide-react';

export default function Admin() {
  const { user } = useAuth();

  const stats = [
    { icon: Briefcase, label: 'Portfolio Items', value: '0', color: 'cyan' },
    { icon: FileText, label: 'Blog Posts', value: '0', color: 'blue' },
    { icon: Mail, label: 'Messages', value: '0', color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <LayoutDashboard className="w-10 h-10 text-cyan-400" />
            <h1 className="text-5xl font-black text-white">Dashboard</h1>
          </div>
          <p className="text-xl text-gray-400">Welcome back, {user?.email}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all group">
              <stat.icon className={`w-12 h-12 text-${stat.color}-400 mb-4 group-hover:scale-110 transition-transform`} />
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-4xl font-black text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
