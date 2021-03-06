import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
///setup redux
import { createStore, applyMiddleware } from "redux"
import {Provider} from "react-redux"
import {howToReducer} from "./reducers/howToReducer"
import thunk from "redux-thunk"
import logger from "redux-logger"
// setup router
import { BrowserRouter as Router } from "react-router-dom"
const store = createStore(howToReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
