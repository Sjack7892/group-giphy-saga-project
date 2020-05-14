import React, { Component } from 'react';
import ImageItem from '../ImageItem/ImageItem';
import {connect} from 'react-redux';

class ImageList extends Component {
    componentDidMount(){
        console.log('ImageList Mounted');  
    };//end componentDidMount
    

    render() {
        console.log('ImageList Mounted AFTER SEARCH', this.props.reduxState.giphyReducer);
        return (
            <>
            <h1>Image List</h1>
            {this.props.reduxState.giphyReducer.map((image, index)=>{
                return(
                    <div key={index}>
                    <ImageItem 
                    imagesData = {image}
                    />
                    </div>
                );//end return
            })}
                {/* <p>{JSON.stringify(this.props.reduxState)}</p> */}
            </>
        );//end return
    };//end render
};//end class


const putStateOnProps = (reduxState) => ({ reduxState })
export default connect(putStateOnProps)(ImageList);