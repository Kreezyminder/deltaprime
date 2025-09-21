import React from 'react';
import Logo from './icons/Logo';

interface FooterProps {
  navigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="inline-block" aria-label="Go to homepage">
              <Logo />
            </a>
            <p className="mt-4 text-sm text-slate-400">Custom AI systems to automate operations and drive growth.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'solutions')} className="text-base text-slate-400 hover:text-white">Process Automation</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'solutions')} className="text-base text-slate-400 hover:text-white">Data Analysis</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'solutions')} className="text-base text-slate-400 hover:text-white">Predictive Modeling</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'solutions')} className="text-base text-slate-400 hover:text-white">NLP Systems</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'about')} className="text-base text-slate-400 hover:text-white">About Us</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'careers')} className="text-base text-slate-400 hover:text-white">Careers</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="text-base text-slate-400 hover:text-white">Contact</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'blog')} className="text-base text-slate-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'privacy')} className="text-base text-slate-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'terms')} className="text-base text-slate-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-base text-slate-500 text-center">&copy; {new Date().getFullYear()} Deltaprimeai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
