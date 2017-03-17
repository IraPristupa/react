import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';

const items = [
    <MenuItem key={1} value={1} primaryText="Entertainment" />,
    <MenuItem key={2} value={2} primaryText="Food" />,
    <MenuItem key={3} value={3} primaryText="Shopping" />,
    <MenuItem key={4} value={4} primaryText="Another" />
];

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 2,
            amountErrorText: '',
            descriptionErrorText: '',
            errors: {
                amount: '',
                description: ''
            }
        }
    }

    handleFormSubmit = () => {
        const amount = this.refs.amount.input.value;
        const errors = this.state.errors;

        if(amount === '' || (amount.length && isNaN(amount))) {
            errors.amount = 'Only numeric chars allowed.'
        } else if (!this.refs.description.input.value) {
            errors.description = 'This is required field'
        } else {
            errors.amount = '';
            errors.description = '';

            this.props.handleSpends({
                amount: this.refs.amount.input.value,
                description: this.refs.description.input.value,
                action: this.props.modalAction,
                category: this.refs.category && this.refs.category.props.value
            })
        }
        this.setState({errors: errors})
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.handleModalClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleFormSubmit}
            />
        ];

        return (
            <Dialog
                actions={actions}
                modal={false}
                open={this.props.modalIsOpen}
                onRequestClose={this.handleClose}
            >
                <h2>{this.props.modalAction == 'plus' ? 'INCOME' : 'OUTCOME'}</h2>
                <TextField
                    errorText={this.state.errors.amount}
                    ref="amount"
                    hintText="amount"/><br />
                <TextField
                    errorText={this.state.errors.description}
                    ref="description"
                    hintText="description"/><br />
                {
                    this.props.modalAction == 'minus' ?
                        <SelectField
                            ref="category"
                            value={this.state.value}
                            onChange={this.handleChange}
                            hintText="Choose the category"
                        >
                            {items}
                        </SelectField> : ''
                }
            </Dialog>
        )
    }
}