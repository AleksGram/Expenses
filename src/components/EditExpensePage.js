import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { startRemoveExpenses } from '../actions/expenses';


export class EditExpensePage extends Component {
 
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/');
  }
  onClick = () => {
    this.props.startRemoveExpenses({id: this.props.expense.id})
    this.props.history.push('/')

  }

  render () {
    return (
      <div>
      <ExpenseForm
        expense = {this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button 
      onClick={this.onClick}
      >Remove</button>  
    </div>
    )
  }
}



const mapStateToPros = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpenses: ({id}) => dispatch(startRemoveExpenses({ id }))
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(EditExpensePage);
