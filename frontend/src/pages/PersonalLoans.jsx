import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Tag, Shield, Zap, ChevronDown, X, Users, Wallet, Subtitles, Building, Briefcase, Calendar, TrendingUp, Globe, Clock, Percent, CheckCircle, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import './PersonalLoans.css';

// Provider logo components
const ProviderLogos = {
  "MoneyView": () => (
    <div className="bank-logo moneyview-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '16px' }}>MV</span>
    </div>
  ),
  "KreditBee": () => (
    <div className="bank-logo kreditbee-logo">
      <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '15px' }}>KB</span>
    </div>
  ),
  "Kissht": () => (
    <div className="bank-logo kissht-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '16px' }}>KS</span>
    </div>
  ),
  "Prefr": () => (
    <div className="bank-logo prefr-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '17px' }}>PF</span>
    </div>
  ),
  "Olyv": () => (
    <div className="bank-logo olyv-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '18px' }}>OL</span>
    </div>
  ),
  "Zype": () => (
    <div className="bank-logo zype-logo">
      <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '16px' }}>ZP</span>
    </div>
  ),
  "NIRA": () => (
    <div className="bank-logo nira-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '18px' }}>NR</span>
    </div>
  ),
  "FatakPay": () => (
    <div className="bank-logo fatakpay-logo">
      <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '15px' }}>FP</span>
    </div>
  ),
  "InstaMoney": () => (
    <div className="bank-logo instamoney-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '15px' }}>IM</span>
    </div>
  ),
  "Unity SFB": () => (
    <div className="bank-logo unity-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '16px' }}>US</span>
    </div>
  ),
  "Poonawalla Fincorp": () => (
    <div className="bank-logo poonawalla-logo">
      <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '14px' }}>PF</span>
    </div>
  ),
  "LendingPlate": () => (
    <div className="bank-logo lendingplate-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '14px' }}>LP</span>
    </div>
  ),
  "FlexiLoans": () => (
    <div className="bank-logo flexiloans-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '15px' }}>FL</span>
    </div>
  ),
  "Aditya Birla Capital": () => (
    <div className="bank-logo adityabirla-logo">
      <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '13px' }}>AB</span>
    </div>
  ),
  "HDFC Bank": () => (
    <div className="bank-logo hdfc-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '16px' }}>HDFC</span>
    </div>
  ),
  "Ram Fincorp": () => (
    <div className="bank-logo ramfincorp-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '15px' }}>RF</span>
    </div>
  ),
  "Ring": () => (
    <div className="bank-logo ring-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '17px' }}>RG</span>
    </div>
  ),
  "CreditSea": () => (
    <div className="bank-logo creditsea-logo">
      <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '15px' }}>CS</span>
    </div>
  ),
  "Hero FinCorp": () => (
    <div className="bank-logo herofincorp-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '15px' }}>HF</span>
    </div>
  ),
  "Trillion": () => (
    <div className="bank-logo trillion-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '16px' }}>TL</span>
    </div>
  ),
  "Bajaj Finserv": () => (
    <div className="bank-logo bajaj-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '14px' }}>BF</span>
    </div>
  ),
  "ClickPe": () => (
    <div className="bank-logo clickpe-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '16px' }}>CP</span>
    </div>
  ),
  "cash247": () => (
    <div className="bank-logo cash247-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '15px' }}>C7</span>
    </div>
  ),
  "BharatPe": () => (
    <div className="bank-logo bharatpe-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '16px' }}>BP</span>
    </div>
  ),
  "RapidMoney": () => (
    <div className="bank-logo rapidmoney-logo">
      <span style={{ color: '#ffffff', fontWeight: '900', fontSize: '15px' }}>RM</span>
    </div>
  ),
  "default": (providerName) => (
    <div className="bank-logo default-logo">
      <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '14px' }}>{providerName.substring(0, 2).toUpperCase()}</span>
    </div>
  )
};

export default function PersonalLoans() {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const { t } = useLanguage();
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [activeTab, setActiveTab] = useState('eligibility');

  const loans = [
    {
      provider: "MoneyView",
      title: "MoneyView Personal Loan",
      loanAmount: "₹5,000 to ₹10 lakh",
      interestRate: "16% p.a",
      benefits: {
        online: ["100% Online", "Minimal documentation"],
        disbursal: ["24 Hour Disbursal", "Direct bank transfer in a few minutes"],
        interestRates: ["16% p.a"],
        others: [
          "Check eligibility in 2 Minutes!",
          "No hidden charges",
          "Collateral-free loans",
          "Easy EMI",
        ],
      },
    },
    {
      provider: "KreditBee",
      title: "KreditBee Personal Loan",
      loanAmount: "₹7,000 to ₹5 lakh",
      interestRate: "15% to 29.95% p.a",
      benefits: {
        online: ["100% Digital Process", "Paperless application"],
        disbursal: ["Instant approval", "Quick disbursal"],
        interestRates: ["15% to 29.95% p.a"],
        others: ["Flexible tenure", "No collateral required", "Minimal documentation"],
      },
    },
    {
      provider: "Kissht",
      title: "Kissht Personal Loan",
      loanAmount: "Up to ₹2 lakh (credit line)",
      interestRate: "14% to 20%",
      benefits: {
        online: ["Online application", "Instant approval"],
        disbursal: ["Quick funding", "Credit line facility"],
        interestRates: ["14% to 20%"],
        others: ["Revolving credit", "Flexible repayment", "No prepayment charges"],
      },
    },
    {
      provider: "Prefr",
      title: "Prefr Instant Personal Loan",
      loanAmount: "₹25,000 to ₹3 lakh",
      interestRate: "18% p.a onwards",
      benefits: {
        online: ["Instant approval", "Digital process"],
        disbursal: ["Same day disbursal", "Direct bank transfer"],
        interestRates: ["18% p.a onwards"],
        others: ["Quick verification", "Minimal paperwork", "Flexible EMI options"],
      },
    },
    {
      provider: "Olyv",
      title: "Olyv Personal Loan",
      loanAmount: "₹4,000 to ₹1 lakh",
      interestRate: "20% to 36% p.a",
      benefits: {
        online: ["Simple online process", "Quick approval"],
        disbursal: ["Fast disbursal", "Instant transfer"],
        interestRates: ["20% to 36% p.a"],
        others: ["No hidden fees", "Transparent terms", "Easy repayment"],
      },
    },
    {
      provider: "Zype",
      title: "Zype Personal Loan",
      loanAmount: "Up to ₹25 lakh",
      interestRate: "18% to 39%",
      benefits: {
        online: ["100% online", "AI-driven approval"],
        disbursal: ["Quick disbursal", "Same day funding"],
        interestRates: ["18% to 39%"],
        others: ["High loan amount", "Flexible tenure", "No collateral"],
      },
    },
    {
      provider: "NIRA",
      title: "NIRA Finance Loan",
      loanAmount: "₹5,000 to ₹1 lakh",
      interestRate: "24% to 36% p.a",
      benefits: {
        online: ["Simple online application", "Instant verification"],
        disbursal: ["Quick disbursal", "Bank transfer"],
        interestRates: ["24% to 36% p.a"],
        others: ["No collateral", "Flexible repayment", "Transparent fees"],
      },
    },
    {
      provider: "FatakPay",
      title: "FatakPay Loan",
      loanAmount: "Up to ₹2 lakh",
      interestRate: "24% to 60% p.a",
      benefits: {
        online: ["Digital process", "Easy application"],
        disbursal: ["Fast funding", "Quick approval"],
        interestRates: ["24% to 60% p.a"],
        others: ["Instant decision", "Minimal documentation", "No prepayment penalty"],
      },
    },
    {
      provider: "InstaMoney",
      title: "InstaMoney Loan",
      loanAmount: "Up to ₹50,000",
      interestRate: "From 24% p.a",
      benefits: {
        online: ["Online application", "Quick process"],
        disbursal: ["Instant disbursal", "Fast transfer"],
        interestRates: ["From 24% p.a"],
        others: ["Small loan amount", "Easy approval", "No collateral"],
      },
    },
    {
      provider: "Unity SFB",
      title: "Unity Personal Loan",
      loanAmount: "Up to ₹25 lakh",
      interestRate: "Starting from 18% p.a",
      benefits: {
        online: ["Digital application", "Online verification"],
        disbursal: ["Quick disbursal", "Bank funding"],
        interestRates: ["Starting from 18% p.a"],
        others: ["High loan amount", "Flexible tenure", "Bank-backed loan"],
      },
    },
    {
      provider: "Poonawalla Fincorp",
      title: "Poonawalla Instant Personal Loan",
      loanAmount: "Up to ₹25 lakh",
      tenure: "1 to 36 months",
      benefits: {
        online: ["Online process", "Quick approval"],
        disbursal: ["Instant disbursal", "Same day funding"],
        tenure: ["1 to 36 months"],
        others: ["High loan amount", "Flexible repayment", "No hidden charges"],
      },
    },
    {
      provider: "LendingPlate",
      title: "LendingPlate Loan",
      loanAmount: "Up to ₹2 lakh",
      interestRate: "Starting from 12% p.a",
      benefits: {
        online: ["Online application", "Quick process"],
        disbursal: ["Fast disbursal", "Direct transfer"],
        interestRates: ["Starting from 12% p.a"],
        others: ["Low interest rates", "Flexible terms", "No collateral"],
      },
    },
    {
      provider: "FlexiLoans",
      title: "FlexiLoans",
      loanAmount: "Up to ₹20 lakh",
      interestRate: "Starting from 12% p.a",
      benefits: {
        online: ["Digital process", "Easy application"],
        disbursal: ["Quick funding", "Fast approval"],
        interestRates: ["Starting from 12% p.a"],
        others: ["High loan amount", "Flexible repayment", "Business loans"],
      },
    },
    {
      provider: "Aditya Birla Capital",
      title: "Aditya Birla Digital Personal Loan",
      loanAmount: "₹50,000 to ₹5 lakh",
      interestRate: "Starting from 10.99% p.a",
      benefits: {
        online: ["Digital process", "Online approval"],
        disbursal: ["Quick disbursal", "Same day funding"],
        interestRates: ["Starting from 10.99% p.a"],
        others: ["Competitive rates", "Trusted brand", "Flexible tenure"],
      },
    },
    {
      provider: "HDFC Bank",
      title: "HDFC Insta Loan",
      loanAmount: "₹25,000 to ₹10 lakh",
      tenure: "12 to 60 months",
      benefits: {
        online: ["Online application", "Instant approval"],
        disbursal: ["Quick disbursal", "Bank transfer"],
        tenure: ["12 to 60 months"],
        others: ["Bank loan", "Trusted lender", "Flexible EMI"],
      },
    },
    {
      provider: "HDFC Bank",
      title: "HDFC Smart EMI",
      loanAmount: "From ₹25,000",
      tenure: "6 to 48 months",
      benefits: {
        online: ["Digital process", "Online conversion"],
        disbursal: ["Instant EMI", "Quick setup"],
        tenure: ["6 to 48 months"],
        others: ["Smart EMI option", "Bank-backed", "Flexible repayment"],
      },
    },
    {
      provider: "Ram Fincorp",
      title: "Ram Fincorp Personal Loan",
      loanAmount: "₹1,000 to ₹1 lakh",
      interestRate: "Starting from 0.4% per day",
      benefits: {
        online: ["Online process", "Quick application"],
        disbursal: ["Fast disbursal", "Instant transfer"],
        interestRates: ["Starting from 0.4% per day"],
        others: ["Small loan amount", "Daily rate", "Quick approval"],
      },
    },
    {
      provider: "Ring",
      title: "Ring Power Loan",
      loanAmount: "₹20,000 to ₹5 lakh",
      interestRate: "18% to 33% p.a",
      benefits: {
        online: ["Digital application", "Quick process"],
        disbursal: ["Fast funding", "Quick approval"],
        interestRates: ["18% to 33% p.a"],
        others: ["Power loan", "Flexible terms", "No collateral"],
      },
    },
    {
      provider: "CreditSea",
      title: "CreditSea Personal Loan",
      loanAmount: "₹20,000 to ₹5 lakh",
      interestRate: "28% to 32%",
      benefits: {
        online: ["Online application", "Digital process"],
        disbursal: ["Quick disbursal", "Fast funding"],
        interestRates: ["28% to 32%"],
        others: ["Fixed rates", "Flexible tenure", "No prepayment charges"],
      },
    },
    {
      provider: "Hero FinCorp",
      title: "Hero FinCorp Personal Loan",
      loanAmount: "₹50,000 to ₹5 lakh",
      tenure: "12 to 36 months",
      benefits: {
        online: ["Online process", "Quick approval"],
        disbursal: ["Fast disbursal", "Same day funding"],
        tenure: ["12 to 36 months"],
        others: ["Trusted brand", "Flexible EMI", "No hidden fees"],
      },
    },
    {
      provider: "Trillion",
      title: "Trillion Personal Loan",
      loanAmount: "₹20,000 to ₹5 lakh",
      tenure: "6 to 24 months",
      benefits: {
        online: ["Digital application", "Quick process"],
        disbursal: ["Fast funding", "Quick approval"],
        tenure: ["6 to 24 months"],
        others: ["Short tenure", "Flexible terms", "No collateral"],
      },
    },
    {
      provider: "Bajaj Finserv",
      title: "Bajaj Finserv Personal Loan",
      loanAmount: "₹50,000 to ₹35 lakh",
      interestRate: "16.25% to 24.90% p.a",
      benefits: {
        online: ["Online application", "Instant approval"],
        disbursal: ["Quick disbursal", "Same day funding"],
        interestRates: ["16.25% to 24.90% p.a"],
        others: ["High loan amount", "Trusted brand", "Flexible EMI"],
      },
    },
    {
      provider: "ClickPe",
      title: "ClickPe Business Loan",
      loanAmount: "₹50,000 to ₹3 lakh",
      interestRate: "Up to 28% p.a",
      benefits: {
        online: ["Digital process", "Quick application"],
        disbursal: ["Fast funding", "Business loan"],
        interestRates: ["Up to 28% p.a"],
        others: ["Business focused", "Flexible terms", "Quick approval"],
      },
    },
    {
      provider: "cash247",
      title: "cash247 Personal Loan",
      loanAmount: "₹2,000 to ₹75,000",
      interestRate: "Starting from 0.5%",
      benefits: {
        online: ["Online process", "Quick application"],
        disbursal: ["Fast disbursal", "Instant transfer"],
        interestRates: ["Starting from 0.5%"],
        others: ["Small loan amount", "Low rates", "Quick approval"],
      },
    },
    {
      provider: "BharatPe",
      title: "BharatPe Credit Line on UPI",
      features: ["45-day interest-free period"],
      benefits: {
        online: ["UPI based", "Digital process"],
        disbursal: ["Instant credit", "UPI integration"],
        features: ["45-day interest-free period"],
        others: ["Credit line", "UPI enabled", "No collateral"],
      },
    },
    {
      provider: "RapidMoney",
      title: "RapidMoney Loan",
      loanAmount: "₹5,000 to ₹15,000",
      interestRate: "3.5%",
      benefits: {
        online: ["Online application", "Quick process"],
        disbursal: ["Fast disbursal", "Instant transfer"],
        interestRates: ["3.5%"],
        others: ["Small loan amount", "Low interest", "Quick approval"],
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
    if (selectedLoan) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedLoan]);

  const openDetails = (loanName) => {
    setSelectedLoan(loanName);
    setActiveTab('eligibility');
  };

  return (
    <div style={{ backgroundColor: '#f5f7fb', minHeight: '100vh', paddingBottom: '40px' }}>
      <div className="sub-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ChevronLeft size={24} />
        </button>
        {t.personalLoans}
      </div>

      <div className="section" ref={listRef}>
        {loans.map((loan, index) => (
          <div key={index} className="list-card">
            <div className="bank-header">
              {ProviderLogos[loan.provider] ? ProviderLogos[loan.provider]() : ProviderLogos.default(loan.provider)}
            </div>
            <div className="card-body">
              <h3 className="card-title">{loan.title}</h3>
              <div className="card-feature">
                <TrendingUp size={18} color="#94a3b8" /> {loan.loanAmount}
              </div>
              {loan.interestRate && (
                <div className="card-feature">
                  <Tag size={18} color="#94a3b8" /> {loan.interestRate}
                </div>
              )}
              {loan.tenure && (
                <div className="card-feature">
                  <Calendar size={18} color="#94a3b8" /> {loan.tenure}
                </div>
              )}
              {loan.features && loan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="card-feature">
                  <Shield size={18} color="#94a3b8" /> {feature}
                </div>
              ))}
              <div className="view-benefits" onClick={() => openDetails(loan.title)}>
                <div style={{background: '#0f172a', borderRadius:'50%', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <ChevronDown size={14} color="#fff" />
                </div>
                {t.viewDetails}
              </div>
              <button className="btn-block-apply">{t.apply}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedLoan && (
        <div className="modal-overlay" onClick={() => setSelectedLoan(null)} style={{alignItems: 'flex-end', padding: 0}}>
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
              <h3 style={{fontSize: '1.05rem'}}>{selectedLoan}</h3>
              <button onClick={() => setSelectedLoan(null)}><X size={20} color="#64748b" /></button>
            </div>

            {/* Modal Tabs */}
            <div style={{display: 'flex', padding: '0 24px', borderBottom: '1px solid #e2e8f0', gap: '24px'}}>
              <div 
                style={{padding: '16px 0', cursor: 'pointer', color: activeTab === 'eligibility' ? '#3b82f6' : '#64748b', borderBottom: activeTab === 'eligibility' ? '2px solid #3b82f6' : '2px solid transparent', fontWeight: activeTab === 'eligibility' ? '600' : 'normal'}}
                onClick={() => setActiveTab('eligibility')}
              >
                {t.eligibilityCriteria}
              </div>
              <div 
                style={{padding: '16px 0', cursor: 'pointer', color: activeTab === 'benefits' ? '#3b82f6' : '#64748b', borderBottom: activeTab === 'benefits' ? '2px solid #3b82f6' : '2px solid transparent', fontWeight: activeTab === 'benefits' ? '600' : 'normal'}}
                onClick={() => setActiveTab('benefits')}
              >
                {t.brandBenefits}
              </div>
            </div>

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
                      <div style={{fontSize: '0.85rem', color: '#334155', lineHeight: '1.4'}}>{t.ageRangePersonal}</div>
                    </div>
                  </div>

                  {/* Income Range */}
                  <div style={{background: '#f8fafc', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px'}}>
                    <Wallet size={24} color="#10b981" />
                    <div>
                      <div style={{fontSize: '0.8rem', color: '#64748b', fontWeight: '600'}}>{t.incomeRangePersonal}</div>
                      <div style={{fontSize: '0.85rem', color: '#334155', lineHeight: '1.4'}}>{t.incomeValPersonal}</div>
                    </div>
                  </div>

                  {/* Documents Required */}
                  <div style={{fontWeight: '600', marginBottom: '12px', fontSize: '0.9rem', color: '#1e293b'}}>{t.documentsRequired}</div>
                  
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px'}}>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.identityProof}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.identityProofDesc}
                      </div>
                    </div>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.addressProof}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.addressProofDesc}
                      </div>
                    </div>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.incomeProofPersonal}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.incomeProofDescSalaried}
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
                      <div style={{fontSize: '0.85rem', color: '#334155', lineHeight: '1.4'}}>{t.ageRangePersonal}</div>
                    </div>
                  </div>

                  {/* Income Range */}
                  <div style={{background: '#f8fafc', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px'}}>
                    <Wallet size={24} color="#10b981" />
                    <div>
                      <div style={{fontSize: '0.8rem', color: '#64748b', fontWeight: '600'}}>{t.incomeRangePersonal}</div>
                      <div style={{fontSize: '0.85rem', color: '#334155', lineHeight: '1.4'}}>{t.incomeValPersonal}</div>
                    </div>
                  </div>

                  {/* Documents Required */}
                  <div style={{fontWeight: '600', marginBottom: '12px', fontSize: '0.9rem', color: '#1e293b'}}>{t.documentsRequired}</div>
                  
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px'}}>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.identityProof}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.identityProofDesc}
                      </div>
                    </div>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.addressProof}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.addressProofDesc}
                      </div>
                    </div>
                    <div style={{border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px'}}>
                      <div style={{fontWeight: '600', fontSize: '0.85rem', marginBottom: '8px', color: '#1e293b'}}>{t.incomeProofPersonal}</div>
                      <div style={{fontSize: '0.75rem', color: '#64748b', lineHeight: '1.4'}}>
                        {t.incomeProofDescSelf}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Modal Content - Benefits */}
            {activeTab === 'benefits' && (
              <div style={{padding: '24px', maxHeight: '60vh', overflowY: 'auto'}}>
                {(() => {
                  const currentLoan = loans.find(loan => loan.title === selectedLoan);
                  if (!currentLoan || !currentLoan.benefits) {
                    return (
                      <div style={{textAlign: 'center', color: '#64748b'}}>
                        Benefits information will appear here!
                      </div>
                    );
                  }
                  
                  const { benefits } = currentLoan;
                  
                  return (
                    <>
                      {/* Online Section */}
                      {benefits.online && benefits.online.length > 0 && (
                        <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '12px', fontSize: '1.05rem', color: '#0f172a'}}>
                            <Globe size={18} color="#3b82f6" /> {t.online}
                          </div>
                          {benefits.online.map((item, index) => (
                            <div key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', lineHeight: '2', color: '#64748b'}}>
                              <CheckCircle size={14} color="#10b981" /> {item}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Disbursal Section */}
                      {benefits.disbursal && benefits.disbursal.length > 0 && (
                        <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '12px', fontSize: '1.05rem', color: '#0f172a'}}>
                            <Clock size={18} color="#3b82f6" /> {t.disbursal}
                          </div>
                          {benefits.disbursal.map((item, index) => (
                            <div key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', lineHeight: '2', color: '#64748b'}}>
                              <CheckCircle size={14} color="#10b981" /> {item}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Interest Rates Section */}
                      {benefits.interestRates && benefits.interestRates.length > 0 && (
                        <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '12px', fontSize: '1.05rem', color: '#0f172a'}}>
                            <Percent size={18} color="#3b82f6" /> {t.interestRates}
                          </div>
                          {benefits.interestRates.map((item, index) => (
                            <div key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', lineHeight: '2', color: '#64748b'}}>
                              <CheckCircle size={14} color="#10b981" /> {item}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tenure Section */}
                      {benefits.tenure && benefits.tenure.length > 0 && (
                        <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '12px', fontSize: '1.05rem', color: '#0f172a'}}>
                            <Calendar size={18} color="#3b82f6" /> {t.tenure}
                          </div>
                          {benefits.tenure.map((item, index) => (
                            <div key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', lineHeight: '2', color: '#64748b'}}>
                              <CheckCircle size={14} color="#10b981" /> {item}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Features Section */}
                      {benefits.features && benefits.features.length > 0 && (
                        <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '12px', fontSize: '1.05rem', color: '#0f172a'}}>
                            <Star size={18} color="#3b82f6" /> {t.features}
                          </div>
                          {benefits.features.map((item, index) => (
                            <div key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', lineHeight: '2', color: '#64748b'}}>
                              <CheckCircle size={14} color="#10b981" /> {item}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Others Section */}
                      {benefits.others && benefits.others.length > 0 && (
                        <div style={{marginBottom: '8px'}}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', marginBottom: '12px', fontSize: '1.05rem', color: '#0f172a'}}>
                            <Shield size={18} color="#3b82f6" /> {t.others}
                          </div>
                          {benefits.others.map((item, index) => (
                            <div key={index} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', lineHeight: '2', color: '#64748b'}}>
                              <CheckCircle size={14} color="#10b981" /> {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
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
