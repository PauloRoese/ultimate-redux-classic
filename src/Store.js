import { createStore } from 'redux';

import { combineReducers } from 'redux';

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [{ id: Math.random(), text: action.payload.text }, ...state];

        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload.id);

        default:
            return state;
    }
}

const reducers = combineReducers({ itemsList: reducer, });

const store = createStore(reducers);

export default store;