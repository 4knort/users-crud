import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import 'react-fastclick';
import 'styles';

import configureStore from './store';
import AppRouter from './router';

const store = configureStore();
const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <AppRouter history={hashHistory} />
  </Provider>,
  rootElement
);