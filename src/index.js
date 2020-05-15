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
    console.log('------> in favoriteGiphy', action.payload);
    //action.payload is our giphy url
    //POST connect to REDUCER
    try {
        const response = yield axios.post('/api/favorite', {fav: action.payload}) 
        //sending data of giphy url to post /api/favorites
        console.log('WHERE AM I --------------------', response.data);
    //     yield put({
    //         type: 'favoritesGiphy',
    //         // payload: response.data 
                        
    //     })
    } catch (err) {
        console.log(err);
    };//end try
};//end favoriteGiphy


const sagaMiddleware = createSagaMiddleware(rootSaga);

///REDUCERS

const giphyReducer = (state = [], action) => {
    // console.log('in giphyReducer', action.payload);
    if (action.type === 'foundGiphy') {
        state = action.payload.data
        return state;
    } 
    // else if (action.type === 'favoritesGiphy') {  //POST using favoriteGiphy generator
    //     state = action.payload
    //     return state;
    // }
    // console.log('HELLO FROM HERE');
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
