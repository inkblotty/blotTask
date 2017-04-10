import React from 'react';

class UserInput extends React.Component {

	updateUser = () => {
		let userInputValue = document.getElementById('display-name-input').value;
		this.props.sendUserUpdates(userInputValue);
	}

	render() {
		return (
			<div>
				<input type='text' id='display-name-input' />
				<button onClick={ this.updateUser }>
					Update Display Name
				</button>
			</div>
		)
	}
}

export default UserInput;