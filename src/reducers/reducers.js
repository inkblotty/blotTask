/* reducers */

import { }

const initialState = {
  currentUser: { id: null, username: null },
  tasks: {},
  loading: true
}

function blotTaskApp(state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK:
      let newTasks = state.tasks;
      if (!newTasks[action.date]) {
        newTasks[action.date] = [];
      }
      newTasks[action.date].push(
        {
          time: action.time,
          description: action.description,
          id: 'temp-0001', /* need to generate unique ID that matches what goes to the db; maybe callback to update id */
          length: action.duration
        }
      );
      return { ...state, tasks: newTasks }

    default:
      return state;
  }
}