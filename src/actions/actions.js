/* action types */

const CREATE_TASK = 'CREATE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_DISPLAY_NAME = 'UPDATE_DISPLAY_NAME';
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

/* action creators */

export function createTask(description, date, time, duration) {
	let props = { description, date, time, duration };
	return {
		type: CREATE_TASK,
		...props
	}
}

export function updateUser(userData) {
	return {
		type: UPDATE_USER_DATA,
		userData
	}
}

export function updateTask(taskId, description, date, time, duration) {
	let props = { description, date, time, duration };
	return {
		type: UPDATE_TASK,
		taskId,
		...props
	}
}

export function deleteTask(taskId, taskDate) {
	return {
		type: DELETE_TASK,
		taskId,
		taskDate
	}
}

export function updateDisplayName(userId, newName) {
	return {
		type: UPDATE_DISPLAY_NAME,
		userId,
		newName,
	}
}