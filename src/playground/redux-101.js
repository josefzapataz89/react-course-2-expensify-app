import { createStore } from 'redux';

// Action generators
const incrementCount = ( { incrementBy = 1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ( { newValue = 0 } = {} ) => ({
    type: 'SET',
    newValue
});

// Reducers
// 1.- Reducers are pure functions
// 2.- Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch ( action.type ) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.newValue
            };
        default:
            return state;
    }

};

// Stores

const store = createStore( countReducer );

const unsubscribe = store.subscribe( () => {
    console.log( store.getState() );
});


// Actions - than an object that gets sent to the store

// increment, decrement, reset

// I'd like to increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ newValue: 89 }));

store.dispatch(setCount());
