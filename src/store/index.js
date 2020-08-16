import { createStore } from 'redux';

import reducers from './duck/reducers'

const store = createStore(reducers);

export default store;