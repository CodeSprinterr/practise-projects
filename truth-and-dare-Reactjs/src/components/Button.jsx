import React from 'react';
import styles from '../styles/Button.module.css';

function Button({ onClick, className, children }) {
  return (
    <button 
      className={styles[className]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;