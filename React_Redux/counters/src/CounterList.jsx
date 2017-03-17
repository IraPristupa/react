import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCounter } from './actions';
import Counter from './Counter.jsx';

import './CounterList.css'

class CounterList extends Component {
    render() {
        const {
            addCounter,
            counters
        } = this.props;

        return (
            <div className="counter-list">
                {
                    counters.map(counter =>
                        <Counter
                            key={counter.id}
                            id={counter.id}
                            count={counter.count}
                        />
                    )
                }
                <button className="add-button" onClick={addCounter}>ADD COUNTER</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counters: state
});

export default connect(mapStateToProps, { addCounter })(CounterList);
