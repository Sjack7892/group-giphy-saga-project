import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    componentDidMount() {
        console.log('Header mounted');
    };//end componentDidMount

    clickSearch = () => {
        this.props.history.push('/search')
    }
    clickFavorite = () => {
        this.props.history.push('/favorites')
    }

    render() {
        return (
            <>
                <h1>GIPHY SEARCH!</h1>
                <nav>
                    <ul>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                    </ul>
                </nav>
                {/* <button onClick={this.clickSearch}>Search</button>
                <button onClick={this.clickFavorite}>Favorites</button> */}
            </>
        );//end return
    };//end render
};//end class

export default Header;