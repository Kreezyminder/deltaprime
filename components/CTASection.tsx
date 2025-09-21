import React from 'react';

interface CTASectionProps {
  navigate: (page: string) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ navigate }) => {
   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-slate-900 to-slate-900"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Transform Your Operations with Deltaprimeai
        </h2>
        <p className="mt-6 text-lg text-slate-400">
          Ready to see how custom AI can redefine efficiency for your business? Schedule a free consultation with our experts to explore the possibilities.
        </p>
        <div className="mt-10">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'consultation')}
            className="inline-block bg-white text-slate-900 hover:bg-slate-200 font-bold py-4 px-10 rounded-lg shadow-2xl shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
