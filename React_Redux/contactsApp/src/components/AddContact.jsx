import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../actions';

import styles from './AddContact.less';

@connect(undefined, { addContact })
export default class AddContact extends Component {
    state = {
        text: "",
        email: ""
    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handleContactAdd = () => {
        this.props.addContact(this.state.text, this.state.email);
        this.setState({
            text: "",
            email: ""
        });
    };

    render() {
        return (
            <div className={styles.root}>
                <input
                    className={styles.inputName}
                    type="text"
                    placeholder="Введите имя..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input
                    className={styles.inputEmail}
                    type="email"
                    placeholder="Введите e-mail..."
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button
                    className={styles.button}
                    onClick={this.handleContactAdd}
                >
                    Создать
                </button>
            </div>
        );
    }
}
