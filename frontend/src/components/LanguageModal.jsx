import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageModal.css';

export default function LanguageModal({ currentLang, onClose, onSelect }) {
  const { t } = useLanguage();
  const [selectedLang, setSelectedLang] = useState(currentLang);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3 style={{ marginBottom: '20px' }}>{t.language}</h3>
        
        <div 
          className={`lang-option ${selectedLang === 'en' ? 'selected' : ''}`}
          onClick={() => setSelectedLang('en')}
        >
          <div className="radio-circle">
            {selectedLang === 'en' && <div className="radio-circle filled" />}
          </div>
          <span>English</span>
        </div>

        <div 
          className={`lang-option ${selectedLang === 'hi' ? 'selected' : ''}`}
          onClick={() => setSelectedLang('hi')}
        >
          <div className="radio-circle">
            {selectedLang === 'hi' && <div className="radio-circle filled" />}
          </div>
          <span>Hindi</span>
        </div>

        <button className="btn-block" onClick={() => onSelect(selectedLang)}>
          {t.continueBtn}
        </button>
      </div>
    </div>
  );
}
