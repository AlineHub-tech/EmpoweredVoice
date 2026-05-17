import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Sparkles, BookOpen, Share2, Flame, 
  BookHeart, Lightbulb, Compass, Award, ShieldCheck 
} from 'lucide-react';
import '../styles/home.css';

interface HomeProps {
  lang: 'RW' | 'EN';
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Amagambo y'ubwenge menshi atandukanye (Ijambo ry'Imana, Abanyabwenge, n'Ibitabo)
  const premiumQuotes = [
    {
      rw: "Ntabwo wiremye, Imana yaguhawe imbaraga n'impano (Empowered) kugira ngo nawe ube umugisha ku bandi (Empower Others), kandi byose bibe biganisha ku cyubahiro cyayo.",
      en: "You are not self-made. God empowered you with gifts and strength so that you can empower others, and everything you do should bring glory to Him.",
      author: "Umugwaneza Aline"
    },
    {
      rw: "Ubwenge buhera ku gutinya Uwiteka, kandi kumenya Uwera ni ko kwijirwa mu gucengerwa.",
      en: "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.",
      author: "Imigani 9:10"
    },
    {
      rw: "Ubuhamya bw'ubuzima ntabwo bupimirwa mu nshuro uhumeka, ahubwo bupimirwa mu bihe n'ibikorwa byatwaye umwuka wakoze ku mitima y'abandi.",
      en: "Life is not measured by the number of breaths we take, but by the moments and actions that take our breath away and impact others.",
      author: "Maya Angelou"
    },
    {
      rw: "Igiciro cy'ubwenge kiruta kure cyane icy'amakorali, kandi ibintu byose wifuza ntibishobora kubugereranywa.",
      en: "For wisdom is more precious than rubies, and nothing you desire can compare with her.",
      author: "Imigani 3:15"
    },
    {
      rw: "Uburambe ntabwo ari ibyo duhura nabyo, ahubwo ni uburyo duhindura ibyo duhura nabyo mo inyigisho n'amashimwe.",
      en: "Experience is not what happens to a man; it is what a man does with what happens to him.",
      author: "Aldous Huxley"
    }
  ];

  // Guhinduranya amagambo buri mezi 7 (7 seconds automatic carousel)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % premiumQuotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [premiumQuotes.length]);

  const copyQuote = () => {
    const activeQuote = premiumQuotes[currentQuoteIndex];
    const textToCopy = lang === 'RW' ? activeQuote.rw : activeQuote.en;
    navigator.clipboard.writeText(textToCopy);
    alert(lang === 'RW' ? "Ijambo ry'ubwenge ryandukuwe! 📋" : "Wisdom quote copied! 📋");
  };

  // Pillars zagurwemo content nyinshi cyane (6 Pillars Pro Grid)
  const features = [
    {
      icon: <BookHeart size={28} />,
      titleRW: "Ijambo ry'Imana n'Ukwizera",
      titleEN: "Divine Word & Faith",
      descRW: "Inyigisho zicengera mu mutima zishingiye ku Ijambo ry'Imana rishobora byose n'ubwiza bwayo.",
      descEN: "Deep spiritual teachings grounded in the sovereign Word of God and His eternal grace."
    },
    {
      icon: <Lightbulb size={28} />,
      titleRW: "Ibitabo n'Ubwenge bwa Kera",
      titleEN: "Literary Wisdom & Mindset",
      descRW: "Gusesengura ibitabo by'ubwenge by'abahanga bafashije isi guhindura imitekerereze myiza.",
      descEN: "Analyzing masterpieces from great thinkers that shaped human history and mindset shift."
    },
    {
      icon: <Flame size={28} />,
      titleRW: "Gukabura no Guhumuriza",
      titleEN: "Motivation & Resilience",
      descRW: "Inzira z'ubuzima z'abantu banyuze mu bikomeye ariko bakaba intwari z'amateka.",
      descEN: "Biographies and strategic insights of icons who overcame adversity to rewrite history."
    },
    {
      icon: <Compass size={28} />,
      titleRW: "Kuyobora n'Inshingano",
      titleEN: "Purpose & Leadership",
      descRW: "Gushakisha no kumenya impano n'umuhamagaro Imana yaguhaye kugira ngo uteze imbere isi.",
      descEN: "Discovering your divine assignment and maximizing your gifts to lead and transform communities."
    },
    {
      icon: <Award size={28} />,
      titleRW: "Impano n'Ibyo Dutunze",
      titleEN: "Honoring with Talents",
      descRW: "Uburyo bwo gukoresha ubumenyi, impano, n'umutungo mu guhesha Imana icyubahiro.",
      descEN: "Practical keys to leverage your creative skills, talents, and wealth for Kingdom expansion."
    },
    {
      icon: <ShieldCheck size={28} />,
      titleRW: "Ubuzima n'Indangagaciro",
      titleEN: "Character & Integrity",
      descRW: "Kwubaka umuntu w'imbere ufite indangagaciro ziranga umukristo n'umuntu w'ubwenge.",
      descEN: "Building inner character, unwavering integrity, and exceptional values for life success."
    }
  ];

  return (
    <div className="home-container">
      
      {/* ===== HERO SECTION WITH ANIMATED BACKGROUND & MOVING ICONS ===== */}
      <section className="hero-section">
        
        {/* Floating Icons Background Layer */}
        <div className="floating-icons-container">
          <motion.div className="float-icon fi-1" animate={{ y: [0, -30, 0], x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}><Sparkles size={40} /></motion.div>
          <motion.div className="float-icon fi-2" animate={{ y: [0, 40, 0], x: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}><BookOpen size={35} /></motion.div>
          <motion.div className="float-icon fi-3" animate={{ y: [0, -25, 0], x: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}><Heart size={30} /></motion.div>
          <motion.div className="float-icon fi-4" animate={{ y: [0, 35, 0], x: [0, 25, 0] }} transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}><Lightbulb size={38} /></motion.div>
        </div>

        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-badge"
          >
            🚀 Empowered Voice Platform
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-motto"
          >
            EMPOWERED TO EMPOWER OTHERS <br />
            <span className="gradient-text">FOR HIS GLORY</span>
          </motion.h1>

          <p className="hero-subtext">
            {lang === 'RW' 
              ? 'Ihuriro ry\'ubwenge, amashimwe, n\'Ijambo ry\'Imana ryungura ubumenyi rikaba n\'isoko y\'icyizere, ryanditswe na Umugwaneza Aline.' 
              : 'The ultimate sanctuary for spiritual depth, profound wisdom literature, and transformative motivational insights curated by Umugwaneza Aline.'}
          </p>
          
          {/* Animated Quote Carousel Card */}
          <div className="quote-carousel-wrapper">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="quote-of-the-day-card"
              >
                <div className="quote-header">
                  <span className="quote-badge-title">✨ {lang === 'RW' ? "Isoko y'Ubwenge" : "Stream of Wisdom"}</span>
                  <button onClick={copyQuote} className="copy-btn-action">
                    <Share2 size={14} /> {lang === 'RW' ? 'Gukopera' : 'Copy'}
                  </button>
                </div>
                <p className="quote-text">
                  "{lang === 'RW' ? premiumQuotes[currentQuoteIndex].rw : premiumQuotes[currentQuoteIndex].en}"
                </p>
                <span className="quote-author">- {premiumQuotes[currentQuoteIndex].author}</span>
              </motion.div>
            </AnimatePresence>
            
            {/* Carousel Indicators */}
            <div className="carousel-dots">
              {premiumQuotes.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`dot ${idx === currentQuoteIndex ? 'active' : ''}`}
                  onClick={() => setCurrentQuoteIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION (6 PILLARS PRO GRID) ===== */}
      <section className="features-section">
        <div className="section-header-center">
          <h2 className="section-title">
            {lang === 'RW' ? 'Ibice By’Ingenzi Bikubaka Amateka' : 'Core Pillars of Spiritual & Intellectual Growth'}
          </h2>
          <p className="section-subtitle">
            {lang === 'RW' ? 'Imfashanyigisho zateguriwe kugufasha gukura mu bwenge, mu mwuka, no mu bikorwa bya buri munsi.' : 'Carefully structured domains designed to activate your potentials and align you with divine purpose.'}
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.12)" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3>{lang === 'RW' ? item.titleRW : item.titleEN}</h3>
              <p>{lang === 'RW' ? item.descRW : item.descEN}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
