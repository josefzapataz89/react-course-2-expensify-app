import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('Should generate set text filter action object with text value', () => {

    const text = '123abc';

    expect( setTextFilter( text ) ).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});
test('Should generate set text filter action object without text value', () => {
    expect( setTextFilter() ).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate sort by date action object without value', () => {
    expect( sortByDate() ).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should generate sort by amount action object without value', () => {
    expect( sortByAmount() ).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Should generate set start date action object without value', () => {
    expect( setStartDate( moment(0) ) ).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });

});

test('Should generate set end date action object without value', () => {
    expect( setEndDate( moment(0) ) ).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});