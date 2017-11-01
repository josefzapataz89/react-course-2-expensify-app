import React from 'react';
import ExpenseListFilter from "./ExpenseListFilter";
import ExpensesSummary from '../components/ExpensesSummary';

import ExpenseList from "./ExpenseList";

const Dashboard = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default Dashboard;