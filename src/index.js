import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


//create rootSaga2
function* rootSaga() {
    //will take in yield and put
    yield takeEvery('search', searchGiphy)
};//end rootSaga

///GENERATORS
function* searchGiphy(action) {
    console.log('-----> in searchGiphy', action.payload);
    //action.payload is our input
    //try catch
    let searchValue = action.payload;
    try {
        const response = yield axios.get(`/search/${searchValue}`);
        console.log('in searchGiphy:', response.data);
        yield put({
            type: 'foundGiphy',
            payload: response.data
        })
    } catch (err) {
        console.log(err);
    };//end try
};//end searchGiphy


const sagaMiddleware = createSagaMiddleware(rootSaga);

///REDUCERS

const giphyReducer = (state = [], action) => {
    // console.log('in giphyReducer', action.payload);
    if (action.type === 'foundGiphy') {
        state = [action.payload]
    //    return state; 
    }
    console.log('HELLO FROM HERE', action.payload);
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
