import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Send, Check, ShieldCheck, MapPin, Share2 } from 'lucide-react';
import '../styles/contactus.css';

interface ContactProps {
  lang: 'RW' | 'EN';
}

const ContactUs: React.FC<ContactProps> = ({ lang }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const emailAddress = "umugwanezaaline77@gmail.com";
  const phoneNumber = "0796023452";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hano washyiramo API redirection nka Formspree cyangwa EmailJS
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <div className="contact-page-container">
      
      {/* ===== HERO HEAD VIEW ===== */}
      <div className="contact-hero-section">
        <div className="contact-mini-badge">
          <MessageSquare className="contact-badge-icon" size={16} />
          <span>{lang === 'RW' ? 'Tuvugishe' : 'Connect with Us'}</span>
        </div>
        <h1>{lang === 'RW' ? 'Gira Icyo Utubwira' : 'Let’s Start a Conversation'}</h1>
        <p className="contact-subtitle">
          {lang === 'RW'
            ? 'Ukeneye inama z\'ubwenge, ishungura ry\'ijambo, cyangwa gushyigikira inyigisho? Twandikire cyangwa uduhamagare ako kanya.'
            : 'Do you require intellectual counsel, scripture alignment, or wish to partner with our movement? Reach out directly.'}
        </p>
      </div>

      {/* ===== MAIN CONTACT ROW HOUSING CARDS & FORM ===== */}
      <div className="contact-main-grid-layout">
        
        {/* LEFT COLUMN: VISUAL INFO CARDS */}
        <div className="contact-info-cards-column">
          
          {/* Phone Card */}
          <motion.div 
            className="info-action-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="info-card-icon-box phone-gradient">
              <Phone size={22} />
            </div>
            <div className="info-card-text">
              <h3>{lang === 'RW' ? 'Terefone & WhatsApp' : 'Phone & WhatsApp'}</h3>
              <a href={`tel:${phoneNumber}`} className="contact-link-style">+{phoneNumber}</a>
              <p className="info-card-desc-pro">{lang === 'RW' ? 'Duhamagare cyangwa utwandikire.' : 'Available for calls and messaging.'}</p>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            className="info-action-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="info-card-icon-box mail-gradient">
              <Mail size={22} />
            </div>
            <div className="info-card-text">
              <h3>{lang === 'RW' ? 'Imeri (Email)' : 'Official Email'}</h3>
              <a href={`mailto:${emailAddress}`} className="contact-link-style">{emailAddress}</a>
              <p className="info-card-desc-pro">{lang === 'RW' ? 'Subizwa mu masaha 24.' : 'Monitored 24/7 for executive inquiries.'}</p>
            </div>
          </motion.div>

          {/* Location/Platform Card */}
          <motion.div 
            className="info-action-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="info-card-icon-box location-gradient">
              <MapPin size={22} />
            </div>
            <div className="info-card-text">
              <h3>{lang === 'RW' ? 'Icyerekezo n\'Imbuga' : 'Location & Network'}</h3>
              <span className="static-text-pro">Kigali, Rwanda</span>
              <p className="info-card-desc-pro">{lang === 'RW' ? 'Urubuga rwacu rugera ku isi yose.' : 'Serving global audiences from Kigali.'}</p>
            </div>
          </motion.div>

          {/* Pro WhatsApp Button Action */}
          <a 
            href={`https://wa.me{phoneNumber}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-pro-action-btn"
          >
            <MessageSquare size={18} />
            <span>{lang === 'RW' ? 'Tuvugishe kuri WhatsApp' : 'Chat on WhatsApp'}</span>
          </a>
        </div>

        {/* RIGHT COLUMN: HIGH UTILITY FORM DESIGN */}
        <div className="contact-form-column-box">
          <form onSubmit={handleSubmit} className="pro-contact-form">
            
            <div className="form-double-row-inputs">
              <div className="form-group-item">
                <label>{lang === 'RW' ? 'Izina ryawe' : 'Your Full Name'}</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Keza Aline"
                />
              </div>

              <div className="form-group-item">
                <label>{lang === 'RW' ? 'Imeri yawe' : 'Your Email Address'}</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="e.g. name@example.com"
                />
              </div>
            </div>

            <div className="form-group-item">
              <label>{lang === 'RW' ? 'Inyito y\'Ubutumwa' : 'Subject'}</label>
              <input 
                type="text" 
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder={lang === 'RW' ? 'e.g. Gushyigikira inyigisho' : 'e.g. Strategic Partnership Inquiry'}
              />
            </div>

            <div className="form-group-item">
              <label>{lang === 'RW' ? 'Ubutumwa bwawe' : 'Your Message'}</label>
              <textarea 
                rows={5} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder={lang === 'RW' ? 'Andika inyandiko cyangwa igitekerezo cyawe hano...' : 'Describe your vision or inquiry in details here...'}
              />
            </div>

            <button type="submit" className={`form-submit-action-btn ${formSubmitted ? 'success' : ''}`}>
              {formSubmitted ? (
                <>
                  <Check size={18} />
                  <span>{lang === 'RW' ? 'Ubutumwa Bwoherejwe!' : 'Message Sent Successfully!'}</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>{lang === 'RW' ? 'Yandike Ubutumwa' : 'Dispatch Message'}</span>
                </>
              )}
            </button>
            
            {formSubmitted && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="form-success-alert-text"
              >
                🎉 {lang === 'RW' ? 'Urakoze! Umugwaneza Aline aragusubiza mu masaha 24.' : 'Thank you! Aline will review your query and reply within 24 hours.'}
              </motion.p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
