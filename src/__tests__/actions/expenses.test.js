import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, removeExpense, editExpense, addExpense } from '../../actions/expenses';
import expenses from '../../testFixtures/expenses';


const createMockStore = configureMockStore([thunk]);

const testId = 'testId';
test('removeExpenseAction', () => {
    const action = removeExpense({ id: testId });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: testId
    })
})

test('editExpenseAction', () => {
    const updates = { description: 'new description' }
    const action = editExpense(testId, updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: testId,
        updates: updates
    })
})

test('removeExpenseAction', () => {
    const action = removeExpense({ id: 'testId' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'testId'
    })
})

test('editExpenseAction', () => {
    const updates = {
        id: 'testId',
        description: 'description',
        note: 'note',
        amount: 2500,
        createdAt: 12345
    };
    const action = editExpense('testId', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'testId',
        updates: updates
    })
})

test('addExpenseAction', () => {
    const expense = {
        description: 'carWash',
        note: 'auto',
        amount: 200,
        createdAt: 1000
    }
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})


test('addExpenseAction_Params', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]

    })
})

test('add_expense_to_DB', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Wash mashine',
        note: 'new one',
        amount: 5000,
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {

        done()
    })
})

test('add_default_expense_to_DB', () => {

})