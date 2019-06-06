import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DebitList extends Component {
    constructor(props){
        super(props);
        console.log(this.props.accountBalance)
        this.state = {
            accountBalance:this.props.accountBalance
        }
    }


  render() {
    return (
        <div>
        <Link to="/">Home</Link>
          <h1>Debits</h1>

          <div>Balance: {this.state.accountBalance}</div>
          <div>Transactions: </div>
        </div>
    );
  }
}

export default DebitList;
