import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import styles from './AddTodo.less';

const ENTER_KEY = 13;

@connect(undefined, { addTodo })
export default class AddTodo extends Component {
    state = {
        text: ""
    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            this.props.addTodo(this.state.text);
            this.setState({ text: "" });
        }
    };

    render() {
        return (
            <div className={styles.root}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="What needs to be done?"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}
