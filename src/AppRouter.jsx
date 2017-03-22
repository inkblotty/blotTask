import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { createTask, updateTask, deleteTask, updateDisplayName } from './actions/actions';

import WelcomeContainer from './Containers/WelcomeContainer';

const AppRouter = () => {
  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path='/' component={ WelcomeContainer } />
      </Router>
    </Provider>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    tasks: state.tasks,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createTask: (description, date, time, duration) => {
      dispatch(createTask(description, date, time, duration))
    },
    updateTask: (taskId, description, date, time, duration) => {
      dispatch(updateTask(taskId, description, date, time, duration)))
    },
    deleteTask: (taskId, taskDate) => {
      dispatch(deleteTask(taskId, taskDate))
    },
    updateDisplayName: (userId, newName)  => {
      dispatch(updateDisplayName(userId, newName))
    }
  }
}

AppRouter = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);

export default AppRouter;