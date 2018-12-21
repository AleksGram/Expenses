import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('setUpDefaultFilter', () => {
    const state = filterReducers(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('setTextFilter', () => {
    const filterText = 'text filter'
    const state = filterReducers(undefined, {type: 'SET_TEXT_FILTER', text: filterText});
    expect(state).toEqual({
        text: filterText,
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    })
})

test('sortByAmountFilter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducers(currentState, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test('sortByDateFilter', () => {
    const state = filterReducers(undefined, {type: 'SORT_BY_DATE'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('setStartDateFilter', () => {
    const state = filterReducers(undefined, {type: 'SET_START_DATE', startDate: moment(0)});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment().endOf('month')
    })
})

test('setEndDateFilter', () => {
    const state = filterReducers(undefined, {type: 'SET_END_DATE', endDate: moment(0)});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment(0)
    })
})