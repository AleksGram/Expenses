import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {
  startRemoveExpenses,
  startEditExpenses,
} from '../actions/expenses';


export class EditExpensePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      remove: false
    }
  }

  onSubmit = (expense) => {
    this.props.startEditExpenses(this.props.expense.id, expense)
    this.props.history.push('/');
  }

  onClick = () => {
    this.setState({ remove: true })
  }

  cancelRemove = () => {
    this.setState({ remove: false });
  }

  confirmRemove = () => {
    this.props.startRemoveExpenses({ id: this.props.expense.id })
    this.props.history.push('/')

  }


  renderRemovepopup = () => {
    return (
      <div className="popup">
        <div className="popup__content">
          <h3>Are you sure?</h3>
          <div className="popup__footer">
            <button onClick={this.confirmRemove} className="button button--dang">Remove</button>
            <button onClick={this.cancelRemove} className="button button--link">Cancel</button>
          </div>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="pahe-header__title">Edit expense</h1>
          </div>
        </div>
        <div className="content-container">
          {(this.state.remove) ? (this.renderRemovepopup()) : null}
          <ExpenseForm
            expense={this.props.expense}
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
    startRemoveExpenses: ({ id }) => dispatch(startRemoveExpenses({ id })),
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(EditExpensePage);
