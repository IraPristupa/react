import React, { Component } from 'react';

import CompleteAllTodos from './CompleteAllTodos.jsx';
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import Footer from './Footer.jsx';

import analytics from '../utils/googleAnalytics'

import styles from './TodoApp.less';

export default class TodoApp extends Component {
    componentDidMount() {
        analytics.init();
        analytics.pageview();
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <h2 className={styles.header}>To do</h2>
                    <div className={styles.app}>
                        <CompleteAllTodos />
                        <AddTodo />
                        <TodoList />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
