
import React from 'react';

const IntegrationSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Seamless Integration, Clear ROI
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Our systems are built to integrate flawlessly with your existing infrastructure, providing real-time data and actionable insights through a unified performance dashboard.
          </p>
        </div>
        <div className="mt-16">
          <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-cyan-500/10">
            <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="absolute top-4 right-6 text-sm text-slate-500 font-mono">/dashboard/overview</div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* KPI Cards */}
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                    <h4 className="text-slate-400 text-sm font-medium">Tasks Automated</h4>
                    <p className="text-3xl font-bold text-white mt-1">1.2M</p>
                    <p className="text-xs text-green-400 flex items-center mt-1">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                        +15.2% vs last month
                    </p>
                </div>
                 <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                    <h4 className="text-slate-400 text-sm font-medium">Efficiency Gain</h4>
                    <p className="text-3xl font-bold text-white mt-1">38.5%</p>
                    <p className="text-xs text-green-400 flex items-center mt-1">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                        +3.1% vs last month
                    </p>
                </div>
                 <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                    <h4 className="text-slate-400 text-sm font-medium">Est. Cost Saved</h4>
                    <p className="text-3xl font-bold text-white mt-1">$212K</p>
                    <p className="text-xs text-green-400 flex items-center mt-1">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                        +8.9% vs last month
                    </p>
                </div>
                
                {/* Chart Area */}
                <div className="md:col-span-3 bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                    <h4 className="text-white font-medium">Performance Over Time</h4>
                    <div className="mt-4 h-48 flex items-end space-x-2 sm:space-x-4">
                        <div className="flex-1 h-1/3 bg-cyan-500 rounded-t-md opacity-50"></div>
                        <div className="flex-1 h-1/2 bg-cyan-500 rounded-t-md opacity-60"></div>
                        <div className="flex-1 h-2/3 bg-cyan-500 rounded-t-md opacity-70"></div>
                        <div className="flex-1 h-3/4 bg-cyan-500 rounded-t-md opacity-80"></div>
                        <div className="flex-1 h-5/6 bg-cyan-500 rounded-t-md opacity-90"></div>
                        <div className="flex-1 h-full bg-cyan-500 rounded-t-md"></div>
                        <div className="flex-1 h-4/5 bg-cyan-500 rounded-t-md opacity-90"></div>
                        <div className="flex-1 h-2/3 bg-cyan-500 rounded-t-md opacity-80"></div>
                        <div className="flex-1 h-1/2 bg-cyan-500 rounded-t-md opacity-70"></div>
                        <div className="flex-1 h-1/3 bg-cyan-500 rounded-t-md opacity-60"></div>
                        <div className="flex-1 h-1/4 bg-cyan-500 rounded-t-md opacity-50"></div>
                        <div className="flex-1 h-1/2 bg-cyan-500 rounded-t-md opacity-70"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
