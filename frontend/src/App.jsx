import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreditCards from './pages/CreditCards';
import PersonalLoans from './pages/PersonalLoans';
import LanguageModal from './components/LanguageModal';

const AppContent = () => {
  const [showLangModal, setShowLangModal] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Top Banner indicating the domain/name */}
        <div className="top-nav">
          <div className="nav-brand">SP Financial services</div>
          <div className="lang-selector" onClick={() => setShowLangModal(true)}>
            {language === 'en' ? 'English' : 'Hindi'} 
            <span style={{fontSize: '0.7rem', marginLeft: '4px'}}>▼</span>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/personal-loans" element={<PersonalLoans />} />
        </Routes>

        {showLangModal && (
          <LanguageModal 
            currentLang={language} 
            onClose={() => setShowLangModal(false)}
            onSelect={(lang) => {
              setLanguage(lang);
              setShowLangModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
