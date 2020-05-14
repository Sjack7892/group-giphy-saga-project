import React, { Component } from 'react';
import {connect} from 'react-redux';

class Search extends Component {

    componentDidMount(){
        console.log('Search mounted');
    };//end componentDidMount

    handleChange = () => {
        console.log('in handleChange search');
        
        
    };//end handleChange


    render() {
        return (
            <div>
                <h1>Search</h1>
                <input onChange={this.handleChange}type="text" placeholder="giphy search"/>
                <button>Search</button>
            </div>
        );//end return
    };//end render
};//end class

export default connect()(Search);