import React, { Component } from 'react';

import FilterLink from './FilterLink.jsx';

import styles from './ViewOptions.less';

export default class ViewOptions extends Component {
    render() {
        return (
            <div className={styles.root}>
                <FilterLink filter="SHOW_ALL">Все</FilterLink>
                <FilterLink filter="SHOW_MARKED">Избранные</FilterLink>
            </div>
        );
    }
}
