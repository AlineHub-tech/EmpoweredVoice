import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Copy, Check, Shield, Flame, Target, Star, Heart, 
  BookOpen, Sparkles, Award, Lightbulb, Compass, HeartHandshake 
} from 'lucide-react';
import '../styles/blog.css';

interface BlogProps {
  lang: 'RW' | 'EN';
}

interface BlogArticle {
  id: string;
  icon: React.ReactNode;
  category: string;
  titleRW: string;
  titleEN: string;
  contentRW: string;
  contentEN: string;
}

const Blog: React.FC<BlogProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Inyandiko 12 z'Ubwenge n'Ijambo ry'Imana (Big Contents & Flawless Language)
  const articles: BlogArticle[] = [
    {
      id: 'powering',
      icon: <Flame size={20} />,
      category: 'Powering',
      titleRW: 'Gushimangira Imbaraga z\'Umwuka n\'Iyerekwa (Powering)',
      titleEN: 'Spiritual Powering & Divine Empowerment Frameworks',
      contentRW: 'Gushimangira imbaraga (Powering) ni umushinga wo kwemera ko Imana ikuzuza ubushobozi bwayo binyuze mu Mwuka Wera. Ntabwo bishingiye ku mbaraga zacu bwite cyangwa ubwazi bw\'isi, ahubwo ni umusingi utwubakamo ugushikama guhamye mu bihe by\'inzitane, bikaduha ubushobozi bwo guhindura ubuzima bw\'abandi no kugarura icyubahiro cyose ku Mana. Ubu buryo bukuraho intege nke z\'imitekerereze bukakwinjiza mu cyerekezo gihamye cy\'umuhamagaro wawe.',
      contentEN: 'Powering is the deliberate process of allowing God to expand your internal capacity through the Holy Spirit. It operates independently of human might or transient secular intelligence, establishing an unshakeable fortress that enables individuals to endure intense adversity while actively transforming communities for God\'s ultimate glory. This structural realignment neutralizes psychological limitations and positions you within your divine mandate.'
    },
    {
      id: 'faith',
      icon: <Shield size={20} />,
      category: 'Faith',
      titleRW: 'Kwizera (Faith) - Umusingi w\'Ibyiringiro n\'Ugushanduka',
      titleEN: 'Faith - The Technical Foundation of Supernatural Hope',
      contentRW: 'Kwizera ntabwo ari amarangamutima ahinduka cyangwa gutekereza inzozi; ni ukuvanaho ugushidikanya kwose ukizera uwo Imana ari yo n\'icyo yavuze mu Jambo ryayo. Ni intwaro y\'umwuka ituma tureshya n\'ibidashoboka tukabibona nk\'ibishoboka hano mu buzima, kuko uwo twizeye aranduka kandi ntagoreke amasezerano ye. Iyo uhagaze mu kwizera, uhindura uburyo ubona ibibazo, ukabibona mo amarembo yo kwerekanirwaho k\'ubwiza bw\'Imana.',
      contentEN: 'Faith is stripped of superficial emotionalism; it is defined as the absolute technical assurance of who God is and the validation of His documented decrees. It functions as a spiritual shielding system that translates humanly impossible barriers into practical milestones, because the Character of the Sovereign Leader is immutable. Walking by faith completely recalibrates your lenses, transforming obstacles into structural gateways for divine breakthroughs.'
    },
    {
      id: 'trust',
      icon: <Heart size={20} />,
      category: 'Trust',
      titleRW: 'Kwihangana no Kwizera Ibihe by\'Imana (Trust)',
      titleEN: 'Absolute Trust in Divine Timing & Sovereign Layouts',
      contentRW: 'Kwizera Imana (Trust) bivuze kuyigirira ikizere kitavangiye n\'igihe inzira unyuramo itandukanye n\'izina cyangwa umugambi wifuzaga. Ni ukurekura umutima wawe ukayoborwa n\'ukuboko kwayo k’ubwenge, uzi neza ko imigambi igufitiye ari iy\'amahoro n\'ejo hazaza heza (Yeremiya 29:11). Ukuboko kwayo ntigushobora gukora amakosa, kandi igihe cyayo nicyo cyonyine gishyira ibintu byose mu mwanya wabyo ukwiriye.',
      contentEN: 'Trusting God requires placing unconditional confidence in His overarching vision even when your structural environment directly contradicts your personal expectations. It is the spiritual surrender of your logical anxieties to His sovereign guidance, fully anchored on the truth that His blueprints for you are optimized for peace and a definitive future. Divine architecture is incapable of error, and His timing remains the ultimate synchronizer.'
    },
    {
      id: 'principles',
      icon: <Star size={20} />,
      category: 'Principles',
      titleRW: 'Amahame Ngenderwaho y\'Ubuzima Bufite Indangagaciro',
      titleEN: 'Core Biblical Principles for Character Architecture',
      contentRW: 'Kuba umuntu ufite imbaraga z\'Imana n\'ubwenge bisaba kugendera ku mahame adakuka ya Bibiliya: Ubunyangamugayo mu mwiherero, ukuri kutavangiye, no kubaha Uwiteka mu banga. Aya mahame ni yo arinda umusingi w\'ubuzima bwacu ngo ntiwungazwe cyangwa ngo ushenzwe n\'imiyaga n\'akajagari k\'iyi si. Ubuntu bwawe bufite agaciro iyo bushitswe n\'imyitwarire myiza y\'imbere.',
      contentEN: 'Living a highly optimized, spiritually empowered life necessitates an unyielding allegiance to biblical principles: systemic integrity in isolation, uncompromised truth, and a deep reverence for God in secret quarters. These principles act as ethical load-bearers that protect your personal foundation from being fractured by the storms and strategic deceptions of this world. Your public influence is only as sustainable as your internal private character.'
    },
    {
      id: 'goals',
      icon: <Target size={20} />,
      category: 'Goals',
      titleRW: 'Intege n\'Imigambi (Goals) Iheshe Imana Icyubahiro',
      titleEN: 'Strategic Goal Setting for Kingdom Expansion',
      contentRW: 'Gushyiraho intego n\'imigambi ni uburyo bwo gupanga ejo hazaza hawe uhuje n\'ubushake n\'icyerekezo Imana yakuremeye. Buri mugambi wose dushyizeho mu bukungu, mu bwenge, cyangwa mu muryango, ugomba kuba ufite intego imwe ishimangira gufasha abandi, gukuraho ubukene, no kugaragaza ishusho y\'urukundo n\'icyubahiro by\'Iyaturemye.',
      contentEN: 'Setting execution-driven goals is the continuous process of aligning your future milestones with the divine blueprint created for your life. Every single dynamic goal we establish—whether economic, intellectual, or community-based—must possess one ultimate orientation: to systematically uplift others, break dependency loops, and project the true matrix of God\'s love and glory.'
    },
    {
      id: 'respect',
      icon: <HeartHandshake size={20} />,
      category: 'Respect',
      titleRW: 'Kubaha no Guha Agaciro (Respect) Ikiremwamuntu',
      titleEN: 'Radical Respect - Honoring the Imago Dei',
      contentRW: 'Kubaha si ukubera ko umuntu abikwiriye gusa bitewe n\'umutungo cyangwa inzego arimo, ahubwo ni ukwerekana ko yaremwe mu ishusho y\'Imana. Iyo twubashye abandi mu kinyabupfura n\'urukundo, biba bishatse ko twubashye n\'Iyabaremye. Iri hame ni rwo rufunguzo rwo kubaka umuryango ushikamye, urangwa n\'ubwumvikane n\'isuku mu mitekerereze.',
      contentEN: 'Respect is never merely a transactional response based on material status or socio-political ranks; it is the radical acknowledgment that every human being bears the distinct image of God (Imago Dei). When we extend authentic dignity to others, we directly worship their Creator. This principle serves as the cultural architecture for building strong, integrated, and highly functional communities.'
    },
    {
      id: 'wisdom_books',
      icon: <Lightbulb size={20} />,
      category: 'Wisdom',
      titleRW: 'Ubwenge buhanitse buva kuri Salomo na Socrates',
      titleEN: 'The Synthesis of Solomonic Wisdom & Socratic Logic',
      contentRW: 'Ubwenge nyakuri buza iyo twashishoje ku magambo y\'abaranze amateka y\'isi. Umwami Salomo atwigisha gutandukanya icyiza n\'ikibi binyuze mu gutinya Imana, mu gihe Socrates atwibutsa ko kwimenya no kugenzura intekerezo ari yo ntangiriro y\'ubwenge bwose budashonga. Inyandiko z\'abahanga ziteganyirijwe gukura akajagari mu mitwe yacu kugira ngo dufate imyanzuro itoroshye binyuze mu kuri.',
      contentEN: 'Timeless intellect blossoms at the intersection of prophetic revelation and critical cognitive analysis. King Solomon anchors our understanding in discerning right from wrong through the fear of the Lord, while Socrates reminds us that self-examination is the absolute dawn of structural knowledge. Synthesizing these dimensions purges mental clutter, enabling you to execute profound decisions rooted in truth.'
    },
    {
      id: 'spiritual_warfare',
      icon: <Compass size={20} />,
      category: 'Faith',
      titleRW: 'Gutsinda Intambara z\'Ibitekerezo mu Mbaraga z\'Ijambo',
      titleEN: 'Conquering the Cognitive Battlefield Through Truth',
      contentRW: 'Intambara ikomeye cyane muntu arwana buri munsi ni inyuranyisha riri mu bitekerezo bye. Iyo twambaye intwaro zose z\'Imana—ukwizera, agakiza, n\'Ijambo ryayo rizima—dushobora kuzimya imyambi yose y\'umwiza n\'ubwoba itubuza kubona icyerekezo cyiza Imana yateguye. Kwibohora mu ntekerezo bisaba guhozaho kuguha umwanya inyigisho zicengera mu mutima.',
      contentEN: 'The most dangerous combat zone in human existence is located entirely within the mind. By deliberately putting on the full armor of God—faith, the helmet of salvation, and His active Word—we effortlessly neutralize every negative arrow and strategic anxiety designed to blur our destiny. Achieving cognitive freedom requires consistent immersion in spiritually and intellectually dense teachings.'
    },
    {
      id: 'motivation_leaders',
      icon: <Award size={20} />,
      category: 'Powering',
      titleRW: 'Ubutwari bwa Nehemiya na Nelson Mandela mu Kuzitana',
      titleEN: 'The Blueprint of Resilience: Nehemiah & Nelson Mandela',
      contentRW: 'Nehemiya yubatse inkuta z\'i Yeruzalemu mu bihe by\'amakuba n\'iterabwoba, naho Nelson Mandela amara imyaka 27 mu gihome cy\'ivanguramoko ariko yanga gucika intege. Gukaburwa (Motivation) nyakuri guturuka mu kubona abantu banze gucogora cyangwa gushonga kugeza umuryango wabo n\'igihugu cyabo bibonye umucyo n\'ubwigenge. Ubwo butwari nibo bukenewe ubu.',
      contentEN: 'Nehemiah engineered the reconstruction of Jerusalem’s broken walls under intense asymmetric warfare threats, while Nelson Mandela survived 27 years of severe imprisonment without compromising his internal vision. Authentic motivation is forged when leaders refuse to melt under structural pressure until their generation achieves absolute liberty. This standard of resilience is our benchmark.'
    },
    {
      id: 'gifts_discovery',
      icon: <Sparkles size={20} />,
      category: 'Principles',
      titleRW: 'Kuvumbura, Gutyaza n\'Ibyiciro by\'Impano zacu',
      titleEN: 'Unlocking and Refining Hidden Talents for Public Value',
      contentRW: 'Imana ntiyigeze irema umuntu udafite ubwenge cyangwa nta mpano yihariye yahawe. Inshingano yacu ya mbere mu buzima ni ukugenzura mu mwiherero ibyo dukora bitugwemo umutima (passions), tukabityaza binyuze mu kwiga n\'imyitozo, hanyuma tukabizana nk\'igisubizo gifatika ku babaye no ku muryango mugari.',
      contentEN: 'The Creator never designed a default human being devoid of intrinsic value or specific operational talents. Our primary existential assignment is to audit our deep-seated passions in private quarters, refine them through rigorous technical discipline, and strategically deploy them as functional solutions to heal and optimize our global communities.'
    },
    {
      id: 'purpose_driven',
      icon: <BookOpen size={20} />,
      category: 'Goals',
      titleRW: 'Ubuzima Bufite Icyerekezo n\'Imigambi Ihamye',
      titleEN: 'The Architecture of a Purpose-Driven Life Model',
      contentRW: 'Gukuraho akajagari n\'ubuzererezi mu buzima bisaba kumenya intego Imana yakuremeye. Iyo ubayeho binyuze mu migambi ifatika n\'ingamba zicuye, buri gitondo kibyutsa imbaraga nshya (Empowered) zirinda ko utakaza umwanya mu bintu bitagufitiye inyungu cyangwa mu rungano rudafite icyerekezo gifatika.',
      contentEN: 'Eradicating operational chaos and directionless drifting from your life necessitates a clear identification of your divine layout. When you design your daily schedule around structured milestones, every morning triggers a high-utility, empowered energy that shields you from wasting capital and time on trivial matters.'
    },
    {
      id: 'mental_peace',
      icon: <Heart size={20} />,
      category: 'Trust',
      titleRW: 'Amahoro yo mu Mutima mu Isi y\'Akajagari n\'Ibihuha',
      titleEN: 'Guarding Your Mental Peace Amidst Environmental Chaos',
      contentRW: 'Ijambo ry\'Imana mu gice cya Yohana 14:27 hatwibutsa ko Yesu yasize aduhaye amahoro adatandukanye n\'ay\'isi itanga. Aya mahoro ntabwo ari ukubura ibibazo, ahubwo ni umubavu w\'imbere urinda imitima yacu n\'imitekerereze yacu mu gihe ibintu byose bishatse guhinduka ibicika n\'umuvundo mu muryango.',
      contentEN: 'The divine framework in John 14:27 states that Jesus left us with an unalterable emotional peace completely independent of world conditions. This peace does not mean the absolute absence of pressure, but functions as an internal psychological fortress that safeguards your alignment when environments become turbulent.'
    }
  ];

  const categoriesList = ['All', 'Powering', 'Faith', 'Trust', 'Principles', 'Goals', 'Wisdom'];

  // Smart Search logic
  const filteredArticles = articles.filter(article => {
    const searchLower = searchQuery.toLowerCase();
    
    const matchesSearch = 
      article.titleRW.toLowerCase().includes(searchLower) ||
      article.titleEN.toLowerCase().includes(searchLower) ||
      article.contentRW.toLowerCase().includes(searchLower) ||
      article.contentEN.toLowerCase().includes(searchLower) ||
      article.category.toLowerCase().includes(searchLower);

    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="blog-page-container">
      
      {/* ===== HEADER SECTION ===== */}
      <div className="blog-header-section">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="blog-mini-badge"
        >
          📚 Insights & Revelations
        </motion.span>
        
        <h1>{lang === 'RW' ? "Ingingo z'Ubwenge n'Ijambo ry'Imana" : 'Timeless Wisdom & Divine Truths'}</h1>
        <p className="blog-subtitle">
          {lang === 'RW' ? "Inyandiko zesesenguye mu mizi zikubaka umutima n'imitekerereze byanditswe na " : 'Profound spiritual architectures and analytical wisdom logs curated by '} 
          <span className="author-name">Umugwaneza Aline</span>
        </p>

        {/* PRO SEARCH BAR */}
        <div className="blog-search-wrapper">
          <Search className="search-icon" size={22} />
          <input 
            type="text" 
            placeholder={lang === 'RW' ? 'Shakisha inyandiko (e.g. Kwizera, Inkingi, Goals)...' : 'Search by keyword, title, or reference (e.g. Faith, Wisdom)...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        {/* CATEGORY FILTER BADGES */}
        <div className="category-filters-scroll">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' ? (lang === 'RW' ? 'Zose' : 'All') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* ===== BLOG POSTS GRID ===== */}
      <div className="blog-grid-section-wrapper">
        <div className="blog-articles-grid">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => {
                const title = lang === 'RW' ? article.titleRW : article.titleEN;
                const content = lang === 'RW' ? article.contentRW : article.contentEN;

                return (
                  <motion.article 
                    key={article.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="blog-article-card"
                  >
                    <div className="card-top-info">
                      <div className="article-category-badge">
                        <span className="badge-icon-style">{article.icon}</span>
                        <span>{article.category}</span>
                      </div>
                      <button 
                        className={`blog-copy-icon-btn ${copiedId === article.id ? 'copied' : ''}`}
                        onClick={() => handleCopy(article.id, `${title}\n\n${content}\n\n- Written by Umugwaneza Aline`)}
                        aria-label="Copy Article"
                      >
                        {copiedId === article.id ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <h2 className="article-title">{title}</h2>
                    <p className="article-content">{content}</p>
                    
                    <div className="card-footer-layout">
                      <div className="author-signature">© Umugwaneza Aline</div>
                      <div className="read-time-tag">{lang === 'RW' ? 'Imin 4' : '4 min read'}</div>
                    </div>
                  </motion.article>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="no-results"
              >
                <div className="no-results-box">
                  <h3>🔍 {lang === 'RW' ? 'Nta nyandiko ibonetse' : 'No articles found'}</h3>
                  <p>
                    {lang === 'RW' 
                      ? `Nta kintu gihuye na "${searchQuery}" twabonye muri iki kiciro.` 
                      : `We couldn't find any results matching "${searchQuery}" in this category.`}
                  </p>
                  <button className="reset-search-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
                    {lang === 'RW' ? 'Subiramo byose' : 'Reset Filters'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Blog;
