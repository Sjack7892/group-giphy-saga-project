import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {CreateStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const initialImage = 0;

const giphyReducer = (state = initialImage, action) => {
    console.log('in giphyReducer');
};//end reducer

const storeInstance = createStore(
    combineReducers({
        giphyReducer
    })//end combine
    //apply middlewhare
);//store

ReactDOM.render(
    <Provider store={storeInstance}>
    <App />
    </Provider>,
document.getElementById('react-root'));
