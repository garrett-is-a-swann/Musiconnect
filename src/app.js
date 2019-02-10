import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import Index from 'views/index';

ReactDOM.render(
    <Router>
        <Index />
    </Router>
, document.getElementById('root'));