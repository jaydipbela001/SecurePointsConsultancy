import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import { FaInstagram, FaFacebookF, FaArrowRightLong } from 'react-icons/fa6';
import logo from '../assets/img/logo.jpg';
import './Header.css';

export default function Header() {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      contentRef.current.children,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, stagger: 0.2 }
    );

    tl.fromTo(
      ".hero-visual",
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5 },
      "-=1"
    );
  }, []);

  return (
    <section className="modern-hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content" ref={contentRef}>
          <span className="hero-headline">{t.heroHeadline}</span>
          <h1 className="hero-main-name">{t.heroName}</h1>
          <p className="hero-description">{t.heroDescription}</p>
          <button className="hero-cta-btn" onClick={() => navigate('/profile')}>
            {t.heroButton} <FaArrowRightLong className="btn-icon" />
          </button>
        </div>

        <div className="hero-visual">
          <div className="hero-logo-wrapper">
            <img src={logo} alt="SP Logo" className="hero-logo" />
          </div>
          <div className="hero-social-links">
            <a href="#" className="hero-social-link" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="hero-social-link" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
