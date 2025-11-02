import { useAuth } from '../contexts/AuthContext';

export default function Admin() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-4">Admin Dashboard</h1>
        <p className="text-xl text-blue-200 mb-12">Welcome, {user?.email}</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-lg mb-2">Portfolio Items</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-lg mb-2">Blog Posts</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-lg mb-2">Contact Messages</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
