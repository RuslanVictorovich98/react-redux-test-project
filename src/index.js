import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
// import App from './App';
// import App from './AppCategoryFilter';
import App from './list/listContainer';

import allReducers from './common/indexReducer';

export const store = createStore(allReducers);


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
