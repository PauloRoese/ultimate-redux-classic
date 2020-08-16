import React from 'react';

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { Creators as Actions } from './store/duck/reducers/reducesItem'

// import { Container } from './styles';

function Contador(props) {
    const { addItem, conters } = props

    const addCount = (txt) => {
        console.log(props)
        addItem(txt);
    }
    return (
        <>
            <h2>
                Numedo de item = {conters.length}
            </h2>
            <button
                type="button"
                onClick={(ev) => addCount('inserido por counter')}
            >Add Conteer</button>
        </>
    );
}

const mapStateToPrps = state => ({
    conters: state.reduceItem
})
// podendo usar assim ou com o bindActionCreators
const mapDispatchToProps = dispatch => (
    bindActionCreators(Actions, dispatch)
)

export default connect(mapStateToPrps, mapDispatchToProps)(Contador);