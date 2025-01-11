import { useState, useEffect } from 'react';
import { questions } from './constants/questions';
import { LANGUAGES, TRANSLATIONS } from './constants/languages';
import Button from './components/Button';
import QuestionDisplay from './components/QuestionDisplay';
import LanguageSelector from './components/LanguageSelector';
import useQuestionManager from './hooks/useQuestionManager';
import styles from './styles/App.module.css';

function App() {
  const [language, setLanguage] = useState(LANGUAGES.ENGLISH);
  const [selectedType, setSelectedType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const { getRandomQuestion } = useQuestionManager();

  const translations = TRANSLATIONS[language];

  const handleChoice = (type) => {
    setSelectedType(type);
    const currentQuestions = questions[language][type];
    setCurrentQuestion(getRandomQuestion(currentQuestions));
  };

  const handleNext = () => {
    if (selectedType) {
      const currentQuestions = questions[language][selectedType];
      setCurrentQuestion(getRandomQuestion(currentQuestions));
    }
  };

  useEffect(() => {
    if (selectedType) {
      const currentQuestions = questions[language][selectedType];
      setCurrentQuestion(getRandomQuestion(currentQuestions));
    }
  }, [language]);

  return (
    <div className={styles.container}>
      <div className={styles.gameContainer}>
        <LanguageSelector 
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
        
        <h1 className={styles.title}>{translations.title}</h1>
        
        <div className={styles.buttonContainer}>
          <Button 
            className="truthBtn"
            onClick={() => handleChoice('truth')}
          >
            {translations.truth}
          </Button>
          <Button 
            className="dareBtn"
            onClick={() => handleChoice('dare')}
          >
            {translations.dare}
          </Button>
        </div>

        {selectedType && (
          <>
            <QuestionDisplay 
              type={selectedType}
              question={currentQuestion}
              language={language}
            />
            <Button 
              className="nextBtn"
              onClick={handleNext}
            >
              {translations.next}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;