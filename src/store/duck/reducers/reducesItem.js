import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
    addItem: ['text'],
    removeItem: ['id']
})

export const add = (state = [], action) =>
    [{ id: Math.random(), text: action.text }, ...state];

export const remove = (state = [], action) =>
    (state.filter(item => item.id !== action.id));


export default createReducer([{id:22323 , text: 'eu iniciei'}],{
    [Types.ADD_ITEM]: add,
    [Types.REMOVE_ITEM]: remove
})