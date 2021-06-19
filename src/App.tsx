import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageLayout from './shared/components/PageLayout';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import QuizPage from './pages/QuizPage';

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={CoursesPage} />
          <Route exact path="/:id" component={CoursePage} />
          <Route exact path="/:id/quiz" component={QuizPage} />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default App;
