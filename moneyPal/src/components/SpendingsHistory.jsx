import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {blue300, green300, yellow400, pink400, blue200} from 'material-ui/styles/colors';
import './SpendingsHistory.scss'

const categoryImages = [
    <FontIcon className="material-icons" color={yellow400}>gesture</FontIcon>,
    <FontIcon className="material-icons" color={blue200}>movie</FontIcon>,
    <FontIcon className="material-icons" color={pink400}>local_dining</FontIcon>,
    <FontIcon className="material-icons" color={blue300}>local_mall</FontIcon>
];

const tableRawColumnStyle = {
    textAlign: 'center'
};

export default class SpendingsHistory extends Component {
    render() {
        return (
            <div className="spends-table">
                <Table selectable={false} >
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn style={tableRawColumnStyle}>Category</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Amount</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.spendings.map((spend, key) => (
                            <TableRow key={key}>
                                <TableRowColumn style={tableRawColumnStyle}>
                                    {
                                        spend.category > 0
                                            ? categoryImages[spend.category]
                                            : <FontIcon className="material-icons" color={green300} >insert_emoticon</FontIcon>
                                    }
                                </TableRowColumn>
                                <TableRowColumn>
                                    <span className="description">{spend.description}</span>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <span className={spend.action}>{spend.action == 'plus' ? '+' : '-'} {spend.amount}</span>
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}