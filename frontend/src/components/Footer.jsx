import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-content">
          <p>{t.footerCopyright}</p>
          <p>{t.footerCompany}</p>
        </div>
      </footer>

      {/* Sticky CTA Bottom Bar
      <div className="sticky-cta">
        <span className="cta-text">{t.needAdvice}</span>
        <button className="btn-primary">
          <PhoneCall size={18} />
          {t.getInTouch}
        </button>
      </div> */}

    </>
  );
}

export default Footer;
