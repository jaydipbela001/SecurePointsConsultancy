import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Products.css';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone, Gift, ChevronRight, Lock } from 'lucide-react';
import creditCardSvg from '../assets/img/credite-card.svg';
import loanSvg from '../assets/img/loan.svg';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const { t } = useLanguage();
  const gridRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cards = gridRef.current.children;
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section className="section" style={{ backgroundColor: '#f8fafc' }}>
      <h2 className="section-title-premium">{t.exploreProducts}</h2>
      
      <div className="products-grid" ref={gridRef}>
        
        {/* Credit Cards */}
        <div className="product-card card-purple" onClick={() => navigate('/credit-cards')}>
          <div className="product-icon-wrapper">
            <img src={creditCardSvg} alt="Credit Card" className="product-icon" style={{width: '32px', height: '32px'}} />
          </div>
          <div className="product-title">{t.creditCards}</div>
          <div className="product-subtitle">Easy application • Fast approval</div>
          <div className="product-bottom" style={{marginTop: '32px'}}>
            <ChevronRight className="arrow-icon" size={20} />
          </div>
        </div>

        {/* Personal Loans */}
        <div className="product-card card-pink" onClick={() => navigate('/personal-loans')}>
          <div className="product-icon-wrapper">
             <img src={loanSvg} alt="Personal Loan" className="product-icon" style={{width: '32px', height: '32px'}} />
          </div>
          <div className="product-title">{t.personalLoans}</div>
          <div className="product-subtitle">Fast approval • Flexible EMIs</div>
          <div className="product-bottom" style={{marginTop: '32px'}}>
            <ChevronRight className="arrow-icon" size={20} />
          </div>
        </div>

        {/* Mobile Recharge */}
        <div className="product-card locked card-cyan">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="product-icon-wrapper">
              <Smartphone className="product-icon" size={26} strokeWidth={2} color="#0284c7" />
            </div>
            <span className="coming-soon-badge">{t.comingSoon}</span>
          </div>
          <div className="product-title">{t.mobileRecharge}</div>
          <div className="product-subtitle">Instant recharge • Exclusive offers</div>
          <div className="product-bottom" style={{marginTop: '32px'}}>
             <Lock className="arrow-icon" size={18} />
          </div>
        </div>

        {/* Gift Vouchers */}
        <div className="product-card locked card-green">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div className="product-icon-wrapper">
              <Gift className="product-icon" size={26} strokeWidth={2} color="#16a34a" />
            </div>
            <span className="coming-soon-badge">{t.comingSoon}</span>
          </div>
          <div className="product-title">{t.giftVouchers}</div>
          <div className="product-subtitle">500+ brands • Instant delivery</div>
          <div className="product-bottom" style={{marginTop: '32px'}}>
             <Lock className="arrow-icon" size={18} />
          </div>
        </div>

      </div>
    </section>
  );
}
