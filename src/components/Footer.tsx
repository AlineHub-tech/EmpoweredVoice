import React, { useState } from 'react';
import { 
  Mic, Mail, Send, Check, Code
} from 'lucide-react';
import '../styles/footer.css';

interface FooterProps {
  lang: 'RW' | 'EN';
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'loading'>('idle');

  const myEmail = "umugwanezaaline77@gmail.com";

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`https://formspree.io`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, _subject: "New Newsletter Subscriber!" })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error();
      }
    } catch (error) {
      window.location.href = `mailto:${myEmail}?subject=Newsletter Subscription&body=Andika imeri yanjye muri Newsletter: ${email}`;
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* COLUMN 1: BRAND IDENTITY & DESCRIPTION */}
        <div className="footer-column brand-info">
          <div className="footer-logo" onClick={() => setCurrentPage('home')}>
            <div className="footer-mic-box">
              <Mic size={18} />
            </div>
            <div className="footer-logo-text">
              <span className="brand-main">Empowered</span>
              <span className="brand-sub">Voice</span>
            </div>
          </div>
          <p className="footer-desc-text">
            {lang === 'RW'
              ? "Isoko y'ubwenge buhanitse, inyigisho zicengera mu mutima, n'amasomo akabura ubushobozi bwa kiremwamuntu kugira ngo bibe igisubizo uhesha Imana icyubahiro."
              : 'An advanced theological repository and mental blueprint engineered to recalibrate inner strength, faith, and strategic leadership frameworks.'}
          </p>
        </div>

        {/* COLUMN 2: QUICK LINKS MATRIX */}
        <div className="footer-column links-matrix">
          <h3>{lang === 'RW' ? 'Amayira' : 'Quick Links'}</h3>
          <ul className="footer-links-list">
            <li onClick={() => setCurrentPage('home')}>{lang === 'RW' ? 'Ahabanza' : 'Home'}</li>
            <li onClick={() => setCurrentPage('blog')}>Blog</li>
            <li onClick={() => setCurrentPage('motivation')}>{lang === 'RW' ? 'Gukabura' : 'Motivation'}</li>
            <li onClick={() => setCurrentPage('inspiration')}>Inspiration</li>
            <li onClick={() => setCurrentPage('word')}>{lang === 'RW' ? 'Ijambo' : 'Word of God'}</li>
            <li onClick={() => setCurrentPage('quotes')}>{lang === 'RW' ? 'Amagambo' : 'Quotes'}</li>
            <li onClick={() => setCurrentPage('gifts')}>{lang === 'RW' ? 'Impano' : 'Gifts'}</li>
          </ul>
        </div>

        {/* COLUMN 3: PRO NEWSLETTER */}
        <div className="footer-column newsletter-box">
          <h3>Newsletter</h3>
          <p className="newsletter-tip">
            {lang === 'RW' ? "Andika imeri yawe ukunde ubonye inyandiko nshya z'ubwenge." : 'Subscribe to receive systemic updates and divine truths.'}
          </p>
          <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
            <div className="newsletter-input-wrapper">
              <Mail size={16} className="newsletter-mail-icon" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === 'RW' ? 'Imeri yawe...' : 'Your email address...'}
                disabled={status === 'loading'}
              />
              <button type="submit" className={`newsletter-submit-btn ${status === 'success' ? 'success' : ''}`}>
                {status === 'loading' ? '...' : status === 'success' ? <Check size={16} /> : <Send size={16} />}
              </button>
            </div>
          </form>
          {status === 'success' && (
            <span className="newsletter-success-tag">
              🎉 {lang === 'RW' ? 'Urakoze kwiyandikisha!' : 'Successfully subscribed!'}
            </span>
          )}
        </div>

      </div>

      {/* ===== BOTTOM METRICS AREA ===== */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          
          {/* SOCIAL MEDIA LINKS (Zose uko wazimpaye mu mizi) */}
          <div className="footer-socials-row">
            <a href="https://github.com/AlineHub-tech" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.facebook.com/share/1CGmESiTA3/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/umugwaneza-aline-655146325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://x.com/Umugwaneza3183?t=4A3A4C8KYpGQ-PlZEfOg1g&s=09" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://www.instagram.com/a_li_ne97?igsh=dGs5MXVnbnpsbzIz" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="https://dev.to" target="_blank" rel="noreferrer" aria-label="Dev.to">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M10 9H8v6h2M14 9h-2v6h2M12 12h2"></path></svg>
            </a>
          </div>

          {/* CREATIVE CREDIT BRAND */}
          <div className="footer-credits">
            <p className="copyright-text">© {new Date().getFullYear()} Empowered Voice.</p>
            <div className="developer-tag">
              <Code size={14} className="code-icon-color" />
              <span>Developed by </span>
              <a href="https://byte-flow-ltd.vercel.app/" target="_blank" rel="noreferrer" className="byteflow-link">
                ByteFlow Ltd
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
