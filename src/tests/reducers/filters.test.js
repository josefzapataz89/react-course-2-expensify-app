import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filtersReducer( undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});

    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'});

    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const currentState = {
        text: 'test',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const state = filtersReducer(currentState, { type: 'SET_TEXT_FILTER', text: 'test' });

    expect(state.text).toBe('test');
});

test('Should set startDate', () => {
    const startDate = moment();

    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: startDate });

    expect(state.startDate).toEqual(startDate);
});

test('Should set endDate', () => {
    const endDate = moment();

    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: endDate });

    expect(state.endDate).toEqual(endDate);
});