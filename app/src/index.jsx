// Needed for redux-saga es6 generator support
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Import root app
import App from './containers/App';
// Import CSS reset and Global Styles
import './styles/main.scss';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
