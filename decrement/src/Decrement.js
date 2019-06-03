import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:5
        };
        this.decrementer = this.decrementer.bind(this)
    };

    decrementer(e){

    }

    render(){
        return(
            <div className="container">
                <div id="number">{this.state.number}</div>
                <button onClick={this.decrementer}>Decrement</button>
            </div>
        )
    }
}

export default Decrement;
