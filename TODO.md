## Initial
[x] npm install
[x] npm install react-router-dom
[x] npm install redux react-redux
[x] npm install redux-saga
[x] npm install redux-logger
[x] npm install dotenv

## API SETUP
[x] add .env to gitignore
[x] add .env file
[x] add GIPHY_API_KEY to .env
[x] in server.js, const dotenv = require('dotenv') // dotenv.config(); 
[x] console.log process.env.GIPHY_API_KEY

## CREATE DATABASE
[x] create database and table from database.sql
[ ] create tables in postico

## BASE SETUP
[x] Header component and import into App
[x] Search Component and import into App
[x] import { HashRouter, Router } from 'react-router-dom'
[x] in Search, create input, button, favorites button
[x] App.js, import BrowserRouter and Route
[x] App.js, give route path to Header, Search, and Favorites.
[x] Header.js, create nav bar for Search and Favorite using Link 

### Redux/Saga side (for now)
[ ] import createStore, Provider, axios
[ ] import saga middleware
[ ] set initialState
[ ] set up first reducer
[ ] set up store for all components
[ ] wrap App with Provider, which calls the store

[ ] import createSagaMiddleware 
[ ] import TakeEvery and put
[ ] create root generator that takes in our yield TakeEvery's
[ ] const sagaMiddleware = createSagaMiddleware("whatever the root generator is called")
[ ] add sagaMiddleware to store
[ ] sagaMiddleware.run("whatever the root generator is called") right above React.DOM
[ ] have our intial generator function take (CRUD), will call those generators later

### GET GIPHY'S
[ ] 


## BASE FEATURES - Search View
[ ] 