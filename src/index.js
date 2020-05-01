import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import './common/template/dependencies'
import rootReducer from './redux/reducers'
import AuthOrApp from './AuthOrApp'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, thunk, multi)(createStore)(rootReducer, devTools)

//const store = createStore(rootReducer)



ReactDOM.render( 
    <Provider store={store}>
      <AuthOrApp />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
