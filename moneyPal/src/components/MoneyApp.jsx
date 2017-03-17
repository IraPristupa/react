import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue500, greenA200} from 'material-ui/styles/colors';
import {FlatButton, Paper, FontIcon } from 'material-ui';
import SpendingsHistory from './SpendingsHistory.jsx';
import Form from './Form.jsx';
import './MoneyApp.scss';

const styles = {
    iconStyles: {
        fontSize: 38,
        color: '#fff',
        display: 'inline-block',
        verticalAlign: 'middle'
    },
    paperStyles: {
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    }
};

export default class MoneyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
            modalAction: null,
            modalIsOpen: false,
            spendings: [{
                amount: 12,
                description: 'my incomes',
                action: 'plus',
                category: 0
            },
            {
                amount: 12,
                description: 'my outcomes',
                action: 'minus',
                category: 3
            }]
        }
    }
    handleModalChange = event => {
        this.setState({
            modalAction: event.target.dataset.action,
            modalIsOpen: true
        })
    };

    handleSpends = obj => {
        const amount = this.state.modalAction == 'plus'
             ? this.state.amount + parseInt(obj.amount)
             : this.state.amount - parseInt(obj.amount);

        this.state.spendings.unshift(obj);

        this.setState({
            modalIsOpen: false,
            amount: amount,
            spendings: this.state.spendings
        });
    };

    handleModalClose = () => this.setState({modalIsOpen: false});

    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <Paper style={styles.paperStyles} zDepth={5}>
                        <h1>Money Pal</h1>
                        <div className="app-budget">
                            <FlatButton
                                backgroundColor="transparent"
                                hoverColor="transparent"
                                onClick={this.handleModalChange}
                                primary={true}
                                icon={<FontIcon data-action="plus" className="material-icons" style={styles.iconStyles}>add_circle_outline</FontIcon>}
                            />
                            <span>{this.state.amount}</span>
                            <FlatButton
                                backgroundColor="transparent"
                                hoverColor="transparent"
                                onClick={this.handleModalChange}
                                primary={true}
                                icon={<FontIcon data-action="minus" className="material-icons" style={styles.iconStyles}>remove_circle_outline</FontIcon>}
                            />
                        </div>
                        <Form
                            handleSpends={this.handleSpends}
                            handleModalClose={this.handleModalClose}
                            {...this.state}
                        />
                        <SpendingsHistory spendings={this.state.spendings} />
                    </Paper>
                </div>
            </MuiThemeProvider>
        )
    }
};