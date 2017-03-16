import React from 'react';
import API from './API';

import Welcome from './Welcome';

class WelcomeContainer extends React.Component {

	state = {
		currentUser: {},
	}

	static propTypes = {
		params: React.PropTypes.object,
		router: React.PropTypes.object,
	}

	updateUser = (e) => {
		let displayName = e.target.value;

		let newUser = this.state.currentUser;
		newUser['display_name'] = displayName;

		this.setState({
			currentUser: newUser,
		});
	}

	sendUserUpdates = () => {
		API.put(`http://localhost:3000/api/users/${this.state.currentUser.id}`, this.state.currentUser)
			.then((response) => {
				console.log(response);
				this.setState({
					currentUser: response.data.user,
				});
			});
	}

	componentDidMount = () => {
		API.get('http://localhost:3000/api')
			.then((response) => {
				this.setState({
					currentUser: response.data[0],
				});
			});
	}

	render() {
		const { currentUser } = this.state;

		return (
			<Welcome currentUser={ currentUser } updateUser={ this.updateUser }
				sendUserUpdates={ this.sendUserUpdates } />
		);
	}
}

module.exports = WelcomeContainer;
