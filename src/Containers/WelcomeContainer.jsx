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
		this.context.store.dispatch(updateDisplayName(this.context.store.getState().currentUser.id, userVal))
		.then(() => {
			API.put(`http://localhost:3000/api/users/${this.context.store.getState().currentUser.id}`, this.context.store.getState().currentUser)
				.then((response) => {
					this.context.store.dispatch(updateUser(response.data.user));
				});
		});
	}

	componentDidMount = () => {
		API.get('http://localhost:3000/api')
			.then((response) => {
				this.context.store.dispatch(updateUser(response.data[0]));
			});
	}

	render() {
		const { currentUser } = this.context.store.getState() || {};

		return (
			<Welcome currentUser={ currentUser } sendUserUpdates={ this.sendUserUpdates } />
		);
	}
}

export default WelcomeContainer;
