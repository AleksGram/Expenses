import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';


export class EditExpensePage extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this)

  }
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/');
  }
  onClick = () => {
    this.props.removeExpense({id: this.props.expense.id})
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

// const EditExpensePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <ExpenseForm
//         expense = {props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense))
//           props.history.push('/');
//         }}
//       />
//       <button 
//       onClick={
//         () => {
//           props.dispatch(removeExpense({id: props.expense.id}))
//           props.history.push('/')
//         }
//       }
//       >Remove</button>  
//     </div>
//   );
// };



const mapStateToPros = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (expense) => dispatch(editExpense(this.expense.id, expense)),
    removeExpense: () => dispatch(removeExpense({id: this.props.expense.id}))
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(EditExpensePage);
