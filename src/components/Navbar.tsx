import React, { useState } from 'react';
import '../styles/navbar.css';
import { 
  Globe, Mic, Menu, X, 
  Home, BookOpen, Flame, Sparkles, 
  BookHeart, MessageSquare, Gift, Info, PhoneCall 
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  lang: 'RW' | 'EN';
  setLang: (lang: 'RW' | 'EN') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', rw: 'Ahabanza', en: 'Home', icon: <Home size={18} /> },
    { id: 'blog', rw: 'Blog', en: 'Blog', icon: <BookOpen size={18} /> },
    { id: 'motivation', rw: 'Gukabura', en: 'Motivation', icon: <Flame size={18} /> },
    { id: 'inspiration', rw: 'Inspiration', en: 'Inspiration', icon: <Sparkles size={18} /> },
    { id: 'word', rw: 'Ijambo ry\'Imana', en: 'Word of God', icon: <BookHeart size={18} /> },
    { id: 'quotes', rw: 'Amagambo', en: 'Quotes', icon: <MessageSquare size={18} /> },
    { id: 'gifts', rw: 'Impano', en: 'Gifts', icon: <Gift size={18} /> },
    { id: 'about', rw: 'Ibituvugaho', en: 'About Us', icon: <Info size={18} /> },
    { id: 'contact', rw: 'Tuvugishe', en: 'Contact Us', icon: <PhoneCall size={18} /> },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Voice Micro Logo */}
        <div className="nav-logo" onClick={() => handleNavClick('home')}>
          <div className="logo-icon-wrapper">
            <Mic className="logo-mic-icon" size={22} />
          </div>
          <div className="logo-text-group">
            <span className="logo-text">Empowered</span>
            <span className="logo-sub">Voice</span>
          </div>
        </div>

        {/* Nav Links zifite Icons */}
        <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="nav-item-icon">{item.icon}</span>
              <span className="nav-item-text">{lang === 'RW' ? item.rw : item.en}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button 
            className="lang-switcher" 
            onClick={() => setLang(lang === 'RW' ? 'EN' : 'RW')}
            aria-label="Change language"
          >
            <Globe size={18} />
            <span>{lang}</span>
          </button>

          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
