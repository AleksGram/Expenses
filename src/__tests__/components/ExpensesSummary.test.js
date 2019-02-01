import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary}   from '../../components/ExpensesSummary';

test('ExpensesSumary render 1 exdpense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseSummary={5000}/>)

    expect(wrapper).toMatchSnapshot();
})

test('ExpensesSumary render multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expenseSummary={55000}/>)

    expect(wrapper).toMatchSnapshot();
})