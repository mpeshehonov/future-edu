import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuizPage from './pages/QuizPage';

const QuizApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <QuizPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default QuizApp;
