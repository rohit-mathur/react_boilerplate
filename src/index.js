import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import configureStore from './store';
import rootSaga from './sagas';

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

ReactDOM.render(<App store={store} />, document.getElementById('root'));