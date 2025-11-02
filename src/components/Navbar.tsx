import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Award } from 'lucide-react';

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Award className="w-6 h-6 text-neutral-900" />
            <span className="text-neutral-900">Agency</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Home</Link>
            <Link to="/services" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Services</Link>
            <Link to="/portfolio" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Portfolio</Link>
            <Link to="/contact" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Contact</Link>
            {user ? (
              <>
                <Link to="/admin" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">Admin</Link>
                <button onClick={() => signOut()} className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all font-medium">
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login" className="px-5 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all font-medium">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
