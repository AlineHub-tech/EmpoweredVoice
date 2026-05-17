import React, { useState } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Imbuga zose ziri kuri web yacu
import Home from './pages/Home';
import Blog from './pages/Blog';
import Motivation from './pages/Motivation';
import Inspiration from './pages/Inspiration';
import WordOfGod from './pages/WordOfGod';
import Quotes from './pages/Quotes';
import Gifts from './pages/Gifts';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [language, setLanguage] = useState<'RW' | 'EN'>('RW');

  // Uburyo bwo guhinduranya amapaji dynamically
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home lang={language} />;
      case 'blog': return <Blog lang={language} />;
      case 'motivation': return <Motivation lang={language} />;
      case 'inspiration': return <Inspiration lang={language} />;
      case 'word': return <WordOfGod lang={language} />;
      case 'quotes': return <Quotes lang={language} />;
      case 'gifts': return <Gifts lang={language} />;
      case 'about': return <AboutUs lang={language} />;
      case 'contact': return <ContactUs lang={language} />;
      default: return <Home lang={language} />;
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        lang={language} 
        setLang={setLanguage} 
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer lang={language} />
    </div>
  );
};

export default App;
