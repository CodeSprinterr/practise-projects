import { useState } from 'react';

function useQuestionManager() {
  const [usedQuestions, setUsedQuestions] = useState(new Set());

  const getRandomQuestion = (questions) => {
    const availableQuestions = questions.filter(q => !usedQuestions.has(q));
    
    if (availableQuestions.length === 0) {
      setUsedQuestions(new Set());
      return questions[Math.floor(Math.random() * questions.length)];
    }

    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    setUsedQuestions(prev => new Set([...prev, randomQuestion]));
    return randomQuestion;
  };

  return { getRandomQuestion };
}

export default useQuestionManager;