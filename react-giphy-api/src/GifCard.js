import React, { Component } from 'react';

class GifCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            url:this.props.url
        }


    }


    render(){
        return(
            <div>
                <img src={this.state.url} />
            </div>
        )
    }
}

export default GifCard
