import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './actions';

import './Counter.css'

class Counter extends Component {
    render() {
        const { count, incrementBy1, decrementBy1 } = this.props;

        return (
            <div className="counter">
                <button className="counter-button" onClick={decrementBy1}>-</button>
                <span className="counter-value">{count}</span>
                <button className="counter-button" onClick={incrementBy1}>+</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        decrementBy1: () => dispatch(decrement(ownProps.id, 1)),
        incrementBy1: () => dispatch(increment(ownProps.id, 1))
    }
}

export default connect(undefined, mapDispatchToProps)(Counter);
