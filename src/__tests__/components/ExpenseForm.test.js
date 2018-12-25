import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../../testFixtures/expenses';

test('expenseFormRender_noProps', () => {
    const wrapper = shallow(<ExpenseForm/>)

    expect(wrapper).toMatchSnapshot();
})

test('expenseFormRender_withExpenses', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)

    expect(wrapper).toMatchSnapshot();
})

test('errorRender_forInvalidSubmit', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('setNoteOnTextareaChange', () => {
    const value = 'note'
    expect(wrapper).toMatchSnapshot();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('setDescriptionOnInputChange', () => {
    const value = 'NewDescription'
    expect(wrapper).toMatchSnapshot();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('setAmount_validInput', () => {
    const value = "55.2";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

test('setAmount_INvalidInput', () => {
    const value = "55.233";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe("");
})