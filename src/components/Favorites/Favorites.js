import React, { Component } from 'react';
import { connect } from 'react-redux'
import FavoriteItem from '../FavoriteItem/FavoriteItem';

class Favorites extends Component {

    componentDidMount() {
        console.log('Favorites mounted');
        this.getFavorite();
    };//end componentDidMount

    getFavorite = ()=>{
        console.log('get dispatch sent!');
        this.props.dispatch({
            type: 'GET_FAVORITE'
            // payload : 
        })
    };//end getFavorite

    render() {
        return (
            <div>
                <h1>Favorites List</h1>
                {this.props.reduxState.favoriteReducer.map((favorite, index) => {
                    return (
                        <div key={index}>
                            <FavoriteItem favorite={favorite}/>
                        </div>
                    )
                })}
            </div>
        );//end return
    };//end render
};//end class

const putStateOnProps = reduxState => ({ reduxState });
export default connect(putStateOnProps)(Favorites);