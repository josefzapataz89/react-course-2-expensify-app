import React from 'react';
import ExpenseListFilter from "./ExpenseListFilter";

import ExpenseList from "./ExpenseList";

const Dashboard = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default Dashboard;