import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Copy, Check, Heart, Shield, Lightbulb, 
  Search, BookOpen, Sparkles, Smile, Compass 
} from 'lucide-react';
import '../styles/quotes.css';

interface QuotesProps {
  lang: 'RW' | 'EN';
}

interface QuoteItem {
  id: string;
  icon: React.ReactNode;
  category: 'Wisdom' | 'Integrity' | 'Kindness' | 'Faith';
  typeRW: string;
  typeEN: string;
  textRW: string;
  textEN: string;
  adviceRW: string;
  adviceEN: string;
}

const Quotes: React.FC<QuotesProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Wisdom' | 'Integrity' | 'Kindness' | 'Faith'>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Ingero 9 z'Amagambo y'Ubwenge n'Inama zanditse mu Kinyarwanda n'Icyongereza by'Ubuhanga
  const quotesData: QuoteItem[] = [
    {
      id: 'quote1',
      icon: <Lightbulb size={18} />,
      category: 'Wisdom',
      typeRW: 'Ubwenge',
      typeEN: 'Wisdom',
      textRW: '“Umwenda w’ubwenge ntabwo ufungirwa mu magambo menshi, utangirira mu gutega amatwi no kwiga utuje.”',
      textEN: '“True wisdom is not captured in many words; it begins with quiet listening and a willingness to learn.”',
      adviceRW: 'Motesha imitwe intekerezo zawe maze ubanze utegereze wumve neza uwo muvugana mbere yo kwisobanura. Ubwenge bwubakwa no gushishoza bikuye mu mutuzo w\'imbere.',
      adviceEN: 'Before rushing to speak or defend your point, take a moment to listen deeply. True understanding is built through reflection and internal quietness.'
    },
    {
      id: 'quote2',
      icon: <Shield size={18} />,
      category: 'Integrity',
      typeRW: 'Ubunyangamugayo',
      typeEN: 'Integrity',
      textRW: '“Ubunyangamugayo ni icyo ukora n’igihe nta muntu n’umwe uri kukureba.”',
      textEN: '“Integrity is doing the right thing even when no one else is watching.”',
      adviceRW: 'Kosora imyitwarire yawe mu mwiherero nk’uko uyigaragaza mu ruhame. Imvugo yawe nihure n’ibikorwa byawe bya buri munsi bishingiye ku budakemwa.',
      adviceEN: 'Align your private actions with your public character. Let your words consistently match your daily behavior and structural transparency.'
    },
    {
      id: 'quote3',
      icon: <Heart size={18} />,
      category: 'Kindness',
      typeRW: 'Ubuntu & Urukundo',
      typeEN: 'Kindness & Love',
      textRW: '“Nta gikorwa cy’urugwiro n’ubuntu cyaba gito cyane ngo kibe imfabusa mu maso y’uwagikorewe.”',
      textEN: '“No act of kindness, no matter how small, is ever wasted in the eyes of the one who receives it.”',
      adviceRW: 'Ba umuyoboro w’amahoro ku bandi bose. Wakira umuntu mu kinyabupfura, mufashe mu buryo bworoheje, uwo ni umugisha utazashira ku mitima yabo.',
      adviceEN: 'Be a source of peace for others. Welcoming someone politely or helping in a simple way leaves an everlasting impact on human emotions.'
    },
    {
      id: 'quote4',
      icon: <Compass size={18} />,
      category: 'Wisdom',
      typeRW: 'Icyerekezo',
      typeEN: 'Vision',
      textRW: '“Niba udashobora kuguruka nka kagoma, iruka. Niba udashobora kwiruka, genda. Ariko icyo ukora cyose, komeza ujye imbere.”',
      textEN: '“If you can’t fly then run, if you can’t run then walk. But whatever you do, you have to keep moving forward.”',
      adviceRW: 'Inzira y\'iterambere ntabwo ari ihiganwa n\'abandi. Icyo ugomba gukora ni ukwanga guhagarara, buri ntambwe ntoya ikugeza kure cyane y\'aho wavuye.',
      adviceEN: 'Progress is not a competition with others. Your only assignment is to refuse stagnation; every single small step steadily compounds into massive distance.'
    },
    {
      id: 'quote5',
      icon: <BookOpen size={18} />,
      category: 'Faith',
      typeRW: 'Ukwizera',
      typeEN: 'Faith',
      textRW: '“Ukwizera ntabwo ari ukubona inzira yose isobanutse, ahubwo ni ugutambuka intambwe ya mbere n\'ubwo waba ubona umwijima.”',
      textEN: '“Faith is taking the first step even when you can’t see the whole staircase.”',
      adviceRW: 'Imigambi y\'Imana ihora ari myiza kuri we. Rekura ubwoba n\'akajagari k\'intekerezo, wemere ko Iyaguhamagaye izaguyobora neza mu mucyo wayo.',
      adviceEN: 'God’s layout for your life is completely safe. Release anxiety, overcome toxic mental loops, and trust that He will structurally sustain your movement.'
    },
    {
      id: 'quote6',
      icon: <Sparkles size={18} />,
      category: 'Integrity',
      typeRW: 'Imyitwarire',
      typeEN: 'Character',
      textRW: '“Igiciro cyo kuba umuntu mwiza cyangwa ufite indangagaciro kiruta kure icyubahiro cy\'akanya gato gishingiye ku binyoma.”',
      textEN: '“The cost of being a person of high principles is higher, but the reward of a clear conscience is priceless.”',
      adviceRW: 'Haranira kurinda izina ryawe n\'ubunyangamugayo bwawe mu muryango wose, kuko ibyo ari byo biramba mu mateka igihe gito gishize gishonga.',
      adviceEN: 'Protect your integrity and dignity in every environment; temporary shortcuts always lead to permanent identity damage and moral fractures.'
    },
    {
      id: 'quote7',
      icon: <Smile size={18} />,
      category: 'Kindness',
      typeRW: 'Imbabazi',
      typeEN: 'Forgiveness',
      textRW: '“Imbabazi ni umubavu uza inyuma yo gukomereka; zibohora umutima w\'uzihemutse kandi zikavura uwari warakomeretse.”',
      textEN: '“Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.”',
      adviceRW: 'Kugumana inzika mu mutima ni nko kunywa uburozi ukizera ko buzica umwanzi wawe. Bura umutima wawe urekure imbabazi utiteganyirije.',
      adviceEN: 'Holding a grudge is like drinking poison and expecting your enemy to die. Empower your emotional space by completely letting go of historical pain.'
    },
    {
      id: 'quote8',
      icon: <Lightbulb size={18} />,
      category: 'Wisdom',
      typeRW: 'Imitekerereze',
      typeEN: 'Mindset',
      textRW: '“Umutunzi wa mbere ntabwo ari ufite ibintu byinshi mu mufuka, ahubwo ni ufite ibitekerezo byiza n\'ubwenge buhagije mu mutwe.”',
      textEN: '“The truly wealthy individual is not the one with a full pocket, but the one with a rich mind and divine wisdom.”',
      adviceRW: 'Shora imari mu gushaka ubumenyi bufatika, gusoma inyandiko z\'abahanga, no gutega amatwi inyigisho zicengera mu mutima zikura akajagari.',
      adviceEN: 'Invest premium hours into active learning, reading spiritual and intellectual books, and absorbing constructive advice that expands structural intelligence.'
    },
    {
      id: 'quote9',
      icon: <BookOpen size={18} />,
      category: 'Faith',
      typeRW: 'Kwihangana',
      typeEN: 'Patience',
      textRW: '“Isaha y\'Imana ntabwo ikererwa kandi ntijya itanga ibyasaze; ihora iza mu gihe kiboneye cyane n\'ubwo twebwe twaba tubona bitandukanye.”',
      textEN: '“God’s clock is never slow and never rushes; it operates on perfect synchronization even when our human sight panics.”',
      adviceRW: 'Kwihangana ntabwo ari ugutegereza gusa mu bwihebe, ahubwo ni uburyo witwara neza kandi ukagira ibyiringiro mu gihe ugitegereje isaha nyayo.',
      adviceEN: 'Patience is not merely the passive ability to wait, but how we behave and guard our inner joy while the divine manifestation unfolds.'
    }
  ];

  const filteredQuotes = quotesData.filter(item => {
    const searchLower = searchQuery.toLowerCase();
    const typeText = lang === 'RW' ? item.typeRW.toLowerCase() : item.typeEN.toLowerCase();
    const textText = lang === 'RW' ? item.textRW.toLowerCase() : item.textEN.toLowerCase();
    const adviceText = lang === 'RW' ? item.adviceRW.toLowerCase() : item.adviceEN.toLowerCase();

    const matchesSearch = 
      typeText.includes(searchLower) ||
      textText.includes(searchLower) ||
      adviceText.includes(searchLower);

    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="quotes-page-container">
      
      {/* ===== HEADER SECTION ===== */}
      <div className="quotes-page-header">
        <div className="quotes-mini-badge">
          <MessageSquare className="quotes-main-icon" size={16} />
          <span>{lang === 'RW' ? 'Amagambo yo Guhumanurwa' : 'Counsels for the Soul'}</span>
        </div>
        <h1>{lang === 'RW' ? "Amagambo y'Inama n'Inyigisho" : 'Words of Wisdom & Counsel'}</h1>
        <p className="quotes-header-desc">
          {lang === 'RW' ? 'Amagambo magufi, imigani n\'inyigisho biguhana kandi bikakuyobora mu ndangagaciro z\'ubwenge.' : 'Timeless insights to guide your character, decisions, and mindset.'}
        </p>

        {/* SEARCH BAR DESIGN */}
        <div className="quotes-search-box-wrapper">
          <Search className="search-icon-quotes" size={20} />
          <input 
            type="text"
            placeholder={lang === 'RW' ? 'Shakisha amagambo (e.g. Ubwenge, Ubuntu, Imbabazi)...' : 'Search quotes by keywords...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-quotes-search" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        {/* CATEGORY TABS SELECTOR */}
        <div className="quotes-filter-tabs">
          {['All', 'Wisdom', 'Integrity', 'Kindness', 'Faith'].map((cat) => (
            <button
              key={cat}
              className={`quote-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat as any)}
            >
              {cat === 'All' ? (lang === 'RW' ? 'Zose' : 'All') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* ===== QUOTES GRID LAYOUT ===== */}
      <div className="quotes-grid-section">
        <div className="quotes-grid-layout">
          <AnimatePresence mode="popLayout">
            {filteredQuotes.length > 0 ? (
              filteredQuotes.map((item) => {
                const type = lang === 'RW' ? item.typeRW : item.typeEN;
                const text = lang === 'RW' ? item.textRW : item.textEN;
                const advice = lang === 'RW' ? item.adviceRW : item.adviceEN;
                const fullShareText = `"${text}"\n\n-${type}\n\nInama: ${advice}\n\n© Urubuga rwa Empowered Voice`;

                return (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="quote-insight-card"
                  >
                    <div className="quote-card-top-bar">
                      <div className="quote-type-tag">
                        <span className="quote-icon-span">{item.icon}</span>
                        <span>{type}</span>
                      </div>
                      <button 
                        className={`quote-copy-btn-layout ${copiedId === item.id ? 'copied' : ''}`}
                        onClick={() => handleCopy(item.id, fullShareText)}
                        aria-label="Copy entire quote"
                      >
                        {copiedId === item.id ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <div className="quote-body-text">
                      <p>"{text}"</p>
                    </div>

                    <div className="quote-advice-section">
                      <p>
                        <span className="advice-label-pro">{lang === 'RW' ? '🔑 Inama z’Ubwenge: ' : '🔑 Practical Counsel: '}</span> 
                        {advice}
                      </p>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="no-quotes-found">
                <p>{lang === 'RW' ? "Nta magambo ahuye n'ibyo mwashatse. Kanda \"Zose\" ugasubiramo." : 'No conceptual records match your current quote search criteria.'}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
