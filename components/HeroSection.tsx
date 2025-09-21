import React from 'react';

interface HeroSectionProps {
  navigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ navigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
       <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
       <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl"></div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Intelligent Automation,
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">Tailored For Your Business</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Unlock peak efficiency with custom AI systems designed to automate operations, increase efficiency, and drive growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                onClick={(e) => handleNavClick(e, 'consultation')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
               <a
                href="#"
                onClick={(e) => handleNavClick(e, 'demo')}
                className="bg-slate-800/50 border border-slate-700 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Book a Demo
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-full bg-cyan-400/10 rounded-full blur-3xl"></div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md h-auto z-10">
              <path fill="#06B6D4" d="M49.6,-68.8C62.8,-57.4,70.9,-41.2,74.9,-24.5C78.9,-7.8,78.8,9.4,72.4,24.1C66,38.8,53.3,51,39,60.6C24.8,70.1,9,77,-7.6,78.2C-24.2,79.4,-41.6,74.9,-54.6,65.2C-67.6,55.5,-76.1,40.6,-79.1,24.7C-82.1,8.9,-79.5,-7.9,-72.1,-22.8C-64.7,-37.6,-52.5,-50.5,-39,-61.2C-25.5,-71.9,-10.7,-80.4,4.2,-82.9C19.1,-85.4,38.1,-82,49.6,-68.8Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
