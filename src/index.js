import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route } from 'react-router';

import { Icon } from './components';

const FYRE = () => <div>For Your Reusable Elements</div>;

var routes = (
    <Router>
        <Route path="/" component={ FYRE }/>
    </Router>
);

ReactDOM.render(routes, document.body);
