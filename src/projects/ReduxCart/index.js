import React from 'react'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './App'

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware))

// Dispatch getAllProducts ngay khi khởi tạo store
store.dispatch(getAllProducts())

const ReduxCart = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default ReduxCart 