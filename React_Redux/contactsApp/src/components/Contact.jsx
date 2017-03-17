import React, { Component } from 'react';
import { MdStarOutline, MdStar } from 'react-icons/md';

import styles from './Contact.less';

export default class Contact extends Component {
    render() {
        const {
            text,
            email,
            marked,
            onToggle
        } = this.props;

        return (
            <div className={styles.root}>
                <h2>{text}</h2>
                <span>{email}</span>
                <div className={styles.mark} onClick={onToggle}>
                    {marked ? <MdStar className={styles.marked} /> : <MdStarOutline />}
                </div>
                <button className={styles.button}>Написать</button>
            </div>
        );
    }
}
