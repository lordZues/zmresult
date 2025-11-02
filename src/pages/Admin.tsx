import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, Briefcase, FileText, Mail } from 'lucide-react';

export default function Admin() {
  const { user } = useAuth();

  const stats = [
    { icon: Briefcase, label: 'Portfolio Items', value: '0' },
    { icon: FileText, label: 'Blog Posts', value: '0' },
    { icon: Mail, label: 'Messages', value: '0' }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">Dashboard</h1>
          </div>
          <p className="text-lg text-neutral-600">Welcome back, {user?.email}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-neutral-600 text-sm mb-2 font-medium">{stat.label}</p>
              <p className="text-4xl font-bold text-neutral-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
