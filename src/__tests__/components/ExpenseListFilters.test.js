import React from 'react';
import { shallow } from 'enzyme';
import  { ExpenseListFilters }  from '../../components/ExpenseListFilters';
import { filters, setFilters } from '../../testFixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;


describe ('ExpenseListFilters_Test', () => {
    beforeEach(() => {
        setTextFilter = jest.fn();
        sortByDate = jest.fn();
        sortByAmount = jest.fn();
        setStartDate = jest.fn();
        setEndDate = jest.fn();
        wrapper = shallow(
                <ExpenseListFilters 
                 filters={filters}
                 setTextFilter={setTextFilter}
                 sortByDate={sortByDate}
                 sortByAmount={sortByAmount}
                 setStartDate={setStartDate}
                 setEndDate={setEndDate}
                /> 
            )
    })
    
    test('render', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('render_withSetFilters', () => {
        wrapper.setProps({
            filters: setFilters
        })
        expect(wrapper).toMatchSnapshot();
    })
    
    test('handleTextChange', () => {
        const text = 'rent'
        wrapper.find('input').simulate('change',{
            target: { value: text }
        })
    
        expect(setTextFilter).toHaveBeenLastCalledWith(text);
    })
    
    test('handleSortByAmount', () => {
        const filter = 'amount'
        wrapper.find('select').simulate('change',{
            target: { value: filter
            }
        })
    
        expect(sortByAmount).toHaveBeenCalled();
    })
    
    test('handleSortByDate', () => {
        const filter = 'date'
        wrapper.setProps({ filters: setFilters });
        wrapper.find('select').simulate('change',{
            target: {
                value: filter
            }
        })
    
        expect(sortByDate).toHaveBeenCalled();
    })

    test('handleDateChange', () => {
        const startDate = setFilters.startDate;
        const endDate = setFilters.endDate;
        wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});

        expect(setStartDate).toHaveBeenLastCalledWith(startDate);
        expect(setEndDate).toHaveBeenCalledWith(endDate);
    })

    test('handleDateFocusChange', () => {
        const calendarFocused = 'endDate';
        wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)

        expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
    })
})
