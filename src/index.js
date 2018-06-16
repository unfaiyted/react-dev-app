
 import './main.css';


import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import Provider from './components/Provider';


// if (process.env.NODE_ENV !== 'production') {
//     React.Perf = require('react-addons-perf');
// }


ReactDom.render(
    <Provider><App /></Provider>,
    document.getElementById('root')
);