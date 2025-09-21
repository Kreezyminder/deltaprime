
import React from 'react';

const ValuePropositionSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative">
       <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
       <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Beyond Off-the-Shelf: AI That Fits Your Workflow
        </h2>
        <p className="mt-6 text-lg text-slate-400">
          Generic AI solutions offer generic results. Deltaprimeai builds bespoke AI systems that integrate perfectly with your existing processes, data, and objectives. We don't just provide technology; we deliver a competitive advantage engineered for your success.
        </p>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
