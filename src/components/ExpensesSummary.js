import React from 'react';
import { connect } from 'react-redux';
import selectTotalExpenses from './../selectors/expenses-total';
import selectExpenses from './../selectors/expenses';
import numeral from 'numeral';



  export const ExpensesSummary = ({ expenseCount, expenseSummary }) => {
        const description = expenseCount === 1 ? 'expense' : 'expenses';
        const formatTotalVal = numeral(expenseSummary/100).format('$0,0.00');

        return (
            <div>
                <h1>Viewing {expenseCount} {description} totaling {formatTotalVal} </h1>
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


