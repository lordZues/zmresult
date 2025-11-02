import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <Globe className="w-7 h-7" />
            <span>Digital Agency</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">Portfolio</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">Contact</Link>
            {user ? (
              <>
                <Link to="/admin" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">Admin</Link>
                <button onClick={() => signOut()} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold uppercase text-sm">
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold uppercase text-sm">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
