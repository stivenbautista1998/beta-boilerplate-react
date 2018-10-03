// Needed for redux-saga es6 generator support
import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

// Import root app
import App from './containers/App';

ReactDom.render(
    <App />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
