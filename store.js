import { createStore } from 'redux';
import { connect } from 'react-redux';
import blotTaskApp from './reducers/reducers'

let store = createStore(blotTaskApp);

module.exports = store;