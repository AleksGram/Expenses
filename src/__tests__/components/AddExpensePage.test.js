import React from 'react';
import { shallow } from 'enzyme';
import  { AddExpensePage }  from '../../components/AddExpensePage';
import expenses from '../../testFixtures/expenses';

let onSubmitSpy, history, wrapper;

beforeEach(() => {
     onSubmitSpy = jest.fn();
     history = { push: jest.fn() };
     wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={history}/>);

})

test('renderAddExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
})

test('submitHandler', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0])

})