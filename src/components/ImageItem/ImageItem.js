import React, { Component } from 'react';


class ImageItem extends Component {


    render() {
        return (
            <>
                <img
                    src={this.props.imageData.images.original.url}
                    // alt={this.props.imageData.title}
                    width="200" height="200"
                />
            </>
        )//end return
    };//end render
};//end class

export default ImageItem;