import React, { Component } from 'react';


class ImageItem extends Component {


    render() {
        return (
            <>
                <h1>ImageItem</h1>
                <img
                    src={this.props.imagesData.url}
                    alt={this.props.imagesData.title}
                    width="200" height="200"
                />

            </>
        )//end return
    };//end render
};//end class

export default ImageItem;