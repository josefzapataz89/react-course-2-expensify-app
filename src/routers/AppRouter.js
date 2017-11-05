import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path="/create" component={AddExpense}/>
                <PrivateRoute path="/edit/:id" component={EditExpense}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;