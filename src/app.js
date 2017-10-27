import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

import AppROuter from './routers/AppRouter'

ReactDOM.render(
    <AppROuter />, 
    document.getElementById('app')
);