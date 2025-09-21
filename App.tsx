import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PlaceholderPage from './pages/PlaceholderPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import { db, User } from './lib/db';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in from a previous session
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (loggedInUserEmail) {
      db.user.findUnique({ where: { email: loggedInUserEmail } }).then(user => {
        if (user) {
          setCurrentUser(user);
          // Redirect to dashboard if trying to access home/login/register while logged in
          if (['home', 'login', 'register'].includes(currentPage)) {
            setCurrentPage('dashboard');
          }
        } else {
          // Clean up if user in local storage is not in DB
           localStorage.removeItem('loggedInUser');
        }
      });
    }
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('loggedInUser', user.email);
    navigate('dashboard');
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('loggedInUser');
    navigate('home');
  };

  const handleUpdateUser = async (updatedData: Partial<User>): Promise<User> => {
    if (!currentUser) throw new Error("No user is logged in.");
    const updatedUser = await db.user.update({
      where: { id: currentUser.id },
      data: updatedData,
    });
    setCurrentUser(updatedUser);
    // If email was changed, update localStorage key
    if (updatedData.email) {
      localStorage.setItem('loggedInUser', updatedData.email);
    }
    return updatedUser;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'contact':
        return <ContactPage />;
      case 'consultation':
        return <ContactPage />;
      case 'login':
        return <LoginPage navigate={navigate} onLogin={handleLogin} />;
      case 'register':
        return <RegisterPage navigate={navigate} onLogin={handleLogin} />;
      case 'dashboard':
        return currentUser ? <DashboardPage user={currentUser} /> : <LoginPage navigate={navigate} onLogin={handleLogin} />;
      case 'profile':
         return currentUser ? <ProfilePage user={currentUser} onUserUpdate={handleUpdateUser} /> : <LoginPage navigate={navigate} onLogin={handleLogin} />;
      case 'about':
        return <PlaceholderPage title="About Us" />;
      case 'use-cases':
        return <PlaceholderPage title="Use Cases" />;
      case 'solutions':
        return <PlaceholderPage title="Solutions" />;
      case 'careers':
        return <PlaceholderPage title="Careers" />;
      case 'blog':
        return <PlaceholderPage title="Blog" />;
      case 'privacy':
        return <PlaceholderPage title="Privacy Policy" />;
      case 'terms':
        return <PlaceholderPage title="Terms of Service" />;
      case 'demo':
        return <PlaceholderPage title="Book a Demo" description="Our team will be in touch to schedule a personalized demo."/>;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col font-sans">
      <Header navigate={navigate} user={currentUser} onLogout={handleLogout} />
      {renderPage()}
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;