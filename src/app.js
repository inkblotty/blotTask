import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import AppRouter from './AppRouter';
import store from './store.js';

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
      dispatch(updateTask(taskId, description, date, time, duration))
    },
    deleteTask: (taskId, taskDate) => {
      dispatch(deleteTask(taskId, taskDate))
    },
    updateDisplayName: (userId, newName)  => {
      dispatch(updateDisplayName(userId, newName))
    }
  }
}

const Prov = () => {
	<Provider store>
		<AppRouter />
	</Provider>
}

let app = connect(
  mapStateToProps,
  mapDispatchToProps
)(Prov);

ReactDOM.render(app, document.getElementById('root'));
