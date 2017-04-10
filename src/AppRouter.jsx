import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createTask, updateTask, deleteTask, updateDisplayName } from './actions/actions';

import store from './store.js';
import WelcomeContainer from './Containers/WelcomeContainer';

const AppRouter = () => {
  return (
      <Router history={ browserHistory }>
        <Route path='/' component={ WelcomeContainer } />
      </Router>
  );
};

export default AppRouter;