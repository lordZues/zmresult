import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) { setError('Password must be at least 6 characters'); return; }
    setLoading(true);
    const { error } = await signUp(email, password);
    if (error) { setError(error.message); setLoading(false); } else { navigate('/admin'); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h1>
        {error && <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"><p className="text-red-200 text-sm">{error}</p></div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password (min 6 characters)" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50">{loading ? 'Creating account...' : 'Sign Up'}</button>
        </form>
        <p className="mt-6 text-center text-blue-200 text-sm">Already have an account? <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold">Sign in</Link></p>
      </div>
    </div>
  );
}
