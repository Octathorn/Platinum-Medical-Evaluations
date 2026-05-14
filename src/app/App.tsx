import { useState, useEffect } from 'react';
import Home from './pages/HomeSimple';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'about'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/privacy-policy') {
        setCurrentPage('privacy');
      } else if (hash === '#/about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-white size-full">
      {currentPage === 'home' ? (
        <Home />
      ) : currentPage === 'about' ? (
        <About />
      ) : (
        <PrivacyPolicy />
      )}
    </div>
  );
}
