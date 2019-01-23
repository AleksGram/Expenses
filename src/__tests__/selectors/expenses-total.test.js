import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../../testFixtures/expenses';

const getExpensesTottal = (expenses) => {
    if(expenses && expenses.length > 0) {
        return expenses.reduce((accumulator, expense)=>{
           return accumulator + expense.amount
        },0)    
    } else {
        return 0;
    }
};

test('total_noExpenses', () => {
    const total = getExpensesTottal();
    expect(total).toBe(0)
})

test('total_singleExpense', () => {
    const testExpense = [expenses[0]]
    const total = getExpensesTottal(testExpense)
    expect(total).toBe(expenses[0].amount);
})

test('total_expenses', () => {
    const total = getExpensesTottal(expenses);
    expect(total).toBe(5150);
})
