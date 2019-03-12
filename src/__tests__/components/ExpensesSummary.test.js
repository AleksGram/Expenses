import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary}   from '../../components/ExpensesSummary';
import expenses from '../../testFixtures/expenses';

test('ExpensesSumary render 1 exdpense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseSummary={5000} expenses={expenses}/>)

    expect(wrapper).toMatchSnapshot();
})

test('ExpensesSumary render multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expenseSummary={55000} expenses={expenses}/>)

    expect(wrapper).toMatchSnapshot();
})