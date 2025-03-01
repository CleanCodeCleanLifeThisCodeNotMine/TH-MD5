import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

function ReduxGetDeleteUser() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ReduxGetDeleteUser; 