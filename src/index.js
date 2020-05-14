import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


//create rootSaga
function* rootSaga() {
    //will take in yield and put
};//end rootSaga

///GENERATORS


const sagaMiddleware = createSagaMiddleware(rootSaga);

///REDUCERS

const giphyReducer = (state = 0, action) => {
    console.log('in giphyReducer');
    return state;
};//end reducer

const storeInstance = createStore(
    combineReducers({
        //display our reducers
        giphyReducer
    }),//end combine
    //apply middleware
    applyMiddleware(sagaMiddleware, logger)
);//store

//run middleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('react-root'));
