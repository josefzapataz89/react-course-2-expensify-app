import React from 'react';
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = ( props ) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (
                <h3>No Expenses</h3>
            ) : (
                props.expenses.map( ( expense ) => {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })
            )
        }
    </div>
);

const mapStateProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
};

export default connect(mapStateProps)(ExpenseList);