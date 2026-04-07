import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhoneCall, X, Building, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './gettouch.css';

function GetTouch() {
    const { t } = useLanguage();
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
        // Prevent body scroll when popup is open
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setShowPopup(false);
        // Restore body scroll
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            {/* Sticky CTA Bottom Bar */}
            <div className="sticky-cta">
                <span className="cta-text">{t.needAdvice}</span>
                <button className="btn-primary" onClick={openPopup}>
                    <PhoneCall size={18} />
                    {t.getInTouch}
                </button>
            </div>

            {/* Contact Popup */}
            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        {/* Popup Header */}
                        <div className="popup-header">
                            <div className="popup-title">
                                <Building size={24} />
                                <h3>Contact Information</h3>
                            </div>
                            <button className="popup-close" onClick={closePopup}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Company Info */}
                        <div className="company-info">
                            <div className="company-name">
                                <Building size={20} />
                                <span>Secure Points Consultancy</span>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Phone size={20} />
                                </div>
                                <div className="contact-details">
                                    <div className="contact-label">Phone Number</div>
                                    <div className="contact-value">+91 87995 27389</div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Mail size={20} />
                                </div>
                                <div className="contact-details">
                                    <div className="contact-label">Email Address</div>
                                    <div className="contact-value">piyushahir2905@gmail.com</div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="popup-actions">
                            <button className="btn-call" onClick={() => window.open('tel:+918799527389')}>
                                <Phone size={18} />
                                Call Now
                            </button>
                            <button className="btn-email" onClick={() => window.open('mailto:piyushahir2905@gmail.com')}>
                                <Mail size={18} />
                                Send Email
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default GetTouch;
