import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Copy, Check, Search, Sparkles } from 'lucide-react';
import '../styles/wordofgod.css';

interface WordProps {
  lang: 'RW' | 'EN';
}

interface VerseItem {
  id: string;
  source: 'Jesus' | 'Bible' | 'Quran' | 'Buddhism';
  reference: string;
  titleRW: string;
  titleEN: string;
  verseRW: string;
  verseEN: string;
  explanationRW: string;
  explanationEN: string;
}

const WordOfGod: React.FC<WordProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Jesus' | 'Bible' | 'Quran' | 'Buddhism'>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const versesData: VerseItem[] = [
    // ===== 7 ZA YESU KRISTO =====
    {
      id: 'jesus1',
      source: 'Jesus',
      reference: 'Yohana 14:27',
      titleRW: "Amahoro Nyakuri y'Imitima",
      titleEN: 'The Gift of Absolute Peace',
      verseRW: "“Mbasize amahoro, mbahaye amahoro yanjye. Ntabwo mbahaye nk’uko isi iyatanga. Imitima yanyu ntiyihagarike kandi ntiyebe.”",
      verseEN: "“Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.”",
      explanationRW: "Yesu Kristo atwubakamo umutuzo w'imbere udashobora guhungabanywa n'imiyaga cyangwa umuvundo w'iyi si.",
      explanationEN: "Jesus embeds an internal stability within us that cannot be shattered by the chaos or volatile shifts of the material world."
    },
    {
      id: 'jesus2',
      source: 'Jesus',
      reference: 'Matayo 11:28',
      titleRW: "Uruhuko ku Bananiwe",
      titleEN: 'Rest for the Weary Soul',
      verseRW: "“Whose muremerewe n’uburemure n’imirimo, munsange mubahe abaruruko nyakuri mu mitima yanyu.”",
      verseEN: "“Come to me, all you who are weary and burdened, and I will give you rest.”",
      explanationRW: "Yesu aduhamagarira kumushyira imitwaro yose ituremerera mu bitekerezo ngo aduhe ubururuko n'imbaraga nshya.",
      explanationEN: "Jesus invites us to exchange our logical anxieties and cognitive exhaustion for supernatural balance and renewal."
    },
    {
      id: 'jesus3',
      source: 'Jesus',
      reference: 'Yohana 8:32',
      titleRW: "Ukuri Kubohora Muntu",
      titleEN: 'The Freedom of Truth',
      verseRW: "“Namwe muzamenya ukuri, kandi ukuri ni ko kuzababohora.”",
      verseEN: "“And you will know the truth, and the truth will set you free.”", // Ryakosowe neza ririnda Internal Server Error
      explanationRW: "Kumenya no kugendera ku kuri kw'Imana ni rwo rufunguzo rurwanya ibinyoma n'akajagari k'imitekerereze.",
      explanationEN: "Embracing divine reality acts as the definitive shield against corporate deceptions and mental entrapments."
    },
    {
      id: 'jesus4',
      source: 'Jesus',
      reference: 'Matayo 6:33',
      titleRW: "Gushaka Ubwami Bwera mbere",
      titleEN: 'The Law of Divine Priority',
      verseRW: "“Ariko mbanze mushake ubwami bw’Imana no gukiranuka kwayo, ni bwo ibyo bindi byose muzabyongerirwa.”",
      verseEN: "“But seek first his kingdom and his righteousness, and all these things will be given to you as well.”",
      explanationRW: "Gushyira Imana mu mwanya wa mberere mu buzima bukora uburyo ibyari kuduteza ubwoba byikora mu mucyo.",
      explanationEN: "Prioritizing the sovereign design aligns your external matrix, organizing resources without stressful human striving."
    },
    {
      id: 'jesus5',
      source: 'Jesus',
      reference: 'Yohana 15:5',
      titleRW: "Ubufatanye n'Isoko y'Ubugingo",
      titleEN: 'The Branch and the Vine connection',
      verseRW: "“Ni jye muzabibu, namwe muri amashami. Umuguma muri jye nanjye mukaguma muri we, uwo bera imbuto nyinshi; kuko mfatanyije namwe nta kintu mushobora gukora.”",
      verseEN: "“I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.”",
      explanationRW: "Ubushobozi bwacu n'impano zacu (Empowered) bikora gusa neza iyo dushitse umubano uhozaho n'isoko.",
      explanationEN: "Our operational capacity and creative output remain baseline failure unless anchored to the source of life."
    },
    {
      id: 'jesus6',
      source: 'Jesus',
      reference: 'Matayo 5:16',
      titleRW: "Kumurika k'Umucyo Wanyu",
      titleEN: 'Reflecting the Divine Luminary',
      verseRW: "“Mukwiriye kugaragaza umuri wanyu imbere y’abantu, kugira ngo babone imirimo yanyu myiza, bahimbaze Se wanyu uri mu ijuru.”",
      verseEN: "“In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.”",
      explanationRW: "Ibikorwa byiza dukorera umuryango biba nka buhamya budukururira abantu kwerekeza agaciro ku Mana.",
      explanationEN: "Our community development tracking must serve as a mirror that vectors corporate praise back to the Sovereign Creator."
    },
    {
      id: 'jesus7',
      source: 'Jesus',
      reference: 'Marko 9:23',
      titleRW: "Ubushobozi bw'Ukwizera",
      titleEN: 'The Capability of Belief',
      verseRW: "“Yesu aravuga ati: ‘Uvuze ngo niba nshobora? Byose bishobokera uwizera.’”",
      verseEN: "“‘If you can?’ said Jesus. ‘Everything is possible for one who believes.’”",
      explanationRW: "Kwizera gukuraho imipaka y'intekereze zacu z'abantu, kukatwinjiza mu cyerekezo cy'ibitangaza by'Imana.",
      explanationEN: "Authentic faith overrides local human probabilities, accelerating outcomes through divine alignment."
    },

    // ===== 5 ZO MURI BIBILIYA =====
    {
      id: 'bible1',
      source: 'Bible',
      reference: '1 Petero 4:10',
      titleRW: "Gusonga Neza Impano",
      titleEN: 'The Matrix of Stewardship',
      verseRW: "“Kuri buri wese nka bahawe impano mu buryo butandukanye, nkamuyikoreshe mu gufasha abandi (Empower Others) nk’abasonga bacye b’ubuntu bw’Imana.”",
      verseEN: "“Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.”",
      explanationRW: "Impano cyangwa ubumenyi Imana yaguhaye si ibyo kwigiraho, ni ibyo kurema umugisha ku bandi.",
      explanationEN: "Every talent structural acquisition is not for personal vanity, but to operate as a functional asset for society."
    },
    {
      id: 'bible2',
      source: 'Bible',
      reference: 'Imigani 9:10',
      titleRW: "Intangiriro y'Ubwenge",
      titleEN: 'The Threshold of Intellect',
      verseRW: "“Ugutinya Uwiteka ni yo ntangiriro y'ubwenge, kandi kumenya Uwera ni ko kwijirwa mu gushishoza.”",
      verseEN: "“The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.”",
      explanationRW: "Ubwenge budashonga butangirira mu kubaha no guha umwanya Iyaremye intekerezo n'imikorere y'isi.",
      explanationEN: "Timeless intellect begins with absolute alignment and ultimate reverence for the Architect of existence."
    },
    {
      id: 'bible3',
      source: 'Bible',
      reference: 'Abagalatiya 5:22',
      titleRW: "Imbuto z'Umwuka n'Indangagaciro",
      titleEN: 'The Metrics of Character',
      verseRW: "“Ariko imbuto z'Umwuka ni urukundo, n'ibyishimo, n'amahoro, n'ukwihangana, n'ugugira neza, n'ubugwaneza.”",
      verseEN: "“But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness.”",
      explanationRW: "Gukura mu buryo bw'umwuka nyakuri kugaragarira mu mico myiza n'uburyo witwara mu muryango mugari.",
      explanationEN: "Spiritual growth tracking is verified exclusively by observable values and moral load-bearing capacities."
    },
    {
      id: 'bible4',
      source: 'Bible',
      reference: '2 Timoteyo 1:7',
      titleRW: "Umwuka w'Imbaraga n'Ubwenge",
      titleEN: 'The Architecture of Authority',
      verseRW: "“Kuko Imana itaduhaye umwuka w’ubwoba, ahubwo yaduhawe umwuka w’imbaraga, n’urukundo, n’ubwenge bukomeye.”",
      verseEN: "“For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.”",
      explanationRW: "Ubwoba ni akajagari gasenya icyerekezo; umwuka w'Imana we uzana imbaraga (Powering) n'ubwenge buyobora neza.",
      explanationEN: "Fear is an illegal occupier that damages operational bandwidth; the divine system installs focus and logical control."
    },
    {
      id: 'bible5',
      source: 'Bible',
      reference: 'Imigani 3:5',
      titleRW: "Kwiringira Uwiteka",
      titleEN: 'Trusting the Unseen Grid',
      verseRW: "“Wiringire Uwiteka n’umutima wawe wose, kandi we kwishingikiriza ku bwenge bwawe.”",
      verseEN: "“Trust in the Lord with all your heart and lean not on your own understanding.”",
      explanationRW: "Ubwenge bw'abantu burasaza kandi bufite amarembo; kwiringira Imana bituma ugendera mu kuri kwagutse.",
      explanationEN: "Human logic runs on incomplete datasets; total reliance on the divine blueprint bypasses human error vectors."
    },

    // ===== 4 ZO MURI QOROWANI =====
    {
      id: 'quran1',
      source: 'Quran',
      reference: 'Al-Baqarah 2:286',
      titleRW: "Imbazi n'Ubushobozi",
      titleEN: 'Divine Load Calibration',
      verseRW: "“Imana ntijya itura umutima w'umuntu umwaro cyangwa inshingano ikurengeye ubushobozi bwe; buri wese ahabwa ibihuye n'ubushobozi bwe.”",
      verseEN: "“Allah does not burden a soul beyond that it can bear. It will have the consequence of what good it has gained.”",
      explanationRW: "Buri kigeragezo duhura nabyo biba bifite umugambi. Imana izi neza imbaraga zaguhaye kandi ntizireka ngo ugwire inzitane.",
      explanationEN: "This standard confirms trials are mathematically configured. God knows your capacity and prevents structural collapse."
    },
    {
      id: 'quran2',
      source: 'Quran',
      reference: 'Ash-Sharh 94:5-6',
      titleRW: "Umucyo uri Inyuma y'Ibikomeye",
      titleEN: 'Relief After Friction',
      verseRW: "“Kuri buri gice cy'ibikomeye, inyuma yabyo harimo n'uburyo bwo koroherwa. Inyuma y'ibikomeye, haza koroherwa.”",
      verseEN: "“For truly with hardship comes ease. Truly with hardship comes ease.”",
      explanationRW: "Umubabaro cyangwa gufungana ni ibyo mu gihe gito; Imana yashyizeho itegeko ry'uko buri mwijima ukurikirwa n'umucyo.",
      explanationEN: "Friction is a transient phase. The universal setup ensures that release is bound directly to systemic pressure."
    },
    {
      id: 'quran3',
      source: 'Quran',
      reference: 'Al-Baqarah 2:153',
      titleRW: "Kwihangana n'Isanduku y'Ukwizera",
      titleEN: 'Patience and Prayer Fortress',
      verseRW: "“And mwe abemeye, mushake ubufasha binyuze mu kwihangana no gusenga; mu buryo bw'ukuri Imana iri kumwe n'abari mu mutuzo.”",
      verseEN: "“O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.”",
      explanationRW: "Kwihangana no gushikama mu bihe bitoroshye bikurura umwuka n'umucyo by'Imana guhagarara mu nshingano zawe.",
      explanationEN: "Endurance combined with continuous focus acts as the primary connector to access stabilizing divine energy."
    },
    {
      id: 'quran4',
      source: 'Quran',
      reference: 'Al-Ankabut 29:69',
      titleRW: "Gushishikara no Guhabwa Amayira",
      titleEN: 'The Reward of Focus',
      verseRW: "“Naho abashishikara mu gushaka ukuri kwacu, mu buryo bw'ukuri tuzabayobora mu mayira yacu meza.”",
      verseEN: "“And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good.”",
      explanationRW: "Iyo ugize umwete wo gushaka ubwenge n'ukuri, Imana ihita ifungura amarembo y'icyerekezo kirenga screen.",
      explanationEN: "Persistent efforts directed toward high-value truth trigger an automatic expansion of directional layout access."
    },

    // ===== 4 Z'ABABUDA (BUDDHISM) =====
    {
      id: 'buddha1',
      source: 'Buddhism',
      reference: 'Dhammapada 1:1',
      titleRW: "Ubushobozi bw'Intekerezo",
      titleEN: 'The Primacy of Mindset',
      verseRW: "“Intekerezo nizo ntangiriro y'ibintu byose; nizo ziyobora kandi nizo zirema. Iyo umuntu avuze cyangwa agakora afite intekerezo mbi, umubabaro uramukurikira.”",
      verseEN: "“Mind precedes all mental states. Mind is their chief; they are mind-made. If one speaks or acts with a wicked mind, suffering follows.”",
      explanationRW: "Ubwenge bwa Buddha buhamya ko imyitwarire n'ubwenge byacu bitangirira mu ntekerezo zacu z'imbere.",
      explanationEN: "Eastern analytical logs detail that human status and physical outcomes are downstream from internal mental metrics."
    },
    {
      id: 'buddha2',
      source: 'Buddhism',
      reference: 'Ubwenge bwa Buddha',
      titleRW: "Kurinda Umutuzo w'Imbere",
      titleEN: 'Internal Emotional Sovereignty',
      verseRW: "“Ntabwo ari abantu bagukorera ibibi baguteza umubabaro, ahubwo ni inshuro utekereza nabi imbere mu ntekerezo zawe.”",
      verseEN: "“It is a man's own mind, not his enemy or foe, that lures him to evil ways.”",
      explanationRW: "Inkomyi ya muntu ya mberere si abamurwanya, ni uburyo we ubwe adategeka intekerezo ze ngo zikureho ubugugu.",
      explanationEN: "External entities possess zero emotional clearance until your inner filter validates and processes their noise into pain."
    },
    {
      id: 'buddha3',
      source: 'Buddhism',
      reference: 'Dhammapada 103',
      titleRW: "Gutsinda Umutima wawe",
      titleEN: 'The Conquest of Self',
      verseRW: "“Nubwo umuntu yatsinda abantu ibihumbi mu ntambara, ubutwari bwa mberere ni ugutsinda no gutegeka umutima we wenyine.”",
      verseEN: "“One who conquers himself is greater than another who conquers a thousand times a thousand men on the battlefield.”",
      explanationRW: "Ubutwari buhamye bufite agaciro (Empowered) si ukurwanya abandi, ni ukwanga gutegekwa n'intege nke zawe.",
      explanationEN: "True high-utility metrics evaluate internal domain control as superior to subduing external actors and environments."
    },
    {
      id: 'buddha4',
      source: 'Buddhism',
      reference: 'Ubwenge bwa Kera',
      titleRW: "Umutandukanyo w'Urumuri",
      titleEN: 'The Multiplication of Light',
      verseRW: "“Ibihumbi by'amatara bishobora kwakirwa ku itara rimwe gusa, kandi ubugingo bwaryo ntibugabanuke. Urukundo ntirugabanuka iyo rugabwe.”",
      verseEN: "“Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.”",
      explanationRW: "Gufasha cyangwa kurema umugisha ku bandi (Empower Others) ntibugabanya ubwenge cyangwa umutungo wawe, ahubwo birabugura.",
      explanationEN: "Distributing your capacity and transferring asset value to others does not diminish your baseline; it multiplies ecosystem speed."
    }
  ];

  const filteredVerses = versesData.filter(item => {
    const searchLower = searchQuery.toLowerCase();
    const refText = item.reference.toLowerCase();
    const titleText = lang === 'RW' ? item.titleRW.toLowerCase() : item.titleEN.toLowerCase();
    const verseText = lang === 'RW' ? item.verseRW.toLowerCase() : item.verseEN.toLowerCase();

    const matchesSearch = refText.includes(searchLower) || titleText.includes(searchLower) || verseText.includes(searchLower);
    const matchesCategory = selectedFilter === 'All' || item.source === selectedFilter;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="word-page-container">
      
      {/* ===== HEADER SECTION ===== */}
      <div className="word-page-header">
        <div className="word-mini-badge">
          <BookOpen className="bible-icon" size={16} />
          <span>{lang === 'RW' ? "Isoko y'Ibanga Ry'Imana" : 'Sacred Foundations'}</span>
        </div>
        <h1>{lang === 'RW' ? "Ijambo ry'Imana n'Ubwenge" : 'The Living Word & Wisdom'}</h1>
        <p className="word-header-desc">
          {lang === 'RW' ? "Gusesengura amahame n'amagambo y'ubwenge bwakuye kuri Yesu Kristo, Bibiliya, Qorowani, n'inyigisho z'Ababuda." : 'Profound synthesis of divine law, frameworks of Christ, prophetic lines from Quran, and Buddhist analytics.'}
        </p>

        {/* PRO SEARCH BOX */}
        <div className="word-search-box-wrapper">
          <Search className="search-icon-word" size={20} />
          <input 
            type="text"
            placeholder={lang === 'RW' ? 'Shakisha (e.g. Jesus, Bible, Quran, Buddhism)...' : 'Search scriptures or notes...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* CUSTOM FILTERS */}
        <div className="word-filter-tabs">
          <button className={`word-tab ${selectedFilter === 'All' ? 'active' : ''}`} onClick={() => setSelectedFilter('All')}>
            {lang === 'RW' ? 'Zose' : 'All Word'}
          </button>
          <button className={`word-tab ${selectedFilter === 'Jesus' ? 'active' : ''}`} onClick={() => setSelectedFilter('Jesus')}>
            ✨ {lang === 'RW' ? 'Yesu Kristo' : 'Jesus Christ'}
          </button>
          <button className={`word-tab ${selectedFilter === 'Bible' ? 'active' : ''}`} onClick={() => setSelectedFilter('Bible')}>
            🛡️ Bibiliya
          </button>
          <button className={`word-tab ${selectedFilter === 'Quran' ? 'active' : ''}`} onClick={() => setSelectedFilter('Quran')}>
            🌙 Qorowani
          </button>
          <button className={`word-tab ${selectedFilter === 'Buddhism' ? 'active' : ''}`} onClick={() => setSelectedFilter('Buddhism')}>
            ☸️ Ababuda
          </button>
        </div>
      </div>

      {/* ===== VERSES LIST GRID VIEW ===== */}
      <div className="word-list-section">
        <div className="verses-list">
          <AnimatePresence mode="popLayout">
            {filteredVerses.map((item) => {
              const title = lang === 'RW' ? item.titleRW : item.titleEN;
              const verse = lang === 'RW' ? item.verseRW : item.verseEN;
              const explanation = lang === 'RW' ? item.explanationRW : item.explanationEN;
              const fullText = `📖 [${item.reference}] - ${title}\n\n"${verse}"\n\nInyigisho: ${explanation}`;

              return (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="verse-card"
                >
                  <div className="verse-card-header">
                    <div className="verse-ref-box">
                      <div className={`source-indicator-dot ${item.source}`}>
                        <Sparkles size={14} />
                      </div>
                      <div>
                        <h3>{item.reference}</h3>
                        <span className="verse-card-sub-title">{title}</span>
                      </div>
                    </div>
                    <button 
                      className={`word-copy-btn ${copiedId === item.id ? 'copied' : ''}`}
                      onClick={() => handleCopy(item.id, fullText)}
                    >
                      {copiedId === item.id ? <Check size={16} /> : <Copy size={16} />}
                      <span>{copiedId === item.id ? (lang === 'RW' ? 'Byatandukujwe' : 'Copied') : (lang === 'RW' ? 'Kopeka' : 'Copy')}</span>
                    </button>
                  </div>

                  <div className="scripture-text-box">
                    <p>"{verse}"</p>
                  </div>

                  <div className="scripture-explanation">
                    <h4>💡 {lang === 'RW' ? "Isosorero n'Inyigisho y'Ubwenge:" : 'Empowered Analytical Reflection:'}</h4>
                    <p>{explanation}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WordOfGod;
