import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import CreateExpense from '../components/CreateExpense';
import Dashboard from '../components/Dashboard';
import EditExpense from '../components/EditExpense';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/create" component={CreateExpense}/>
                <Route path="/edit" component={EditExpense}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;