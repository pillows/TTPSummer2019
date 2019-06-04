import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:this.props.number
        };
        this.decrementer = this.decrementer.bind(this)
    };

    decrementer(e){
        let decrement = this.state.number - 1;

        if(decrement < 0)
            alert("Cannot be less than zero")
        else {
            this.setState({number:decrement})
        }
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
