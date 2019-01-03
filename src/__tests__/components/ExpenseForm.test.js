import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
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
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('setDescriptionOnInputChange', () => {
    const value = 'NewDescription'
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
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
    expect(wrapper).toMatchSnapshot();
})

test('setAmount_INvalidInput', () => {
    const value = "55.233";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe("");
    expect(wrapper).toMatchSnapshot();
})

test('valid_submitProps', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    })
});

test('setNewDateOnDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);

    expect(wrapper.state('createdAt')).toEqual(now)
})

test('setCalendarFocus', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});

    expect(wrapper.state('calendarFocused')).toBe(focused);
})