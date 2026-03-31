import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Tag, Shield, Zap, ChevronDown, X, Users, Wallet, Subtitles, Building, Briefcase, Globe, Clock, Percent, CheckCircle, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import './CreditCards.css';

// Import bank logo images
import auLogo from '../assets/img/creditCard/au.png';
import axisLogo from '../assets/img/creditCard/axis.png';
import bobLogo from '../assets/img/creditCard/bob.png';
import equitasLogo from '../assets/img/creditCard/equitas.png';
import fedrealLogo from '../assets/img/creditCard/fedreal.png';
import hdfcLogo from '../assets/img/creditCard/hdfc.png';
import icicLogo from '../assets/img/creditCard/icic.png';
import kiwiLogo from '../assets/img/creditCard/kiwi.png';
import kreditLogo from '../assets/img/creditCard/kredit.png';
import licLogo from '../assets/img/creditCard/lic.png';
import sbiLogo from '../assets/img/creditCard/sbi.png';
import scapiaLogo from '../assets/img/creditCard/scapia.png';
import zetLogo from '../assets/img/creditCard/zet.png';

// Bank logo components with PNG images
const BankLogos = {
  "AU Small Finance Bank": () => (
    <img src={auLogo} alt="AU Small Finance Bank" className="bank-logo-img" />
  ),
  "Axis Bank": () => (
    <img src={axisLogo} alt="Axis Bank" className="bank-logo-img" />
  ),
  "Bank of Baroda": () => (
    <img src={bobLogo} alt="Bank of Baroda" className="bank-logo-img" />
  ),
  "Equitas Bank": () => (
    <img src={equitasLogo} alt="Equitas Bank" className="bank-logo-img" />
  ),
  "Federal Bank": () => (
    <img src={fedrealLogo} alt="Federal Bank" className="bank-logo-img" />
  ),
  "HDFC Bank": () => (
    <img src={hdfcLogo} alt="HDFC Bank" className="bank-logo-img" />
  ),
  "ICICI Bank": () => (
    <img src={icicLogo} alt="ICICI Bank" className="bank-logo-img" />
  ),
  "Kiwi": () => (
    <img src={kiwiLogo} alt="Kiwi" className="bank-logo-img" />
  ),
  "KreditBee": () => (
    <img src={kreditLogo} alt="KreditBee" className="bank-logo-img" />
  ),
  "LIC Cards": () => (
    <img src={licLogo} alt="LIC Cards" className="bank-logo-img" />
  ),
  "SBI": () => (
    <img src={sbiLogo} alt="SBI" className="bank-logo-img" />
  ),
  "Scapia": () => (
    <img src={scapiaLogo} alt="Scapia" className="bank-logo-img" />
  ),
  "ZET": () => (
    <img src={zetLogo} alt="ZET" className="bank-logo-img" />
  ),
  "default": (bankName) => (
    <div className="bank-logo default-logo">
      <span style={{ color: '#64748b', fontWeight: '700', fontSize: '14px' }}>{bankName.substring(0, 3).toUpperCase()}</span>
    </div>
  )
};

export default function CreditCards() {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const { t } = useLanguage();
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState('eligibility'); // 'benefits' vs 'eligibility'

  const creditCards = [
    {
      bank: "SBI",
      title: "SBI Credit Card",
      applyLink: "https://sbicard.mymoneymantra.com?sms=false&btb=true&utm_source=sbcc&utm_medium=mmm&utm_campaign=sbcc-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      features: ["Welcome benefits", "Reward system"],
      eligibility: {
        welcome_gifts: [
          "Welcome benefits worth up to ₹3000",
          "Exclusive reward points on various categories",
        ],
        travel: [
          "Fuel surcharge waiver",
          "Railway lounge access",
          "Travel insurance coverage up to ₹5 lakhs",
        ],
        others: [
          "Reward points on all spends",
          "Annual fee waiver on spending ₹1 lakh",
        ],
      },
    },
    {
      bank: "HDFC Bank",
      title: "HDFC Bank Credit Card",
      applyLink: "https://tataneu.mymoneymantra.com?sms=false&btb=true&utm_source=neucc&utm_medium=mmm&utm_campaign=neucc-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      features: ["30% off on dining", "1500 redeemable bonus rewards"],
      eligibility: {
        welcome_gifts: [
          "1500 bonus reward points on first spend",
          "Complimentary Amazon voucher worth ₹1000",
          "30% discount on dining at partner restaurants",
        ],
        travel: [
          "4 complimentary airport lounge accesses per year",
          "Travel insurance coverage up to ₹10 lakhs",
          "Hotel and flight booking discounts",
        ],
        others: [
          "5X reward points on dining and groceries",
          "Fuel surcharge waiver 1%",
          "Milestone bonus of 1000 points quarterly",
        ],
      },
    },
    {
      bank: "ICICI Bank",
      title: "ICICI Bank Credit Card",
      // applyLink: "#apply-icici-bank",
      features: ["Reward points", "Shopping benefits"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 2000 reward points",
          "Complimentary shopping vouchers worth ₹1500",
        ],
        travel: [
          "Airport lounge access 2 times per year",
          "Travel insurance coverage up to ₹5 lakhs",
        ],
        others: [
          "2% cashback on online shopping",
          "Reward points on all spends",
          "Fuel surcharge waiver",
        ],
      },
    },
    {
      bank: "Axis Bank",
      title: "Axis Bank Credit Card",
      applyLink: "https://axis-card.mymoneymantra.com?sms=false&btb=true&utm_source=axs&utm_medium=mmm&utm_campaign=axs-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      features: ["Welcome offer", "Rewards on daily spends"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 1000 reward points",
          "Complimentary shopping vouchers worth ₹1000",
          "5% cashback on daily spends for first 3 months",
        ],
        travel: [
          "Travel insurance coverage up to ₹10 lakhs",
          "Airport lounge access 4 times per year",
          "Hotel booking discounts at partner properties",
        ],
        others: [
          "5X reward points on daily spends",
          "2X reward points on all other spends",
          "Annual fee waiver on spending ₹1.5 lakhs",
        ],
      },
    },
    {
      bank: "AU Small Finance Bank",
      title: "AU Small Finance Bank Credit Card",
      applyLink: "https://aucc.mymoneymantra.com/?sms=false&btb=true&utm_source=aucc&utm_medium=mmm&utm_campaign=aucc-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      features: ["Free vouchers", "Free device insurance"],
      eligibility: {
        welcome_gifts: [
          "Free voucher of ₹2000 on spends > ₹30000 using AU Vetta credit card",
          "Free voucher of ₹500 on spends > ₹10000 using AU Altura credit card",
          "5% Cashback on ₹2500 retail spend with AU Altura Plus credit card",
          "Free voucher of ₹1000 on 1st POS retail spend using AU Zenith credit card",
        ],
        travel: [
          "2 Complimentary railway lounge access with AU Altura & Altura Plus credit card",
          "1 Complimentary airport lounge access with AU Vetta & Zenith credit card",
        ],
        others: [
          "1% Fuel surcharge waiver on fuel purchase above ₹400",
          "2% Cashback on all retail spends with AU Altura credit card",
          "1000 Reward points on completing 1 retail transaction on user's birthday with AU Vetta credit card",
          "2500 Reward points on completing 1 retail transaction on user's birthday with AU Zenith credit card",
        ],
      },
    },
    {
      bank: "Bank of Baroda",
      title: "Bank of Baroda Credit Card",
      applyLink: "https://bobcard.mymoneymantra.com?sms=false&btb=true&utm_source=bobcc&utm_medium=mmm&utm_campaign=bobcc-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      features: ["Up to 40 reward points", "Life-time free & Premium cards"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 500 reward points",
          "Complimentary BOB financial wellness kit",
          "First year fee waiver on premium cards",
        ],
        travel: [
          "Railway lounge access 2 times per year",
          "Travel insurance up to ₹5 lakhs",
          "Hotel discounts at partner properties",
        ],
        others: [
          "Lifetime free option available",
          "40 reward points per ₹100 spent",
          "Fuel surcharge waiver 1%",
        ],
      },
    },
    {
      bank: "Equitas Bank",
      title: "Equitas Bank Credit Card",
      // applyLink: "#apply-equetas-bank",
      features: ["Lifetime free", "Reward points on spends"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 500 reward points",
          "No annual fee for first year",
        ],
        travel: [
          "Travel insurance coverage up to ₹2 lakhs",
          "Hotel booking discounts",
        ],
        others: [
          "1% cashback on utility bills",
          "Reward points on all spends",
        ],
      },
    },
    {
      bank: "Federal Bank",
      title: "Federal Bank Credit Card",
      applyLink: "https://federalcc.mymoneymantra.com?sms=false&btb=true&utm_source=fedcc&utm_medium=mmm&utm_campaign=fedcc-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      features: ["No joining fee", "Attractive rewards"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 1000 reward points",
          "Complimentary shopping vouchers",
        ],
        travel: [
          "Airport lounge access 2 times per year",
          "Travel insurance coverage",
        ],
        others: [
          "2% cashback on online shopping",
          "Reward points on every spend",
        ],
      },
    },
    {
      bank: "Kiwi",
      title: "Kiwi Lifetime Free Credit Card",
      //  applyLink: "#apply-kiwi",
      features: ["UPI + Credit Card"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 500 reward points",
          "Complimentary UPI transaction credits worth ₹500",
          "Lifetime free with no annual fee",
        ],
        travel: [
          "Travel insurance coverage up to ₹2 lakhs",
          "Hotel booking discounts at partner properties",
          "Airport lounge access 1 time per year",
        ],
        others: [
          "Lifetime free with no annual fee",
          "2% cashback on UPI transactions",
          "1% cashback on all other spends",
        ],
      },
    },
    {
      bank: "Scapia",
      title: "Scapia Credit Card",
      // applyLink: "#apply-scapia",
      features: ["Travel benefits", "No forex markup"],
      eligibility: {
        welcome_gifts: [
          "Travel vouchers worth ₹2000",
          "Zero forex markup on international spends",
        ],
        travel: [
          "Complimentary airport lounge access",
          "Exclusive travel deals",
          "Travel insurance coverage up to ₹10 lakhs",
        ],
        others: [
          "5X reward points on travel bookings",
          "No foreign transaction fees",
        ],
      },
    },
    {
      bank: "ZET",
      title: "ZET Credit Card",
      // applyLink: "#apply-zet",
      features: ["Digital card", "Instant approval"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 500 reward points",
          "Instant digital card",
        ],
        travel: [
          "Travel insurance coverage up to ₹2 lakhs",
        ],
        others: [
          "1% cashback on all spends",
          "No annual fee",
          "Mobile app management",
        ],
      },
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if(listRef.current) {
        gsap.fromTo(listRef.current.children, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
        );
    }
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedCard]);

  const openDetails = (cardName) => {
    setSelectedCard(cardName);
    setActiveTab('eligibility');
  };

  return (
    <div style={{ backgroundColor: '#f5f7fb', minHeight: '100vh', paddingBottom: '40px' }}>
      <div className="sub-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ChevronLeft size={24} />
        </button>
        {t.ccHead}
      </div>

      <div className="section" ref={listRef}>
        {creditCards.map((card, index) => (
          <div key={index} className="list-card">
            <div className="bank-header">
              {BankLogos[card.bank] ? BankLogos[card.bank]() : BankLogos.default(card.bank)}
            </div>
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              {card.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="card-feature">
                  <Tag size={18} color="#94a3b8" /> {feature}
                </div>
              ))}
              <div className="view-benefits" onClick={() => openDetails(card.title)}>
                <div style={{background: '#0f172a', borderRadius:'50%', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <ChevronDown size={14} color="#fff" />
                </div>
                {t.viewBenefits}
              </div>
              <button 
                className="btn-block-apply"
                // onClick={() => window.open(card.applyLink, '_blank')}
              >
                {t.apply}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)} style={{alignItems: 'flex-end', padding: 0}}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{
            width: '100%', 
            maxWidth: '100%', 
            borderBottomLeftRadius: 0, 
            borderBottomRightRadius: 0, 
            padding: '0',
            animation: 'slideUp 0.3s ease-out'
          }}>
            
            {/* Modal Header */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #e2e8f0'}}>
              <h3 style={{fontSize: '1.05rem'}}>{selectedCard}</h3>
              <button onClick={() => setSelectedCard(null)}><X size={20} color="#64748b" /></button>
            </div>

            {/* Modal Tabs */}
            <div style={{display: 'flex', padding: '0 24px', borderBottom: '1px solid #e2e8f0', gap: '24px'}}>
              {/* <div 
                style={{padding: '16px 0', cursor: 'pointer', color: activeTab === 'benefits' ? '#3b82f6' : '#64748b', borderBottom: activeTab === 'benefits' ? '2px solid #3b82f6' : '2px solid transparent', fontWeight: activeTab === 'benefits' ? '600' : 'normal'}}
                onClick={() => setActiveTab('benefits')}
              >
                {t.brandBenefits}
              </div> */}
              <div 
                style={{padding: '16px 0', cursor: 'pointer', color: activeTab === 'eligibility' ? '#3b82f6' : '#64748b', borderBottom: activeTab === 'eligibility' ? '2px solid #3b82f6' : '2px solid transparent', fontWeight: activeTab === 'eligibility' ? '600' : 'normal'}}
                onClick={() => setActiveTab('eligibility')}
              >
                {t.eligibilityCriteria}
              </div>
            </div>

            {/* Modal Content - Benefits */}
            {activeTab === 'benefits' && (
              <div style={{padding: '24px', maxHeight: '60vh', overflowY: 'auto'}}>
                {(() => {
                  const currentCard = creditCards.find(card => card.title === selectedCard);
                  if (!currentCard || !currentCard.eligibility) {
                    return (
                      <div style={{textAlign: 'center', color: '#64748b'}}>
                        {t.genericBenefitPlaceholder}
                      </div>
                    );
                  }
                  
                  const { eligibility } = currentCard;
                  
                  // Helper function to get Hindi translations based on card bank
                  const getBenefitTranslations = (bank) => {
                    switch(bank) {
                      case 'AU Small Finance Bank':
                        return {
                          welcomeTitle: t.auWelcomeTitle,
                          welcome: [t.auWelcome1, t.auWelcome2, t.auWelcome3, t.auWelcome4],
                          travelTitle: t.auTravelTitle,
                          travel: [t.auTravel1, t.auTravel2],
                          othersTitle: t.auOthersTitle,
                          others: [t.auOthers1, t.auOthers2, t.auOthers3, t.auOthers4]
                        };
                      case 'IDFC FIRST Bank':
                        return {
                          welcomeTitle: t.idfcWelcomeTitle,
                          welcome: [t.idfcWelcome1, t.idfcWelcome2, t.idfcWelcome3],
                          travelTitle: t.idfcTravelTitle,
                          travel: [t.idfcTravel1, t.idfcTravel2, t.idfcTravel3],
                          othersTitle: t.idfcOthersTitle,
                          others: [t.idfcOthers1, t.idfcOthers2, t.idfcOthers3]
                        };
                      case 'Bank of Baroda':
                        return {
                          welcomeTitle: t.bobWelcomeTitle,
                          welcome: [t.bobWelcome1, t.bobWelcome2, t.bobWelcome3],
                          travelTitle: t.bobTravelTitle,
                          travel: [t.bobTravel1, t.bobTravel2, t.bobTravel3],
                          othersTitle: t.bobOthersTitle,
                          others: [t.bobOthers1, t.bobOthers2, t.bobOthers3]
                        };
                      case 'HDFC Bank':
                        return {
                          welcomeTitle: t.hdfcWelcomeTitle,
                          welcome: [t.hdfcWelcome1, t.hdfcWelcome2, t.hdfcWelcome3],
                          travelTitle: t.hdfcTravelTitle,
                          travel: [t.hdfcTravel1, t.hdfcTravel2, t.hdfcTravel3],
                          othersTitle: t.hdfcOthersTitle,
                          others: [t.hdfcOthers1, t.hdfcOthers2, t.hdfcOthers3]
                        };
                      case 'SBI':
                        if (selectedCard.includes('IRCTC')) {
                          return {
                            welcomeTitle: t.sbiIrctcWelcomeTitle,
                            welcome: [t.sbiIrctcWelcome1, t.sbiIrctcWelcome2, t.sbiIrctcWelcome3],
                            travelTitle: t.sbiIrctcTravelTitle,
                            travel: [t.sbiIrctcTravel1, t.sbiIrctcTravel2, t.sbiIrctcTravel3],
                            othersTitle: t.sbiIrctcOthersTitle,
                            others: [t.sbiIrctcOthers1, t.sbiIrctcOthers2, t.sbiIrctcOthers3]
                          };
                        } else if (selectedCard.includes('BPCL')) {
                          return {
                            welcomeTitle: t.bpclSbiWelcomeTitle,
                            welcome: [t.bpclSbiWelcome1, t.bpclSbiWelcome2, t.bpclSbiWelcome3],
                            travelTitle: t.bpclSbiTravelTitle,
                            travel: [t.bpclSbiTravel1, t.bpclSbiTravel2, t.bpclSbiTravel3],
                            othersTitle: t.bpclSbiOthersTitle,
                            others: [t.bpclSbiOthers1, t.bpclSbiOthers2, t.bpclSbiOthers3]
                          };
                        }
                        break;
                      default:
                        return null;
                    }
                    return null;
                  };
                  
                  const translations = getBenefitTranslations(currentCard.bank);
                  
                  if (!translations) {
                    return (
                      <div style={{textAlign: 'center', color: '#64748b'}}>
                        {t.genericBenefitPlaceholder}
                      </div>
                    );
                  }
                  
                  return (
                    <>
                      {/* Welcome Gifts Section */}
                      <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '12px', fontSize: '1.05rem', color: '#0f172a'}}>
                          <Star size={18} color="#3b82f6" /> {translations.welcomeTitle}
                        </div>
                        {translations.welcome.map((item, index) => (
                          <div key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', lineHeight: '2', color: '#64748b'}}>
                            <CheckCircle size={14} color="#10b981" /> {item}
                          </div>
                        ))}
                      </div>
                      
                      {/* Travel Section */}
                      <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '12px', fontSize: '1.05rem', color: '#0f172a'}}>
                          <Globe size={18} color="#3b82f6" /> {translations.travelTitle}
                        </div>
                        {translations.travel.map((item, index) => (
                          <div key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', lineHeight: '2', color: '#64748b'}}>
                            <CheckCircle size={14} color="#10b981" /> {item}
                          </div>
                        ))}
                      </div>
                      
                      {/* Others Section */}
                      <div style={{marginBottom: '8px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '12px', fontSize: '1.05rem', color: '#0f172a'}}>
                          <Shield size={18} color="#3b82f6" /> {translations.othersTitle}
                        </div>
                        {translations.others.map((item, index) => (
                          <div key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', lineHeight: '2', color: '#64748b'}}>
                            <CheckCircle size={14} color="#10b981" /> {item}
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* Modal Content - Eligibility */}
            {activeTab === 'eligibility' && (
              <div style={{padding: '24px', maxHeight: '60vh', overflowY: 'auto'}}>
                
                {/* Salaried Customer Section */}
                <div style={{marginBottom: '32px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', fontWeight: '700', marginBottom: '20px', fontSize: '1.05rem'}}>
                    <Building size={20} color="#3b82f6" /> {t.forSalariedCustomer}
                  </div>

                  {/* Age Group */}
                  <div style={{background: '#f8fafc', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px'}}>
                    <Users size={24} color="#94a3b8" />
                    <div>
                      <div style={{fontSize: '0.8rem', color: '#64748b', fontWeight: '600'}}>{t.ageGroupPersonal}</div>
                      <div style={{fontSize: '0.85rem', color: '#334155', lineHeight: '1.4'}} dangerouslySetInnerHTML={{__html: t.ageRangeCredit}} />
                    </div>
                  </div>

                  {/* Income Range */}
                  <div style={{background: '#f8fafc', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px'}}>
                    <Wallet size={24} color="#10b981" />
                    <div>
                      <div style={{fontSize: '0.8rem', color: '#64748b', fontWeight: '600'}}>{t.incomeRangePersonal}</div>
                      <div style={{fontSize: '0.85rem', color: '#334155', lineHeight: '1.4'}}>{t.incomeRangeCreditSalaried}</div>
                    </div>
                  </div>

                  {/* Documents Required */}
                  <div style={{fontWeight: '600', marginBottom: '12px', fontSize: '0.9rem', color: '#1e293b'}}>{t.documentsRequired}</div>
                  
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px'}}>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.identityProofCredit}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.identityProofCreditDesc}
                      </div>
                    </div>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.addressProofCredit}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.addressProofCreditDesc}
                      </div>
                    </div>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.incomeProofCredit}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.incomeProofCreditDescSalaried}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Self Employed Customer Section */}
                <div style={{marginBottom: '8px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#1e293b', fontWeight: '700', marginBottom: '20px', fontSize: '1.05rem'}}>
                    <Briefcase size={20} color="#3b82f6" /> {t.forSelfEmployedCustomer}
                  </div>

                  {/* Age Group */}
                  <div style={{background: '#f8fafc', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px'}}>
                    <Users size={24} color="#94a3b8" />
                    <div>
                      <div style={{fontSize: '0.8rem', color: '#64748b', fontWeight: '600'}}>{t.ageGroupPersonal}</div>
                      <div style={{fontSize: '0.85rem', color: '#334155', lineHeight: '1.4'}} dangerouslySetInnerHTML={{__html: t.ageRangeCredit}} />
                    </div>
                  </div>

                  {/* Income Range */}
                  <div style={{background: '#f8fafc', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px'}}>
                    <Wallet size={24} color="#10b981" />
                    <div>
                      <div style={{fontSize: '0.8rem', color: '#64748b', fontWeight: '600'}}>{t.incomeRangePersonal}</div>
                      <div style={{fontSize: '0.85rem', color: '#334155', lineHeight: '1.4'}}>{t.incomeRangeCreditSelf}</div>
                    </div>
                  </div>

                  {/* Documents Required */}
                  <div style={{fontWeight: '600', marginBottom: '12px', fontSize: '0.9rem', color: '#1e293b'}}>{t.documentsRequired}</div>
                  
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px'}}>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.identityProofCredit}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.identityProofCreditDesc}
                      </div>
                    </div>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.addressProofCredit}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.addressProofCreditDesc}
                      </div>
                    </div>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.incomeProofCredit}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.incomeProofCreditDescSelf}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Modal Sticky Apply */}
            <div style={{padding: '16px 24px', borderTop: '1px solid #e2e8f0', background: '#fff', position: 'sticky', bottom: 0}}>
               <button 
                 className="btn-block-apply" 
                 style={{marginTop: 0}}
                 onClick={() => {
                   const currentCard = creditCards.find(card => card.title === selectedCard);
                   if (currentCard && currentCard.applyLink !== '#') {
                     window.open(currentCard.applyLink, '_blank');
                   }
                 }}
               >
                 {t.apply}
               </button>
            </div>
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @media (max-width: 600px) {
           .modal-content > div:nth-child(3) > div:last-child {
               grid-template-columns: 1fr !important;
           }
        }
      `}} />
    </div>
  );
}
