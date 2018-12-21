import { addExpense, editExpense, removeExpense } from '../actions/expenses';

test('removeExpenseAction', () => {
    const action = removeExpense({id: 'testId'})
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
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    })
})

test('addExpenseActionDefault', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          description: '',
          note: '',
          amount: 0,
          createdAt: 0
        }
      })
})