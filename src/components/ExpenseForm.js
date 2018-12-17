import React, { Component } from 'react';

export default class ExpenseForm extends Component {
    state = {
        description: '',
        note: '',
        amount: ''
    };

    onDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    onTextAreaChange = (e) => {
        this.setState({note: e.target.value});
    }
    
    onAmountChange = (e) => {
        const amount = e.target.value;

        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({amount: amount})
        }
    }

    render () {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type='text'
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optinal)"
                        value={this.state.note}
                        onChange={this.onTextAreaChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

