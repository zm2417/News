import React from 'react';
import {Route} from 'react-router';

import Login from './components/loginRegister/login/Login';
import Register from './components/loginRegister/register/Register';
import App from './components/home/App';
import Error from './components/error/Error';
import Content from './components/content/Content';

const Routes = (
    <Route>
        <Route path='/' component={App}/>
        <Route path='/toRegister' component={Register}/>
        <Route path='/toLogin' component={Login}/>
        <Route path='/error' component={Error}/>
        <Route path='/content' component={Content}/>
    </Route>
);

export default Routes;
