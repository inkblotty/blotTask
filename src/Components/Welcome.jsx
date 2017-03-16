import React from 'react';

class Welcome extends React.Component {
	static propTypes = {
		currentUser: React.PropTypes.object.isRequired,
		sendUserUpdates: React.PropTypes.func.isRequired,
	}

	updateUser = () => {
		let userInputValue = document.getElementById('display-name-input').value;
		this.props.sendUserUpdates(userInputValue);
	}

	render() {
		let props = this.props;

		return (
			<div className='c-blot-page'>
				Welcome { props.currentUser['display_name'] }
				<input type='text' id='display-name-input' />
				<button onClick={ this.updateUser }>
					Update Display Name
				</button>
			</div>
		)
	}
}

module.exports = Welcome;