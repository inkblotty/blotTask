import React from 'react';
import API from '../API/API';
import { updateUser, updateDisplayName } from '../actions/actions';

import Welcome from '../Components/Welcome';

class WelcomeContainer extends React.Component {

	static propTypes = {
		params: React.PropTypes.object,
		router: React.PropTypes.object,
	};

	static contextTypes = {
		store: React.PropTypes.object,
	};

	sendUserUpdates = (userVal) => {
		let newUser = this.context.store.getState().currentUser;
		newUser['display_name'] = userVal;

		API.put(`http://localhost:3000/api/users/${this.context.store.getState().currentUser.id}`, newUser)
			.then((response) => {
				this.context.store.dispatch(updateUser(response.data.user));
			});
	};

	componentDidMount = () => {
		API.get('http://localhost:3000/api')
			.then((response) => {
				this.context.store.dispatch(updateUser(response.data[0]));
			});
	};

	render() {
		const { currentUser, tasks } = this.context.store.getState() || {};
		let today = new Date();
		today = `${ today.getMonth()+1 < 10 ? '0'+(today.getMonth()+1) : today.getMonth()+1}-${today.getDay() < 10 ? '0'+today.getDay() : today.getDay()}-${today.getFullYear()}`;

		return (
			<Welcome currentUser={ currentUser } sendUserUpdates={ this.sendUserUpdates } tasks={ tasks[today] || [] } />
		);
	}
}

export default WelcomeContainer;
