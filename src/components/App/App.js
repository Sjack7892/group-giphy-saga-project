import React, { Component } from 'react';
import {Hashrouter} from 'react-router-dom';

//import components
import Header from '../Header/Header'
import Search from '../Search/Search'


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
  
}

export default App;
