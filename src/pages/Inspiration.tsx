import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Copy, Check, Compass, Sparkles, Quote, Search, 
  Crown, UserCheck, Heart, Landmark, GraduationCap, Globe, BookOpen, Flame 
} from 'lucide-react';
import '../styles/inspiration.css';

interface InspirationProps {
  lang: 'RW' | 'EN';
}

interface InspirationItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: 'Faith' | 'Secular';
  fieldRW: string;
  fieldEN: string;
  mottoRW: string;
  mottoEN: string;
  lessonRW: string;
  lessonEN: string;
}

const Inspiration: React.FC<InspirationProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Faith' | 'Secular'>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Intwari 12 z'Ubwenge n'Ukwizera zanditse mu Kinyarwanda n'Icyongereza by'Ubuhanga
  const inspirationData: InspirationItem[] = [
    {
      id: 'david',
      name: 'Umwami Dawidi',
      icon: <Crown size={20} />,
      category: 'Faith',
      fieldRW: "Umushumba, Umwami w'Israyeli n'Umuhimbyi w'Indirimbo",
      fieldEN: 'Shepherd Boy, King of Israel & Psalmist',
      mottoRW: "“Uwiteka ni umwungeri wanjye ntacyo nzakena... Nubwo nanyura mu gishuku cy’igicucu cy’urupfu ntitinya ikibi.”",
      mottoEN: "“The Lord is my shepherd; I shall not want... Even though I walk through the darkest valley, I will fear no evil.”",
      lessonRW: "Yatangiye ari umwungeri muto n'umuhererezi basuzuguraga, aza kuba intwari yishe Goliyati, nyuma ashingwa kuba umwami ukomeye wa Israyeli. Nubwo yakoze amakosa akomeye mu buzima bwe, yagiraga umutima umenetse uhita wihana, bituma Imana imwita \"Umuntu ukurikiza umutima wayo\". Amateka ye atwigisha ko ahashize hacu hato hatabuza Imana gusohoza icyerekezo cyoyo.",
      lessonEN: "Started as an overlooked shepherd boy, defeated Goliath, and became Israel's greatest king. Despite his human failures, his deep repentance and broken heart made God describe him as a man after His own heart. His legacy proves that humble beginnings never limit divine acceleration."
    },
    {
      id: 'paul',
      name: 'Intumwa Pawulo',
      icon: <UserCheck size={20} />,
      category: 'Faith',
      fieldRW: "Umuhanga mu Mategeko n'Intumwa y'Ibyamamare mu Kwizera",
      fieldEN: 'Theologian, Church Planter & Apostle of Grace',
      mottoRW: "“Nshobozwa byose n'ubwiza bw'uwo baturukamo umpa imbaraga (Empowered).”",
      mottoEN: "“I can do all things through Christ who strengthens me.”",
      lessonRW: "Yatangiye ari Sauli, umwanzi ukomeye watotezaga abakristo, ariko amaze guhura na Yesu, ahinduka umwubatsi mukomeye w'itorero ry'Imana. Yanditse ibice bitandatu bya New Testament ari mu nzu y'imfubyi n'imfuzanywa ndetse no mu buvumo, yigisha amahanga kwihanganira ibikomeye.",
      lessonEN: "Once a fierce persecutor of Christians, his encounter with Christ transformed him into the greatest missionary. He wrote most of the New Testament from dark prison cells, demonstrating supernatural resilience and unyielding commitment to the Great Commission."
    },
    {
      id: 'nehemiah',
      name: 'Nehemiya',
      icon: <Flame size={20} />,
      category: 'Faith',
      fieldRW: "Uwubatse Inkuta z'i Yeruzalemu n'Umujyanama w'Umwami",
      fieldEN: 'Governor of Persian Judea & Master Builder',
      mottoRW: "“Imana yo mu ijuru izatubashisha; ni cyo gituma twebwe abagaragu bayo tuzahaguruka tukayubaka.”",
      mottoEN: "“The God of heaven will give us success. We his servants will start rebuilding.”",
      lessonRW: "Yari umuhereza w'umuvinyu usanzwe, ariko ahabwa iyerekwa (Empowered) ryo kubaka inkuta zasenyutse. Nubwo abanzi nka Sanabalati na Tobiya bamuteye ubwoba kandi bakamuseka, yanze kumanuka mu nshingano ze kugeza inkuta zuzuye mu minsi 52 gusa.",
      lessonEN: "A simple cupbearer who received a divine burden to rebuild Jerusalem’s broken walls. Despite fierce mockery, intense death threats, and political sabotage from Sanballat and Tobiah, he refused to stop until the wall was completed in just 52 days."
    },
    {
      id: 'joseph',
      name: 'Yozefu',
      icon: <BookOpen size={20} />,
      category: 'Faith',
      fieldRW: "Inzozi n'Igisonga Gikomeye cya Misiri",
      fieldEN: 'Visionary & Prime Minister of Egypt',
      mottoRW: "“Mwatekerezaga kungirira nabi, ariko Imana yabigambiriye mo icyiza kugira ngo ikize abantu benshi.”",
      mottoEN: "“You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.”",
      lessonRW: "Bagurishijwe n'abavandimwe be nk'umugaragu, arenganyirizwa mu nzu ya Potifari azira ukuri, amara imyaka mu gihome. Nyamara Imana yamukuye mu buvumo ituma aba umugabo wa kabiri ukomeye muri Misiri wakijije isi amapfa.",
      lessonEN: "Betrayed and sold into slavery by his own brothers, falsely accused of assault, and thrown into a dungeon. Yet God used his isolation to refine him, eventually raising him to become the Prime Minister of Egypt to save nations from famine."
    },
    {
      id: 'gitwaza',
      name: 'Apotre Dr. Paul Gitwaza',
      icon: <Crown size={20} />,
      category: 'Faith',
      fieldRW: "Uwashinze Imiryango ya Authentic Word Ministries",
      fieldEN: 'Apostolic Leader & International Speaker',
      mottoRW: "“Iyo ufite icyerekezo (Vision), amateka yawe ntabwo akubera inkomyi, ahubwo ahinduka amashuri akuganisha ku nshingano Imana yakuremeye.”",
      mottoEN: "“When you carry a distinct Vision, your past history ceases to be a limitation; it transforms into classrooms heading to your divine mandate.”",
      lessonRW: "Yatangiye umurimo w'ivugabutumwa mu bihe bitoroshye mu karere k'Ibiyaga Bigari, ariko binyuze mu gushikama no kuyoborwa n'Umwuka Wera, yubatse itorero rifite ijambo rikomeye ku isi, yigisha urubiruko gukoresha impano zabo.",
      lessonEN: "He initiated his ministry during turbulent times in the Great Lakes region. Through unyielding spiritual focus and divine alignment, he established a global ministry network, empowering generations to discover their mandates."
    },
    {
      id: 'teresa',
      name: 'Mother Teresa',
      icon: <Heart size={20} />,
      category: 'Faith',
      fieldRW: "Umubikira w'Agahomamunwa mu Rukundo n'Ubufasha",
      fieldEN: 'Saint of the Gutters & Humanitarian Icon',
      mottoRW: "“Niba udashobora kugaburira abantu ijana, gaburira umuntu umwe gusa.”",
      mottoEN: "“If you can’t feed a hundred people, then just feed one.”",
      lessonRW: "Yataye ubuzima bwiza bw'ishuri, ajya mu mihanda y'i Calcutta gufasha abakene, abanyamibembe n'abari hafi gupfa basuzuguritse. Yakoresheje urukundo rvoroshye ariko rufite imbaraga z'Imana mu kwereka isi ko ubutwari bwa mbere ari ukubaha ikiremwamuntu.",
      lessonEN: "Left a comfortable teaching career to serve the poorest of the poor in the slums of Calcutta. Her life proved that small acts of love performed with great devotion can shift global perspectives on humanity."
    },
    {
      id: 'mlk',
      name: 'Dr. Martin Luther King Jr.',
      icon: <Compass size={20} />,
      category: 'Faith',
      fieldRW: "Umuvugabutumwa n'Imfura mu Guharanira Uburenganzira",
      fieldEN: 'Pastor, Civil Rights Leader & Nobel Laureate',
      mottoRW: "“Umwijima ntushobora kuvanwaho n'umwijima; urumuri rwa Kristo nirlwo rubishobora.”",
      mottoEN: "“Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.”",
      lessonRW: "Nk'umuvugabutumwa w'umubatiza, yakoresheje amahame ya Gikristo y'amahoro n'urukundo mu kuyobora urugamba rwo guharanira uburenganzira bw'abirabura muri Amerika. Twakwigiraho kugira icyerekezo kitavangiye n'ubwo inkuta z’akarengane zaba ndiziremure.",
      lessonEN: "A Baptist minister who infused Christian ethics of non-violence into the Civil Rights Movement. His eloquent visions of equality broke institutional segregation and redefined modern justice."
    },
    {
      id: 'lincoln',
      name: 'Abraham Lincoln',
      icon: <Landmark size={20} />,
      category: 'Secular',
      fieldRW: "Perezida wa 16 wa Leta Zunze Ubumwe za Amerika",
      fieldEN: '16th U.S. President & Emancipator',
      mottoRW: "“Inzira nanyuramo yaba igoye, ariko icyo nzi cyo ntabwo nsubira inyuma.”",
      mottoEN: "“I am a slow walker, but I never walk back.”",
      lessonRW: "Yatsinzwe amatora inshuro zirenga umunane, abura ubushabitsi bwe, anyura mu burwayi bw'ihungabana rikomeye, kandi abura n'umuryango we. Nyamara ntiyigeze arekeraho guharanira ubumwe, aza kuba Perezida wakuyeho ububata bw'abacakara muri Amerika.",
      lessonEN: "Faced countless political defeats, business failures, and severe personal grief. He persevered through it all to preserve the Union and completely abolish slavery in the United States."
    },
    {
      id: 'mandela',
      name: 'Nelson Mandela',
      icon: <Globe size={20} />,
      category: 'Secular',
      fieldRW: "Inararibonye n'Uwayoboye Afurika y'Epfo",
      fieldEN: 'Anti-apartheid Revolutionary & Statesman',
      mottoRW: "“Ibyo ubona nk'ibidashoboka byose, bihinduka bishoboka iyo birangiye gukorwa.”",
      mottoEN: "“It always seems impossible until it's done.”",
      lessonRW: "Yafunzwe imyaka 27 azira kurwanya ivanguramoko, ariko ntiyacika intege mu gihome. Yasohotse afite imbaraga n'imbabazi mu mutima, aba perezida wa mbere w'umwirabura, abera isi yose urugero rwo kwihangana.",
      lessonEN: "He was imprisoned for 27 years in a tiny cell for fighting apartheid, but he never let his spirit break. He emerged with supernatural strength and forgiveness, became president, and united a fractured nation."
    },
    {
      id: 'oprah',
      name: 'Oprah Winfrey',
      icon: <Globe size={20} />,
      category: 'Secular',
      fieldRW: "Umwamikazi w'Ibiganiro kuri Televiziyo n'Umuhanga mu Guhumuriza",
      fieldEN: 'Media Mogul, Philanthropist & Global Influencer',
      mottoRW: "“Inzozi ngerwaho n'abantu bazi neza ko kuba aho bari ubu atari iherezo ryabo.”",
      mottoEN: "“The biggest adventure you can take is to live the life of your dreams.”",
      lessonRW: "Yavukiye mu bukene bukabije, anyura mu ihohoterwa ryamukomerekeje umutima akiri umwana muto. Aho gucika intege, yashatse imbaraga mu kwiga no gushaka ubumenyi, ahinduka umwe mu bagore bafite ijambo rikomeye ku isi akoresha amateka ye mu kubaka no guha imbaraga abandi.",
      lessonEN: "Born into extreme poverty and facing severe childhood trauma, she transformed her pain into a purpose. She built a global media empire, becoming a source of light and empowerment for millions worldwide."
    },
    {
      id: 'jobs',
      name: 'Steve Jobs',
      icon: <Sparkles size={20} />,
      category: 'Secular',
      fieldRW: "Uwashinze Kompanyi ya Apple n'Umuvumbuzi",
      fieldEN: 'Co-founder of Apple & Tech Visionary',
      mottoRW: "“Abantu basazi bihagije kwemera ko bahandura isi, nibo bonyine bayihandura.”",
      mottoEN: "“The people who are crazy enough to think they can change the world are the ones who do.”",
      lessonRW: "Yirukanwe mu kigo yashinze ubwe (Apple), ariko ntiyacika intege cyangwa ngo arekere gukora inzozi ze. Yakoresheje icyo gihe mu guhanga izindi kompanyi nka Pixar na NeXT, nyuma agaruka muri Apple ayigeza ku rwego rwo hejuru cyane rwo guhindura itumanaho ku isi yose.",
      lessonEN: "He was publicly fired from Apple, the very company he founded. Instead of giving up, he used that failure to innovate further, founding Pixar, and eventually returned to lead Apple into a global tech revolution."
    },
    {
      id: 'einstein',
      name: 'Albert Einstein',
      icon: <GraduationCap size={20} />,
      category: 'Secular',
      fieldRW: "Umuhanga mu Bugenge (Physics) n'Ubwenge bw'Isi",
      fieldEN: 'Theoretical Physicist & Genius Mind',
      mottoRW: "“Ntabwo ari uko ndi umunyabwenge burenze, ahubwo ni uko nteza ibibazo imiryango myiza kugeza mbyoroheje.”",
      mottoEN: "“It’s not that I’m so smart, it’s just that I stay with problems longer.”",
      lessonRW: "Akiri umwana yarindiriye igihe kirekire kugira ngo avuge, abanyeshuri n'abarimu bafata nk'umuntu udashoboye. Nyuma yakoresheje amatsiko ye n'ubwenge Imana yamuhaye mu guhindura burundu uburyo isi isobanura umwanya, urumuri n'isanzure.",
      lessonEN: "Spoke late as a child and was initially written off by his teachers. His relentless curiosity and internal drive unlocked the secrets of relativity, fundamentally altering mankind's grasp of the universe."
    }
  ];

  // SMART KEYWORD SEARCH LOGIC
  const filteredInspiration = inspirationData.filter(item => {
    const searchLower = searchQuery.toLowerCase();
    const fieldText = lang === 'RW' ? item.fieldRW.toLowerCase() : item.fieldEN.toLowerCase();
    const lessonText = lang === 'RW' ? item.lessonRW.toLowerCase() : item.lessonEN.toLowerCase();
    
    const matchesSearch = 
      item.name.toLowerCase().includes(searchLower) || 
      fieldText.includes(searchLower) || 
      lessonText.includes(searchLower);

    const matchesCategory = selectedFilter === 'All' || item.category === selectedFilter;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="inspiration-container">
      
      {/* ===== HEADER SECTION ===== */}
      <div className="inspiration-header">
        <div className="header-badge-pro">
          <Compass className="compass-icon animate-spin-slow" size={20} />
          <span>{lang === 'RW' ? "Isoko y'Icyerekezo" : 'Lighthouses of Resilience'}</span>
        </div>
        <h1>{lang === 'RW' ? "Guhumukirwa n'Ibyamamare" : 'Global Icons of Inspiration'}</h1>
        <p className="header-desc">
          {lang === 'RW' ? "Amateka n'amasomo akomeye ku bantu b'ubwenge n'ukwizera bahinduye isi badacitse intege." : 'Lessons of resilience from legendary figures who shaped human history.'}
        </p>

        {/* SEARCH BAR */}
        <div className="inspiration-search-wrapper">
          <Search className="search-icon-inside" size={20} />
          <input 
            type="text"
            placeholder={lang === 'RW' ? 'Shakisha intwari (e.g. Dawidi, Pawulo, Mandela)...' : 'Search icons by name or story...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-pro" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        {/* FAITH / SECULAR FILTERS */}
        <div className="filter-button-group">
          <button className={`filter-btn ${selectedFilter === 'All' ? 'active' : ''}`} onClick={() => setSelectedFilter('All')}>
            {lang === 'RW' ? 'Zose' : 'All Icons'}
          </button>
          <button className={`filter-btn ${selectedFilter === 'Faith' ? 'active' : ''}`} onClick={() => setSelectedFilter('Faith')}>
            ⛪ {lang === 'RW' ? 'Ukwizera' : 'Faith-Driven'}
          </button>
          <button className={`filter-btn ${selectedFilter === 'Secular' ? 'active' : ''}`} onClick={() => setSelectedFilter('Secular')}>
            🌍 {lang === 'RW' ? "Ubwenge bw'Isi" : 'Global Visionaries'}
          </button>
        </div>
      </div>

      {/* ===== INSPIRATION GRID VIEW ===== */}
      <div className="inspiration-grid-wrapper">
        <div className="inspiration-grid">
          <AnimatePresence mode="popLayout">
            {filteredInspiration.length > 0 ? (
              filteredInspiration.map((item) => {
                const field = lang === 'RW' ? item.fieldRW : item.fieldEN;
                const motto = lang === 'RW' ? item.mottoRW : item.mottoEN;
                const lesson = lang === 'RW' ? item.lessonRW : item.lessonEN;
                const fullText = `${item.name} - ${field}\n\n${motto}\n\n${lang === 'RW' ? "Isomo ry'Ubuzima:" : 'Life Lesson:'} ${lesson}`;

                return (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="inspiration-card"
                  >
                    <div className="inspiration-card-top">
                      <div className={`icon-badge ${item.category}`}>
                        {item.icon}
                        <span>{item.category === 'Faith' ? (lang === 'RW' ? 'Ukwizera' : 'Faith') : (lang === 'RW' ? 'Ubwenge' : 'Vision')}</span>
                      </div>
                      <button 
                        className={`inspiration-copy-btn ${copiedId === item.id ? 'copied' : ''}`}
                        onClick={() => handleCopy(item.id, fullText)}
                        aria-label="Copy entire bio"
                      >
                        {copiedId === item.id ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>

                    <h2 className="celebrity-name">{item.name}</h2>
                    <span className="celebrity-field">{field}</span>

                    <div className="celebrity-quote">
                      <Quote size={18} className="quote-mark" />
                      <p>"{motto}"</p>
                    </div>

                    <div className="celebrity-lesson">
                      <h3>{lang === 'RW' ? "Isomo ry’ubuzima bw’ubutwari:" : 'The Empowering Legacy:'}</h3>
                      <p>{lesson}</p>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="no-inspiration-results">
                <p>{lang === 'RW' ? "Nta ntwari ihuye n'ibyo mwashatse. Gerageza andi magambo." : 'No inspirational figures match your current filter keywords.'}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
