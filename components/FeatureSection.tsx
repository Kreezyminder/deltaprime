import React from 'react';

interface FeatureSectionProps {
  navigate: (page: string) => void;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ navigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Customization & Process */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="inline-block bg-teal-500/10 text-teal-400 font-semibold text-xs px-3 py-1 rounded-full">TAILORED SOLUTIONS</div>
            <h3 className="mt-4 text-2xl font-bold text-white">AI Built For Your Unique Needs</h3>
            <p className="mt-2 text-slate-400">Our process begins with understanding your business. We collaborate closely to design, develop, and integrate AI systems that solve your specific challenges and unlock new opportunities.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-slate-700 rounded-full p-2">
                   <svg className="h-5 w-5 text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" /></svg>
                </div>
                <span className="ml-3 text-white">Consultation & Discovery</span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-slate-700 rounded-full p-2">
                   <svg className="h-5 w-5 text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <span className="ml-3 text-white">Custom Model Development</span>
              </div>
              <div className="flex items-center">
                 <div className="flex-shrink-0 bg-slate-700 rounded-full p-2">
                   <svg className="h-5 w-5 text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="ml-3 text-white">Seamless Integration & Deployment</span>
              </div>
            </div>
             <a href="#" onClick={(e) => handleNavClick(e, 'about')} className="mt-8 inline-block text-cyan-400 hover:text-cyan-300 font-semibold">Learn Our Process &rarr;</a>
          </div>

          {/* Column 2: Technology & Impact */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="inline-block bg-purple-500/10 text-purple-400 font-semibold text-xs px-3 py-1 rounded-full">MEASURABLE RESULTS</div>
            <h3 className="mt-4 text-2xl font-bold text-white">Powerful AI, Tangible Outcomes</h3>
            <p className="mt-2 text-slate-400">We leverage state-of-the-art technology to deliver not just innovation, but also clear, measurable impact on your bottom line, from efficiency gains to cost reduction.</p>
            <div className="mt-6 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">Automation Efficiency</span>
                    <span className="text-sm font-bold text-green-400">+ 45%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{width: '45%'}}></div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-sm font-medium text-white">Operational Costs</span>
                    <span className="text-sm font-bold text-cyan-400">- 25%</span>
                </div>
                 <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2">
                    <div className="bg-cyan-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
                </div>
            </div>
            <a href="#" onClick={(e) => handleNavClick(e, 'use-cases')} className="mt-8 inline-block text-cyan-400 hover:text-cyan-300 font-semibold">See Use Cases &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
