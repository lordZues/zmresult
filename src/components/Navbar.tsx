import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Building2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary-dark transition-colors">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Digital Agency</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              ))}

              {user ? (
                <>
                  <Link
                    to="/admin"
                    className={`text-sm font-semibold transition-colors ${
                      isActive('/admin')
                        ? 'text-primary'
                        : 'text-slate-600 hover:text-primary'
                    }`}
                  >
                    Admin
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="px-5 py-2.5 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-all"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-5 py-2.5 bg-primary hover:bg-primary-dark rounded-lg text-sm font-semibold text-white transition-all shadow-md hover:shadow-lg"
                >
                  Login
                </Link>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-all"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-20 left-0 right-0 mx-6 bg-white rounded-xl shadow-2xl border border-slate-200 p-6">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-primary'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {user ? (
                <>
                  <Link
                    to="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                      isActive('/admin')
                        ? 'bg-blue-50 text-primary'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Admin
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-3 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-all text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 bg-primary hover:bg-primary-dark rounded-lg text-sm font-semibold text-white text-center transition-all"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
