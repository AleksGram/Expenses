import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseListItem  from '../../components/ExpenseListItem';
import expenses from '../../testFixtures/expenses';

test('ExpenseListItemRender', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)

    expect(wrapper).toMatchSnapshot();
})
