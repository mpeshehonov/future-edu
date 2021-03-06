import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PageLayout from './shared/components/PageLayout';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import InfoPage from './pages/InfoPage';
import QuizPage from './pages/QuizPage';
import ComicsPage from './pages/ComicsPage';
import TrainerPage from './pages/TrainerPage';
import ChatPage from './pages/ChatPage';
import DndPage from './pages/DndPage';
import FirePuzzlePage from './pages/FirePuzzlePage';

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/courses" />
          </Route>
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/courses/puzzle" component={DndPage} />
          <Route exact path="/courses/:id" component={CoursePage} />
          <Route exact path="/courses/:id/info" component={InfoPage} />
          <Route exact path="/courses/:id/quiz" component={QuizPage} />
          <Route exact path="/courses/:id/puzzle" component={FirePuzzlePage} />
          <Route exact path="/courses/:id/comics" component={ComicsPage} />
          <Route exact path="/courses/:id/trainer" component={TrainerPage} />
          <Route exact path="/chat" component={ChatPage} />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default App;
