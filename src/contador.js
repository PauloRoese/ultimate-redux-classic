import React from 'react';

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import * as conterAdd from './actions';

// import { Container } from './styles';

function Contador(props) {
    const { addItem, items } = props

    const addCount = (txt) => {
        console.log(props)
        addItem(txt);
    }
    return (
        <>
            <h2>
                Numedo de item = {items.itemsList.length}
            </h2>
            <button
                type="button"
                onClick={(ev) => addCount('inserido por counter')}
            >Add Conteer</button>
        </>
    );
}

const mapStateToPrps = state => ({
    items: state
})
// podendo usar assim ou com o bindActionCreators
const mapDispatchToProps = dispatch => (
    bindActionCreators(conterAdd,dispatch)
)

export default connect(mapStateToPrps, mapDispatchToProps)(Contador);