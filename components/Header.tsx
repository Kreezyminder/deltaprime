import React, { useState, useRef, useEffect } from 'react';
import Logo from './icons/Logo';
import { User } from '../lib/db';

interface HeaderProps {
  navigate: (page: string) => void;
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ navigate, user, onLogout }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    navigate(page);
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  };

  const handleLogoutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onLogout();
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuRef]);


  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} aria-label="Go to homepage">
              <Logo />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" onClick={(e) => handleNavClick(e, 'solutions')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Solutions</a>
              <a href="#" onClick={(e) => handleNavClick(e, 'use-cases')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Use Cases</a>
              <a href="#" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative" ref={userMenuRef}>
                  <div>
                    <button onClick={() => setUserMenuOpen(!isUserMenuOpen)} type="button" className="max-w-xs bg-slate-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
                        {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                      </div>
                    </button>
                  </div>
                  {isUserMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                      <a href="#" onClick={(e) => handleNavClick(e, 'dashboard')} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700" role="menuitem">Dashboard</a>
                      <a href="#" onClick={(e) => handleNavClick(e, 'profile')} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700" role="menuitem">Your Profile</a>
                      <button onClick={handleLogoutClick} className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700" role="menuitem">
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                 <a href="#" onClick={(e) => handleNavClick(e, 'login')} className="text-slate-300 hover:text-white font-medium text-sm">Sign In</a>
                 <a href="#" onClick={(e) => handleNavClick(e, 'consultation')} className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
                    Get Started
                  </a>
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" onClick={(e) => handleNavClick(e, 'solutions')} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Solutions</a>
            <a href="#" onClick={(e) => handleNavClick(e, 'use-cases')} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Use Cases</a>
            <a href="#" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <div className="border-t border-slate-700 my-2"></div>
            {user ? (
              <>
                <a href="#" onClick={(e) => handleNavClick(e, 'dashboard')} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'profile')} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</a>
                <button onClick={handleLogoutClick} className="w-full text-left text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <a href="#" onClick={(e) => handleNavClick(e, 'login')} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign In</a>
                <a href="#" onClick={(e) => handleNavClick(e, 'consultation')} className="mt-2 block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
                    Get Started
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
