import React, { Component } from 'react';
import {connect} from 'react-redux';

class Search extends Component {

    state = {
        searchValue: ''
    };

    handleChange = (event) => {
        console.log('in handleChange:', event.target.value);
        this.setState({
            searchValue: event.target.value
        });// end setState
    };//end handleChange

    handleClick = () => {
        console.log('in handleClick');
        this.props.dispatch({
            type: 'search',
            payload: this.state.searchValue
        });// end dispatch
    };// end 

    render() {
        return (
            <div>
                <h1>Search</h1>
                <input onChange={this.handleChange}type="text" placeholder="giphy search"/>
                <button onClick={this.handleClick}>Search</button>
                <p>{JSON.stringify(this.props.reduxState)}</p>
            </div>
        );//end return
    };//end render
};//end class


const putStateOnProps = (reduxState) =>({reduxState})
export default connect(putStateOnProps)(Search);