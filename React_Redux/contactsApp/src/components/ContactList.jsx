import React, { Component } from 'react';
import { connect } from 'react-redux';

import { markContact } from '../actions';

import Contact from './Contact.jsx';

@connect(mapStateToProps, { markContact })
export default class ContactList extends Component {
    render() {
        return (
            <div className="base">
                {
                    this.props.contacts.map(contact =>
                        <Contact
                            key={contact.id}
                            id={contact.id}
                            text={contact.text}
                            email={contact.email}
                            marked={contact.marked}
                            onToggle={() => this.props.markContact(contact.id)}
                        />
                    )
                }
            </div>
        );
    }
}

function getVisibleContacts(contacts, filter) {
    switch (filter) {
        case 'SHOW_ALL':
          return contacts;

        case 'SHOW_MARKED':
          return contacts.filter(contact => contact.marked);
    }
}

function mapStateToProps(state) {
    return {
        contacts: getVisibleContacts(state.contacts, state.filter)
    };
}
