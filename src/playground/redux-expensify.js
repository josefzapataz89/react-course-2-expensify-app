import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByAmount = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByDate = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = ( date = undefined ) => ({
    type: 'SET_START_DATE',
    date
});

// SET_END_DATE
const setEndDate = ( date = undefined ) => ({
    type: 'SET_END_DATE',
    date
});

// Reducers

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter( ( { id } ) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map( ( expense ) => {
                if ( expense.id === action.id ) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            } );
        default:
            return state;
    };
};

const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    };
};

// Get Visible expenses
const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses.filter( ( expense ) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    } ).sort( ( a, b) => {
        if ( sortBy === 'date' ) {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if ( sortBy === 'amount' ) {
            return a.amount < b.amount ? 1 : -1;
        }

        // sort by amount

    } );
};

// Store Creation

const store = createStore( 
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
    console.log( visibleExpenses );
});

const expenseOne = store.dispatch( addExpense({
    description: 'Rent',
    amount: 100,
    createdAt: 85
}) );
const expenseTwo = store.dispatch( addExpense({
    description: 'Coffe',
    amount: 3.5,
    createdAt: 7532
}) );
store.dispatch( addExpense({
    description: 'Clothes',
    amount: 340,
    createdAt: -856
}) );
store.dispatch( addExpense({
    description: 'suggar',
    amount: 1.5,
    createdAt: 12
}) );
// store.dispatch( removeExpense({ id: expenseOne.expense.id }) );
// store.dispatch( editExpense( expenseTwo.expense.id, { amount: 158 }) );

store.dispatch( setTextFilter('e') );
// store.dispatch( setTextFilter() );

// store.dispatch( sortByAmount() );
// store.dispatch( sortByDate() );

// store.dispatch( setStartDate(50) );
// store.dispatch( setStartDate() );
// store.dispatch( setEndDate(1568) );
// store.dispatch( setEndDate() );

const demoState = {
    expenses: [{
        id: 'qwerty',
        description: 'January Rent',
        note: 'This is the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};