import expenseReducer from '../../reducers/expenses';
import expenses from '../../testFixtures/expenses';

test('setDefaultExpenseState', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})

test('addExpenseReducer', () => {
    const expense = expenses[0]
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    }
    const state  = expenseReducer(undefined, action);
    expect(state).toEqual([expense]);
})

test('removeExpenseReducer', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
})

test('removeExpenseReducer_NotFound', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})


test('editExpenseReducer', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'updated'
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state.filter((expense) => {
        return action.id === expense.id;
    })[0].description).toBe('updated')
})

test('editExpenseReducer', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'updated'
        }
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('setExpensesReducer', () => {
    const action  = {
        type: 'SET_EXPENSES',
        expense: [expenses[2]]
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[2]]);
})