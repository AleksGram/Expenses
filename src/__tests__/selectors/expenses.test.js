import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../../testFixtures/expenses';


test('fiterByText', () => {
    const filters = {
        text: 'a',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('startDateFilter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])

})

test('endDateFilter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
})

test('sortByDateFilter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('sortByAmountFilter', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2], expenses[1]])
})