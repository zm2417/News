import React from "react";
import {render} from "react-dom";
import Routes from './Routes';
import {Router,hashHistory,browserHistory} from 'react-router';

render(<Router routes={Routes} history={browserHistory}></Router>,
    document.getElementById("app-container"));
