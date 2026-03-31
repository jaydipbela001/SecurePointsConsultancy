import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Tag, Shield, Zap, ChevronDown, X, Users, Wallet, Subtitles, Building, Briefcase, Calendar, TrendingUp, Globe, Clock, Percent, CheckCircle, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import './PersonalLoans.css';

// Import provider logo images
import dmiLogo from '../assets/img/personalLoan/dmi.png';
import fiLogo from '../assets/img/personalLoan/fi.png';
import heroLogo from '../assets/img/personalLoan/hero.png';
import inCreadLogo from '../assets/img/personalLoan/inCread.png';
import poonawallLogo from '../assets/img/personalLoan/poonawall.png';
import prefrLogo from '../assets/img/personalLoan/prefr.png';
import sibLogo from '../assets/img/personalLoan/sib.png';
import unityLogo from '../assets/img/personalLoan/unity.png';

// Provider logo components with PNG images
const ProviderLogos = {
  "DMI Finance": () => (
    <img src={dmiLogo} alt="DMI Finance" className="bank-logo-img" />
  ),
  "Fi": () => (
    <img src={fiLogo} alt="Fi" className="bank-logo-img" />
  ),
  "Hero FinCorp": () => (
    <img src={heroLogo} alt="Hero FinCorp" className="bank-logo-img" />
  ),
  "inCred": () => (
    <img src={inCreadLogo} alt="inCred" className="bank-logo-img" />
  ),
  "Poonawalla Fincorp": () => (
    <img src={poonawallLogo} alt="Poonawalla Fincorp" className="bank-logo-img" />
  ),
  "Prefr": () => (
    <img src={prefrLogo} alt="Prefr" className="bank-logo-img" />
  ),
  "SIB": () => (
    <img src={sibLogo} alt="SIB" className="bank-logo-img" />
  ),
  "Unity SFB": () => (
    <img src={unityLogo} alt="Unity SFB" className="bank-logo-img" />
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
      provider: "Poonawalla Fincorp",
      title: "Poonawalla Fincorp Personal Loan",
      loanAmount: "₹50,000 to ₹10 lakh",
      interestRate: "12% to 36% p.a",
      applyLink: "https://poonawalla.mymoneymantra.com/?sms=false&btb=true&utm_source=pnwpl&utm_medium=mmm&utm_campaign=pnwpl-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      benefits: {
        online: ["100% Digital Process", "Paperless application"],
        disbursal: ["24 Hour Disbursal", "Quick bank transfer"],
        interestRates: ["12% to 36% p.a"],
        others: [
          "Flexible tenure options",
          "No prepayment charges",
          "Minimal documentation",
          "Trusted financial services",
        ],
      },
    },

    {
      provider: "Prefr",
      title: "Prefr Instant Personal Loan",
      loanAmount: "₹25,000 to ₹3 lakh",
      interestRate: "18% p.a onwards",
      applyLink: "https://prefr.mymoneymantra.com/?sms=false&btb=true&utm_source=prefr&utm_medium=mmm&utm_campaign=prefr-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      benefits: {
        online: ["Instant approval", "Digital process"],
        disbursal: ["Same day disbursal", "Direct bank transfer"],
        interestRates: ["18% p.a onwards"],
        others: [
          "Quick verification",
          "Minimal paperwork",
          "Flexible EMI options",
          "No hidden fees",
        ],
      },
    },
    {
      provider: "Hero FinCorp",
      title: "Hero FinCorp Personal Loan",
      loanAmount: "₹50,000 to ₹5 lakh",
      interestRate: "12% to 28% p.a",
      applyLink: "https://herofin.mymoneymantra.com/?sms=false&btb=true&utm_source=heropl&utm_medium=mmm&utm_campaign=heropl-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      benefits: {
        online: ["100% Online Application", "Digital verification"],
        disbursal: ["Same Day Disbursal", "Quick bank transfer"],
        interestRates: ["12% to 28% p.a"],
        others: [
          "Flexible tenure up to 5 years",
          "No prepayment charges",
          "Minimal documentation",
          "Trusted brand",
        ],
      },
    },
    {
      provider: "DMI Finance",
      title: "DMI Finance Personal Loan",
      loanAmount: "₹1 lakh to ₹10 lakh",
      interestRate: "12% to 24% p.a",
      applyLink: "https://dmi.mymoneymantra.com/?sms=false&btb=true&utm_source=dmipl&utm_medium=mmm&utm_campaign=dmipl-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      benefits: {
        online: ["100% Online Process", "Quick approval"],
        disbursal: ["24-48 Hour Disbursal", "Direct bank transfer"],
        interestRates: ["12% to 24% p.a"],
        others: [
          "Flexible tenure options",
          "No hidden charges",
          "Collateral-free loans",
          "Minimal documentation",
        ],
      },
    },
    {
      provider: "Unity SFB",
      title: "Unity Small Finance Bank Personal Loan",
      loanAmount: "₹50,000 to ₹10 lakh",
      interestRate: "12% to 24% p.a",
      applyLink: "https://unitypl.mymoneymantra.com?btb=true&sms=true&utm_source=unitypl&utm_medium=mmm&utm_campaign=unitypl-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      benefits: {
        online: ["100% Online Process", "Digital verification"],
        disbursal: ["Quick Disbursal", "Direct bank transfer"],
        interestRates: ["12% to 24% p.a"],
        others: [
          "Flexible tenure options",
          "No prepayment charges",
          "Minimal documentation",
          "Bank-backed security",
        ],
      },
    },
    {
      provider: "Fi",
      title: "Fi Personal Loan",
      loanAmount: "₹5,000 to ₹5 lakh",
      interestRate: "18% to 30% p.a",
      applyLink: "https://fimoney.mymoneymantra.com/?sms=false&btb=true&utm_source=fimnpl&utm_medium=mmm&utm_campaign=fimnpl-mmm-966435&pid=NDg2NjFhZjAtYzRmOC0xMWYwLTk2MmMtZjk0ZGFlMTQ1MDI2",
      benefits: {
        online: ["Digital-first approach", "Paperless process"],
        disbursal: ["Instant approval", "Quick disbursal"],
        interestRates: ["18% to 30% p.a"],
        others: [
          "Flexible repayment options",
          "No collateral required",
          "Transparent fees",
          "Mobile app management",
        ],
      },
    },
    {
      provider: "SIB",
      title: "SIB Personal Loan",
      loanAmount: "₹1 lakh to ₹15 lakh",
      interestRate: "11% to 20% p.a",
      applyLink: "#",
      benefits: {
        online: ["Online application", "Quick processing"],
        disbursal: ["Fast disbursal", "Bank transfer"],
        interestRates: ["11% to 20% p.a"],
        others: [
          "Competitive interest rates",
          "Flexible repayment tenure",
          "No collateral required",
          "Simple documentation",
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
              <button 
                className="btn-block-apply"
                onClick={() => window.open(loan.applyLink, '_blank')}
              >
                {t.apply}
              </button>
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
               <button 
                 className="btn-block-apply" 
                 style={{marginTop: 0}}
                 onClick={() => {
                   const currentLoan = loans.find(loan => loan.title === selectedLoan);
                   if (currentLoan && currentLoan.applyLink !== '#') {
                     window.open(currentLoan.applyLink, '_blank');
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
