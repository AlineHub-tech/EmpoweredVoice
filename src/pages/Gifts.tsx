import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, Coins, ShieldCheck, HeartHandshake, Award, 
  Copy, Check, Star, BookOpen, Lightbulb, Compass, Zap, Flame 
} from 'lucide-react';
import '../styles/gifts.css';

interface GiftsProps {
  lang: 'RW' | 'EN';
}

interface GiftItem {
  id: string;
  icon: React.JSX.Element;
  titleRW: string;
  titleEN: string;
  descRW: string;
  descEN: string;
}

const Gifts: React.FC<GiftsProps> = ({ lang }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  // ===== 5 CORE PILLARS OF INTELLECTUAL STEWARDSHIP (INSHINGANO NYAKURI) =====
  const structuralPillars = [
    {
      id: 'pillar1',
      titleRW: "1. Umusingi w'Iyerekwa rya C.S. Lewis",
      titleEN: "1. The C.S. Lewis Stewardship Thesis",
      textRW: "Umuhanga C.S. Lewis mu gitabo cye 'Mere Christianity' ashimangira ko impano n'ubushobozi muntu atunze atari ibye bwite byo kwirata, ahubwo ari inguzanyo y'umwuka Imana yamuhaye ngo ayigaburire isi. Gukoresha ubumenyi cyangwa tekinoloji mu kubaka no guha imbaraga abandi (Empower Others) ni rwo rufunguzo rwo kugarura inyungu z'Ubwami.",
      textEN: "Renowned thinker C.S. Lewis highlights in 'Mere Christianity' that human faculties are not sovereign belongings but biological capital on loan from the Creator. Deploying your strategic intellect to lift humanity is the primary functional duty of an empowered soul."
    },
    {
      id: 'pillar2',
      titleRW: "2. Isesengura rya Max Weber ku Bukungu",
      titleEN: "2. The Max Weber Economic Calling Matrix",
      textRW: "Mu bushakashatsi bw'amateka bwa Max Weber ('The Protestant Ethic'), kwerekana ko umutungo n'imari ari inshingano handles handles (Calling) byahinduye imikorere y'isi. Imigani 3:9 idutegeka guhesha Uwiteka icyubahiro mu bintu dutunze. Umutungo ntabwo uza rero rwo kwirundaho, uza nk’umuyoboro wo gukuraho ubukene mu muryango.",
      textEN: "In Max Weber’s historical thesis, wealth and material growth are conceptualized as an executive calling and stewardship accounting layout. Proverbs 3:9 commands us to honor God with our substance. Capital is not designed for psychological hoarding, but to eliminate systemic vulnerabilities."
    },
    {
      id: 'pillar3',
      titleRW: "3. Igiciro cy'Igihe n'Umutungo Nyakuri",
      titleEN: "3. Temporal Stewardship Architecture",
      textRW: "Abahanga mu gucunga igihe basanga igihe ari cyo kintu cyonyine muntu atashobora kugarura iyo cyagiye. Abefeso 5:16 hatwibutsa 'gucungura igihe kuko gukiranuka kw\'isi kuri hasi'. Imbaraga z'ubuto n'intekerezo zawe ugomba kuzishora mu bintu bisiga urwibutso ruzagera ku muryango mugari, wirinda kwangiza umwanya mu bitagufitiye inyungu.",
      textEN: "Philosophers of temporal architecture agree that time is the ultimate non-renewable resource asset. Ephesians 5:16 charges us to 'redeem the time because the days are evil.' Your focus and developmental speed must be intentionally invested in structuring lasting generational solutions."
    },
    {
      id: 'pillar4',
      titleRW: "4. Uburemere bw'Ijambo n'Icyubahiro (Influence)",
      titleEN: "4. The Grid of Social Capital and Leverage",
      textRW: "Umuhanga mu by\'ubuyobozi John C. Maxwell yavuze ati: 'Ubuyobozi ni ukugira ijambo ryiza ku bandi (Influence), nta kindi.' Matayo 5:16 itwibutsa kugaragaza umucyo imbere y\'abantu. Icyubahiro cyangwa ijambo handles handles Imana yaguhawe mu muryango, si iryo kwigomeka, ni iryo kurengera abanyantege nke.",
      textEN: "Leadership expert John C. Maxwell notes that leadership is influence—nothing more, nothing less. Matthew 5:16 reminds us to let our light shine. Social metrics or administrative leverage granted to you must be structural shadows to advocate for the voiceless."
    },
    {
      id: 'pillar5',
      titleRW: "5. Ihame rya Maimonides ku Butungane",
      titleEN: "5. Maimonides' Structural Transformation Pillar",
      textRW: "Umuhanga Moses Maimonides yerekanye ko urwego rwo hejuru rwo guha abandi ari urutuma uwo ufashije yaguka akavumbura impano ye, ku buryo atazigera asaba undi muntu, ahubwo agahagarara akagaba na we (Self-Sufficiency). Iryo naryo ni rwo rufunguzo rw'iyerekwa rya Empowered Voice.",
      textEN: "The philosopher Moses Maimonides formulated that the absolute pinnacle of generosity is empowering a person by giving them a trade, an investment, or a framework so they become independent. This model sits at the absolute core of our functional vision."
    }
  ];

  // ===== IMPANO 10 Z'INGENZI IMANA YAGUHAWE (10 CORE TALENTS & DIVINE ASSETS) =====
  const coreGifts: GiftItem[] = [
    {
      id: 'gift1',
      icon: <Award size={22} />,
      titleRW: "1. Impano y'Ubuyobozi n'Icyerekezo",
      titleEN: "1. The Gift of Leadership & Strategic Vision",
      descRW: "Ubushobozi bwo kuyobora, guhuza abantu, n'ugufungura inzira nshya z'iterambere binyuze mu kuri.",
      descEN: "The executive ability to lead communities, synchronize movements, and open up channels of growth."
    },
    {
      id: 'gift2',
      icon: <BookOpen size={22} />,
      titleRW: "2. Impano yo Kwigisha n'Ubwenge",
      titleEN: "2. The Gift of Teaching & Analytical Knowledge",
      descRW: "Gushobora gusesengura inyandiko n'Ijambo ry'Imana, ukayasobanurira umuryango mu buryo bworoshye.",
      descEN: "The skill to break down complex theological and philosophical logs into actionable knowledge."
    },
    {
      id: 'gift3',
      icon: <Flame size={22} />, // Hano ni ho hari ikosa rya Flame; ubu twahise tuyizana (import) hashuje neza
      titleRW: "3. Impano yo Gukabura no Guhumuriza",
      titleEN: "3. The Gift of Prophetic Exhortation",
      descRW: "Amagambo n'inyigisho bikura abantu mu bwihebe n'akajagari, bikayobora imitima mu cyizere.",
      descEN: "Transformative speech frameworks optimized to pull minds out of structural despair and clinical anxiety."
    },
    {
      id: 'gift4',
      icon: <Coins size={22} />,
      titleRW: "4. Impano y'Ubukungu n'Imari",
      titleEN: "4. The Gift of Financial Architecture",
      descRW: "Ubushobozi bwo kurema umutungo mu buryo bukiranuka, no kuwukoresha mu gufasha ababaye.",
      descEN: "The strategic talent to generate wealth honestly and direct capital flows toward social relief."
    },
    {
      id: 'gift5',
      icon: <HeartHandshake size={22} />,
      titleRW: "5. Impano y'Ubuntu n'Urugwiro",
      titleEN: "5. The Gift of Radical Hospitality & Mercy",
      descRW: "Umutima ubona ingorane n'amakuba y'abandi ukagira umwete wo kubakira n'ukubaba hafi.",
      descEN: "An internal emotional capacity that senses the vulnerabilities of others and deploys immediate aid."
    },
    {
      id: 'gift6',
      icon: <Compass size={22} />,
      titleRW: "6. Impano y'Ubushishozi n'Inama",
      titleEN: "6. The Gift of Discernment & Strategic Counsel",
      descRW: "Gutandukanya icyiza n'ikibi mu buryo bw'umwuka, n'ugutanga inama zikura abantu mu rudubi.",
      descEN: "The cognitive capacity to audit spirits and provide pristine counsel that prevents strategic errors."
    },
    {
      id: 'gift7',
      icon: <Zap size={22} />,
      titleRW: "7. Impano y'Ukuvumbura n'Ubwazi",
      titleEN: "7. The Gift of Innovation & Intellectual Skill",
      descRW: "Guhanga udushya binyuze mu bumenyi n'ikoranabuhanga bishyira ku murongo urubuga n'isi.",
      descEN: "Deploying high-utility creative concepts and tech assets to optimize community processes."
    },
    {
      id: 'gift8',
      icon: <ShieldCheck size={22} />,
      titleRW: "8. Impano y'Ukwizera Gukomeye",
      titleEN: "8. The Gift of Supernatural Faith",
      descRW: "Guhagarara bemye ku masezerano y'Imana n'igihe ibintu byose byaba bishatse guhinduka ibicika.",
      descEN: "An unshakeable psychological grit that holds onto divine promises regardless of environmental collapse."
    },
    {
      id: 'gift9',
      icon: <Lightbulb size={22} />,
      titleRW: "9. Impano y'Ubwanditsi n'Ijambo",
      titleEN: "9. The Gift of Authorship & Literacy",
      descRW: "Gusiga urwibutso binyuze mu bitabo n'inyandiko zicengera mu mizi y'imitekerereze ya muntu.",
      descEN: "The power to anchor structural truths into books and timeless scripts that outlive generations."
    },
    {
      id: 'gift10',
      icon: <Star size={22} />,
      titleRW: "10. Impano y'Ubugwaneza n'Ubumwe",
      titleEN: "10. The Gift of Peacemaking & Reconciliation",
      descRW: "Guhuza imiryango n'abantu bafite amacakiri, ukabinjiza mu mahoro n'umucyo by'Imana.",
      descEN: "The diplomacy layout designed to settle hostile conflicts and realign fractured human groups."
    }
  ];

  // ===== AMAHAME 7 NGENDERWAHO (7 STRATEGIC PRINCIPLES) =====
  const actionPrinciples = [
    {
      titleRW: "Ihame rya John Wesley ku Bukungu",
      titleEN: "The Wesley Triad Framework",
      textRW: "Umuvugabutumwa John Wesley yatanze itegeko rya Pro riciye akajagari: 'Korera amafaranga yose ushoboye mu buryo bukiranuka; Zigama ayo ushoboye yose wirinda gusesagura; Tanga ayo ushoboye yose kugira ngo ube umugisha.'"
    },
    {
      titleRW: "Ihame ry'Umwanya wa Mbere (First-Fruit Framework)",
      titleEN: "The First-Fruit Sovereignty Rule",
      textRW: "Banza uhe Imana umwanya n'umutungo wa mberere mu byo ubonye byose (Imigani 3:9). Ibi birwanya umwuka w’ubwikunde, bikemeza ko umutima wawe utari ku mafaranga ahubwo uri ku Mana."
    },
    {
      titleRW: "Ubuntu nk'Intwaro y'Umwuka",
      titleEN: "Radical Giving as Warfare",
      textRW: "Mu isi yuzuye ubugugu n'imyandiko ivuga ngo 'igire wenyine', guha abandi babaye ni intwaro ikomeye isenya iminyururu y'ubukene, ikabohora n'umutima w'uwatanze mu buryo bw'umwuka."
    },
    {
      titleRW: "Ihame ry'Ubwigenge (Self-Sufficiency Principle)",
      titleEN: "The Independent Empowerment Code",
      textRW: "Inshingano ya mbere yo guha abandi si ukubagira abasabiriza, ahubwo ni ukubaha imfashanyigisho n'uburyo bwo gukora ngo nabo bahagarare bemye bafashe abandi (Empower Others)."
    },
    {
      titleRW: "Ubunyangamugayo mu Gusesengura (Accountability Layout)",
      titleEN: "The Transparency Verification Standard",
      textRW: "Gukoresha impano n'umutungo bisaba kubahiriza ubunyangamugayo haba mu mwiherero cyangwa mu ruhame, kuko Imana igenzura imigambi n'imitima inyenga inyuma y'ibikorwa."
    },
    {
      titleRW: "Ihame ry'Isuku mu Mutima (Pure Motivation)",
      titleEN: "The Uncompromised Heart Filter",
      textRW: "Buri gikorwa cyose cyo guha abandi cyangwa cy'ivugabutumwa kigomba gukorwa nta bwikunde cyangwa gushaka izina rya muntu, ahubwo bigatumbira guhesha Imana yonyine icyubahiro (Soli Deo Gloria)."
    },
    {
      titleRW: "Ihame ry'Ubusobanuro bw'Ejo Hazaza (Generational Legacy)",
      titleEN: "The Generational Seed Logic",
      textRW: "Impano n'umutungo bitunganirizwa gushinga imisingi izaramba n'igihe twebwe tutazaba tukiriho. Ibitabo, inyandiko, n'abigishwa basigara mu muryango berekana ko imbuto yabaye nziza."
    }
  ];

  return (
    <div className="gifts-page-container">
      
      {/* ===== HERO TOP SECTION (TOPIC ISANOZWE) ===== */}
      <div className="gifts-hero-section">
        <div className="gifts-badge">
          <Gift size={16} className="gift-icon-spin" />
          <span>🚀 Guhesha Imana Icyubahiro n'Impano Zacu</span>
        </div>
        <h1>
          {lang === 'RW' 
            ? "Guhesha Imana Icyubahiro n'Impano Zacu" 
            : "Honoring God with Our Gifts & Possessions"}
        </h1>
        <p className="gifts-subtitle">
          {lang === 'RW'
            ? "Inyandiko zesesenguye mu mizi n'ubushakashatsi buhanitse ku miterere y'impano, imari, n'icyerekezo cy'ubwenge Imana yaguhawe (Empowered) ngo ube igisubizo n'umugisha mu muryango."
            : "An advanced execution-driven framework on auditing, aligning, and deploying our natural skills, financial models, and temporal leverage for global human empowerment."}
        </p>
      </div>

      {/* ===== SECTION 1: 5 CORE STRUCTURAL PILLARS ===== */}
      <div className="gifts-principles-section">
        <div className="principles-section-header">
          <Lightbulb size={24} className="lightbulb-pro-icon" />
          <h2>{lang === 'RW' ? "Inkingi 5 z'Ubushakashatsi n'Ubwenge" : "The 5 Pillars of Intellectual Stewardship"}</h2>
        </div>
        
        <div className="principles-list-wrapper">
          {structuralPillars.map((p, index) => (
            <motion.div 
              key={p.id} 
              className="principle-row"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="principle-number">0{index + 1}</div>
              <div className="principle-body">
                <h4>{lang === 'RW' ? p.titleRW : p.titleEN}</h4>
                <p>{lang === 'RW' ? p.textRW : p.textEN}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== SECTION 2: 10 CORE GIFTS MATRIX GRID ===== */}
      <div className="gifts-matrix-title-area">
        <h2>{lang === 'RW' ? "Impano 10 z'Ingenzi Imana Yaguhaye" : "The 10 Core Talents & Divine Assets"}</h2>
      </div>

      <div className="gifts-matrix-grid">
        <AnimatePresence mode="popLayout">
          {coreGifts.map((item) => {
            const title = lang === 'RW' ? item.titleRW : item.titleEN;
            const desc = lang === 'RW' ? item.descRW : item.descEN;
            const copyText = `📖 [${title}]\n\n${desc}\n\n© Written by Umugwaneza Aline - Empowered Voice`;

            return (
              <motion.div 
                key={item.id}
                layout
                className="matrix-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)" }}
                transition={{ duration: 0.4 }}
              >
                <div className="matrix-card-header">
                  <div className="matrix-icon-box">{item.icon}</div>
                  <button 
                    className={`gifts-copy-btn ${copiedSection === item.id ? 'copied' : ''}`}
                    onClick={() => handleCopy(item.id, copyText)}
                    aria-label="Copy section text"
                  >
                    {copiedSection === item.id ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="card-motto-tag">
                  <Star size={12} className="star-accent-color" /> <span>Soli Deo Gloria</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ===== SECTION 3: THE STEWARD'S MANIFESTO ===== */}
      <motion.div 
        className="gifts-manifesto-box"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="manifesto-left">
          <div className="manifesto-icon-wrapper">
            <HeartHandshake size={36} className="manifesto-icon" />
          </div>
          <div className="manifesto-text-group">
            <h3>{lang === 'RW' ? "Imvugo y'Abasonga b'Ubwenge (The Manifesto)" : "The Sovereign Steward's Manifesto"}</h3>
            <p>
              {lang === 'RW'
                ? "“Ntabwo tugarukira ku gukorera amafaranga cyangwa gukuza izina rya muntu. Dusesengura kandi tugatyaza impano zacu kugira ngo dukureho ubukene n'akarengane, duhe imbaraga abandi (Empower Others), bityo Imana yonyine ibone icyubahiro gikwiriye.”"
                : "“We do not stack wealth to secure temporary self-fame; we aggressively maximize our intellectual capacity and economic assets to break systemic poverty and elevate others, bringing ultimate and absolute glory to God.”"}
            </p>
            <span className="manifesto-author">- Umugwaneza Aline</span>
          </div>
        </div>
        <button 
          className="manifesto-copy-action"
          onClick={() => handleCopy('manifesto', lang === 'RW' ? "Ntabwo tugarukira ku gukorera amafaranga..." : "We do not stack wealth...")}
        >
          {copiedSection === 'manifesto' ? <Check size={16} /> : <Copy size={16} />}
          <span>{copiedSection === 'manifesto' ? (lang === 'RW' ? 'Byandukuwe' : 'Copied') : 'Copy'}</span>
        </button>
      </motion.div>

      {/* ===== SECTION 4: 7 ACTION PRINCIPLES ANALYSIS ===== */}
      <div className="gifts-principles-section" style={{ marginTop: '60px' }}>
        <div className="principles-section-header">
          <Zap size={24} className="lightbulb-pro-icon" />
          <h2>{lang === 'RW' ? "Amahame 7 Ngenderwaho yo Guha Abandi" : "The 7 Strategic Stewardship Principles"}</h2>
        </div>
        
        <div className="principles-list-wrapper">
          {actionPrinciples.map((p, index) => (
            <motion.div 
              key={index} 
              className="principle-row"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="principle-number">0{index + 1}</div>
              <div className="principle-body">
                <h4>{lang === 'RW' ? p.titleRW : p.titleEN}</h4>
                <p>{lang === 'RW' ? p.textRW : p.textEN}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gifts;
