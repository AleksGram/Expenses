import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    removeExpense,
    editExpense,
    addExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpenses,
    startEditExpenses
} from '../../actions/expenses';
import expenses from '../../testFixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'testUiqUserId';
const defaultAuthState = {auth:{uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})

const testId = 'testId';


test('removeExpenseAction', () => {
    const action = removeExpense({ id: testId });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: testId
    })
})


test('delete the expense from DB', (done) => {
    const store = createMockStore(defaultAuthState)

    const id = expenses[0].id 
    store.dispatch(startRemoveExpenses({ id })).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: id    
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('edit expense into DB', (done) => {
    const store = createMockStore(defaultAuthState);

    const id = expenses[2].id;
    const updates = {
        description: 'edited description',
        note: 'edited note',
        amount: 50000,
        createdAt: 12345
    }
    store.dispatch(startEditExpenses(id, updates)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(updates)
        done();
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
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Wash mashine',
        note: 'new one',
        amount: 5000,
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
})

test('add_default_expense_to_DB', (done) => {
    const store = createMockStore(defaultAuthState)
    const defaultExpenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultExpenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpenseData);
        done();
    });
})

test('setup setExpense action with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('fetch the expensess from DB', (done) => {
    const store = createMockStore(defaultAuthState)

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    })
})

