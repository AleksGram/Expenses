import React from 'react';
import { shallow } from 'enzyme';
import  { AddExpensePage }  from '../../components/AddExpensePage';
import expenses from '../../testFixtures/expenses';


describe('AddExpensePage_test', () => {
    let addExpense, history, wrapper;

    beforeAll(() => {
        addExpense = jest.fn();
        history = { push: jest.fn() };
        wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);

    })

    test('render', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('submitHandler', () => {
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])

        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(addExpense).toHaveBeenLastCalledWith(expenses[0])

    })
})