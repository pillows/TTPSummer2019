import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CreditList extends Component {
    constructor(props){
        super(props);
        this.state = {
            accountBalance:this.props.accountBalance
        }
    }


  render() {
    return (
        <div>
        <Link to="/">Home</Link>
          <h1>Credits</h1>

          <div>Balance: {this.state.accountBalance}</div>
          <div>Transactions: </div>
        </div>
    );
  }
}

export default CreditList;
