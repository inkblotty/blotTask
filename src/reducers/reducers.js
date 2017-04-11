/* reducers */

const initialState = {
  currentUser: { id: null, username: null, display_name: null },
  tasks: {},
  loading: true
}

function blotTaskApp(state = initialState, action) {
  let newTasks = state.tasks;
  let newUser = state.currentUser;
  switch (action.type) {
    case 'CREATE_TASK':
      if (!newTasks[action.date]) {
        newTasks[action.date] = [];
      }
      newTasks[action.date].push(
        {
          time: action.time,
          description: action.description,
          id: 'temp-0001', /* need to generate unique ID that matches what goes to the db; maybe callback to update id */
          length: action.duration,
          complete: false
        }
      );
      return { ...state, tasks: newTasks };

    case 'UPDATE_TASK':
      newTask[actions.date] = newTasks[action.date].map((task) => {
        if (task.id === action.taskId) {
          task.description = action.description;
          task.time = action.time;
          task.length = action.duration;
        };
      });

      return { ...state, tasks: newTasks };

    case 'DELETE_TASK':
      let index = 0;
      let task = newTasks[action.date].filter((task, i) => {
        if (task.id === action.taskId) { index = i; }
        return task.id === action.taskId;
      });
      newTasks = newTasks.slice(0,index).concat(newTasks.slice(index+1));

      return { ...state, tasks: newTasks };

    case 'UPDATE_USER_DATA':
      newUser = action.userData;
      return { ...state, currentUser: newUser }

    case 'UPDATE_DISPLAY_NAME':
      if (!state.currentUser.id === action.userId) {
        throw new Error('Tried to select inactive user. You must be signed in to change that username');
      } else {
        newUser['display_name'] = action.newName;
      }

      return { ...state, currentUser: newUser }

    default:
      return state;
  }
}

export default blotTaskApp;