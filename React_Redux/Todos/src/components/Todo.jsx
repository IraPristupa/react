import React, { Component } from 'react';
import { MdClear } from 'react-icons/md';

import styles from './Todo.less';

export default class Todo extends Component {
    render() {
        const {
            text,
            completed,
            onToggle,
            onDelete
        } = this.props;

        return (
            <div
                className={completed ? styles.completed : styles.root}
                onClick={onToggle}
            >
                <div className={styles.delete}
                     onClick={onDelete}
                >
                    <MdClear />
                </div>
                {text}
            </div>
        );
    }
}

