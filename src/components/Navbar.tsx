import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Zap } from 'lucide-react';

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Zap className="w-7 h-7 text-cyan-400" />
            <span className="text-white">Agency</span>
            <span className="text-cyan-400">Pro</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            {user ? (
              <>
                <Link to="/admin" className="text-gray-300 hover:text-cyan-400 transition-colors">Admin</Link>
                <button onClick={() => signOut()} className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-600/50 rounded-lg hover:bg-red-600/30 transition-all">
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login" className="px-4 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/30 transition-all">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
