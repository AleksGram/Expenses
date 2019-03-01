import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {
   startRemoveExpenses,
   startEditExpenses
   } from '../actions/expenses';


export class EditExpensePage extends Component {
 
  onSubmit = (expense) => {
    this.props.startEditExpenses(this.props.expense.id, expense)
    this.props.history.push('/');
  }
  onClick = () => {
    this.props.startRemoveExpenses({id: this.props.expense.id})
    this.props.history.push('/')

  }

  render () {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="pahe-header__title">Edit expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense = {this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button 
            className='button button--secondary'
            onClick={this.onClick}
            >Remove expense
          </button>  
        </div>
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
    startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
    startRemoveExpenses: ({id}) => dispatch(startRemoveExpenses({ id }))
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(EditExpensePage);
