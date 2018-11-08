import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';

ReactDOM.render(
  <Provider store={createStore(() => 5)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
