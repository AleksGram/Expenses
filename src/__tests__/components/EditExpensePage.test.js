import React from 'react';
import { shallow } from 'enzyme';
import  { EditExpensePage }  from '../../components/EditExpensePage';
import expenses from '../../testFixtures/expenses';

describe('EditExpensePage_test', () => {
    let editExpense, history, wrapper, startRemoveExpenses, startEditExpenses;

    beforeAll(() => {
        editExpense = jest.fn();
        history = { push: jest.fn() }
        startRemoveExpenses = jest.fn();
        startEditExpenses = jest.fn();
        wrapper = shallow(
            <EditExpensePage
            startEditExpenses={startEditExpenses} 
                history={history } 
                startRemoveExpenses={startRemoveExpenses}
                expense={expenses[0]} 
            />
        )

    })

    test('renderEditExpensePage', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('EditExpensePage_submitHandler', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startEditExpenses).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
    })


    test('EditExpensePage_removeExpenseCancel', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.state().remove).toBe(true); 

        wrapper.find('button.button--link').simulate('click');
        expect(wrapper.state().remove).toBe(false); 
    })

    test('EditExpensePage_removeExpenseConfirm', () => {
        wrapper.find('button').simulate('click');
        wrapper.find('button.button--dang').simulate('click');

        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(startRemoveExpenses).toHaveBeenLastCalledWith({ id: expenses[0].id});       
    })
})
