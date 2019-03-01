import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectTotalExpenses from './../selectors/expenses-total';
import selectExpenses from './../selectors/expenses';
import numeral from 'numeral';



export const ExpensesSummary = ({ expenseCount, expenseSummary }) => {
    const description = expenseCount === 1 ? 'expense' : 'expenses';
    const formatTotalVal = numeral(expenseSummary / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {description} totaling <span>{formatTotalVal}</span> </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create" >Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expenseSummary: selectTotalExpenses(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);


