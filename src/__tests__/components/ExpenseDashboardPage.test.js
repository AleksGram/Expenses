import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseDashboardPage  from '../../components/ExpenseDashboardPage';

test('expenseDasboardPageRender', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>)

    expect(wrapper).toMatchSnapshot();
})

