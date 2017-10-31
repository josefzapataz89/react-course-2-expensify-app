import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

// ADD_EXPENSE
test('Should add expense', () => {

    const expense = {
        id: '4',
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        expenses[0],
        expenses[1],
        expenses[2],
        expense
    ]);
});

// REMOVE_EXPENSE
test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});
test('Should remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

// EDIT_EXPENSE
test('Should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(amount);
});
test('Should edit an expense id expense not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});