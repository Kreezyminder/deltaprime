import React from 'react';
import { User } from '../lib/db';

interface DashboardPageProps {
  user: User;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user }) => {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="pb-8 border-b border-slate-800">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Dashboard
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            Welcome back, {user.name}! Here's an overview of your AI systems.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example card */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white">Sales Forecasting AI</h3>
            <p className="mt-2 text-slate-400 text-sm">Predicts future sales trends with 95% accuracy.</p>
            <div className="mt-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                Active
              </span>
            </div>
            <div className="mt-6 flex justify-between items-center">
                <span className="text-sm font-medium text-white">System Health</span>
                <span className="text-sm font-bold text-green-400">Excellent</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '98%'}}></div>
            </div>
          </div>

          {/* Example card 2 */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white">Customer Support Bot</h3>
            <p className="mt-2 text-slate-400 text-sm">Automates responses to common customer queries.</p>
            <div className="mt-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                Active
              </span>
            </div>
            <div className="mt-6 flex justify-between items-center">
                <span className="text-sm font-medium text-white">Resolution Rate</span>
                <span className="text-sm font-bold text-cyan-400">82%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2">
                <div className="bg-cyan-500 h-2.5 rounded-full" style={{width: '82%'}}></div>
            </div>
          </div>

          {/* Add new system card */}
           <div className="flex items-center justify-center border-2 border-dashed border-slate-700 rounded-2xl p-6 text-center hover:bg-slate-800/50 hover:border-cyan-500 transition-colors duration-300 cursor-pointer">
             <div>
               <svg className="mx-auto h-12 w-12 text-slate-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                 <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               <span className="mt-2 block text-sm font-medium text-slate-400">Add New AI System</span>
             </div>
           </div>

        </div>
      </div>
    </main>
  );
};

export default DashboardPage;