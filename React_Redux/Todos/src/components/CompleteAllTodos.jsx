import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdCheck } from 'react-icons/md';

import { completeAllTodos } from '../actions';

import styles from './CompleteAllTodos.less';

@connect(undefined, { completeAllTodos })
export default class CompleteAllTodos extends Component {
    render() {
        return (
            <div
                className={styles.checkbox}
                onClick={this.props.completeAllTodos}
            >
                <MdCheck />
            </div>
        );
    }
}
