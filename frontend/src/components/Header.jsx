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
    const tl = gsap.timeline();
    tl.fromTo(
      contentRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    tl.fromTo(
      cardRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );
  }, []);

  return (
    <section className="modern-hero" ref={heroRef}>
      <div className="hero-container">
        
        <div className="hero-content" ref={contentRef}>
          <h2 className="hero-headline">{t.heroHeadline}</h2>
          <h1 className="hero-main-name">{t.heroName}</h1>
          <p className="hero-description">{t.heroDescription}</p>
        </div>

        <div className="hero-card-wrapper" ref={cardRef}>
          <div className="hero-pristine-card">
            <div className="hero-avatar-container">
              <div className="hero-avatar-glow"></div>
              <img
                src={logo}
                alt="Profile"
                className="hero-avatar"
              />
            </div>

            <h3 className="hero-card-name">{t.heroName}</h3>
            <p className="hero-card-title">{t.heroTitle}</p>

            <div className="hero-socials">
              <a href="#" className="hero-social-icon" aria-label="Facebook"><FaFacebookF size={18} /></a>
              <a href="#" className="hero-social-icon" aria-label="Instagram"><FaInstagram size={18} /></a>
            </div>
          </div>
          <button className="hero-cta-btn" onClick={() => navigate('/profile')}>
            {t.heroButton} <FaArrowRightLong className="btn-icon" />
          </button>
        </div>

      </div>
    </section>
  );
}
