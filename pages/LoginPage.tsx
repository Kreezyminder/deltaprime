import React, { useState } from 'react';
import { db, User } from '../lib/db';

interface LoginPageProps {
  navigate: (page: string) => void;
  onLogin: (user: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ navigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await db.user.findUnique({ where: { email } });
      
      // NOTE: This is a mock password check. In a real app, you'd use bcrypt.compare()
      if (user && user.passwordHash === password) {
        onLogin(user);
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-grow flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-2xl shadow-cyan-500/10">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Sign In
            </h1>
            <p className="mt-2 text-slate-400">
              Access your Deltaprimeai dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {error && <p className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded-md">{error}</p>}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>

           <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Don't have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('register'); }} className="font-medium text-cyan-400 hover:text-cyan-300">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;