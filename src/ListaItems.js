import React, { useState } from 'react';

// import { Container } from './styles';
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { Creators as Actions } from './store/duck/reducers/reducesItem'

function ListaItems(props) {

    const { addItem, removeItem, items } = props
    const [text, setText] = useState('');

    const onChangeText = (ev) => {
        setText(ev.target.value);
    }

    const addList = (ev) => {
        addItem(text);
        setText('');
        console.log(props)
    }

    const rmItem = (id) => {
        removeItem(id);
    }

    return (
        <div>
            <ul>
                {items.map(item => (
                    <>
                        <li key={item.id}>{item.text}</li>
                        <button
                            type="button"
                            onClick={(ev) => rmItem(item.id)}
                        >Remove</button>
                    </>
                ))}
            </ul>

            <input
                type="text"
                value={text}
                onChange={(ev) => onChangeText(ev)}
            />
            <button
                type="button"
                onClick={(ev) => addList(ev)}
            >Add na lista</button>

        </div >
    );
}

const mapStateToProps = state => ({
    items: state.reduceItem
})

const mapDispatcheToProps = dispatch => (
    bindActionCreators(Actions, dispatch)
)

export default connect(mapStateToProps, mapDispatcheToProps)(ListaItems);