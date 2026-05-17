import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Target, Sparkles, Compass, Bookmark, Quote } from 'lucide-react';
import '../styles/aboutus.css';

interface AboutProps {
  lang: 'RW' | 'EN';
}

const AboutUs: React.FC<AboutProps> = ({ lang }) => {
  return (
    <div className="about-page-container">
      
      {/* ===== HERO BRAND SHOWCASE ===== */}
      <div className="about-hero-section">
        <motion.div 
          className="about-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Sparkles size={16} className="about-sparkle-spin" />
          <span>{lang === 'RW' ? 'Ibyo Turi Byo' : 'The Corporate Blueprint'}</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {lang === 'RW' ? 'Urugendo n\'Iyerekwa rya ' : 'The Genesis & Scope of '}
          <span className="gradient-brand-text">Empowered Voice</span>
        </motion.h1>
        
        <p className="about-hero-subtitle">
          {lang === 'RW'
            ? "Urubuga nsesengurabwenge n'isoko y'inyigisho zishikamye rwashinzwe n'umwanditsi Umugwaneza Aline, rugamije gukabura ubushobozi n'ukwizera bishingiye ku Jambo ry'Imana."
            : 'A deep analytical sanctuary and theological ecosystem founded by author Umugwaneza Aline, engineered to awaken latent potentials and ignite absolute faith.'}
        </p>
      </div>

      {/* ===== EXTENDED BIOGRAPHY SECTION ===== */}
      <div className="about-deep-story-wrapper">
        <motion.div 
          className="story-block-extended"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            <Heart size={24} className="about-title-icon-move" /> 
            {lang === 'RW' ? 'Intangiriro n\'Inzira y\'Iyerekwa' : 'The Divine Mandate & Journey'}
          </h2>
          
          <p>
            {lang === 'RW'
              ? "Umugwaneza Aline yagize iyerekwa ryo kubaka urubuga 'Empowered Voice' amaze gushishoza ku cyuho gikomeye kiri mu muryango mugari: uburyo abantu benshi bafite impano zihambaye, umutungo, n'ubushobozi bw'intekerezo, ariko bakabura icyerekezo gifatika cyo kubibyaza umusaruro uhesha Imana icyubahiro. Inzira y'iri yerekwa yagutse binyuze mu gusenga, gusesengura inyandiko z'abahanga ba kera, no kugaragaza ko ubutwari bwa mberere bwa muntu ari ukugendera ku mahame ntaruka y'Ijambo ry'Imana."
              : "Umugwaneza Aline birthed the architecture of 'Empowered Voice' after identifying a systemic gap within communities: thousands of highly talented individuals, endowed with material assets and profound cognitive bandwidth, living below their divine configurations. The genesis was forged through intense spiritual alignment, deep text analysis of historical reformations, and an unyielding commitment to proving that humanity’s highest success is found in biblical frameworks."}
          </p>
          
          <p>
            {lang === 'RW'
              ? "Muri iri yerekwa, 'Powering' ntabwo ari ijambo risanzwe ryo gukabura amarorwa n'amarangamutima handles handles; ni inzira ifasha umuntu kumenya ko Imana yamuhaye umwuka w'ubwenge n'imbaraga (2 Timoteyo 1:7). Binyuze mu nyandiko zicengera mu mizi z'Ibitabo Byera n'amasomo y'abanyabwenge bafashije isi, uru rubuga rwahindutse isoko nshya y'amahoro n'icyizere ituma umuntu arinda umutuzo we w'imbere mu buryo bw'ubudakemwa."
              : "Within this systemic blueprint, 'Powering' is stripped of superficial emotional motivation; it is redefined as a structural process that enables a human being to realize they are hardwired with authority, love, and a sound mind (2 Timothy 1:7). By blending rigorous analysis of Sacred Scriptures, biblical patterns, and classical philosophy, this platform functions as a fortress for healing and mental recalibration."}
          </p>
        </motion.div>
      </div>

      {/* ===== VISION & MISSION GRID ===== */}
      <div className="about-metrics-container">
        <div className="vision-mission-grid-pro">
          
          <motion.div 
            className="metric-box-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="metric-icon-holder purple-bg">
              <Target size={24} />
            </div>
            <h3>{lang === 'RW' ? 'Icyerekezo (Our Vision)' : 'The Global Vision'}</h3>
            <p>
              {lang === 'RW'
                ? "Kurema n'ugukura umuryango mugari w'abantu bafite intekerezo zifungutse, bakiranuka mu mwiherero kandi bafite ubushobozi bw'ubwenge (Empowered) bahagurukira kubera igisubizo n'ugufasha abandi bose (Empower Others) ku bw'icyubahiro cy'Imana."
                : 'To architect and sustain an integrated global ecosystem of mentally emancipated, spiritually aligned individuals who command intellectual resources, solely deployed to deconstruct systemic despair and elevate others.'}
            </p>
          </motion.div>

          <motion.div 
            className="metric-box-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="metric-icon-holder pink-bg">
              <Compass size={24} />
            </div>
            <h3>{lang === 'RW' ? 'Inshingano (Our Mission)' : 'The Executive Mission'}</h3>
            <p>
              {lang === 'RW'
                ? "Gutanga imfashanyigisho, inyandiko nsesenguramashusho, n'inama z'ubwenge zivanaho akajagari mu bitekerezo, zigatyaza impano z'abantu, kandi zikabinjiza mu mahame ya Bibiliya n'abahanga bafasha kwibohora mu ntege nke."
                : 'To curatively dispatch theological logs, analytical wisdom blueprints, and strategic directives that eliminate cognitive chaos, refine natural talents, and position individuals on solid biblical frameworks.'}
            </p>
          </motion.div>

        </div>
      </div>

      {/* ===== THE 4 CORE VALUES ===== */}
      <div className="about-values-deep-section">
        <div className="values-section-title-center">
          <Bookmark size={20} className="value-bookmark-accent" />
          <h2>{lang === 'RW' ? 'Indangagaciro Zicengeye mu Mizi' : 'The Core Values Manifesto'}</h2>
          <p>
            {lang === 'RW' ? "Amahame ane (4) ngenderwaho adashobora guhinduka ku rubuga rwa Empowered Voice:" : 'The four unalterable operational codes that dictate our corporate architecture:'}
          </p>
        </div>

        <div className="about-values-detailed-grid">
          
          <div className="value-detailed-card">
            <span className="value-num-indicator">01</span>
            <h4>{lang === 'RW' ? 'Kwizera Kutanyeganyega (Faith)' : 'Unwavering Faith'}</h4>
            <p>
              {lang === 'RW'
                ? "Kwizera ntabwo ari amarangamutima; ni umusingi ufatika wiringira uwo Imana ari yo n'icyo yavuze mu Jambo ryayo. Ni rwo rufunguzo rutuma tureshya n'ibidashoboka kuko uwo twizeye adahwema gusohoza."
                : 'Faith is stripped of mere sentimentalism; it is defined as the absolute technical assurance of who God is as documented in Sacred Texts. It acts as the anchor that conceptualizes the impossible into tangible realities.'}
            </p>
          </div>

          <div className="value-detailed-card">
            <span className="value-num-indicator">02</span>
            <h4>{lang === 'RW' ? 'Ubunyangamugayo (Integrity)' : 'Absolute Integrity'}</h4>
            <p>
              {lang === 'RW'
                ? "Ubunyangamugayo busaba ko imvugo ya muntu ihura pfe n'ibikorwa bye n'igihe nta muntu n'umwe uri kumureba. Ni wo musingi urinda icyerekezo cyacu ngo ntiwungazwe cyangwa ngo ushongozwe n'imiyaga n'izitane z'isi."
                : 'Integrity demands a flawless calibration between private behavior and public statements. It serves as the moral structural shield that prevents our divine assignment from bending under worldly compromises.'}
            </p>
          </div>

          <div className="value-detailed-card">
            <span className="value-num-indicator">03</span>
            <h4>{lang === 'RW' ? 'Kubaha (Respect)' : 'Radical Respect'}</h4>
            <p>
              {lang === 'RW'
                ? "Kubaha abandi si ukubera ko bafite umutungo cyangwa amashuri gusa, ahubwo n'uko bose baremwe mu ishusho y'Imana. Iyo twubashye ikiremwamuntu, tuba duhaye icyubahiro Iyabaremye, kandi niyo ntangiriro yo kubaka umuryango ushikamye."
                : 'Respect is not transactional or based on social classes; it is an acknowledgment that every human reflects divine creation. By respecting humanity, we honor the Creator, creating a unified infrastructure.'}
            </p>
          </div>

          <div className="value-detailed-card">
            <span className="value-num-indicator">04</span>
            <h4>{lang === 'RW' ? 'Ubuntu (Generosity)' : 'Sacred Generosity'}</h4>
            <p>
              {lang === 'RW'
                ? "Ubutwari bwa mberere bw'umutungo n'impano ni ukuzimenagura ngo zibe igisubizo cy'ubwigenge (Self-Sufficiency) ku babaye, gukuraho ubukene n'akarengane mu muryango, binyuze mu mahame y'abanyabwenge nka Maimonides."
                : 'Wealth and talent are structurally meant to be dispersed to establish self-sufficiency for others. Radical giving operates as a spiritual counter-warfare that shatters individualistic greed and structural lacks.'}
            </p>
          </div>

        </div>
      </div>

      {/* ===== THE SOVEREIGN QUOTE BOX ===== */}
      <motion.div 
        className="about-signature-quote-box"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <Quote size={28} className="about-quote-mark-icon" />
        <p>
          {lang === 'RW'
            ? "“Ntabwo wiremye cyangwa ngo ubeho ku bw\'impanuka. Imana yaguhawe imbaraga, ubumenyi, n\'impano mu buryo buhanitse kugira ngo nawe ube umugisha wiringirwa ku bandi, kandi buri ntambwe unyuzemo ibe inyigisho iheshe Imana icyubahiro.”"
            : '“You are not a product of biological accident. God structurally empowered you with heavy gifts and intellectual speed so you can act as an emergency response to your generation, and every step must secure His absolute glory.”'}
        </p>
        <span className="about-quote-author">- Umugwaneza Aline</span>
      </motion.div>

    </div>
  );
};

export default AboutUs;
