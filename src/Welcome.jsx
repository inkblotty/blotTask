import React from 'react';

const Welcome = (props) => {
	return (
		<div className='c-blot-page'>
			Welcome { props.currentUser['display_name'] }
			<input type='text' onChange={ props.updateUser } />
			<button onClick={ props.sendUserUpdates }>
				Update Username
			</button>
		</div>
	)
}

Welcome.propTypes = {
	currentUser: React.PropTypes.object.isRequired,
	sendUserUpdates: React.PropTypes.func.isRequired,
	updateUser: React.PropTypes.func.isRequired,
}

module.exports = Welcome;