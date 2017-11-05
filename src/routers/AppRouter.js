import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import AddExpense from '../components/AddExpense';
import Dashboard from '../components/Dashboard';
import EditExpense from '../components/EditExpense';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/create" component={AddExpense}/>
                <Route path="/edit/:id" component={EditExpense}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;