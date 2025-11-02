import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Rocket, Menu, X } from 'lucide-react';
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
          scrolled ? 'glass-dark shadow-2xl shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyber-cyan blur-md opacity-50 group-hover:opacity-100 transition-opacity rounded-full"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-electric-blue to-cyber-cyan rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-black gradient-text">Digital Agency</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'text-electric-blue'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-full"></span>
                  )}
                </Link>
              ))}

              {user ? (
                <>
                  <Link
                    to="/admin"
                    className={`text-sm font-semibold transition-colors ${
                      isActive('/admin')
                        ? 'text-electric-blue'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Admin
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="px-6 py-2.5 glass rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-all hover:scale-105"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-6 py-2.5 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-xl text-sm font-bold text-white hover:shadow-lg hover:shadow-electric-blue/50 transition-all hover:scale-105"
                >
                  Login
                </Link>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 glass rounded-xl hover:bg-white/10 transition-all"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-20 left-0 right-0 mx-6 glass-dark rounded-2xl p-6 shadow-2xl animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-electric-blue/20 to-cyber-cyan/20 text-electric-blue'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
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
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive('/admin')
                        ? 'bg-gradient-to-r from-electric-blue/20 to-cyber-cyan/20 text-electric-blue'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    Admin
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-3 glass rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-all text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 bg-gradient-to-r from-electric-blue to-cyber-cyan rounded-xl text-sm font-bold text-white text-center hover:shadow-lg hover:shadow-electric-blue/50 transition-all"
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
