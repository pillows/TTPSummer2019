import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            accountBalance: this.props.accountBalance
        }

    }
        getCredits(){
            const that = this
            // console.log("credits")
            fetch("https://moj-api.herokuapp.com/credits")
              .then(function(response) {
                return response.json();
              })
              // When the real data is sent and readable
              .then(function(myJson) {
                  // console.log(myJson)
                  let creditTotal = 0;
                  for(let i = 0; i < myJson.length; i++){
                      creditTotal += (myJson[i].amount * -1)
                  }
                  console.log(creditTotal)
                  let balance = that.state.accountBalance
                  let total = (parseFloat(balance)+parseFloat(creditTotal)).toFixed(2)
                  that.setState({accountBalance: total})
                  that.getDebits()
              });
        }

        getDebits(){
            const that = this
            fetch("https://moj-api.herokuapp.com/debits")
              .then(function(response) {
                return response.json();
              })
              // When the real data is sent and readable
              .then(function(myJson) {
                  console.log("debits begin balance",that.state.accountBalance)
                  let debitTotal = 0;
                  for(let i = 0; i < myJson.length; i++){
                      debitTotal += (myJson[i].amount)
                  }
                console.log(debitTotal)

                let balance = that.state.accountBalance
                let total = (parseFloat(balance)+parseFloat(debitTotal)).toFixed(2)
                console.log("debits end balance",total)
                that.setState({accountBalance: total})
              });
        }

        componentWillMount(){
            this.getCredits(this);

        }
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link> | <Link to="/credits">Credit Transactions</Link> | <Link to="/debits">Debit Transactions</Link>

          <AccountBalance accountBalance={this.state.accountBalance}/>

        </div>
    );
  }
}

export default Home;
