import React from 'react';

import UserInput from './UserInput';
import TodayOverview from './TodayOverview';

class Welcome extends React.Component {
	static propTypes = {
		currentUser: React.PropTypes.object.isRequired,
		sendUserUpdates: React.PropTypes.func.isRequired,
		tasks: React.PropTypes.array.isRequired,
	}

	render() {
		let { currentUser, sendUserUpdates, tasks } = this.props;

		return (
			<div className='c-blot-page'>
				Welcome, { currentUser['display_name'] }!
				<UserInput sendUserUpdates={ sendUserUpdates } />
				<TodayOverview tasks={ tasks } />
			</div>
		)
	}
}

export default Welcome;