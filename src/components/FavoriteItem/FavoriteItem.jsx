import React, { Component } from 'react';

class FavoriteItem extends Component {

    render() {
        return (
            <div>
                <img
                    src={this.props.favorite.image}
                    alt={this.props.favorite.image}
                    width="200" height="200"
                />
                <button>funny</button>
                <button>cohort</button>
                <button>cartoon</button>
                <button>nsfw</button>
                <button>meme</button>
            </div>
        );//end return
    };//end render
};//end class

export default FavoriteItem;