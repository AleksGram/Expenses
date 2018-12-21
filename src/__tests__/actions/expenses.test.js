import { removeExpense, editExpense, addExpense } from '../../actions/expenses';

const testId = 'testId';
test('removeExpenseAction', () => {
    const action = removeExpense({id: testId});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: testId      
    })
})

test('editExpenseAction', () => {
    const updates = {description: 'new description'}
    const action = editExpense(testId, updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: testId,
        updates: updates
        })
})

test('addExpenseAction_Default', () => {
    const action = addExpense();
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

test('addExpenseAction_Params', () => {
    const expense = {
        description: 'description',
        note: 'expense note',
        amount: 250,
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