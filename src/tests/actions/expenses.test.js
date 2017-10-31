import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    expect( removeExpense({
        id: '123abc'
    }) ).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action onject', () => {
    const expense = {
        description: "testing edit expense",
        note: '',
        amount: "12.50"
    };

    expect( editExpense(
        '123abc',
        expense
    ) ).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: expense
    });
});

test('Should setup add expense action object with provided values', () => {
    const newExpense = {
        description: "testing add expense",
        note: 'test',
        amount: 1250,
        createdAt: 123456789
    };

    expect( addExpense( newExpense ) ).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...newExpense
        }
    });
});

test('Should setup add expense action object with default values', () => {
    expect( addExpense() ).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            createdAt: 0,
            amount: 0
        }
    });
});