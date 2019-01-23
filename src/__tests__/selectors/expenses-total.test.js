import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../../testFixtures/expenses';


test('total_noExpenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0)
})

test('total_singleExpense', () => {
    const testExpense = [expenses[0]]
    const total = selectExpensesTotal(testExpense)
    expect(total).toBe(expenses[0].amount);
})

test('total_expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(5150);
})
