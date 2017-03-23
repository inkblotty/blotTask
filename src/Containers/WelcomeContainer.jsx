import React from 'react';
import API from '../API/API';

import Welcome from '../Components/Welcome';

class WelcomeContainer extends React.Component {

	state = {
		currentUser: {},
	}

	static propTypes = {
		params: React.PropTypes.object,
		router: React.PropTypes.object,
	}

	static contextTypes = {
		store: React.PropTypes.object,
	}

	sendUserUpdates = (userVal) => {
		let newUser = this.state.currentUser;
		newUser['display_name'] = userVal;

		console.log(newUser);

		this.setState({
			currentUser: newUser,
		}, () => {
			API.put(`http://localhost:3000/api/users/${this.state.currentUser.id}`, this.state.currentUser)
				.then((response) => {
					this.setState({
						currentUser: response.data.user,
					});
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

		console.log(this.context.store);

		return (
			<Welcome currentUser={ currentUser } sendUserUpdates={ this.sendUserUpdates } />
		);
	}
}

module.exports = WelcomeContainer;
