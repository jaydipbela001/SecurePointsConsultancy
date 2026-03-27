import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { Heart } from 'lucide-react';
import whyChooseImage from '../assets/img/whychose.png';
import './WhyChoose.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
  const { t } = useLanguage();
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="why-choose-wrapper" ref={ref}>
      <div className="why-choose-card">
        <div className="image-container">
          <img src={whyChooseImage} alt="Secure Points Consultancy" className="why-choose-image" />
          <div className="heart-icons">
            <Heart className="heart-icon heart-1" size={24} color="#ef4444" fill="#ef4444" />
            <Heart className="heart-icon heart-2" size={20} color="#ec4899" fill="#ec4899" />
            <Heart className="heart-icon heart-3" size={18} color="#f43f5e" fill="#f43f5e" />
          </div>
        </div>
        
        <div className="content-container">
          <h2 className="why-choose-title">{t.whyChooseTitle}</h2>
          
          <p className="why-choose-text">
            {t.whyChooseDesc1}
          </p>
          <p className="why-choose-text">
            {t.whyChooseDesc2}
          </p>
        </div>
      </div>
    </section>
  );
}
