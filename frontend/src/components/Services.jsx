import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, Percent } from 'lucide-react';
import '../components/Services.css';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="services-section" ref={ref}>
      <div className="services-header-modern">
        <div className="header-accent-line"></div>
        <div className="header-accent-dot"></div>
        <h2 className="services-subtitle">
          {/* {t.exploreServices || 'Explore Our Services'} */}
          Explore Our Services
        </h2>
        <div className="header-accent-dot"></div>
        <div className="header-accent-line"></div>
      </div>

      <div className="service-banner">
        <div className="service-left">
          <div className="circle-icon">
            <Percent size={28} color="#2563eb" strokeWidth={3} />
            <div className="circle-badge">{t.free || 'FREE'}</div>
          </div>
          <div className="service-text">{t.checkCreditScore || 'Check your Credit Score for FREE'}</div>
        </div>
        <ChevronRight color="#fff" size={28} />
      </div>
    </section>
  );
}
