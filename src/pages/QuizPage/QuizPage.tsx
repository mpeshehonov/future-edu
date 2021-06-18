import React from 'react';
import './styles.scss';
import Quiz from 'react-quiz-component';

import {quizData} from './quizData';

const QuizPage = () => {
  return (
    <div className={'page-content'}>
      <h2>Тестирование</h2>
      <Quiz quiz={quizData} />
    </div>
  );
};

export default QuizPage;
