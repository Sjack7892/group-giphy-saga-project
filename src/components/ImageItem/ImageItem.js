import React, { Component } from 'react';
import {connect} from 'react-redux';


class ImageItem extends Component {

    componentDidMount(){
        console.log('Image item mounted');
    };//end componentDidMount

    favoriteImage = () => {
        console.log('in favoriteImage');
        this.props.dispatch({
            type: 'favorite',
            payload: this.props.imageData.images.original.url
        })
    };//favoriteImage

    render() {
        return (
            <div>
                <img
                    src={this.props.imageData.images.original.url}
                    alt={this.props.imageData.title}
                    width="200" height="200"
                />
                <button onClick={this.favoriteImage}>Favorite</button>
            </div>
        )//end return
    };//end render
};//end class

export default connect()(ImageItem);