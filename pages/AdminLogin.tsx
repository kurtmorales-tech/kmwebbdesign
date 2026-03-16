import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { hashPassword, STORED_HASH } from '../utils/security';
import { Lock, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const hash = await hashPassword(password);
      if (hash === STORED_HASH) {
        login();
        navigate('/admin');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Admin Login" description="Secure area for team members." />
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#080808] border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-600/20">
              <Lock className="w-6 h-6 text-blue-500" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Team Access</h1>
            <p className="text-slate-500 text-sm mt-2">Enter your secure access key to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-400 mb-2">
                Access Key
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                placeholder="••••••••••••"
                required
              />
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-rose-500 text-sm bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Authenticate'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
             <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold">
               Secured & Encrypted
             </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;