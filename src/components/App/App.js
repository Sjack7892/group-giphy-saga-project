import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

//import components
import Header from '../Header/Header';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';


class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          {/* <Route exact path="/" component={Header} /> */}
          <Route path="/search" component={Search} />
          <Route path="/favorites" component={Favorites} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
