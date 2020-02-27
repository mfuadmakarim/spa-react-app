import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './reducers';
import { getProducts } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getProducts());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

