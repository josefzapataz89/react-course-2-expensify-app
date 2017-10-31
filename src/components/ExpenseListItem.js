import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

export const ExpenseListItem = ( { dispatch, id, description, amount, createdAt } ) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{ description }</h3>
        </Link>

        <p>{ (amount) } - { moment(createdAt).format("MMM, Do Y") }</p>
    </div> 
);

export default connect()(ExpenseListItem);