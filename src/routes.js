import React from 'react';
import {Route, IndexRoute} from 'react-router';
import PeoplesPage from './containers/peoples/peoples-page';
import App from './containers/application';

export default (
    <Route path='/' component={ App }>
        <IndexRoute component={ PeoplesPage }/>
    </Route>
);
