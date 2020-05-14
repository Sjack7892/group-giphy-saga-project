import React, { Component } from 'react';

class Search extends Component {


    render() {
        return (
            <div>
                <h1>Search</h1>
                <input type="text" placeholder="giphy search"/>
                <button>Search</button>
            </div>
        );//end return
    };//end render
};//end class

export default Search;