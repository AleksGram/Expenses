import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../../testFixtures/expenses';


describe('ExpenseList_test', () => {

    test('render', () => {
        const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    
        expect(wrapper).toMatchSnapshot();
    })
    
    test('render_noExpenses', () => {
        const wrapper = shallow(<ExpenseList expenses={[]}/>);
    
        expect(wrapper).toMatchSnapshot();
    })
})

