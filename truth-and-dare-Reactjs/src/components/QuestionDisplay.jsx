import React from 'react';
import { TRANSLATIONS } from '../constants/languages';
import styles from '../styles/QuestionDisplay.module.css';

function QuestionDisplay({ type, question, language }) {
  const translations = TRANSLATIONS[language];
  
  return (
    <div className={styles.container}>
      <div className={styles.selectedType}>
        {type === 'truth' ? translations.truth : translations.dare}
      </div>
      <div className={styles.questionText}>
        {question}
      </div>
    </div>
  );
}

export default QuestionDisplay;