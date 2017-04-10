import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './AppRouter';
import store from './store.js';
import { Provider } from 'react-redux';

const Prov = () => {
	return (
		<Provider store={ store }>
			<AppRouter />
		</Provider>
	);
}

ReactDOM.render(<Prov />, document.getElementById('root'));
