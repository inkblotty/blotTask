import { createStore } from 'redux';
import blotTaskApp from './reducers/reducers'

let store = createStore(blotTaskApp);

export default store;