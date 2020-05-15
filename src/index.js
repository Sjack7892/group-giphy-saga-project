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
    yield takeEvery('favorite', favoriteGiphy)
    yield takeEvery('GET_FAVORITE', getFavorite)
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

function* favoriteGiphy(action) {
    console.log('------> in favoriteGiphy', { fav: action.payload });
    //action.payload is our giphy url
    //POST connect to REDUCER
    try {
        const response = yield axios.post('/api/favorite', { fav: action.payload })
        //sending data of giphy url to post /api/favorites
        console.log('WHERE AM I --------------------', response);
    } catch (err) {
        console.log(err);
    };//end try
};//end favoriteGiphy


function* getFavorite(action) {
    //try catch
    try {
        const response = yield axios.get(`/api/favorite`);
        console.log('------> in getFavorite:', response.data);
        yield put({
            type: 'getFavorite',
            payload: response.data
        })
    } catch (err) {
        console.log(err);
    };//end try
};//end getFavorite


const sagaMiddleware = createSagaMiddleware(rootSaga);

///REDUCERS

const giphyReducer = (state = [], action) => {
    // console.log('in giphyReducer', action.payload);
    if (action.type === 'foundGiphy') {
        state = action.payload.data
        return state;
    }
    // else if (action.type === 'getFavorite') {  //POST using favoriteGiphy generator
    //     state = action.payload
    //     return state;
    //     // console.log('in favorite action.payload: ', action.payload)
    // }
    console.log('HELLO FROM HERE');
    return state;
};//end reducer

const favoriteReducer = (state = [], action) => {
    console.log('in favoriteReducer<--------');
    
    if (action.type === 'getFavorite') {
        return action.payload;
    }
    return state;
};//end favoriteReducer





const storeInstance = createStore(
    combineReducers({
        //display our reducers
        favoriteReducer,
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
