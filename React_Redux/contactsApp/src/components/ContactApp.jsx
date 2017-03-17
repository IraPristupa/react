import React, { Component } from 'react';
import { MdAssignmentInd } from 'react-icons/md';

import ContactList from './ContactList.jsx';
import AddContact from './AddContact.jsx';
import ViewOptions from './ViewOptions.jsx';

import styles from './ContactApp.less';

export default class ContactApp extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <h2 className={styles.header}>
                        <MdAssignmentInd />
                    </h2>
                    <div className={styles.app}>
                        <AddContact />
                        <ViewOptions />
                        <ContactList />
                    </div>
                </div>
            </div>
        );
    }
}
