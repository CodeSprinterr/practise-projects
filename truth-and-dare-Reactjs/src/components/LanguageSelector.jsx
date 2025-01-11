import React from 'react';
import { LANGUAGES, TRANSLATIONS } from '../constants/languages';
import styles from '../styles/LanguageSelector.module.css';

function LanguageSelector({ currentLanguage, onLanguageChange }) {
  const translations = TRANSLATIONS[currentLanguage];

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="language-select">
        {translations.selectLanguage}:
      </label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className={styles.select}
      >
        {Object.values(LANGUAGES).map((lang) => (
          <option key={lang} value={lang}>
            {translations.languages[lang]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;