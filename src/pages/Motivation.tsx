import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Award, Lightbulb, Zap, Search, ShieldAlert, HeartHandshake } from 'lucide-react';
import '../styles/motivation.css';

interface MotivationProps {
  lang: 'RW' | 'EN';
}

interface MotivationItem {
  id: string;
  person: string;
  category: 'Faith' | 'Philosopher' | 'Celebrity';
  roleRW: string;
  roleEN: string;
  quoteRW: string;
  quoteEN: string;
  storyRW: string;
  storyEN: string;
}

const Motivation: React.FC<MotivationProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Faith' | 'Philosopher' | 'Celebrity'>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Ingero 10 z'Intwari zanditse mu Kinyarwanda n'Icyongereza by'Ubuhanga
  const motivationData: MotivationItem[] = [
    {
      id: 'nehemiah',
      person: 'Nehemiya',
      category: 'Faith',
      roleRW: "Uwubatse Inkuta z'i Yeruzalemu n'Umujyanama w'Umwami",
      roleEN: 'Governor of Persian Judea & Master Builder',
      quoteRW: "“Imana yo mu ijuru izatubashisha; ni cyo gituma twebwe abagaragu bayo tuzahaguruka tukayubaka.”",
      quoteEN: '“The God of heaven will give us success. We his servants will start rebuilding.”',
      storyRW: "Yari umuhereza w'umuvinyu usanzwe, ariko ahabwa iyerekwa (Empowered) ryo kubaka inkuta zasenyutse. Nubwo abanzi nka Sanabalati na Tobiya bamuteye ubwoba kandi bakamuseka, yanze kumanuka mu nshingano ze kugeza inkuta zuzuye mu minsi 52 gusa.",
      storyEN: 'A simple cupbearer who received a divine burden to rebuild Jerusalem’s broken walls. Despite fierce mockery, intense death threats, and political sabotage from Sanballat and Tobiah, he refused to stop until the wall was completed in just 52 days.'
    },
    {
      id: 'paul_apostle',
      person: 'Intumwa Pawulo (Apostle Paul)',
      category: 'Faith',
      roleRW: "Umuhanga mu Mategeko n'Intumwa y'Ibyamamare mu Kwizera",
      roleEN: 'Theologian, Church Planter & Apostle of Grace',
      quoteRW: "“Nshobozwa byose n'ubwiza bw'uwo baturukamo umpa imbaraga (Empowered).”",
      quoteEN: '“I can do all things through Christ who strengthens me.”',
      storyRW: "Yatangiye ari Sauli, umwanzi watotezaga abakristo, ariko amaze guhura na Yesu ahinduka umwubatsi mukomeye w'itorero. Yanditse ibice bitandatu bya New Testament ari mu buvumo, yerekana ubutwari budasanzwe.",
      storyEN: 'Once a fierce persecutor of Christians, his encounter with Christ transformed him into the greatest missionary. He wrote most of the New Testament from dark prison cells, demonstrating supernatural resilience.'
    },
    {
      id: 'gitwaza',
      person: 'Apotre Dr. Paul Gitwaza',
      category: 'Faith',
      roleRW: "Uwashinze Imiryango ya Authentic Word Ministries",
      roleEN: 'Apostolic Leader & International Speaker',
      quoteRW: "“Iyo ufite icyerekezo (Vision), amateka yawe ntabwo akubera inkomyi, ahubwo ahinduka amashuri akuganisha ku nshingano Imana yakuremeye.”",
      quoteEN: '“When you carry a distinct Vision, your past history ceases to be a limitation; it transforms into classrooms heading to your divine mandate.”',
      storyRW: "Yatangiye umurimo w'ivugabutumwa mu bihe bitoroshye mu karere k'Ibiyaga Bigari, ariko binyuze mu gushikama no kuyoborwa n'Umwuka Wera, yubatse itorero rifite ijambo rikomeye ku isi, yigisha urubiruko gukoresha impano zabo.",
      storyEN: 'He initiated his ministry during turbulent times in the Great Lakes region. Through unyielding spiritual focus and divine alignment, he established a global ministry network, empowering generations to discover their mandates.'
    },
    {
      id: 'socrates',
      person: 'Socrates',
      category: 'Philosopher',
      roleRW: "Umusosorero w'Ubwenge n'Umuhanga mu Bitekerezo wa Kera",
      roleEN: 'Classical Greek Philosopher & Father of Western Logic',
      quoteRW: "“Ubuzima butasuzumwe cyangwa butagenzuwe, ntibukwiriye kubaho.”",
      quoteEN: '“The unexamined life is not worth living.”',
      storyRW: "Yanze kugendera ku kinyoma n'akajagari k'abanyapolitiki b'i Athene, ahitamo kwigisha urubiruko gushishoza no gushakashaka ukuri. Nubwo bamuciriye urwo gupanga bikabije anywa uburozi, yanze guhemuka cyangwa ngo atete ku ntekerezo ze.",
      storyEN: 'He openly rejected the political illusions of Athens, choosing instead to teach youth how to think critically and seek absolute truth. Even when sentenced to execution by hemlock, he refused to compromise his intellectual integrity.'
    },
    {
      id: 'marcus_aurelius',
      person: 'Marcus Aurelius',
      category: 'Philosopher',
      roleRW: "Umwami w'Abami wa Roma n'Umuhanga mu Ihame rya Stoicism",
      roleEN: 'Roman Emperor & Stoic Philosopher',
      quoteRW: "“Ufite ubushobozi ku ntekerezo zamafaranga yawe—si ku bikorwa by'inyuma. Menya ibi, kandi uzabona imbaraga zihambaye.”",
      quoteEN: '“You have power over your mind - not outside events. Realize this, and you will find strength.”',
      storyRW: "Yari umuyobozi w'icyo gihe ukomeye ku isi ariko akaba n'umuhanga mu by'ubwenge. Yakoraga intambara n'amakuba y'igihugu ariko akandika mu muwiherero ibitabo by'imitekerereze (Meditations) bimufasha kugira amahoro y'imbere.",
      storyEN: 'He ruled the largest empire on earth while maintaining deep philosophical discipline. Amidst brutal wars and political plagues, he authored "Meditations" in his military tents, establishing a blueprint for supreme mental mastery.'
    },
    {
      id: 'mandela',
      person: 'Nelson Mandela',
      category: 'Celebrity',
      roleRW: "Inararibonye n'Uwayoboye Afurika y'Epfo",
      roleEN: 'Anti-apartheid Revolutionary & Statesman',
      quoteRW: "“Ibyo ubona nk'ibidashoboka byose, bihinduka bishoboka iyo birangiye gukorwa.”",
      quoteEN: '“It always seems impossible until it\'s done.”',
      storyRW: "Yafunzwe imyaka 27 azira kurwanya ivanguramoko, ariko ntiyacika intege mu gihome. Yasohotse afite imbaraga n'imbabazi mu mutima, aba perezida wa mbere w'umwirabura, abera isi yose urugero rwo kwihangana.",
      storyEN: 'He was imprisoned for 27 years in a tiny cell for fighting apartheid, but he never let his spirit break. He emerged with supernatural strength and forgiveness, became president, and united a fractured nation.'
    },
    {
      id: 'edison',
      person: 'Thomas Edison',
      category: 'Celebrity',
      roleRW: "Umuvumbuzi w'Itara ry'Amashanyarazi",
      roleEN: 'Inventor of the Electric Light Bulb',
      quoteRW: "“Ntabwo natsinzwe. Ahubwo nabonye uburyo 10,000 bwose butakora.”",
      quoteEN: '“I have not failed. I\'ve just found 10,000 ways that won\'t work.”',
      storyRW: "Yagerageje gukora itara inshuro zibarirwa mu bihumbi byose biba iby'ubusa, abantu bamwita umusazi. Aho gucika intege, yakomeje gukora ashishikaye kugeza igise cyaka, amurikira isi yose mu mwijima.",
      storyEN: 'He failed thousands of times while trying to invent the commercial light bulb. Instead of quitting, he viewed each failure as an elimination of a wrong answer until he successfully illuminated the universe.'
    },
    {
      id: 'nick',
      person: 'Nick Vujicic',
      category: 'Celebrity',
      roleRW: "Umuvugabutumwa n'Umuhanga mu Gukabura Ubushobozi",
      roleEN: 'Evangelist & Motivational Speaker',
      quoteRW: "“Niba udashobora kubona igitangaza, ba we ubwabo igitangaza ku bandi.”",
      quoteEN: '“If you can’t get a miracle, become one.”',
      storyRW: "Yavukanye ubumuga bukabije bwo kutagira amaboko n'amaguru (Tetra-amelia). Nyuma yo gutsinda ihungabana, yakoresheje ukwizera kwe muri Kristo mu kuzenguruka isi yose, yigisha abantu ko nta nkomyi ikuruta umutima ucika intege.",
      storyEN: 'Born without arms and legs due to a rare disorder. After overcoming severe childhood depression through faith, he established a global ministry, empowering millions by proving that your spirit has no limits.'
    },
    {
      id: 'keller',
      person: 'Helen Keller',
      category: 'Celebrity',
      roleRW: "Umwanditsi n'Impirimbanyi y'Uburenganzira",
      roleEN: 'Author & Political Activist',
      quoteRW: "“Ibyiza n'ibitangaza by'iyi si ntibishobora kubonwa n'amaso cyangwa ngo bikorwreho—bigomba kumvikana mu mutima.”",
      quoteEN: '“The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.”',
      storyRW: "Yabaye umuntu wa mberere utabona kandi utumva (deaf-blind) wize akabonera impamyabumenyi y'ikirenga. Yerekanye ko ubumuga butabuza umuntu guhindura isi no kwandika ibitabo by'ubwenge.",
      storyEN: 'Struck blind and deaf at just 19 months old. Through indomitable willpower, she became the first deaf-blind person to earn a Bachelor of Arts degree, authorship, and transform global disability laws.'
    },
    {
      id: 'jkrowling',
      person: 'J.K. Rowling',
      category: 'Celebrity',
      roleRW: "Umwanditsi w'Igitabo cy'Amateka cya Harry Potter",
      roleEN: 'Global Best-Selling Author & Philanthropist',
      quoteRW: "“Kunanirwa mu bintu bimwe na bimwe ntabwo ari iherezo; ni rwo rufunguzo rwo gukuraho ibitagufitiye umumaro.”",
      quoteEN: '“Rock bottom became the solid foundation on which I rebuilt my life.”',
      storyRW: "Yari umubyeyi urera umwana umwe wenyine utagira akazi, ufite agahinda n'ubukene bukabije. Igitabo cye cyanzwe n'abashitsi b'ibitabo 12 bose, ariko ntiyacika intege kugeza gihinduye amateka y'ubwanditsi ku isi yose.",
      storyEN: 'A jobless, broke, single mother battling severe clinical depression. Her book manuscript was brutally rejected by 12 different publishers, but she persevered until she built one of the largest literary franchises in history.'
    }
  ];

  // SMART KEYWORD SEARCH LOGIC
  const filteredMotivation = motivationData.filter(item => {
    const searchLower = searchQuery.toLowerCase();
    const roleText = lang === 'RW' ? item.roleRW.toLowerCase() : item.roleEN.toLowerCase();
    const storyText = lang === 'RW' ? item.storyRW.toLowerCase() : item.storyEN.toLowerCase();

    const matchesSearch = 
      item.person.toLowerCase().includes(searchLower) ||
      roleText.includes(searchLower) ||
      storyText.includes(searchLower);

    const matchesTab = activeTab === 'All' || item.category === activeTab;

    return matchesSearch && matchesTab;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="motivation-container">
      
      {/* ===== HEADER SECTION ===== */}
      <div className="motivation-header">
        <div className="motivation-badge">
          <Zap className="zap-icon" size={18} />
          <span>{lang === 'RW' ? 'Guhaguruka mu Mbaraga' : 'Ignite Your Inner Fire'}</span>
        </div>
        <h1>{lang === 'RW' ? 'Gukabura Ubushobozi Bwawe' : 'Fuel Your Inner Drive'}</h1>
        <p className="motivation-desc">
          {lang === 'RW' ? "Amagambo, inkuru n'ingero z'abantu b'amateka banze gucika intege n'ubwo bari mu mwijima." : 'High-impact blueprints of resilience and spiritual fortitude from legends who reshaped boundaries.'}
        </p>

        {/* SEARCH INPUT */}
        <div className="motivation-search-box">
          <Search className="search-icon-mot" size={20} />
          <input 
            type="text"
            placeholder={lang === 'RW' ? 'Shakisha inkuru (e.g. Nehemiya, Pawulo, Socrates, Mandela)...' : 'Search motivation by name or category (e.g. Paul, Socrates, Mandela)...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-mot" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        {/* TABS SELECTOR */}
        <div className="motivation-tabs">
          <button className={`tab-btn ${activeTab === 'All' ? 'active' : ''}`} onClick={() => setActiveTab('All')}>
            {lang === 'RW' ? 'Zose' : 'All Stories'}
          </button>
          <button className={`tab-btn ${activeTab === 'Faith' ? 'active' : ''}`} onClick={() => setActiveTab('Faith')}>
            🛡️ {lang === 'RW' ? 'Ukwizera (Faith)' : 'Faith Champions'}
          </button>
          <button className={`tab-btn ${activeTab === 'Philosopher' ? 'active' : ''}`} onClick={() => setActiveTab('Philosopher')}>
            🏛️ {lang === 'RW' ? 'Abanyabwenge (Philosophers)' : 'Philosophers'}
          </button>
          <button className={`tab-btn ${activeTab === 'Celebrity' ? 'active' : ''}`} onClick={() => setActiveTab('Celebrity')}>
            🏆 {lang === 'RW' ? 'Ibyamamare' : 'Celebrities'}
          </button>
        </div>
      </div>

      {/* ===== LIST CARDS WRAPPER ===== */}
      <div className="motivation-list-wrapper">
        <div className="motivation-list">
          <AnimatePresence mode="popLayout">
            {filteredMotivation.length > 0 ? (
              filteredMotivation.map((item) => {
                const role = lang === 'RW' ? item.roleRW : item.roleEN;
                const quote = lang === 'RW' ? item.quoteRW : item.quoteEN;
                const story = lang === 'RW' ? item.storyRW : item.storyEN;
                const fullText = `${item.person} (${role})\n\n"${quote}"\n\n${lang === 'RW' ? 'Inkuru y\'Ubuzima:' : 'Life Story:'} ${story}`;

                return (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="motivation-card"
                  >
                    <div className="motivation-card-header">
                      <div className="person-info">
                        <div className={`avatar-badge-icon ${item.category}`}>
                          {item.category === 'Faith' ? <HeartHandshake size={22} /> : <Award size={22} />}
                        </div>
                        <div>
                          <h3>{item.person}</h3>
                          <span className="person-role">{role}</span>
                        </div>
                      </div>
                      <button 
                        className={`motivation-copy-btn ${copiedId === item.id ? 'copied' : ''}`}
                        onClick={() => handleCopy(item.id, fullText)}
                        aria-label="Copy story text"
                      >
                        {copiedId === item.id ? <Check size={16} /> : <Copy size={16} />}
                        <span>{copiedId === item.id ? (lang === 'RW' ? 'Byandukuwe' : 'Copied') : (lang === 'RW' ? 'Kopeka' : 'Copy')}</span>
                      </button>
                    </div>

                    <div className="motivation-quote-box">
                      <p>"{quote}"</p>
                    </div>

                    <div className="motivation-story-box">
                      <h4>
                        <Lightbulb size={18} className="lightbulb-icon-glow" /> 
                        {lang === 'RW' ? "Urugero rw'Ubuzima n'Ubutwari:" : 'The Empowering Story:'}
                      </h4>
                      <p>{story}</p>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="no-motivation-results">
                <ShieldAlert size={40} className="alert-icon-mot" />
                <p>{lang === 'RW' ? 'Nta nkuru nka yanditse ihari muri iki kiciro mwashatse.' : 'No empowering archives match your specific search criteria.'}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
