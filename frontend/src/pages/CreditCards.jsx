import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Tag, Shield, Zap, ChevronDown, X, Users, Wallet, Subtitles, Building, Briefcase, Globe, Clock, Percent, CheckCircle, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import './CreditCards.css';

// Bank logo components
const BankLogos = {
  "AU Small Finance Bank": () => (
    <div className="bank-logo au-logo">
      <span style={{ color: '#FF6B35', fontWeight: '900', fontSize: '18px' }}>AU</span>
    </div>
  ),
  "IDFC FIRST Bank": () => (
    <div className="bank-logo idfc-logo">
      <span style={{ color: '#0066CC', fontWeight: '800', fontSize: '16px' }}>IDFC</span>
    </div>
  ),
  "Bank of Baroda": () => (
    <div className="bank-logo bob-logo">
      <span style={{ color: '#8B1538', fontWeight: '900', fontSize: '17px' }}>BOB</span>
    </div>
  ),
  "HDFC Bank": () => (
    <div className="bank-logo hdfc-logo">
      <span style={{ color: '#004276', fontWeight: '900', fontSize: '16px' }}>HDFC</span>
    </div>
  ),
  "SBI": () => (
    <div className="bank-logo sbi-logo">
      <span style={{ color: '#0051A2', fontWeight: '900', fontSize: '18px' }}>SBI</span>
    </div>
  ),
  "RBL Bank": () => (
    <div className="bank-logo rbl-logo">
      <span style={{ color: '#FF6600', fontWeight: '800', fontSize: '16px' }}>RBL</span>
    </div>
  ),
  "Axis Bank": () => (
    <div className="bank-logo axis-logo">
      <span style={{ color: '#8B2942', fontWeight: '900', fontSize: '16px' }}>AXIS</span>
    </div>
  ),
  "Kiwi": () => (
    <div className="bank-logo kiwi-logo">
      <span style={{ color: '#00C853', fontWeight: '900', fontSize: '18px' }}>🥝</span>
    </div>
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
      bank: "AU Small Finance Bank",
      title: "AU Small Finance Bank Credit Card",
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
    // {
    //   bank: "IndusInd Bank",
    //   title: "IndusInd Bank Credit Card",
    //   features: ["Wide range of variants", "Attractive reward points"],
    // },
    // {
    //   bank: "Bajaj Finserv",
    //   title: "Bajaj Finserv Insta EMI Card",
    //   features: ["100% online application", "Instant card activation"],
    // },
    {
      bank: "IDFC FIRST Bank",
      title: "IDFC FIRST Bank Credit Cards",
      features: ["Up to 20% off on dining", "10X Reward points"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 1000 reward points on first spend",
          "5% cashback on first 3 months of dining spends",
          "Complimentary movie vouchers worth ₹500",
        ],
        travel: [
          "2 complimentary airport lounge visits per quarter",
          "Travel insurance coverage up to ₹10 lakhs",
          "Hotel discounts up to 15% at partner properties",
        ],
        others: [
          "1% fuel surcharge waiver",
          "10X reward points on dining and groceries",
          "No annual fee for first year",
        ],
      },
    },
    // {
    //   bank: "Federal Bank",
    //   title: "Scapia Federal Bank Credit Card",
    //   features: ["No joining & annual fees", "Unlimited lounge access across India"],
    // },
    // {
    //   bank: "IDFC FIRST Bank",
    //   title: "IDFC FIRST Power Credit Card",
    //   features: ["Attractive welcome offers", "Lifestyle Privileges"],
    // },
    // {
    //   bank: "YES Bank",
    //   title: "YES Bank Credit Card",
    //   features: ["Cashback on shopping & groceries", "25% discount on BookMyShow"],
    // },
    {
      bank: "Bank of Baroda",
      title: "Bank of Baroda Credit Card",
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
      bank: "HDFC Bank",
      title: "HDFC Bank Credit Card",
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
    // {
    //   bank: "Uni",
    //   title: "Uni GoldX Credit Card",
    //   features: [
    //     "Unlimited 1% Gold rewards on all spends",
    //     "Unlimited 5% Gold on partner brands",
    //   ],
    // },
    {
      bank: "SBI",
      title: "SBI IRCTC RuPay Credit Card",
      features: ["10% value back on train bookings", "Railway lounge access"],
      eligibility: {
        welcome_gifts: [
          "10% value back on first 3 IRCTC transactions",
          "Complimentary 1000 reward points",
          "Free railway lounge access vouchers",
        ],
        travel: [
          "Unlimited railway lounge access",
          "10% value back on all IRCTC bookings",
          "Travel insurance up to ₹2 lakhs",
        ],
        others: [
          "1% fuel surcharge waiver",
          "Reward points on all spends",
          "No annual fee for IRCTC users",
        ],
      },
    },
    {
      bank: "SBI",
      title: "BPCL SBI Credit Card",
      features: ["₹500 activation bonus", "13X rewards on fuel"],
      eligibility: {
        welcome_gifts: [
          "₹500 activation bonus on first fuel transaction",
          "Complimentary BPCL fuel vouchers worth ₹1000",
          "Welcome bonus of 2000 reward points",
        ],
        travel: [
          "Fuel surcharge waiver across all petrol pumps",
          "13X reward points on fuel purchases",
          "Travel insurance coverage",
        ],
        others: [
          "4% value back on fuel purchases",
          "1% cashback on grocery and utility spends",
          "Annual fee waiver on spending ₹50,000",
        ],
      },
    },
    {
      bank: "HDFC Bank",
      title: "HDFC Bank RuPay Credit Card",
      features: ["Extraordinary rewards", "Complimentary lounge access"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 2000 reward points",
          "Complimentary shopping vouchers worth ₹1500",
          "First year annual fee waiver",
        ],
        travel: [
          "8 complimentary airport lounge accesses per year",
          "Travel insurance coverage up to ₹15 lakhs",
          "Hotel and flight booking discounts up to 20%",
        ],
        others: [
          "10X reward points on all spends",
          "Fuel surcharge waiver 1%",
          "Milestone bonus of 5000 points annually",
        ],
      },
    },
    {
      bank: "SBI",
      title: "SimplyCLICK SBI Credit Card",
      features: ["10X rewards", "Amazon voucher benefit"],
      eligibility: {
        welcome_gifts: [
          "Amazon voucher worth ₹1000 on first spend",
          "Welcome bonus of 1500 reward points",
          "10X reward points on online shopping for first 6 months",
        ],
        travel: [
          "Travel insurance coverage up to ₹5 lakhs",
          "Hotel booking discounts at partner properties",
          "Airport lounge access 2 times per year",
        ],
        others: [
          "10X reward points on online shopping",
          "5X reward points on dining and groceries",
          "Annual fee waiver on spending ₹2 lakhs",
        ],
      },
    },
    {
      bank: "HDFC Bank",
      title: "Tata Neu Plus HDFC Credit Card",
      features: ["Extraordinary rewards", "Lounge access"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 1500 NeuCoins",
          "Complimentary Tata products worth ₹2000",
          "5% cashback on Tata app spends for first 3 months",
        ],
        travel: [
          "4 complimentary airport lounge accesses per year",
          "Travel insurance coverage up to ₹10 lakhs",
          "Tata travel booking discounts",
        ],
        others: [
          "5% cashback on Tata app and partner merchants",
          "1.5% cashback on all other spends",
          "Fuel surcharge waiver 1%",
        ],
      },
    },
    {
      bank: "HDFC Bank",
      title: "Swiggy HDFC Bank Credit Card",
      features: ["30% off on dining", "Bonus rewards"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 1000 Swiggy Super credits",
          "30% discount on Swiggy for first 3 months",
          "Complimentary Swiggy One membership for 3 months",
        ],
        travel: [
          "Travel insurance coverage up to ₹5 lakhs",
          "Hotel booking discounts",
          "Airport lounge access 2 times per year",
        ],
        others: [
          "10X reward points on Swiggy orders",
          "5X reward points on dining and groceries",
          "1% fuel surcharge waiver",
        ],
      },
    },
    {
      bank: "SBI",
      title: "SimplySAVE SBI Credit Card",
      features: ["Milestone benefits", "10X rewards"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 2000 reward points",
          "Complimentary shopping vouchers worth ₹1000",
          "10X reward points on groceries for first 6 months",
        ],
        travel: [
          "Travel insurance coverage up to ₹5 lakhs",
          "Railway lounge access 2 times per year",
          "Hotel booking discounts",
        ],
        others: [
          "10X reward points on groceries and dining",
          "5X reward points on movies and utilities",
          "Annual fee waiver on spending ₹1.5 lakhs",
        ],
      },
    },
    {
      bank: "RBL Bank",
      title: "RBL Bank Credit Card",
      features: ["Lifetime free cards", "Attractive cashback"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 500 reward points",
          "Complimentary shopping vouchers worth ₹750",
          "First year annual fee waiver",
        ],
        travel: [
          "Travel insurance coverage up to ₹5 lakhs",
          "Hotel booking discounts at partner properties",
          "Airport lounge access 1 time per year",
        ],
        others: [
          "Lifetime free option available",
          "5% cashback on selected categories",
          "2% cashback on all other spends",
        ],
      },
    },
    {
      bank: "SBI",
      title: "Cashback SBI Credit Card",
      features: ["Cashback on spends", "Fuel surcharge waiver"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 1000 reward points",
          "5% cashback on first 3 months of spends",
          "Complimentary fuel vouchers worth ₹500",
        ],
        travel: [
          "Travel insurance coverage up to ₹5 lakhs",
          "Railway lounge access 2 times per year",
          "Hotel booking discounts",
        ],
        others: [
          "5% cashback on selected categories",
          "1% cashback on all other spends",
          "Fuel surcharge waiver 1%",
        ],
      },
    },
    {
      bank: "SBI",
      title: "Miles SBI Credit Card",
      features: ["Travel perks", "Attractive benefits"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 2000 air miles",
          "Complimentary travel vouchers worth ₹1500",
          "2X air miles on first 6 months of spends",
        ],
        travel: [
          "4 complimentary airport lounge accesses per year",
          "Travel insurance coverage up to ₹10 lakhs",
          "Hotel and flight booking discounts up to 15%",
        ],
        others: [
          "2X air miles on all spends",
          "4X air miles on travel bookings",
          "Annual fee waiver on spending ₹3 lakhs",
        ],
      },
    },
    {
      bank: "SBI",
      title: "Reliance SBI Credit Card",
      features: ["Welcome benefits up to 3000", "Reward system"],
      eligibility: {
        welcome_gifts: [
          "Welcome benefits worth ₹3000",
          "Complimentary Reliance shopping vouchers",
          "5% cashback on Reliance products for first 3 months",
        ],
        travel: [
          "Travel insurance coverage up to ₹5 lakhs",
          "Airport lounge access 2 times per year",
          "Hotel booking discounts",
        ],
        others: [
          "5% cashback on Reliance products",
          "2% cashback on all other spends",
          "Fuel surcharge waiver 1%",
        ],
      },
    },
    {
      bank: "Axis Bank",
      title: "Axis Bank Credit Card",
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
      bank: "Kiwi",
      title: "Kiwi Lifetime Free Credit Card",
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
      bank: "HDFC Bank",
      title: "HDFC Bank Biz Credit Card",
      features: ["Discounts", "Travel perks"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 2000 reward points",
          "Complimentary business travel vouchers worth ₹2000",
          "5% cashback on business spends for first 3 months",
        ],
        travel: [
          "8 complimentary airport lounge accesses per year",
          "Travel insurance coverage up to ₹20 lakhs",
          "Hotel and flight booking discounts up to 25%",
        ],
        others: [
          "5% cashback on business expenses",
          "2% cashback on all other spends",
          "Fuel surcharge waiver 1%",
        ],
      },
    },
    // {
    //   bank: "YES Bank",
    //   title: "Zagg Credit Card",
    //   features: ["UPI enabled", "Cashback on UPI spends"],
    // },
    // {
    //   bank: "YES Bank",
    //   title: "PopClub Credit Card",
    //   features: ["UPI enabled", "Welcome benefits"],
    // },
    // {
    //   bank: "IDFC FIRST Bank",
    //   title: "IDFC First Mayura Credit Card",
    //   features: ["Welcome benefits", "10X reward points"],
    // },
    // {
    //   bank: "IDFC FIRST Bank",
    //   title: "IDFC First Ashva Credit Card",
    //   features: ["Welcome offers", "10X reward points"],
    // },
    {
      bank: "HDFC Bank",
      title: "Marriott Bonvoy HDFC Credit Card",
      features: ["Premium benefits", "Lounge access"],
    },
    // {
    //   bank: "RBL Bank",
    //   title: "IndianOil RBL Credit Card",
    //   features: ["Fuel benefits", "Welcome rewards"],
    // },
    // {
    //   bank: "IndusInd Bank",
    //   title: "IndusInd Tiger Credit Card",
    //   features: ["Reward points", "Lounge access"],
    // },
    {
      bank: "HDFC Bank",
      title: "HDFC Bank PIXEL Credit Card",
      features: ["1% unlimited cashback", "Up to 5% cashback"],
      eligibility: {
        welcome_gifts: [
          "Welcome bonus of 1000 reward points",
          "Complimentary digital vouchers worth ₹1000",
          "5% cashback on selected categories for first 3 months",
        ],
        travel: [
          "Travel insurance coverage up to ₹5 lakhs",
          "Hotel booking discounts",
          "Airport lounge access 2 times per year",
        ],
        others: [
          "1% unlimited cashback on all spends",
          "5% cashback on selected categories",
          "Fuel surcharge waiver 1%",
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
              <button className="btn-block-apply">{t.apply}</button>
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
              <div 
                style={{padding: '16px 0', cursor: 'pointer', color: activeTab === 'benefits' ? '#3b82f6' : '#64748b', borderBottom: activeTab === 'benefits' ? '2px solid #3b82f6' : '2px solid transparent', fontWeight: activeTab === 'benefits' ? '600' : 'normal'}}
                onClick={() => setActiveTab('benefits')}
              >
                {t.brandBenefits}
              </div>
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
               <button className="btn-block-apply" style={{marginTop: 0}}>{t.apply}</button>
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
