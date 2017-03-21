/* action types */

const CREATE_TASK = 'CREATE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const CHANGE_DISPLAY_NAME = 'CHANGE_DISPLAY_NAME';

/* action creators */

export function createTask(text, date, time, duration) {
	let props = { description, date, time, duration };
	return {
		type: 'CREATE_TASK',
		...props
	}
}

export function editTask(description, date, time, duration) {
	let props = { description, date, time, duration };
	return {
		type: 'EDIT_TASK',
		...props
	}
}

export function removeTask(taskId) {
	return {
		type: 'REMOVE_TASK',
		taskId
	}
}

export function changeDisplayName(userId, newName) {
	return {
		type: 'CHANGE_DISPLAY_NAME',
		userId,
		newName,
	}
}