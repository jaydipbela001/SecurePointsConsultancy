import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Mail, Building2, BadgeCheck, Phone, MapPin, Calendar, User, Award, MessageCircle, Users } from 'lucide-react';
import { gsap } from 'gsap';
import logo from '../assets/img/logo.png';
import './Profile.css';

export default function Profile() {
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline();
    tl.fromTo(
      '.profile-hero',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    ).fromTo(
      '.profile-avatar-wrapper',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.3"
    ).fromTo(
      '.hero-content h1, .hero-content .profile-role, .hero-content .profile-company',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    ).fromTo(
      '.stat-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power3.out" },
      "-=0.2"
    ).fromTo(
      '.info-card',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  return (
    <div className="profile-page">
      {/* Decorative floating shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      {/* Hero Section with Purple Gradient */}
      <div className="profile-hero">
        <div className="profile-header">
          <button onClick={() => navigate(-1)} className="back-button">
            <ChevronLeft size={24} />
          </button>
          <span className="header-title">Profile</span>
          <div style={{ width: 44 }}></div>
        </div>

        <div className="hero-content">
          {/* <div className="hero-badge">
            <Award size={16} />
            <span>Verified Financial Advisor</span>
          </div> */}

          <div className="profile-card-main">
            <div className="profile-avatar-wrapper">
              <div className="avatar-ring">
                <div className="avatar-ring-inner"></div>
              </div>
              <img
                src={logo}
                alt="Dinesh Kumar"
                className="profile-avatar"
              />
              <div className="avatar-badge">
                <BadgeCheck size={20} />
              </div>
            </div>

            <h1 className="profile-name">Secure Points Consultancy</h1>
            <p className="profile-role">Senior Financial Consultant</p>
            <p className="profile-company">Secure Points Consultancy</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-content" ref={profileRef}>
        {/* About Card */}
        <div className="info-card">
          <div className="card-header">
            <div className="card-icon">
              <User size={22} />
            </div>
            <h3 className="card-title">About Me</h3>
          </div>
          <p className="bio-text">
           I am financial advisor for loans and other financial products. I help people get best offers for loans and other financial products.
          </p>
        </div>

        {/* Contact Information */}
        <div className="info-card">
          <div className="card-header">
            <div className="card-icon">
              <Mail size={22} />
            </div>
            <h3 className="card-title">Contact Information</h3>
          </div>

          <div className="info-list">
            <div className="info-item">
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div className="info-details">
                <div className="info-label">Email Address</div>
                <div className="info-value">borichadinesh32@gmail.com</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Phone size={20} />
              </div>
              <div className="info-details">
                <div className="info-label">Phone Number</div>
                <div className="info-value">+91 87995 27389</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Building2 size={20} />
              </div>
              <div className="info-details">
                <div className="info-label">Company Name</div>
                <div className="info-value">Secure Points Consultancy</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div className="info-details">
                <div className="info-label">Location</div>
                <div className="info-value">Surat, India</div>
              </div>
            </div>

            {/* <div className="info-item">
              <div className="info-icon">
                <Calendar size={20} />
              </div>
              <div className="info-details">
                <div className="info-label">Member Since</div>
                <div className="info-value">January 2016</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Certificate Button */}
        {/* <div className="certificate-section">
          <button className="certificate-button">
            <div className="certificate-content">
              <div className="certificate-icon">
                <Award size={22} />
              </div>
              <span>View Financial Advisor Certificate</span>
            </div>
            <ChevronRight size={20} />
          </button>
        </div> */}

        {/* Action Buttons */}
        <div className="action-buttons">
          {/* <button className="action-btn action-btn-primary">
            <MessageCircle size={20} />
            <span>Get in Touch</span>
          </button> */}
          {/* <button className="action-btn action-btn-secondary">
            <Users size={20} />
            <span>View Services</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}