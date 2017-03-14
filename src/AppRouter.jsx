import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import WelcomeContainer from './WelcomeContainer';

const AppRouter = () => {
	return (
		<Router history={ browserHistory }>
			<Route path='/' component={ WelcomeContainer } />
		</Router>
	);
};

module.exports = AppRouter;